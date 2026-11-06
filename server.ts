import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  estimatedBudget: string;
  message: string;
  createdAt: string;
  status: 'Nuevo' | 'En Proceso' | 'Cotizado' | 'Cerrado';
}

const MAX_LEADS = 500;
const MAX_CHAT_MESSAGE = 2000;
const MAX_CHAT_HISTORY = 20;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory leads storage. Sin datos de ejemplo: no se exponen datos personales falsos ni reales.
const leadsDatabase: Lead[] = [];

// Lectura de texto con límite de longitud. Devuelve undefined si el valor no es string.
const readText = (value: unknown, max: number): string | undefined => {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") return undefined;
  return value.trim().slice(0, max);
};

// Rate limit simple por IP (ventana fija) para evitar abuso de la API de Gemini y del formulario.
const rateLimit = (max: number, windowMs: number) => {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const now = Date.now();
    const key = req.ip || "unknown";
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }
    entry.count += 1;
    if (entry.count > max) {
      return res.status(429).json({ error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." });
    }
    next();
  };
};

const SYSTEM_INSTRUCTION = `
Eres Maestro AI, el Asistente Virtual Consultor de Graphix Glow, una agencia premium de Inteligencia Artificial, Desarrollo Web, Aplicaciones Móviles, Automatización Empresarial, Branding y Marketing Digital.

Tu personalidad es:
- Altamente profesional, sofisticado, conocedor de tecnología, amable y enfocado en entregar valor de negocio.
- Transmites el estatus de Graphix Glow como líder en transformación digital de nivel internacional.
- Idioma principal: Español.

Tu objetivo principal:
1. Responder dudas sobre nuestros servicios (IA & Agentes, Web Premium, Apps iOS/Android, Automatización, Branding, SEO & Ads).
2. Ayudar a orientar al usuario en el alcance y presupuesto estimado de su proyecto.
3. Invitar amablemente al usuario a solicitar una cotización formal mediante el botón "Solicitar Cotización" o proporcionar su correo/teléfono para agendar una reunión estratégica de 15 minutos con nuestros arquitectos de software.

Información clave de Graphix Glow:
- Servicios: IA & Agentes RAG, Desarrollo Web Next.js/React, Apps Nativas/Multiplataforma, Automatización Make/n8n/CRM, Branding e Identidad, SEO Técnico & Ads.
- Precios de referencia: Web desde $1,800 USD, Proyectos de IA & Automatización desde $3,800 USD, Soluciones Enterprise desde $7,500 USD.
- Tiempos promedio: Web (2-3 semanas), Apps & IA (4-8 semanas).
- Ventajas: Core Web Vitals 100/100, código limpio, diseño cinematográfico premium, soporte continuo.

Responde de forma concisa (máximo 2-3 párrafos o puntos clave legibles), usa formato markdown elegante cuando sea conveniente.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "100kb" }));

  // Cliente de Gemini creado una sola vez.
  let geminiClient: GoogleGenAI | null = null;
  const getGeminiClient = () => {
    if (!geminiClient) {
      geminiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY || "",
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });
    }
    return geminiClient;
  };

  // API Route: Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Graphix Glow Backend", timestamp: new Date().toISOString() });
  });

  // API Route: AI Assistant Chat
  app.post("/api/chat", rateLimit(20, 60_000), async (req, res) => {
    try {
      const message = readText(req.body?.message, MAX_CHAT_MESSAGE);
      if (!message) {
        return res.status(400).json({ error: "Mensaje requerido" });
      }

      if (!process.env.GEMINI_API_KEY) {
        // Respuesta de respaldo si GEMINI_API_KEY no está configurada
        return res.json({
          reply: "¡Hola! Soy Maestro AI, el asistente virtual de Graphix Glow. Actualmente estoy en modo de demostración. ¿En qué servicio de Inteligencia Artificial, Desarrollo Web, Apps o Branding puedo asesorarte hoy?"
        });
      }

      // Solo se reenvían los últimos turnos válidos del historial.
      const history = Array.isArray(req.body?.conversationHistory)
        ? req.body.conversationHistory.slice(-MAX_CHAT_HISTORY)
        : [];
      const contents = history
        .map((msg: any) => ({
          role: msg?.sender === "user" ? "user" : "model",
          text: readText(msg?.text, MAX_CHAT_MESSAGE),
        }))
        .filter((m: { text?: string }) => !!m.text)
        .map((m: { role: string; text?: string }) => ({ role: m.role, parts: [{ text: m.text }] }));

      const response = await getGeminiClient().models.generateContent({
        model: "gemini-3.6-flash",
        contents: [
          ...contents,
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "Disculpa, no pude procesar tu solicitud en este momento. Por favor inténtalo de nuevo o contáctanos por WhatsApp.";

      return res.json({ reply: replyText });
    } catch (error: any) {
      // Se registra el detalle en el servidor, pero no se envía al cliente.
      console.error("Error en /api/chat:", error);
      const errMessage = String(error?.message || "");
      if (errMessage.includes("resource_exhausted") || errMessage.includes("quota") || errMessage.includes("429")) {
        return res.json({
          reply: "¡Hola! En este momento hemos alcanzado el límite temporal de consultas en nuestro modelo de IA por alta demanda. Sin embargo, en GraphixGlow seguimos listos para ayudarte con tu transformación digital integral (desarrollo web, apps, automatización y marketing). ¿Te gustaría agendar una asesoría directa o solicitar una cotización con nuestros arquitectos?"
        });
      }
      return res.status(500).json({ error: "Error procesando el chat de IA" });
    }
  });

  // API Route: Leads / Quotes (solo administración)
  app.get("/api/leads", (req, res) => {
    const expected = process.env.ADMIN_TOKEN;
    if (!expected) {
      return res.status(503).json({ error: "Panel de administración no configurado." });
    }
    if (req.get("x-admin-token") !== expected) {
      return res.status(401).json({ error: "No autorizado." });
    }
    res.json({ leads: leadsDatabase });
  });

  app.post("/api/leads", rateLimit(10, 60_000), (req, res) => {
    const name = readText(req.body?.name, 120);
    const email = readText(req.body?.email, 200);
    const message = readText(req.body?.message, 3000);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Nombre, email y mensaje son requeridos." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "El correo electrónico no es válido." });
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone: readText(req.body?.phone, 40) || "No proporcionado",
      company: readText(req.body?.company, 120) || "",
      serviceType: readText(req.body?.serviceType, 120) || "Consulta General",
      estimatedBudget: readText(req.body?.estimatedBudget, 120) || "Por definir",
      message,
      createdAt: new Date().toISOString(),
      status: "Nuevo"
    };

    leadsDatabase.unshift(newLead);
    if (leadsDatabase.length > MAX_LEADS) leadsDatabase.length = MAX_LEADS;

    res.status(201).json({
      success: true,
      message: "¡Cotización recibida con éxito! Un especialista de Graphix Glow se pondrá en contacto contigo en menos de 24 horas.",
      lead: newLead
    });
  });

  // Vite middleware for development vs static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Graphix Glow running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

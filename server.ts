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

// In-memory leads storage for demonstration & admin access
const leadsDatabase: Lead[] = [
  {
    id: "lead-101",
    name: "Carlos Eduardo Silva",
    email: "carlos.silva@techcorp.com",
    phone: "+52 55 1234 5678",
    company: "TechCorp México",
    serviceType: "Inteligencia Artificial y Agentes",
    estimatedBudget: "$3,800 - $7,500 USD",
    message: "Requerimos un agente de IA para atención al cliente integrado con nuestro CRM y WhatsApp.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "Nuevo"
  },
  {
    id: "lead-102",
    name: "Mariana Morales",
    email: "mmorales@boutiquedesign.co",
    phone: "+52 81 9876 5432",
    company: "Boutique Design",
    serviceType: "Diseño y Desarrollo Web Premium",
    estimatedBudget: "$1,800 - $3,800 USD",
    message: "Queremos rediseñar nuestro portal corporativo para reflejar una estética moderna tipo Vercel/Apple.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    status: "En Proceso"
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI SDK (lazy check)
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined.");
    }
    return new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  };

  // API Route: Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Graphix Glow Backend", timestamp: new Date().toISOString() });
  });

  // API Route: AI Assistant Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Mensaje requerido" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not configured yet
        return res.json({
          reply: "¡Hola! Soy Maestro AI, el asistente virtual de Graphix Glow. Actualmente estoy en modo de demostración. ¿En qué servicio de Inteligencia Artificial, Desarrollo Web, Apps o Branding puedo asesorarte hoy?"
        });
      }

      const ai = getGeminiClient();

      const systemInstruction = `
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

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: [
          ...(conversationHistory || []).map((msg: any) => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
          })),
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "Disculpa, no pude procesar tu solicitud en este momento. Por favor inténtalo de nuevo o contáctanos por WhatsApp.";

      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error("Error en /api/chat:", error);
      const errMessage = error?.message || "";
      if (errMessage.includes("resource_exhausted") || errMessage.includes("quota") || errMessage.includes("429")) {
        return res.json({
          reply: "¡Hola! En este momento hemos alcanzado el límite temporal de consultas en nuestro modelo de IA por alta demanda. Sin embargo, en GraphixGlow seguimos listos para ayudarte con tu transformación digital integral (desarrollo web, apps, automatización y marketing). ¿Te gustaría agendar una asesoría directa o solicitar una cotización con nuestros arquitectos?"
        });
      }
      return res.status(500).json({
        error: "Error procesando el chat de IA",
        details: errMessage || "Internal server error"
      });
    }
  });

  // API Route: Leads / Quotes
  app.get("/api/leads", (_req, res) => {
    res.json({ leads: leadsDatabase });
  });

  app.post("/api/leads", (req, res) => {
    const { name, email, phone, company, serviceType, estimatedBudget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Nombre, email y mensaje son requeridos." });
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone: phone || "No proporcionado",
      company: company || "",
      serviceType: serviceType || "Consulta General",
      estimatedBudget: estimatedBudget || "Por definir",
      message,
      createdAt: new Date().toISOString(),
      status: "Nuevo"
    };

    leadsDatabase.unshift(newLead);

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

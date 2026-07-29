import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Palette, 
  Code, 
  CheckCheck, 
  Rocket, 
  LifeBuoy, 
  ChevronRight 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Descubrimiento & Estrategia',
      icon: Search,
      shortDesc: 'Analizamos a fondo tu modelo de negocio, competidores y metas de conversión.',
      fullDesc: 'En esta etapa inicial, sostenemos una sesión estratégica de inmersión para comprender los puntos de dolor de tus usuarios, definir los KPIs clave del proyecto y delinear los requisitos técnicos exactos.'
    },
    {
      number: '02',
      title: 'Planeación & Arquitectura',
      icon: MapPin,
      shortDesc: 'Estructuramos el mapa del sitio, arquitectura de datos y modelos de IA.',
      fullDesc: 'Construimos el mapa de experiencia (UX wireframes), definimos la arquitectura del backend, modelos de base de datos e integraciones con APIs externas o motores de Inteligencia Artificial.'
    },
    {
      number: '03',
      title: 'Diseño UX/UI Premium',
      icon: Palette,
      shortDesc: 'Interfaces cinematográficas inspiradas en Apple, Tesla y Stripe.',
      fullDesc: 'Nuestros diseñadores crean prototipos interactivos en Figma con efectos de iluminación volumétrica, glassmorphism, jerarquía tipográfica elegante y microanimaciones que encantan al usuario.'
    },
    {
      number: '04',
      title: 'Desarrollo Full Stack & IA',
      icon: Code,
      shortDesc: 'Código limpio, modular y ultrarrápido en React, Next.js y TypeScript.',
      fullDesc: 'Programación de alta velocidad utilizando React 19, Tailwind CSS, Express backend e integración del SDK de Gemini para agentes conversacionales inteligentes con RAG.'
    },
    {
      number: '05',
      title: 'Pruebas & Control de Calidad',
      icon: CheckCheck,
      shortDesc: 'Auditoría de seguridad OWASP, responsive testing y Core Web Vitals 100/100.',
      fullDesc: 'Sometemos la plataforma a pruebas intensivas en múltiples dispositivos, navegadores, validación de formularios, seguridad SSL y pruebas de velocidad en Google PageSpeed Insights.'
    },
    {
      number: '06',
      title: 'Entrega & Lanzamiento',
      icon: Rocket,
      shortDesc: 'Despliegue en servidores en la nube e indexación inmediata en Google.',
      fullDesc: 'Configuración de dominio, servidores Cloud Run / Vercel, certificados SSL, sitemaps XML e indexación acelerada en motores de búsqueda para captar tráfico inmediato.'
    },
    {
      number: '07',
      title: 'Soporte & Crecimiento Continuo',
      icon: LifeBuoy,
      shortDesc: 'Monitoreo 24/7, capacitaciones y mantenimiento evolutivo.',
      fullDesc: 'Entrenamos a tu equipo en el uso del panel administrativo y te acompañamos con actualizaciones de seguridad, respaldos periódicos y optimización constante de conversiones.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodología Garantizada</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestro Proceso de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Trabajo de Alto Nivel
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Una metodología ágil en 7 fases para transformar tu visión en una plataforma digital de éxito.
          </p>
        </div>

        {/* Interactive Timeline Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,210,255,0.3)]'
                    : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] font-mono text-cyan-400 font-bold">{step.number}</span>
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                <span className="text-xs font-medium truncate w-full">{step.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)] max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-extrabold font-mono text-cyan-400">
                {steps[activeStep].number}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs text-cyan-300 font-mono">
                  {steps[activeStep].shortDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 text-xs text-white"
              >
                Anterior
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold disabled:opacity-30 text-xs flex items-center gap-1"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-slate-300 text-base font-light leading-relaxed">
            {steps[activeStep].fullDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

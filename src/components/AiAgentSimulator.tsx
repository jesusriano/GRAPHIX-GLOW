import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, Zap, Play, CheckCircle2, Terminal, Shield, RefreshCw, Cpu, Layers } from 'lucide-react';

interface AgentScenario {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  promptSample: string;
  steps: string[];
  outputResult: string;
  metric: string;
}

const AGENT_SCENARIOS: AgentScenario[] = [
  {
    id: 'sales',
    name: 'Neural Sales Closer 24/7',
    category: 'Autonomía Comercial',
    description: 'Agente autónomo multimodal que cualifica leads, responde objeciones complejas con tono humano y agenda reuniones en el CRM.',
    icon: Bot,
    promptSample: 'Cliente VIP solicita propuesta para plataforma SaaS con 100k usuarios concurrentes.',
    steps: [
      'Ingesta de requerimientos técnicos y análisis de perfil de cuenta en < 0.2s',
      'Generación de arquitectura preliminar y presupuesto personalizado',
      'Negociación inteligente de plazos y envío de enlace de reserva cifrado'
    ],
    outputResult: '✅ Reunión agendada automáticamente en Google Calendar. Propuesta enviada por WhatsApp y Email con tasa de conversión del 94%.',
    metric: '+310% Leads Calificados'
  },
  {
    id: 'rag',
    name: 'RAG Enterprise Synthesizer',
    category: 'Inteligencia de Datos',
    description: 'Sistema cognitivo conectado a bases de conocimiento internas para responder auditorías, manuales y normativas sin alucinaciones.',
    icon: Sparkles,
    promptSample: '¿Cuáles son los protocolos de encriptación exigidos para contratos bancarios en la UE?',
    steps: [
      'Búsqueda vectorial avanzada en 14,000 documentos normativos',
      'Extracción de artículos relevantes con trazabilidad exacta a fuentes',
      'Sintetizado de respuesta ejecutiva con nivel legal validado'
    ],
    outputResult: '⚡ Cumplimiento GDPR y PSD2 verificado. Reporte listo con referencias cruzadas y 0% de margen de error.',
    metric: '99.8% Precisión Analítica'
  },
  {
    id: 'auditor',
    name: 'Autonomous Code & SecOps',
    category: 'Ingeniería de Software',
    description: 'Agente que vigila repositorios de código, detecta vulnerabilidades de seguridad en tiempo real y despliega parches automáticos.',
    icon: Terminal,
    promptSample: 'Auditar pull request #402 en busca de fugas de memoria y riesgos de inyección SQL.',
    steps: [
      'Análisis estático de AST (Abstract Syntax Tree) en branch de desarrollo',
      'Simulación de ataques de inyección y test de estrés de memoria',
      'Inyección automática de refactorización segura y notificación a Slack'
    ],
    outputResult: '🛡️ Vulnerabilidad crítica neutralizada. PR optimizado y validado con 100/100 en tests de rendimiento.',
    metric: '0 Brechas de Seguridad'
  }
];

interface AiAgentSimulatorProps {
  onOpenQuote: () => void;
}

export const AiAgentSimulator: React.FC<AiAgentSimulatorProps> = ({ onOpenQuote }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentScenario>(AGENT_SCENARIOS[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [simulationComplete, setSimulationComplete] = useState<boolean>(false);

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setSimulationComplete(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedAgent.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationComplete(true);
      }
    }, 1100);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#030712] via-slate-950 to-[#030712]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <Cpu className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Centro de Demostración Cognitiva</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Simulador en Vivo de <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Agentes IA GraphixGlow</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Experimenta la velocidad y precisión de nuestros sistemas autónomos diseñados a medida para automatizar operaciones complejas.
          </p>
        </div>

        {/* Agent Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {AGENT_SCENARIOS.map((agent) => {
            const IconComponent = agent.icon;
            const isSelected = selectedAgent.id === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => {
                  setSelectedAgent(agent);
                  setIsSimulating(false);
                  setCurrentStepIndex(-1);
                  setSimulationComplete(false);
                }}
                className={`p-6 rounded-3xl text-left transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,210,255,0.25)]'
                    : 'bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/60'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' : 'bg-slate-800 text-slate-400'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {agent.metric}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    {agent.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
                    {agent.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                    {isSelected ? 'Agente Seleccionado' : 'Seleccionar Agente'}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                    →
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Simulation Terminal Box */}
        <motion.div
          key={selectedAgent.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-slate-950 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-cyan-400 ml-2 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-500/20">
                GRAPHIXGLOW_NEURAL_ENGINE_v4.2 // {selectedAgent.id.toUpperCase()}_AGENT
              </span>
            </div>
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 transition cursor-pointer ${
                isSimulating
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                  <span>Procesando Red Neuronal...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Ejecutar Simulación en Vivo</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Content Body */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  Entrada de Solicitud (Prompt)
                </span>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 font-mono text-xs sm:text-sm">
                  "{selectedAgent.promptSample}"
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  Pasos de Ejecución Cognitiva
                </span>
                <div className="space-y-3">
                  {selectedAgent.steps.map((step, idx) => {
                    const isPassed = currentStepIndex >= idx || simulationComplete;
                    const isCurrent = isSimulating && currentStepIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                          isPassed
                            ? 'bg-cyan-950/20 border-cyan-500/40 text-cyan-200'
                            : isCurrent
                            ? 'bg-blue-950/40 border-blue-500/60 text-blue-200 animate-pulse'
                            : 'bg-slate-900/40 border-slate-800/80 text-slate-500'
                        }`}
                      >
                        <div className="mt-0.5">
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          ) : isCurrent ? (
                            <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-mono">
                              {idx + 1}
                            </div>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-mono leading-relaxed">
                          {step}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                Resultado & Impacto Verificado
              </span>
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,210,255,0.1)] relative min-h-[220px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu className="w-24 h-24 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                      Estado: {simulationComplete ? 'Completado con Éxito' : isSimulating ? 'Ejecutando Pipeline...' : 'Listo para Iniciar'}
                    </span>
                  </div>
                  <p className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed mb-6">
                    {simulationComplete
                      ? selectedAgent.outputResult
                      : isSimulating
                      ? 'Analizando parámetros multimodales y ejecutando inferencia en tiempo real...'
                      : 'Haz clic en "Ejecutar Simulación en Vivo" para comprobar el rendimiento de este agente autónomo.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Impacto Garantizado</span>
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-bold text-xs hover:bg-cyan-500/30 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Implementar este Agente</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

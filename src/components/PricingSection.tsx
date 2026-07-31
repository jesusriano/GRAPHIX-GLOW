import React from 'react';
import { motion } from 'motion/react';
import { PricingPlan } from '../types';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  plans: PricingPlan[];
  onSelectPlanForQuote: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  plans,
  onSelectPlanForQuote
}) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Soluciones Personalizadas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Planes & Soluciones a la{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Medida de tu Negocio
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Cada proyecto es único. Evaluamos tus objetivos para estructurar un plan a la medida con código limpio, IA avanzada y retorno de inversión garantizado.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`rounded-3xl p-8 backdrop-blur-xl relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-cyan-950/60 via-slate-900/95 to-blue-950/60 border-2 border-cyan-400 shadow-[0_0_50px_rgba(0,210,255,0.35)] lg:-translate-y-4'
                  : 'bg-white/5 border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase px-4 py-1 rounded-full shadow-lg tracking-wider">
                  Opción Más Recomendada
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                  {plan.tagline}
                </p>

                {/* Custom Plan Scope Badge Area (No Price) */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-6 border-b border-white/10">
                  <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full text-cyan-300 text-xs font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badgeText || 'Cotización a Medida'}</span>
                  </div>
                  {plan.targetAudience && (
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {plan.targetAudience}
                    </span>
                  )}
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
                    Alcance & Características:
                  </p>
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2">
                      {plan.notIncluded.map((nf, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-500 line-through">
                          <XCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          <span>{nf}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onSelectPlanForQuote(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-cyan-500/40'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Seal Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-4 text-center sm:text-left">
          <ShieldCheck className="w-10 h-10 text-cyan-400 shrink-0 hidden sm:block" />
          <div>
            <h4 className="text-sm font-bold text-white mb-1">
              Garantía de Satisfacción & Entrega A Tiempo
            </h4>
            <p className="text-xs text-slate-300 font-light">
              Todos nuestros proyectos incluyen contrato formal de confidencialidad (NDA), propiedad total del código fuente y período de soporte técnico de garantía post-lanzamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

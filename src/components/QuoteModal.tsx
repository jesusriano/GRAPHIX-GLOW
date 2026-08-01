import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, ClipboardCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>(preselectedService || 'Desarrollo Web & Apps');
  const [projectScale, setProjectScale] = useState<string>('Empresa en crecimiento');
  const [timeframe, setTimeframe] = useState<string>('1 a 3 meses');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType: projectType,
          estimatedBudget: `Escala: ${projectScale} | Plazo: ${timeframe}`,
          message: message || `Diagnóstico de proyecto para ${projectType}`
        })
      });
      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 relative shadow-[0_0_60px_rgba(0,210,255,0.3)] text-left"
        >
          <button
            onClick={onClose}
            aria-label="Cerrar ventana de diagnóstico"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Diagnóstico Completado con Éxito!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Un especialista técnico de Graphix Glow analizará los requerimientos de tu proyecto y preparará una propuesta personalizada en menos de 24 horas.
              </p>
              <button
                onClick={onClose}
                aria-label="Cerrar ventana"
                className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg hover:bg-cyan-300 transition"
              >
                Entendido, Cerrar
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-lg">
                  <ClipboardCheck className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Diagnóstico Inteligente de Proyecto</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Paso {step} de 2 — Configuración y Requerimientos</p>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-mono text-cyan-300 block mb-2">1. Selecciona el área principal de tu proyecto</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      aria-label="Selecciona el área principal de tu proyecto"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Inteligencia Artificial y Agentes">Inteligencia Artificial y Agentes RAG</option>
                      <option value="Diseño y Desarrollo Web Premium">Diseño y Desarrollo Web Premium</option>
                      <option value="Aplicaciones Móviles (iOS & Android)">Aplicaciones Móviles (iOS & Android)</option>
                      <option value="Automatización Empresarial & CRM">Automatización Empresarial & CRM</option>
                      <option value="Branding e Identidad Corporativa">Branding e Identidad Corporativa</option>
                      <option value="Marketing Digital & Publicidad">Marketing Digital & Publicidad</option>
                      <option value="Soluciones Especializadas o Particulares">Soluciones Especializadas o Particulares</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-cyan-300 block mb-2">2. Escala o etapa actual del proyecto</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {['Emprendimiento / Startup', 'Negocio en Crecimiento', 'Corporativo / Empresa', 'Particular / Evento'].map((scale) => (
                        <button
                          key={scale}
                          type="button"
                          onClick={() => setProjectScale(scale)}
                          className={`p-3 rounded-xl text-left text-xs font-medium border transition cursor-pointer ${
                            projectScale === scale
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                              : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {scale}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-cyan-300 block mb-2">3. Plazo estimado de implementación</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Menos de 1 mes', '1 a 3 meses', 'Flexible / Largo plazo'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setTimeframe(time)}
                          className={`p-2.5 rounded-xl text-center text-xs font-medium border transition cursor-pointer ${
                            timeframe === time
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                              : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      aria-label="Siguiente paso del diagnóstico"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Continuar con Datos de Contacto</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        placeholder="correo@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+52 55..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Detalles Adicionales del Proyecto</label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos brevemente tus metas o requerimientos específicos..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      aria-label="Volver al paso anterior"
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Volver</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="Enviar diagnóstico"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/30 hover:scale-[1.01] active:scale-98 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Enviando...' : 'Solicitar Propuesta Personalizada'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

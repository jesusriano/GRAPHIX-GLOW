import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, Calculator } from 'lucide-react';

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
  const [service, setService] = useState(preselectedService || 'Diseño y Desarrollo Web Premium');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Price estimator
  const calculateEstimatedPrice = () => {
    switch (service) {
      case 'Inteligencia Artificial y Agentes': return '$3,800 - $7,500 USD';
      case 'Diseño y Desarrollo Web Premium': return '$1,800 - $3,500 USD';
      case 'Aplicaciones Móviles (iOS & Android)': return '$4,500 - $8,500 USD';
      case 'Automatización Empresarial & CRM': return '$2,200 - $4,800 USD';
      case 'Branding e Identidad Corporativa': return '$1,500 - $2,800 USD';
      default: return '$1,800 - $3,800 USD';
    }
  };

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
          serviceType: service,
          estimatedBudget: calculateEstimatedPrice(),
          message: message || `Cotización para ${service}`
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
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Cotización Recibida!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Un arquitecto de software de Graphix Glow revisará tus requerimientos y te enviará una propuesta técnica en menos de 24 horas.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Cerrar Ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Cotizador Inteligente</h3>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Selecciona el Servicio Requerido</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                >
                  <option value="Inteligencia Artificial y Agentes">Inteligencia Artificial y Agentes RAG</option>
                  <option value="Diseño y Desarrollo Web Premium">Diseño y Desarrollo Web Premium</option>
                  <option value="Aplicaciones Móviles (iOS & Android)">Aplicaciones Móviles (iOS & Android)</option>
                  <option value="Automatización Empresarial & CRM">Automatización Empresarial & CRM</option>
                  <option value="Branding e Identidad Corporativa">Branding e Identidad Corporativa</option>
                </select>
              </div>

              {/* Price estimation box */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-cyan-300 font-mono block">Inversión Estimada:</span>
                  <span className="text-base font-extrabold text-white">{calculateEstimatedPrice()}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Llave en mano / NDA</span>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
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
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+52 55..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Detalles o Alcance Deseado</label>
                <textarea
                  rows={3}
                  placeholder="Escribe brevemente los objetivos de tu proyecto..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/30 hover:scale-[1.01] active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Procesando...' : 'Solicitar Cotización Formal'}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

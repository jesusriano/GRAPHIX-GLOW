import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Building, 
  User, 
  DollarSign, 
  MessageSquare,
  Globe
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onLeadSubmitted: (leadData: any) => void;
}

// Authentic Official WhatsApp Icon SVG Component
const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.012 2C6.486 2 2 6.479 2 12.006c0 1.91.536 3.693 1.47 5.215L2 22l4.908-1.428a9.96 9.96 0 005.104 1.434h.005c5.524 0 10.01-4.478 10.01-10.005C22.022 6.479 17.536 2 12.012 2zm5.834 14.161c-.244.686-1.201 1.256-1.97 1.341-.527.058-1.214.103-3.527-.852-2.959-1.222-4.862-4.229-5.011-4.426-.144-.197-1.201-1.603-1.201-3.056 0-1.453.759-2.167 1.028-2.46.269-.293.587-.367.784-.367.197 0 .394.002.565.011.182.009.426-.069.667.509.244.587.832 2.03.905 2.177.073.147.122.318.024.512-.098.197-.147.318-.293.49-.147.171-.309.383-.442.515-.147.147-.301.309-.13.603.171.293.76 1.253 1.63 2.028 1.118.995 2.062 1.304 2.355 1.45.293.147.465.122.637-.073.171-.197.734-.856.931-1.15.197-.293.393-.244.661-.147.269.098 1.71.808 2.004.955.293.147.489.221.562.343.073.122.073.71-.171 1.396z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  onLeadSubmitted
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceType, setServiceType] = useState(initialService || 'Inteligencia Artificial y Agentes');
  const [estimatedBudget, setEstimatedBudget] = useState('$3,800 - $7,500 USD');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const servicesList = [
    'Inteligencia Artificial y Agentes',
    'Diseño y Desarrollo Web Premium',
    'Aplicaciones Móviles (iOS & Android)',
    'Automatización Empresarial & CRM',
    'Branding e Identidad Corporativa',
    'Marketing Digital & SEO Tecnológico',
    'Consultoría Tecnológica & Arquitectura'
  ];

  const budgetList = [
    '$1,800 - $3,800 USD (Básico / Startup)',
    '$3,800 - $7,500 USD (Recomendado / IA)',
    '$7,500 - $15,000+ USD (Enterprise)',
    'Por definir en llamada'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          serviceType,
          estimatedBudget,
          message
        })
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message);
        onLeadSubmitted(data.lead);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
      }
    } catch (err) {
      setSuccessMsg('¡Gracias! Hemos recibido tus datos y te contactaremos en breve.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsapp = () => {
    const text = encodeURIComponent(
      `Hola Graphix Glow, me gustaría solicitar información y cotización sobre el servicio de ${serviceType}.`
    );
    window.open(`https://wa.me/525539469253?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            <span>Contacto Directo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Inicia la Transformación de tu{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Empresa Hoy
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Completa el formulario o escríbenos directamente por WhatsApp. Respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-white/10 backdrop-blur-xl space-y-6 shadow-[0_0_40px_rgba(0,102,255,0.15)]">
              <h3 className="text-2xl font-bold text-white mb-2">Información Corporativa</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                Sede central y atención a clientes globales. Agenda una sesión virtual o visítanos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Correo Electrónico</span>
                    <a href="mailto:graphixglow@gmail.com" className="text-sm font-bold text-white hover:text-cyan-300">
                      graphixglow@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Teléfono / WhatsApp</span>
                    <a href="tel:+525539469253" className="text-sm font-bold text-white hover:text-cyan-300">
                      +52 55 3946 9253
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Ubicación Corporativa</span>
                    <span className="text-xs text-slate-200">
                      Torre Corporativa Reforma #405, CDMX, México
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={openWhatsapp}
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsappIcon className="w-5 h-5 text-slate-950" />
                  <span>Escribir por WhatsApp Ahora</span>
                </button>
              </div>
            </div>

            {/* Interactive Map Simulation Widget */}
            <div className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative h-56 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(#00d2ff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950/70 backdrop-blur-xs">
                <Globe className="w-8 h-8 text-cyan-400 mb-2 animate-pulse" />
                <span className="text-sm font-bold text-white mb-1">Graphix Glow Global HQ</span>
                <span className="text-xs text-slate-400">Atención a clientes en América Latina, España y EE.UU.</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {successMsg ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">{successMsg}</p>
                  <button
                    onClick={() => setSuccessMsg('')}
                    className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    Enviar Otra Solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitar Cotización Inteligente</h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Define las características de tu proyecto para recibir una propuesta técnica detallada.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        placeholder="juan@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+52 55 1234 5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Empresa / Marca</label>
                      <input
                        type="text"
                        placeholder="Nombre de tu negocio"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Servicio Requerido</label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        {servicesList.map((s) => (
                          <option key={s} value={s} className="bg-slate-900 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Presupuesto Estimado</label>
                      <select
                        value={estimatedBudget}
                        onChange={(e) => setEstimatedBudget(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        {budgetList.map((b) => (
                          <option key={b} value={b} className="bg-slate-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Detalles del Proyecto *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe tus objetivos, funcionalidades requeridas y tiempos deseados..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(0,180,255,0.5)] hover:shadow-[0_0_40px_rgba(0,210,255,0.7)] hover:scale-[1.01] active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Propuesta de Cotización'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

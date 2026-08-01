import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Por favor, ingresa tu correo electrónico.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, ingresa un correo electrónico válido (ej. usuario@dominio.com).');
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 800);
  };

  return (
    <div className="w-full mb-12">
      <div className="relative rounded-2xl bg-slate-900/80 border border-cyan-500/20 p-6 sm:p-8 backdrop-blur-md overflow-hidden shadow-xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Newsletter de Tecnología e IA</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Acelera la transformación digital de tu empresa
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Recibe mensualmente análisis de IA, tendencias web y estrategias exclusivas. Sin spam.
            </p>
          </div>

          {/* Form / Success state */}
          <div className="lg:col-span-6">
            {isSuccess ? (
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-200 text-xs flex items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">¡Suscripción confirmada!</p>
                    <p className="text-slate-300 font-light">Te hemos enviado un correo de bienvenida.</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-slate-200 transition font-mono whitespace-nowrap cursor-pointer"
                >
                  Registrar otro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="tu.correo@empresa.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                        error
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-slate-800 focus:border-cyan-400/80'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono transition shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Suscribirme</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <p className="text-[11px] text-red-400 font-mono flex items-center gap-1.5 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    <span>{error}</span>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuote: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuote }) => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(2500);
  const [avgDealSize, setAvgDealSize] = useState<number>(450);
  const [supportHours, setSupportHours] = useState<number>(120);

  // Calculations
  const automatedConversionRateIncrease = 0.35; // +35% conversion lift
  const hoursSavedPercentage = 0.80; // 80% support hours automated

  const additionalDeals = Math.round(monthlyLeads * 0.03 * automatedConversionRateIncrease);
  const monthlyRevenueGain = additionalDeals * avgDealSize;
  const hoursSaved = Math.round(supportHours * hoursSavedPercentage);
  const annualSavings = monthlyRevenueGain * 12;

  return (
    <section className="py-20 relative overflow-hidden bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Calculadora de Retorno de Inversión (ROI)</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Proyecta el Impacto de la <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Automatización IA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Ajusta los parámetros de tu empresa y descubre el incremento estimado de ingresos y horas ahorradas con GraphixGlow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Leads Mensuales */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Visitantes / Leads Mensuales en Web</span>
                </span>
                <span className="text-cyan-300 font-mono font-bold text-base">
                  {monthlyLeads.toLocaleString()} leads
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>500</span>
                <span>10,000</span>
                <span>20,000+</span>
              </div>
            </div>

            {/* Slider 2: Valor Promedio de Venta */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  <span>Valor Promedio de Transacción / Contrato</span>
                </span>
                <span className="text-cyan-300 font-mono font-bold text-base">
                  ${avgDealSize.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>$50</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Slider 3: Horas de Soporte Mensual */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Horas de Soporte y Operativa Manual</span>
                </span>
                <span className="text-cyan-300 font-mono font-bold text-base">
                  {supportHours} hrs/mes
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={supportHours}
                onChange={(e) => setSupportHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>20 hrs</span>
                <span>250 hrs</span>
                <span>500 hrs</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-indigo-950/60 p-6 sm:p-8 rounded-3xl border border-cyan-500/40 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                  Proyección Anual Estimada
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  Incremento Estimado de Ingresos Anuales
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight text-cyan-400 drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                  +${annualSavings.toLocaleString()} <span className="text-xs font-mono text-slate-300">USD/año</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">Conversión Extra</span>
                  <span className="text-lg font-bold text-white">+{additionalDeals} ventas/mes</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">Tiempo Ahorrado</span>
                  <span className="text-lg font-bold text-white">{hoursSaved} hrs/mes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenQuote}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Consultoría Estratégica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

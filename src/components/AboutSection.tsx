import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Cpu, 
  CheckCircle, 
  Zap 
} from 'lucide-react';

// Import Founder Image
import founderPhoto from '../assets/images/regenerated_image_1785569753971.jpg';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);
  const values = [
    {
      title: 'Innovación Sin Límites',
      desc: 'Adoptamos las tecnologías más avanzadas de Inteligencia Artificial para asegurar ventajas competitivas reales a nuestros clientes.',
      icon: Cpu
    },
    {
      title: 'Excelencia Artesanal',
      desc: 'Cada línea de código, cada píxel y cada modelo de IA es afinado con rigor para garantizar un rendimiento perfecto y belleza estética.',
      icon: Award
    },
    {
      title: 'Transparencia & Confianza',
      desc: 'Socio tecnológico honesto. Comunicación clara, entregas puntuales y garantía total sobre nuestros entregables.',
      icon: ShieldCheck
    },
    {
      title: 'Orientación a Resultados',
      desc: 'No diseñamos únicamente para impresionar visualmente; diseñamos para maximizar tus conversiones, ingresos y retorno de inversión.',
      icon: Zap
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quiénes Somos</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Liderando la Nueva Era de la{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Transformación Digital
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Fundado por <span className="text-cyan-300 font-semibold">Jesús Riaño</span>, Graphix Glow nació con la visión de fusionar el diseño visual de clase mundial con la potencia disruptiva de la Inteligencia Artificial.
          </p>
        </motion.div>

        {/* Founder Showcase Card & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Founder Profile Card (Jesús Riaño) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-80 transition duration-700" />
            
            <div className="relative rounded-[2rem] bg-slate-950/90 border border-cyan-500/40 p-5 sm:p-7 overflow-hidden backdrop-blur-2xl shadow-[0_0_60px_rgba(0,180,255,0.2)]">
              {/* Profile Image Container with Glassmorphism Framing */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6 border border-cyan-400/20 shadow-2xl bg-slate-900 group/img">
                {imgError || !founderPhoto ? (
                  <div className="w-full h-full bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400/50 flex items-center justify-center mb-4 text-3xl font-black text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                      JR
                    </div>
                    <span className="text-lg font-bold text-white">Jesús Riaño</span>
                    <span className="text-xs text-cyan-300 font-mono mt-1">Fundador & CEO</span>
                  </div>
                ) : (
                  <OptimizedImage
                    src={founderPhoto}
                    alt="Jesús Riaño - Fundador y CEO de Graphix Glow"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}
                
                {/* Subtle Cinematic Vignette & Bottom Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                {/* Glassmorphic Floating Founder Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-400/50 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
                  <span>Fundador & CEO</span>
                </div>
              </div>

              {/* Founder Information & Quote */}
              <div className="text-center sm:text-left px-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Jesús Riaño
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-500/30 shadow-inner">
                    Líder Visionario
                  </span>
                </div>
                
                <p className="text-cyan-400/90 text-sm font-medium mb-3">
                  Fundador y CEO de Graphix Glow
                </p>
                
                <p className="text-slate-300 text-xs font-light leading-relaxed italic border-l-2 border-cyan-400 pl-3.5 bg-cyan-950/20 py-2.5 rounded-r-xl">
                  "Nuestra misión es llevar a cada empresa a la vanguardia tecnológica mediante Inteligencia Artificial y experiencias digitales de nivel cinematográfico."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story & Philosophy Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.15)]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              Nuestra Historia & Liderazgo
            </h3>

            <p className="text-slate-300 font-light leading-relaxed mb-4">
              Bajo la dirección ejecutiva de <strong className="text-white font-semibold">Jesús Riaño</strong>, Graphix Glow se ha consolidado como la agencia de tecnología y diseño de alta gama predilecta para empresas que buscan liderar sus sectores.
            </p>

            <p className="text-slate-300 font-light leading-relaxed mb-6">
              Entendemos que un sitio web moderno debe ir más allá de la estética: es la arteria principal de conversión de tu negocio. Integramos modelos de Inteligencia Artificial generativa, automatización inteligente y sistemas de rendimiento ultrarrápido para ofrecer un valor inigualable.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-3xl font-extrabold text-cyan-400 block">+150</span>
                <span className="text-xs text-slate-400">Proyectos ejecutados</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-cyan-400 block">99.8%</span>
                <span className="text-xs text-slate-400">Satisfacción total</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-3xl font-extrabold text-cyan-400 block">100%</span>
                <span className="text-xs text-slate-400">Compromiso con IA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Misión</h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Empoderar a empresas e instituciones con herramientas digitales de alta gama e Inteligencia Artificial, democratizando la tecnología sofisticada para impulsar un crecimiento escalable y sostenible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Visión</h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Ser la agencia referente en innovación digital, diseño de interfaces impecables e integración de Inteligencia Artificial que marcan la pauta global en la industria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/40 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{v.title}</h5>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

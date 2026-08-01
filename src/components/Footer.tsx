import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { OptimizedImage } from './OptimizedImage';
import { NewsletterSection } from './NewsletterSection';
import founderPhoto from '../assets/images/regenerated_image_1785569753971.jpg';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenSeo?: () => void;
  onNavigate?: (sectionId: string) => void;
}

// Authentic Official WhatsApp Icon SVG Component
const WhatsappIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.012 2C6.486 2 2 6.479 2 12.006c0 1.91.536 3.693 1.47 5.215L2 22l4.908-1.428a9.96 9.96 0 005.104 1.434h.005c5.524 0 10.01-4.478 10.01-10.005C22.022 6.479 17.536 2 12.012 2zm5.834 14.161c-.244.686-1.201 1.256-1.97 1.341-.527.058-1.214.103-3.527-.852-2.959-1.222-4.862-4.229-5.011-4.426-.144-.197-1.201-1.603-1.201-3.056 0-1.453.759-2.167 1.028-2.46.269-.293.587-.367.784-.367.197 0 .394.002.565.011.182.009.426-.069.667.509.244.587.832 2.03.905 2.177.073.147.122.318.024.512-.098.197-.147.318-.293.49-.147.171-.309.383-.442.515-.147.147-.301.309-.13.603.171.293.76 1.253 1.63 2.028 1.118.995 2.062 1.304 2.355 1.45.293.147.465.122.637-.073.171-.197.734-.856.931-1.15.197-.293.393-.244.661-.147.269.098 1.71.808 2.004.955.293.147.489.221.562.343.073.122.073.71-.171 1.396z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = React.memo(({ onOpenQuote, onNavigate }) => {
  const [imgError, setImgError] = React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsapp = () => {
    window.open('https://wa.me/525539469253', '_blank');
  };

  return (
    <footer className="relative bg-[#02040A] text-slate-400 border-t border-cyan-500/20 overflow-hidden font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimalist Newsletter Form */}
        <NewsletterSection />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light pt-2">
              Transformando ideas en experiencias digitales de clase mundial impulsadas por Inteligencia Artificial, desarrollo web de alto rendimiento y estrategias de crecimiento.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={(e) => handleLink('hero', e)} className="hover:text-cyan-300 transition cursor-pointer">Inicio</button></li>
              <li><button onClick={(e) => handleLink('about', e)} className="hover:text-cyan-300 transition cursor-pointer">Quiénes Somos</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Servicios</button></li>
              <li><button onClick={(e) => handleLink('portfolio', e)} className="hover:text-cyan-300 transition cursor-pointer">Portafolio</button></li>
              <li><button onClick={(e) => handleLink('pricing', e)} className="hover:text-cyan-300 transition cursor-pointer">Planes & Cotización</button></li>
              <li><button onClick={(e) => handleLink('blog', e)} className="hover:text-cyan-300 transition cursor-pointer">Blog SEO</button></li>
              <li><button onClick={(e) => handleLink('contact', e)} className="hover:text-cyan-300 transition cursor-pointer">Contacto Directo</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Soluciones IA
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Agentes de IA Generativa</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Desarrollo Web Next.js</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Apps Móviles (iOS/Android)</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Automatizaciones n8n/Make</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">Branding Corporativo</button></li>
              <li><button onClick={(e) => handleLink('services', e)} className="hover:text-cyan-300 transition cursor-pointer">SEO Técnico & Growth</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Contacto Directo
            </h4>
            <p className="text-xs text-slate-400 mb-3 font-light">
              Atención ejecutiva 24/7.
            </p>
            <div className="space-y-2 text-xs text-slate-300 font-mono mb-4">
              <div><a href="mailto:graphixglow@gmail.com" className="hover:text-cyan-300 transition">graphixglow@gmail.com</a></div>
              <div><a href="tel:+525539469253" className="hover:text-cyan-300 transition">+52 55 3946 9253</a></div>
            </div>

            <button
              onClick={openWhatsapp}
              className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs transition shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsappIcon className="w-4 h-4 text-slate-950" />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Founder Credit & Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-slate-500">© {new Date().getFullYear()} JR Graphix Glow Digital Agency.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 px-3 py-1.5 rounded-full text-slate-300">
              {!imgError && founderPhoto ? (
                <OptimizedImage 
                  src={founderPhoto} 
                  alt="Jesús Riaño - Fundador y CEO" 
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-cover border border-cyan-400"
                />
              ) : (
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-300">
                  JR
                </div>
              )}
              <span>Sitio desarrollado por <strong className="text-cyan-300 font-semibold">Graphix Glow</strong> (Fundador & CEO: Jesús Riaño)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition cursor-pointer flex items-center gap-2">
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Authentic WhatsApp Button on the RIGHT */}
      <motion.button
        onClick={openWhatsapp}
        title="Contactar por WhatsApp"
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            '0 0 20px rgba(37,211,102,0.4)',
            '0 0 35px rgba(37,211,102,0.8)',
            '0 0 20px rgba(37,211,102,0.4)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white flex items-center justify-center cursor-pointer group border-2 border-white/30"
      >
        <WhatsappIcon className="w-7 h-7 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2 text-slate-950">
          WhatsApp Directo
        </span>
      </motion.button>
    </footer>
  );
});


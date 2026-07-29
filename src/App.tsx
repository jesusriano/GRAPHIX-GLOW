import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CinematicIntro } from './components/CinematicIntro';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatWidget } from './components/AiChatWidget';
import { AdminDashboard } from './components/AdminDashboard';
import { SeoToolsModal } from './components/SeoToolsModal';
import { QuoteModal } from './components/QuoteModal';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

import { 
  INITIAL_SERVICES, 
  INITIAL_PORTFOLIO, 
  INITIAL_BLOG_POSTS, 
  INITIAL_TESTIMONIALS, 
  INITIAL_CLIENT_LOGOS, 
  INITIAL_PRICING, 
  INITIAL_FAQS 
} from './data/initialData';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return false;
      const hasVisited = sessionStorage.getItem('graphixglow_intro_seen');
      if (hasVisited === 'true') return false;
    }
    return true;
  });

  const handleIntroComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('graphixglow_intro_seen', 'true');
    }
    setShowIntro(false);
  };

  // Active page view tab ('hero' | 'about' | 'services' | 'portfolio' | 'pricing' | 'blog' | 'contact')
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('');
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState<boolean>(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState<boolean>(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState<boolean>(false);

  // Dynamic state that can be updated via Admin Panel
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [portfolio, setPortfolio] = useState(INITIAL_PORTFOLIO);
  const [blogPosts, setBlogPosts] = useState(INITIAL_BLOG_POSTS);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="bg-[#030712] text-slate-100 font-sans min-h-screen selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden flex flex-col justify-between">
      {/* Background Interactive Canvas Particles */}
      <BackgroundParticles />

      {/* Cinematic Intro Overlay */}
      {showIntro && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      {/* Header Navigation */}
      <Header
        onOpenQuote={() => {
          setSelectedQuoteService('');
          setIsQuoteModalOpen(true);
        }}
        onOpenAdmin={() => setIsAdminDashboardOpen(true)}
        onOpenSeo={() => setIsSeoModalOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
        onOpenAiChat={() => setIsAiChatOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Multi-Page Views Container */}
      <main className="flex-1 relative pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* 1. INICIO (HOME PAGE) */}
            {activeSection === 'hero' && (
              <div className="space-y-16 pb-16">
                <Hero
                  onOpenQuote={() => {
                    setSelectedQuoteService('');
                    setIsQuoteModalOpen(true);
                  }}
                  onOpenPortfolio={() => handleNavigate('portfolio')}
                  onOpenAiChat={() => setIsAiChatOpen(true)}
                />

                {/* Quick Highlight Preview: Key Pillars */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Por Qué Elegir Graphix Glow</span>
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Especialistas en Desarrollo Web & Agentes de IA
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-xl shadow-xl hover:border-cyan-400/50 transition group">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Desarrollo Web Ultra-Rápido</h3>
                      <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">
                        Sitios web con calificaciones de 100/100 en Google PageSpeed, optimizados para conversión y SEO.
                      </p>
                      <button onClick={() => handleNavigate('services')} className="text-xs font-bold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1">
                        <span>Ver Servicios</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-xl shadow-xl hover:border-cyan-400/50 transition group">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Agentes de Inteligencia Artificial</h3>
                      <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">
                        Automatiza la atención al cliente 24/7 con bots RAG integrados directamente en tu negocio.
                      </p>
                      <button onClick={() => handleNavigate('services')} className="text-xs font-bold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1">
                        <span>Explorar IA</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-xl shadow-xl hover:border-cyan-400/50 transition group">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Garantía de Resultados</h3>
                      <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">
                        Soporte técnico continuo, entrega puntual y estrategias comprobadas de aceleración digital.
                      </p>
                      <button onClick={() => handleNavigate('about')} className="text-xs font-bold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1">
                        <span>Conoce al Equipo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Testimonials Preview */}
                <TestimonialsSection
                  testimonials={INITIAL_TESTIMONIALS}
                  clientLogos={INITIAL_CLIENT_LOGOS}
                />

                {/* Direct CTA Banner */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-slate-950 border border-cyan-500/40 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(0,210,255,0.2)]">
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        ¿Listo para impulsar tu presencia digital?
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm font-light">
                        Obtén una propuesta personalizada en menos de 24 horas.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Ir a Contacto & Cotización</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. NOSOTROS PAGE */}
            {activeSection === 'about' && (
              <div className="space-y-12 pb-16">
                <AboutSection />
                <TestimonialsSection
                  testimonials={INITIAL_TESTIMONIALS}
                  clientLogos={INITIAL_CLIENT_LOGOS}
                />
              </div>
            )}

            {/* 3. SERVICIOS PAGE */}
            {activeSection === 'services' && (
              <div className="space-y-12 pb-16">
                <ServicesSection
                  services={services}
                  onSelectServiceForQuote={handleOpenQuoteWithService}
                />
                <ProcessSection />
              </div>
            )}

            {/* 4. PORTAFOLIO PAGE */}
            {activeSection === 'portfolio' && (
              <div className="pb-16">
                <PortfolioSection
                  projects={portfolio}
                  onOpenQuote={() => setIsQuoteModalOpen(true)}
                />
              </div>
            )}

            {/* 5. PLANES & PRECIOS PAGE */}
            {activeSection === 'pricing' && (
              <div className="space-y-12 pb-16">
                <PricingSection
                  plans={INITIAL_PRICING}
                  onSelectPlanForQuote={(planName) => handleOpenQuoteWithService(planName)}
                />
                <ProcessSection />
                <FaqSection faqs={INITIAL_FAQS} />
              </div>
            )}

            {/* 6. BLOG SEO PAGE */}
            {activeSection === 'blog' && (
              <div className="pb-16">
                <BlogSection posts={blogPosts} />
              </div>
            )}

            {/* 7. CONTACTO PAGE */}
            {activeSection === 'contact' && (
              <div className="space-y-12 pb-16">
                <ContactSection
                  initialService={selectedQuoteService}
                  onLeadSubmitted={(lead) => {
                    console.log('Lead submitted:', lead);
                  }}
                />
                <FaqSection faqs={INITIAL_FAQS} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenSeo={() => setIsSeoModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* AI Assistant Chat Panel */}
      <AiChatWidget
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        blogPosts={blogPosts}
        onUpdatePosts={setBlogPosts}
        portfolioProjects={portfolio}
        onUpdateProjects={setPortfolio}
      />

      {/* Technical SEO Inspector Modal */}
      <SeoToolsModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedQuoteService}
      />
    </div>
  );
}


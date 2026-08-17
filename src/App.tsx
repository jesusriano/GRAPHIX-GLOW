import React, { useState, lazy, Suspense, useCallback } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
import { InViewDeferred } from './components/InViewDeferred';
import { Sparkles } from 'lucide-react';

import founderPhoto from './assets/images/regenerated_image_1785569753971.jpg';
import logoPhoto from './assets/images/regenerated_image_1785569587116.jpg';

import { TestimonialsSkeleton, BlogSkeleton } from './components/Skeletons';

import { 
  INITIAL_SERVICES, 
  INITIAL_PORTFOLIO, 
  INITIAL_BLOG_POSTS, 
  INITIAL_TESTIMONIALS, 
  INITIAL_CLIENT_LOGOS, 
  INITIAL_PRICING, 
  INITIAL_FAQS 
} from './data/initialData';

// Lazy loaded components & major page sections for bundle optimization
const BackgroundParticles = lazy(() => import('./components/BackgroundParticles').then(m => ({ default: m.BackgroundParticles })));
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const PortfolioSection = lazy(() => import('./components/PortfolioSection').then(m => ({ default: m.PortfolioSection })));
const ProcessSection = lazy(() => import('./components/ProcessSection').then(m => ({ default: m.ProcessSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const BlogSection = lazy(() => import('./components/BlogSection').then(m => ({ default: m.BlogSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const PrivacySection = lazy(() => import('./components/PrivacySection').then(m => ({ default: m.PrivacySection })));
const AiChatWidget = lazy(() => import('./components/AiChatWidget').then(m => ({ default: m.AiChatWidget })));
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const SeoToolsModal = lazy(() => import('./components/SeoToolsModal').then(m => ({ default: m.SeoToolsModal })));
const QuoteModal = lazy(() => import('./components/QuoteModal').then(m => ({ default: m.QuoteModal })));

const ScrollProgressBar = React.memo(() => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-50 origin-left shadow-[0_0_15px_rgba(0,210,255,0.8)] pointer-events-none"
    />
  );
});

const SectionSkeleton = () => (
  <div className="w-full py-24 flex flex-col items-center justify-center space-y-6 min-h-[450px] max-w-7xl mx-auto px-4">
    <div className="w-48 h-6 bg-cyan-500/10 rounded-full animate-pulse border border-cyan-500/20 mb-2" />
    <div className="w-72 sm:w-[420px] h-10 bg-white/5 rounded-2xl animate-pulse mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="h-64 rounded-3xl bg-slate-900/60 border border-cyan-500/20 animate-pulse p-6 flex flex-col justify-between">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 animate-pulse" />
        <div className="space-y-3">
          <div className="w-3/4 h-5 bg-white/10 rounded" />
          <div className="w-full h-4 bg-white/5 rounded" />
        </div>
      </div>
      <div className="h-64 rounded-3xl bg-slate-900/60 border border-cyan-500/20 animate-pulse p-6 flex flex-col justify-between">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 animate-pulse" />
        <div className="space-y-3">
          <div className="w-3/4 h-5 bg-white/10 rounded" />
          <div className="w-full h-4 bg-white/5 rounded" />
        </div>
      </div>
      <div className="h-64 rounded-3xl bg-slate-900/60 border border-cyan-500/20 animate-pulse p-6 flex flex-col justify-between">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 animate-pulse" />
        <div className="space-y-3">
          <div className="w-3/4 h-5 bg-white/10 rounded" />
          <div className="w-full h-4 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  // Idle prefetching after initial interactive load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const prefetchKeySections = () => {
        import('./components/ServicesSection');
        import('./components/PortfolioSection');
        import('./components/AboutSection');
        import('./components/ContactSection');
      };

      const imagePreloads = [logoPhoto, founderPhoto];
      imagePreloads.forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => prefetchKeySections(), { timeout: 3000 });
      } else {
        prefetchKeySections();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithService = useCallback((serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
    setIsQuoteModalOpen(true);
  }, []);

  return (
    <div className="bg-[#030712] text-slate-100 font-sans min-h-screen selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden flex flex-col justify-between">
      {/* Real-time Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Interactive Canvas Particles */}
      <Suspense fallback={null}>
        <BackgroundParticles />
      </Suspense>

      {/* Header Navigation */}
      <Header
        onOpenQuote={() => {
          setSelectedQuoteService('');
          setIsQuoteModalOpen(true);
        }}
        onOpenAdmin={() => setIsAdminDashboardOpen(true)}
        onOpenSeo={() => setIsSeoModalOpen(true)}
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
            <Suspense fallback={<SectionSkeleton />}>
              {/* 1. INICIO (HOME PAGE) */}
              {activeSection === 'hero' && (
                <div className="space-y-16 pb-16 relative overflow-hidden">
                  {/* Background ambient wash */}
                  <div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
                  />
                  <Hero
                    onOpenQuote={() => {
                      setSelectedQuoteService('');
                      setIsQuoteModalOpen(true);
                    }}
                    onOpenPortfolio={() => handleNavigate('portfolio')}
                    onOpenAiChat={() => setIsAiChatOpen(true)}
                  />

                  {/* Testimonials Preview */}
                  <InViewDeferred minHeight="300px" fallback={<TestimonialsSkeleton />}>
                    <TestimonialsSection
                      testimonials={INITIAL_TESTIMONIALS}
                      clientLogos={INITIAL_CLIENT_LOGOS}
                    />
                  </InViewDeferred>
                </div>
              )}

              {/* 2. NOSOTROS PAGE */}
              {activeSection === 'about' && (
                <div className="space-y-12 pb-16">
                  <AboutSection />
                  <InViewDeferred minHeight="300px" fallback={<TestimonialsSkeleton />}>
                    <TestimonialsSection
                      testimonials={INITIAL_TESTIMONIALS}
                      clientLogos={INITIAL_CLIENT_LOGOS}
                    />
                  </InViewDeferred>
                </div>
              )}

              {/* 3. SERVICIOS PAGE */}
              {activeSection === 'services' && (
                <div className="space-y-12 pb-16">
                  <ServicesSection
                    services={services}
                    onSelectServiceForQuote={handleOpenQuoteWithService}
                  />
                  <InViewDeferred minHeight="300px">
                    <ProcessSection />
                  </InViewDeferred>
                </div>
              )}

              {/* 4. PORTAFOLIO PAGE */}
              {activeSection === 'portfolio' && (
                <div className="space-y-12 pb-16">
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
                  <InViewDeferred minHeight="300px">
                    <ProcessSection />
                  </InViewDeferred>
                  <InViewDeferred minHeight="300px">
                    <FaqSection faqs={INITIAL_FAQS} />
                  </InViewDeferred>
                </div>
              )}

              {/* 6. BLOG SEO PAGE */}
              {activeSection === 'blog' && (
                <div className="pb-16">
                  <InViewDeferred minHeight="500px" fallback={<BlogSkeleton />}>
                    <BlogSection posts={blogPosts} />
                  </InViewDeferred>
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
                  <InViewDeferred minHeight="300px">
                    <FaqSection faqs={INITIAL_FAQS} />
                  </InViewDeferred>
                </div>
              )}

              {/* 8. PRIVACY POLICY PAGE */}
              {activeSection === 'privacy' && (
                <div className="pb-16">
                  <PrivacySection />
                </div>
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <InViewDeferred minHeight="400px">
        <Footer
          onOpenQuote={() => setIsQuoteModalOpen(true)}
          onOpenSeo={() => setIsSeoModalOpen(true)}
          onNavigate={handleNavigate}
        />
      </InViewDeferred>

      <Suspense fallback={null}>
        {/* AI Assistant Chat Panel */}
        {isAiChatOpen && (
          <AiChatWidget
            isOpen={isAiChatOpen}
            onClose={() => setIsAiChatOpen(false)}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        )}

        {/* Admin Dashboard Modal */}
        {isAdminDashboardOpen && (
          <AdminDashboard
            isOpen={isAdminDashboardOpen}
            onClose={() => setIsAdminDashboardOpen(false)}
            blogPosts={blogPosts}
            onUpdatePosts={setBlogPosts}
            portfolioProjects={portfolio}
            onUpdateProjects={setPortfolio}
          />
        )}

        {/* Technical SEO Inspector Modal */}
        {isSeoModalOpen && (
          <SeoToolsModal
            isOpen={isSeoModalOpen}
            onClose={() => setIsSeoModalOpen(false)}
          />
        )}

        {/* Quote Request Modal */}
        {isQuoteModalOpen && (
          <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
            preselectedService={selectedQuoteService}
          />
        )}
      </Suspense>
    </div>
  );
}


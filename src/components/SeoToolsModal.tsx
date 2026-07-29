import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, SearchCheck, Code2, Globe, CheckCircle2, Copy, Check } from 'lucide-react';

interface SeoToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoToolsModal: React.FC<SeoToolsModalProps> = ({ isOpen, onClose }) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Graphix Glow",
    "image": "https://graphixglow.com/logo.png",
    "@id": "https://graphixglow.com/#organization",
    "url": "https://graphixglow.com",
    "telephone": "+525512345678",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Torre Corporativa Reforma #405",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "06500",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.427,
      "longitude": -99.167
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/graphixglow",
      "https://instagram.com/graphixglow",
      "https://linkedin.com/company/graphixglow"
    ]
  };

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://graphixglow.com/</loc>
    <lastmod>2026-07-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://graphixglow.com/servicios</loc>
    <lastmod>2026-07-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://graphixglow.com/portafolio</loc>
    <lastmod>2026-07-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://graphixglow.com/blog</loc>
    <lastmod>2026-07-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://graphixglow.com/sitemap.xml`;

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(label);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,210,255,0.3)] text-left"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
              <SearchCheck className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Inspector de SEO Técnico & Meta Datos</h3>
              <p className="text-xs text-cyan-300 font-mono">Optimización Completa para Google & IA Discover</p>
            </div>
          </div>

          {/* Core Web Vitals Card */}
          <div className="mb-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-2xl font-extrabold text-emerald-400 block">100/100</span>
              <span className="text-[10px] text-slate-300 font-mono">Performance</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-emerald-400 block">0.8s</span>
              <span className="text-[10px] text-slate-300 font-mono">LCP (Speed)</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-emerald-400 block">12ms</span>
              <span className="text-[10px] text-slate-300 font-mono">INP (Response)</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-emerald-400 block">0.00</span>
              <span className="text-[10px] text-slate-300 font-mono">CLS (Shift)</span>
            </div>
          </div>

          {/* Schema JSON-LD */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase">
                1. Schema.org (JSON-LD)
              </h4>
              <button
                onClick={() => copyText(JSON.stringify(schemaJsonLD, null, 2), 'schema')}
                className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedTab === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copiar</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto max-h-44">
              {JSON.stringify(schemaJsonLD, null, 2)}
            </pre>
          </div>

          {/* Sitemap XML */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase">
                2. Sitemap.xml
              </h4>
              <button
                onClick={() => copyText(sitemapXml, 'sitemap')}
                className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedTab === 'sitemap' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copiar</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 overflow-x-auto max-h-44">
              {sitemapXml}
            </pre>
          </div>

          {/* Robots.txt */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase">
                3. Robots.txt
              </h4>
              <button
                onClick={() => copyText(robotsTxt, 'robots')}
                className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedTab === 'robots' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copiar</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 overflow-x-auto">
              {robotsTxt}
            </pre>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

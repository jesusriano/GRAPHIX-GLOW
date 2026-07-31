import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioProject, CategoryType } from '../types';
import { 
  Sparkles, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  X, 
  Calendar, 
  Tag 
} from 'lucide-react';

interface PortfolioSectionProps {
  projects: PortfolioProject[];
  onOpenQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onOpenQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filterCategories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'Todos los Casos' },
    { id: 'ia', label: 'IA & Agentes' },
    { id: 'web', label: 'Web & Portales' },
    { id: 'apps', label: 'Apps Móviles' },
    { id: 'automation', label: 'Automatización' },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos de Éxito</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Portafolio de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Proyectos Destacados
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Explora las soluciones tecnológicas que hemos diseñado e implementado para marcas líderes.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="group rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,210,255,0.25)] flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase backdrop-blur-md">
                    {project.client}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-mono">Año: {project.year}</span>
                  <span className="text-xs text-cyan-300 font-bold group-hover:underline flex items-center gap-1">
                    <span>Ver Caso Estudio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics Badges Bar */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 bg-white/5 rounded-2xl p-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="text-lg font-extrabold text-cyan-400 block">{m.value}</span>
                      <span className="text-[10px] text-slate-400 block leading-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,210,255,0.3)] text-left"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase">
                  {activeProject.client} • {activeProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {activeProject.title}
              </h3>

              <div className="rounded-2xl overflow-hidden mb-6 h-64">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {activeProject.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
                  Resultados Alcanzados
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {activeProject.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="text-2xl font-extrabold text-cyan-300">{m.value}</span>
                      <p className="text-xs text-slate-300 font-light">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveProject(null);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Quiero un Proyecto Similar</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

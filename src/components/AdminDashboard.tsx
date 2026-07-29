import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BlogPost, 
  PortfolioProject, 
  LeadSubmission, 
  Testimonial, 
  FaqItem 
} from '../types';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  FileText, 
  FolderKanban, 
  Users, 
  MessageSquare, 
  HelpCircle, 
  SearchCheck, 
  LayoutDashboard,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  blogPosts: BlogPost[];
  onUpdatePosts: (posts: BlogPost[]) => void;
  portfolioProjects: PortfolioProject[];
  onUpdateProjects: (projects: PortfolioProject[]) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  blogPosts,
  onUpdatePosts,
  portfolioProjects,
  onUpdateProjects
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'blog' | 'projects' | 'seo'>('leads');
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  // New post form state
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCat, setNewPostCat] = useState('Inteligencia Artificial');
  const [newPostSummary, setNewPostSummary] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  // Fetch leads on mount
  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleCreateBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle || !newPostSummary) return;

    const post: BlogPost = {
      id: `post-${Date.now()}`,
      title: newPostTitle,
      slug: newPostTitle.toLowerCase().replace(/\s+/g, '-'),
      category: newPostCat,
      summary: newPostSummary,
      content: newPostContent || 'Contenido predeterminado del nuevo artículo.',
      featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Administrador Graphix Glow',
        role: 'Content Strategist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      },
      publishedAt: 'Hoy',
      readTime: '4 min',
      tags: [newPostCat, 'Tecnología', 'Innovación'],
      tableOfContents: [],
      commentsCount: 0,
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": newPostTitle,
        "datePublished": new Date().toISOString()
      }
    };

    onUpdatePosts([post, ...blogPosts]);
    setNewPostTitle('');
    setNewPostSummary('');
    setNewPostContent('');
  };

  const handleDeletePost = (id: string) => {
    onUpdatePosts(blogPosts.filter((p) => p.id !== id));
  };

  const handleDeleteProject = (id: string) => {
    onUpdateProjects(portfolioProjects.filter((p) => p.id !== id));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0A1224] border border-purple-500/30 rounded-3xl max-w-5xl w-full h-[85vh] flex flex-col overflow-hidden shadow-[0_0_60px_rgba(112,0,255,0.3)] text-left"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-purple-950 via-slate-900 to-blue-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Panel de Administración Corporativo</h3>
                <p className="text-xs text-purple-300 font-mono">Gestión de Contenidos, Prospectos & SEO</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Tabs */}
          <div className="p-3 bg-white/5 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition ${
                activeTab === 'leads'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Prospectos / Leads ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition ${
                activeTab === 'blog'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Gestión de Blog ({blogPosts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition ${
                activeTab === 'projects'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Proyectos Portafolio ({portfolioProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('seo')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition ${
                activeTab === 'seo'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <SearchCheck className="w-4 h-4" />
              <span>Configuración SEO</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {/* Leads Tab */}
            {activeTab === 'leads' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white uppercase font-mono">
                    Solicitudes de Cotización Recibidas
                  </h4>
                  <button
                    onClick={fetchLeads}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin' : ''}`} />
                    <span>Actualizar</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div key={lead.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{lead.name}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                          {lead.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 font-mono">
                        <div>Email: <span className="text-white">{lead.email}</span></div>
                        <div>Tel: <span className="text-white">{lead.phone}</span></div>
                        <div>Servicio: <span className="text-cyan-300">{lead.serviceType}</span></div>
                        <div>Presupuesto: <span className="text-emerald-400">{lead.estimatedBudget}</span></div>
                      </div>
                      <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-white/5">
                        "{lead.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Tab */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                {/* Create Article Form */}
                <form onSubmit={handleCreateBlogPost} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase">
                    Crear Nuevo Artículo SEO
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Título del Artículo"
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      className="bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                    />
                    <select
                      value={newPostCat}
                      onChange={(e) => setNewPostCat(e.target.value)}
                      className="bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                    >
                      <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                      <option value="SEO">SEO</option>
                      <option value="Diseño Web">Diseño Web</option>
                      <option value="Apps">Apps</option>
                      <option value="Branding">Branding</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Resumen corto..."
                    value={newPostSummary}
                    onChange={(e) => setNewPostSummary(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                  <textarea
                    rows={3}
                    placeholder="Contenido en Markdown o texto enriquecido..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publicar Entrada</span>
                  </button>
                </form>

                {/* Articles List */}
                <div className="space-y-3">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400">{post.category}</span>
                        <h5 className="text-sm font-bold text-white">{post.title}</h5>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{post.summary}</p>
                      </div>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="space-y-3">
                {portfolioProjects.map((project) => (
                  <div key={project.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-cyan-400">{project.client} • {project.year}</span>
                      <h5 className="text-sm font-bold text-white">{project.title}</h5>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* SEO Settings Tab */}
            {activeTab === 'seo' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Auditoría de SEO Técnico & Meta Tags</span>
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Sitemap.xml, Robots.txt, Marcados Schema.org JSON-LD y Open Graph configurados e indexados para Google Discover.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300">
                    Sitemap URL: /sitemap.xml <br />
                    Robots URL: /robots.txt <br />
                    Core Web Vitals Performance Score: 100/100
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

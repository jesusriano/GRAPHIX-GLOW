import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost, Comment } from '../types';
import { 
  Sparkles, 
  Clock, 
  User, 
  Calendar, 
  Tag, 
  MessageSquare, 
  Share2, 
  Search, 
  X, 
  Code2, 
  ChevronRight, 
  Send, 
  Check 
} from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = React.memo(({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [showSchemaViewer, setShowSchemaViewer] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  // Comments state per post
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>({
    'post-ia-2026': [
      {
        id: 'c-1',
        postId: 'post-ia-2026',
        authorName: 'Ing. Fernando Castillo',
        authorEmail: 'fcastillo@innovacion.org',
        content: 'Excelente análisis sobre agentes RAG. En nuestra empresa ya estamos viendo resultados de reducción de tiempos.',
        createdAt: '28 de Julio, 2026'
      }
    ]
  });

  const [newCommentName, setNewCommentName] = useState<string>('');
  const [newCommentMsg, setNewCommentMsg] = useState<string>('');

  const categories = [
    'Todas',
    'Inteligencia Artificial',
    'SEO',
    'Marketing Digital',
    'Diseño Web',
    'Branding',
    'Automatización',
    'Apps'
  ];

  const filteredPosts = posts.filter((p) => {
    const matchesCat = selectedCategory === 'Todas' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddComment = (postId: string) => {
    if (!newCommentName.trim() || !newCommentMsg.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      postId,
      authorName: newCommentName,
      authorEmail: 'user@example.com',
      content: newCommentMsg,
      createdAt: 'Ahora'
    };

    setCommentsMap((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));

    setNewCommentName('');
    setNewCommentMsg('');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#030712]/70">
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
            <span>Blog Profesional & SEO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Artículos & Conocimiento{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Estratégico
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Guías especializadas en Inteligencia Artificial, SEO técnico, desarrollo de software y estrategias de crecimiento.
          </p>
        </motion.div>

        {/* Category & Search Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artículo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActivePost(post)}
              className="group rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.2)] flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/30 to-transparent" />

                <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {post.readTime}
                  </span>
                  <span>{post.publishedAt}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                {/* Author footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      loading="lazy"
                      decoding="async"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover border border-cyan-400"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">{post.author.name}</span>
                      <span className="text-[10px] text-slate-400 block">{post.author.role}</span>
                    </div>
                  </div>

                  <span className="text-xs text-cyan-300 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Leer Artículo</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-4xl w-full my-8 p-6 md:p-10 relative shadow-[0_0_60px_rgba(0,210,255,0.3)] text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <span>Blog</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span>{activePost.category}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className="text-slate-400 truncate max-w-xs">{activePost.title}</span>
              </div>

              {/* Title & Metadata */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                {activePost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <img
                    src={activePost.author.avatar}
                    alt={activePost.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-slate-200 font-medium">{activePost.author.name}</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {activePost.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {activePost.readTime}
                </span>

                <button
                  onClick={() => setShowSchemaViewer(!showSchemaViewer)}
                  className="ml-auto px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Schema JSON-LD</span>
                </button>
              </div>

              {/* Schema JSON-LD Viewer */}
              {showSchemaViewer && (
                <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <p className="text-[10px] text-slate-500 mb-2">// Marcado de datos estructurados para Google (Schema.org)</p>
                  <pre>{JSON.stringify(activePost.schemaJson, null, 2)}</pre>
                </div>
              )}

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden h-72 sm:h-96 mb-8">
                <img
                  src={activePost.featuredImage}
                  alt={activePost.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Table of Contents */}
              {activePost.tableOfContents && activePost.tableOfContents.length > 0 && (
                <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-3">
                    Tabla de Contenidos
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activePost.tableOfContents.map((item, idx) => (
                      <li key={idx} className="hover:text-cyan-300 transition cursor-pointer">
                        • {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                {activePost.content}
              </div>

              {/* Tags & Share */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-b border-white/10 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-cyan-400 shrink-0" />
                  {activePost.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium flex items-center gap-2 cursor-pointer"
                >
                  {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedShare ? '¡Enlace Copiado!' : 'Compartir Artículo'}</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Comentarios ({commentsMap[activePost.id]?.length || 0})</span>
                </h3>

                {/* Comments List */}
                <div className="space-y-4 mb-6">
                  {(commentsMap[activePost.id] || []).map((c) => (
                    <div key={c.id} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-cyan-300">{c.authorName}</span>
                        <span className="text-[10px] text-slate-500">{c.createdAt}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light">{c.content}</p>
                    </div>
                  ))}
                </div>

                {/* Add Comment Form */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold text-white">Dejar un Comentario</h4>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    rows={3}
                    placeholder="Escribe tu comentario u opinión sobre este tema..."
                    value={newCommentMsg}
                    onChange={(e) => setNewCommentMsg(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={() => handleAddComment(activePost.id)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publicar Comentario</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});

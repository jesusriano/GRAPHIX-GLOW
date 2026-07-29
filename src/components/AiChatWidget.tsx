import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Minimize2, 
  Maximize2, 
  Calendar, 
  User, 
  RefreshCw 
} from 'lucide-react';

interface AiChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const AiChatWidget: React.FC<AiChatWidgetProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: '¡Hola! Soy Maestro AI, el Asistente Virtual de Graphix Glow. ¿En qué servicio de Inteligencia Artificial, Desarrollo Web, Apps o Branding puedo asesorarte hoy?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsgText = inputValue;
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsgText,
          conversationHistory: messages
        })
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Disculpa, no pude procesar tu mensaje. ¿Puedes intentar nuevamente?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          text: 'Hubo un error de conexión con el servidor de IA. Puedes contactarnos directamente por WhatsApp.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickQuestions = [
    '¿Qué costo tiene una web con IA?',
    '¿En cuánto tiempo entregan una App Móvil?',
    '¿Cómo funcionan los Agentes de IA?',
    'Solicitar cotización'
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className={`fixed z-50 transition-all duration-300 ${
          isFullscreen
            ? 'inset-4 md:inset-10'
            : 'bottom-6 right-6 w-full max-w-md h-[580px] max-h-[85vh]'
        }`}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="w-full h-full bg-[#050B14]/95 border border-cyan-500/40 rounded-3xl backdrop-blur-2xl shadow-[0_0_60px_rgba(0,210,255,0.3)] flex flex-col overflow-hidden text-left"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center relative">
                <Bot className="w-5 h-5 text-cyan-300" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Maestro AI</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    Gemini 3.6
                  </span>
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">Asistente de Graphix Glow</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Action Bar */}
          <div className="p-2 bg-white/5 border-b border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (q === 'Solicitar cotización') {
                    onOpenQuote();
                  } else {
                    setInputValue(q);
                  }
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/5 text-[11px] text-slate-300 whitespace-nowrap transition cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md shadow-cyan-600/20'
                      : 'bg-white/10 border border-white/10 text-slate-200 rounded-bl-none backdrop-blur-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 max-w-[60%] text-xs text-cyan-300">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Escribiendo respuesta...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Pregunta sobre nuestros servicios..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-40 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

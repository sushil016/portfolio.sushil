import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, Phone, Bot, User } from 'lucide-react';
import { qaData, defaultResponses } from '../data/chatData';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [chatMode, setChatMode] = useState<'contact' | 'ai'>('contact');
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);

  // AI Chat Logic
  const findResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Find matching Q&A based on keywords
    for (const qa of qaData) {
      if (qa.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return qa.response;
      }
    }
    
    // Return random default response if no match
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleAIChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to history
    const newHistory = [...chatHistory, { type: 'user' as const, message }];
    
    // Get AI response
    const botResponse = findResponse(message);
    newHistory.push({ type: 'bot' as const, message: botResponse });
    
    setChatHistory(newHistory);
    setMessage('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (contactMethod === 'whatsapp') {
      const whatsappUrl = `https://wa.me/9967612372?text=${encodeURIComponent(
        `Hi! I'm interested in working with LumaDev.\n\n${message}`
      )}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const emailSubject = 'Project Inquiry - LumaDev';
      const emailBody = `Hi Sushil,\n\nI'm interested in working with LumaDev.\n\n${message}\n\nBest regards`;
      const emailUrl = `mailto:sushilsahani322@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(emailUrl, '_blank');
    }
    
    setMessage('');
    setIsOpen(false);
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  // Prevent scroll propagation to background
  const handleChatScroll = (e: React.WheelEvent) => {
    const target = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;
    
    // Check if scrolling up at top or down at bottom
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;
    
    // Prevent default scroll behavior when at boundaries to stop page scroll
    if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
      e.preventDefault();
    }
    
    // Stop event propagation to prevent page scroll
    e.stopPropagation();
  };

  // Prevent touch scroll propagation on mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl mb-4 w-96 border border-gray-700/50 max-h-[80vh] flex flex-col overflow-hidden chat-widget-container"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={handleTouchMove}
          >
            <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-700/30">
              <div>
                <h3 className="text-iconColor font-bold text-xl">
                  {chatMode === 'ai' ? 'Ask about Sushil' : "Let's Build Together!"}
                </h3>
                <p className="text-gray-400 text-sm">
                  {chatMode === 'ai' ? 'AI Assistant ready to answer' : 'Ready to start your project?'}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mode Selector */}
            <div className="flex gap-2 px-6 py-4 bg-gray-900/30">
              <button
                onClick={() => setChatMode('contact')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  chatMode === 'contact'
                    ? 'bg-iconColor/20 text-iconColor border border-iconColor/50'
                    : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                }`}
              >
                <Mail size={16} className="inline mr-2" />
                Contact
              </button>
              <button
                onClick={() => setChatMode('ai')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  chatMode === 'ai'
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                    : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                }`}
              >
                <Bot size={16} className="inline mr-2" />
                Ask about Sushil
              </button>
            </div>

            {/* Content Area with proper scrolling */}
            <div className="flex-1 flex flex-col min-h-0 p-6 pt-4">{chatMode === 'ai' ? (
              <>
                {/* AI Chat History with fixed height and scroll */}
                <div 
                  className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-64 min-h-[200px] pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 chat-widget-scrollable"
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  {chatHistory.length === 0 ? (
                    <div className="text-center text-gray-400 py-8">
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-6">
                        <Bot size={40} className="mx-auto mb-4 text-purple-400" />
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Ask me anything about Sushil!</h4>
                        <p className="text-sm text-gray-400 mb-4">Get instant answers about experience, skills, projects, and more.</p>
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500">Quick topics:</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[
                              { label: 'Experience', query: 'Tell me about Sushil\'s work experience' },
                              { label: 'Skills', query: 'What are Sushil\'s technical skills?' },
                              { label: 'LumaDev', query: 'What is LumaDev agency?' },
                              { label: 'Contact', query: 'How can I contact Sushil?' }
                            ].map((topic) => (
                              <button
                                key={topic.label}
                                onClick={() => setMessage(topic.query)}
                                className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1.5 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-200 hover:scale-105"
                              >
                                {topic.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                      >
                        <div className={`max-w-[85%] p-3 rounded-2xl shadow-lg ${
                          chat.type === 'user'
                            ? 'bg-gradient-to-r from-iconColor to-orange-400 text-gray-900'
                            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white border border-gray-600/50'
                        }`}>
                          <div className="flex items-start gap-2">
                            {chat.type === 'bot' && <Bot size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />}
                            {chat.type === 'user' && <User size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />}
                            <p className="text-sm leading-relaxed">{chat.message}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* AI Chat Input */}
                <div className="border-t border-gray-700/30 pt-4"
                     onWheel={(e) => e.stopPropagation()}
                     onTouchMove={(e) => e.stopPropagation()}
                >
                  <form onSubmit={handleAIChat} className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask about Sushil's experience, skills, projects..."
                        className="flex-1 p-3 bg-gray-700/70 text-white rounded-xl border border-gray-600/50 focus:border-purple-500/50 focus:outline-none transition-colors text-sm placeholder-gray-400"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                    {chatHistory.length > 0 && (
                      <button
                        type="button"
                        onClick={clearChat}
                        className="w-full py-2 text-gray-400 hover:text-purple-400 text-sm transition-colors hover:bg-gray-700/30 rounded-lg"
                      >
                        🗑️ Clear Chat History
                      </button>
                    )}
                  </form>
                </div>
              </>
            ) : (
              <>
                {/* Contact Method Selector */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setContactMethod('whatsapp')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      contactMethod === 'whatsapp'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                    }`}
                  >
                    <Phone size={16} className="inline mr-2" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setContactMethod('email')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      contactMethod === 'email'
                        ? 'bg-iconColor/20 text-iconColor border border-iconColor/50'
                        : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                    }`}
                  >
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </button>
                </div>
                
                <form onSubmit={handleContactSubmit} className="flex-1 flex flex-col"
                      onWheel={(e) => e.stopPropagation()}
                      onTouchMove={(e) => e.stopPropagation()}
                >
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi! I'm interested in working with LumaDev. I need help with..."
                    className="flex-1 p-4 bg-gray-700/70 text-white rounded-xl resize-none border border-gray-600/50 focus:border-iconColor/50 focus:outline-none transition-colors placeholder-gray-400 min-h-[120px]"
                    required
                  />
                  
                  <div className="mt-4 space-y-3">
                    <button
                      type="submit"
                      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                        contactMethod === 'whatsapp'
                          ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                          : 'bg-gradient-to-r from-iconColor to-orange-400 hover:from-orange-400 hover:to-iconColor text-gray-900'
                      }`}
                    >
                      <Send size={18} />
                      {contactMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send Email'}
                    </button>
                    
                    <div className="text-center text-gray-400 text-xs space-y-1">
                      <p className="flex items-center justify-center gap-1">
                        <span className="text-green-400">🚀</span> Quick response guaranteed!
                      </p>
                      <p className="text-green-400 font-medium">Usually reply within 1 hour</p>
                    </div>
                  </div>
                </form>
              </>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-iconColor to-orange-400 text-gray-900 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-iconColor rounded-full animate-ping opacity-75"></div>
        
        <div className="relative z-10">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat or Ask about Sushil
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;

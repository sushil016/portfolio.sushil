import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, Phone, Bot, User, Loader2, Maximize2, Minimize2 } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  timestamp?: string;
  id: string;
  isStreaming?: boolean;
}

const ChatWidgetNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [chatMode, setChatMode] = useState<'contact' | 'ai'>('ai');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  
  // Refs
  const abortControllerRef = useRef<AbortController | null>(null);

  // Cleanup effect for streams
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleAIChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading || isStreaming) return;

    const userMessage = message.trim();
    setMessage('');
    setIsLoading(true);
    setIsStreaming(true);

    // Add user message to history
    const newUserMessage: ChatMessage = {
      type: 'user',
      message: userMessage,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);

    // Create bot message placeholder for streaming
    const botMessageId = (Date.now() + 1).toString();
    const botMessage: ChatMessage = {
      type: 'bot',
      message: '',
      timestamp: new Date().toISOString(),
      id: botMessageId,
      isStreaming: true
    };
    
    setChatHistory(prev => [...prev, botMessage]);

    try {
      // Abort any existing stream
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      // Create new abort controller
      abortControllerRef.current = new AbortController();

      // Call the streaming API
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedMessage = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                
                if (data.type === 'chunk') {
                  accumulatedMessage += data.content;
                  
                  // Update the streaming message in real-time
                  setChatHistory(prev => 
                    prev.map(msg => 
                      msg.id === botMessageId 
                        ? { ...msg, message: accumulatedMessage }
                        : msg
                    )
                  );
                } else if (data.type === 'complete') {
                  // Mark streaming as complete
                  setChatHistory(prev => 
                    prev.map(msg => 
                      msg.id === botMessageId 
                        ? { ...msg, isStreaming: false }
                        : msg
                    )
                  );
                  break;
                } else if (data.type === 'error') {
                  throw new Error(data.error);
                }
              } catch (parseError) {
                console.warn('Failed to parse streaming data:', parseError);
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }

    } catch (error) {
      console.error('Error in AI chat:', error);
      
      // Update the bot message with error
      setChatHistory(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { 
                ...msg, 
                message: "I'm sorry, I'm having trouble responding right now. Please try again or use the contact form to reach Sushil directly.",
                isStreaming: false
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleQuickQuestion = (query: string) => {
    setMessage(query);
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
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getWidgetClasses = () => {
    if (isExpanded) {
      return "fixed inset-0 z-50 p-4";
    }
    return "w-[calc(100vw-2rem)] sm:w-96 max-w-md max-h-[85vh] sm:max-h-[80vh]";
  };

  const getChatContainerClasses = () => {
    const baseClasses = "bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl flex flex-col overflow-hidden rounded-2xl";
    return baseClasses;
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={getWidgetClasses()}
          >
            <div className={getChatContainerClasses()}>
              {/* Enhanced Header */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-iconColor to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-gray-900 font-bold text-sm">S</span>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-gray-800 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">
                        {chatMode === 'ai' ? 'Ask Sushil Anything' : "Let's Build Together!"}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1">
                        {chatMode === 'ai' ? (
                          <>
                            <Bot size={12} className="text-purple-400" />
                            AI Assistant • {isStreaming ? 'Typing...' : 'Online'}
                          </>
                        ) : (
                          'Ready to start your project?'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleExpanded}
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-full"
                      title={isExpanded ? "Minimize" : "Expand"}
                    >
                      {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-full"
                    >
                      <X size={16} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="flex gap-1 px-4 sm:px-6 py-3 bg-gray-900/50 border-b border-gray-700/30">
                <div className="flex gap-1 p-1 bg-gray-800/50 rounded-lg w-full">
                  <button
                    onClick={() => setChatMode('ai')}
                    className={`flex-1 py-2.5 px-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      chatMode === 'ai'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                    }`}
                  >
                    <Bot size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">AI Assistant</span>
                    <span className="sm:hidden">AI</span>
                  </button>
                  <button
                    onClick={() => setChatMode('contact')}
                    className={`flex-1 py-2.5 px-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      chatMode === 'contact'
                        ? 'bg-gradient-to-r from-iconColor to-orange-400 text-gray-900 shadow-lg'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                    }`}
                  >
                    <Mail size={14} className="sm:w-4 sm:h-4" />
                    Contact
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 pt-3 sm:pt-4">
                {chatMode === 'ai' ? (
                  <>
                    {/* AI Chat History */}
                    <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 space-y-2 sm:space-y-3 min-h-[200px] pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                      {chatHistory.length === 0 ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-gray-400 py-6"
                        >
                          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 sm:p-8">
                            <div className="flex items-center justify-center mb-4">
                              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                <Bot size={24} className="text-white" />
                              </div>
                            </div>
                            
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Hi! I'm Sushil's AI Assistant 👋</h4>
                            <p className="text-sm text-gray-400 mb-6">
                              Ask me anything about Sushil's experience, projects, skills, and goals!
                            </p>
                            
                            <div className="space-y-4">
                              <p className="text-xs text-purple-400 font-medium">Quick Questions:</p>
                              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                                {[
                                  { icon: '💼', label: 'What is your experience?', query: 'Tell me about your work experience' },
                                  { icon: '🚀', label: 'What is LumaDev?', query: 'Tell me about your agency LumaDev' },
                                  { icon: '📞', label: 'How to contact you?', query: 'How can I get in touch with you?' }
                                ].map((topic) => (
                                  <motion.button
                                    key={topic.label}
                                    onClick={() => handleQuickQuestion(topic.query)}
                                    disabled={isLoading || isStreaming}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 px-3 py-2.5 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm flex items-center gap-2"
                                  >
                                    <span className="text-sm">{topic.icon}</span>
                                    <span className="font-medium">{topic.label}</span>
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <>
                          {chatHistory.map((chat) => (
                            <motion.div
                              key={chat.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} mb-3 sm:mb-4`}
                            >
                              <div className={`max-w-[85%] sm:max-w-[80%] ${isExpanded ? 'max-w-[75%]' : ''}`}>
                                {chat.type === 'bot' && (
                                  <div className="flex items-center gap-2 mb-1 ml-1">
                                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                      <Bot size={10} className="text-white" />
                                    </div>
                                    <span className="text-xs text-gray-400">Sushil AI</span>
                                    {chat.isStreaming && (
                                      <div className="flex space-x-1">
                                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                      </div>
                                    )}
                                  </div>
                                )}
                                <div className={`p-3 sm:p-4 rounded-2xl shadow-lg ${
                                  chat.type === 'user'
                                    ? 'bg-gradient-to-r from-iconColor to-orange-400 text-gray-900 rounded-br-md'
                                    : 'bg-gradient-to-r from-gray-700/90 to-gray-600/90 text-white border border-gray-600/30 rounded-bl-md'
                                }`}>
                                  <div className="flex items-start gap-2">
                                    {chat.type === 'user' && (
                                      <div className="w-5 h-5 bg-gray-800/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <User size={10} className="text-gray-700" />
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                                        {chat.message}
                                        {chat.isStreaming && (
                                          <span className="inline-block w-2 h-5 bg-current ml-1 animate-pulse" />
                                        )}
                                      </p>
                                      {chat.timestamp && !chat.isStreaming && (
                                        <p className="text-xs opacity-60 mt-2 flex items-center gap-1">
                                          <span>{new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                          {chat.type === 'user' && <span>✓</span>}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </>
                      )}
                    </div>

                    {/* AI Chat Input */}
                    <div className="border-t border-gray-700/30 bg-gray-900/30 p-4 sm:p-6">
                      <form onSubmit={handleAIChat} className="space-y-3">
                        <div className="relative flex gap-2">
                          <div className="flex-1 relative">
                            <input
                              type="text"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder={isLoading || isStreaming ? "Processing your question..." : "Ask me anything about Sushil..."}
                              className="w-full p-3 sm:p-4 pr-12 bg-gray-800/70 text-white rounded-xl border border-gray-600/50 focus:border-purple-500/70 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm placeholder-gray-400 disabled:opacity-50"
                              disabled={isLoading || isStreaming}
                              required
                              maxLength={500}
                              autoComplete="off"
                            />
                            {message && !isLoading && !isStreaming && (
                              <button
                                type="button"
                                onClick={() => setMessage('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                              >
                                <X size={16} />
                              </button>
                            )}
                          </div>
                          <button
                            type="submit"
                            disabled={isLoading || isStreaming || !message.trim()}
                            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-3 sm:p-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[48px] flex items-center justify-center"
                          >
                            {isLoading || isStreaming ? (
                              <Loader2 size={18} className="animate-spin" />
                            ) : (
                              <Send size={18} />
                            )}
                          </button>
                        </div>
                        
                        {/* Action Bar */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            {chatHistory.length > 0 && (
                              <button
                                type="button"
                                onClick={clearChat}
                                disabled={isLoading || isStreaming}
                                className="text-gray-400 hover:text-red-400 transition-colors disabled:opacity-50 flex items-center gap-1"
                              >
                                🗑️ Clear
                              </button>
                            )}
                            <span className="text-gray-500 flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              Claude AI {isStreaming && '• Streaming...'}
                            </span>
                          </div>
                          
                          <div className="text-gray-500">
                            {message.length}/500
                          </div>
                        </div>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Contact Mode */}
                    <div className="flex gap-2 mb-3 sm:mb-4">
                      <button
                        onClick={() => setContactMethod('whatsapp')}
                        className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          contactMethod === 'whatsapp'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                        }`}
                      >
                        <Phone size={14} className="inline mr-1 sm:mr-2 sm:w-4 sm:h-4" />
                        WhatsApp
                      </button>
                      <button
                        onClick={() => setContactMethod('email')}
                        className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          contactMethod === 'email'
                            ? 'bg-iconColor/20 text-iconColor border border-iconColor/50'
                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700'
                        }`}
                      >
                        <Mail size={14} className="inline mr-1 sm:mr-2 sm:w-4 sm:h-4" />
                        Email
                      </button>
                    </div>
                    
                    <form onSubmit={handleContactSubmit} className="flex-1 flex flex-col">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi! I'm interested in working with LumaDev. I need help with..."
                        className="flex-1 p-3 sm:p-4 bg-gray-700/70 text-white rounded-xl resize-none border border-gray-600/50 focus:border-iconColor/50 focus:outline-none transition-colors placeholder-gray-400 min-h-[100px] sm:min-h-[120px] text-xs sm:text-sm"
                        required
                      />
                      
                      <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                        <button
                          type="submit"
                          className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base ${
                            contactMethod === 'whatsapp'
                              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                              : 'bg-gradient-to-r from-iconColor to-orange-400 hover:from-orange-400 hover:to-iconColor text-gray-900'
                          }`}
                        >
                          <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Action Button */}
      <motion.div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-iconColor to-orange-400 text-gray-900 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse effect */}
          {!isOpen && (
            <div className="absolute inset-0 bg-gradient-to-r from-iconColor to-orange-400 rounded-full animate-ping opacity-60"></div>
          )}
          
          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <X size={24} className="transition-transform duration-200" />
            ) : (
              <div className="relative">
                <MessageCircle size={24} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Tooltip */}
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none hidden sm:block border border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Bot size={14} className="text-purple-400" />
                <span>Ask Sushil AI anything!</span>
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </motion.div>
          )}
        </motion.button>
        
        {/* Notification badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          >
            AI
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ChatWidgetNew;

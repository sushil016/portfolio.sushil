import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, Phone } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('whatsapp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (contactMethod === 'whatsapp') {
      // Replace with your actual WhatsApp number (include country code without +)
      const whatsappUrl = `https://wa.me/9967612372?text=${encodeURIComponent(
        `Hi! I'm interested in working with LumaDev.\n\n${message}`
      )}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Replace with your actual email
      const emailSubject = 'Project Inquiry - LumaDev';
      const emailBody = `Hi Sushil,\n\nI'm interested in working with LumaDev.\n\n${message}\n\nBest regards`;
      const emailUrl = `mailto:sushilsahani322@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(emailUrl, '_blank');
    }
    
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-4 w-96 border border-gray-700/50"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-iconColor font-bold text-xl">Let's Build Together!</h3>
                <p className="text-gray-400 text-sm">Ready to start your project?</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-700 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

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
            
            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi! I'm interested in working with LumaDev. I need help with..."
                className="w-full p-4 bg-gray-700/70 text-white rounded-xl resize-none border border-gray-600/50 focus:border-iconColor/50 focus:outline-none transition-colors"
                rows={4}
                required
              />
              
              <div className="mt-4 space-y-3">
                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    contactMethod === 'whatsapp'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-iconColor hover:bg-orange-400 text-gray-900'
                  }`}
                >
                  <Send size={18} />
                  {contactMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send Email'}
                </button>
                
                <div className="text-center text-gray-400 text-xs">
                  <p>Quick response guaranteed! 🚀</p>
                  <p className="text-green-400 font-medium">Usually reply within 1 hour</p>
                </div>
              </div>
            </form>
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
            Start a conversation
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;

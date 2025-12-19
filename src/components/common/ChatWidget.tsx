import { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-charcoal text-white p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">AI Property Assistant</h4>
              <p className="text-xs text-white/70">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 h-64 overflow-y-auto bg-gray-50">
          <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
            <p className="text-sm text-warmGray-700">
              👋 Hi there! I'm your AI property assistant. I can help you:
            </p>
            <ul className="text-sm text-warmGray-600 mt-2 space-y-1">
              <li>• Find your perfect home</li>
              <li>• Answer property questions</li>
              <li>• Schedule viewings</li>
              <li>• Get price estimates</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm text-warmGray-700">
              What are you looking for today?
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-warmGray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg border border-warmGray-300 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal/20"
            />
            <button className="w-10 h-10 bg-charcoal text-white rounded-lg flex items-center justify-center hover:bg-charcoal/90 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Card (when closed) */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 w-64 bg-white rounded-xl shadow-lg p-4 animate-fade-in">
          <p className="font-semibold text-charcoal mb-2">Find a home just right for you</p>
          <p className="text-sm text-warmGray-600 mb-3">Let our AI help you discover your perfect property.</p>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-charcoal text-white py-2 rounded-lg text-sm font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explore AI Property
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-warmGray-200 text-charcoal' : 'bg-charcoal text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}

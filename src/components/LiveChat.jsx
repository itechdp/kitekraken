import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Welcome to KiteKraken AI. How can we help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Mock response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! Our support team will respond shortly. For immediate assistance, please check our FAQ or email support@bullexai.com",
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[rgb(55,255,97)] rounded-full flex items-center justify-center text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] transition-all hover:scale-110 shadow-[0_8px_25px_rgba(55,255,97,0.3)]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-[rgb(26,28,30)] rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[rgb(17,17,19)] px-6 py-4 border-b border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg">Live Support</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[rgb(55,255,97)] rounded-full animate-pulse"></div>
                  <p className="text-[rgb(161,161,170)] text-sm">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[rgb(161,161,170)] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-[rgb(55,255,97)] text-[rgb(17,17,19)]'
                      : 'bg-[rgb(38,40,42)] text-white'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === 'user'
                        ? 'text-[rgb(17,17,19)] opacity-60'
                        : 'text-[rgb(161,161,170)]'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[rgba(255,255,255,0.1)]">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
              />
              <Button
                onClick={handleSend}
                className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] rounded-xl px-4"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;

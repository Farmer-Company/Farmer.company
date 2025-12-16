import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Bot, Sparkles, Sprout } from 'lucide-react';
import { ChatMessage } from '../types';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am The Farmer Company Intelligence Unit. How can I assist you with our precision agriculture network today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessageText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // Filter out the initial greeting from history to prevent role mismatch issues if strict
      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: "You are The Farmer Company Intelligence Unit, an AI assistant for a high-tech precision agriculture company. The Farmer Company uses computer vision and data science to standardize fruit quality (grading), reduce wastage (from 20% to 2%), and increase farmer revenue. Your tone is professional, concise, and slightly futuristic ('Bio-Futurism'). You speak with data-driven confidence. Help users understand the technology (Farmer Company Vision Stack), the network (Farmers to Vendors), and the impact. If asked about technical specs, invent plausible high-tech metrics (e.g., 'Spectroscopic Brix analysis', 'Volumetric density scanning').",
        },
        history: history
      });

      const result = await chat.sendMessage({ message: userMessageText });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Realigning satellite uplink... Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-codGray rotate-90' : 'bg-techGreen hover:bg-emerald-500'
          }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-codGray p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <Sprout className="text-techGreen" size={18} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm tracking-wide">THE FARMER COMPANY AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-techGreen animate-pulse"></span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Online</span>
              </div>
            </div>
          </div>
          <Sparkles className="text-gray-600" size={16} />
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-wildSand/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-techGreen text-white rounded-br-none shadow-md shadow-techGreen/20'
                    : 'bg-white text-codGray border border-gray-100 rounded-bl-none shadow-sm'
                  }`}
              >
                {msg.role === 'model' && (
                  <div className="flex items-center gap-2 mb-1 opacity-50 border-b border-gray-100 pb-1">
                    <Bot size={12} />
                    <span className="text-[10px] font-mono uppercase">System</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-codGray border border-gray-100 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-techGreen rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-techGreen rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-techGreen rounded-full animate-bounce delay-150"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">Processing Data</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our technology..."
              className="w-full bg-wildSand border border-transparent focus:bg-white focus:border-techGreen text-codGray rounded-xl pl-4 pr-12 py-3 text-sm outline-none transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-codGray text-white rounded-lg hover:bg-techGreen disabled:opacity-50 disabled:hover:bg-codGray transition-colors duration-300"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-400">Powered by Gemini 3 Pro</span>
          </div>
        </form>
      </div>
    </>
  );
};

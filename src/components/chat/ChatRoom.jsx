import { format } from 'date-fns';
import { Send, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ChatRoom = () => {
  const { user } = useAuth();
  
  // Initialize messages from LocalStorage or default
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('village_chat_messages');
    return savedMessages ? JSON.parse(savedMessages) : [
      { id: 1, user: 'Village Head', text: 'Welcome to the digital Gram Sabha!', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, user: 'Ramesh (Farmer)', text: 'The new irrigation canal is working great.', timestamp: new Date(Date.now() - 1800000).toISOString() },
    ];
  });
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sync with LocalStorage and listen for changes (User's device acts as server)
  useEffect(() => {
    localStorage.setItem('village_chat_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'village_chat_messages' && e.newValue) {
        setMessages(JSON.parse(e.newValue));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      user: user?.name || 'Guest',
      text: newMessage,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => {
        const updatedMessages = [...prev, message];
        localStorage.setItem('village_chat_messages', JSON.stringify(updatedMessages));
        return updatedMessages;
    });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-xl">
      {/* Chat Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-white/20 p-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
            <User size={24} className="text-village-DEFAULT" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-gray-900 leading-tight">Nangal Community</h2>
            <p className="text-xs text-gray-700 font-medium">Official Village Group</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="text-center my-4">
             <span className="bg-white/40 backdrop-blur-sm text-gray-800 font-bold text-xs px-3 py-1 rounded-full border border-white/20 shadow-sm">
                Today
             </span>
        </div>

        {messages.map((msg) => {
          const isMe = msg.user === user?.name || msg.user === 'Guest'; // Fallback if user is null
          return (
            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} w-full`}>
              <div 
                className={`max-w-[80%] md:max-w-[60%] px-4 py-3 rounded-2xl text-sm shadow-sm backdrop-blur-sm ${
                  isMe 
                    ? 'bg-village-DEFAULT/90 text-white rounded-tr-none' 
                    : 'bg-white/60 text-gray-900 border border-white/40 rounded-tl-none font-medium'
                }`}
              >
                {!isMe && <p className="text-xs font-bold text-village-dark mb-1">{msg.user}</p>}
                
                <div className="flex flex-col">
                    <span className="break-words text-[15px] leading-relaxed mb-1">{msg.text}</span>
                    <div className={`text-[10px] text-right ${isMe ? 'text-white/80' : 'text-gray-400'}`}>
                        {format(new Date(msg.timestamp), 'h:mm a')}
                    </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="bg-white/30 backdrop-blur-md p-3 px-4 border-t border-white/20 flex gap-3 items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-white/50 border border-white/30 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-village-DEFAULT/50 text-gray-900 placeholder:text-gray-600 text-sm transition-all font-medium"
        />
        <button 
          type="submit" 
          disabled={!newMessage.trim()}
          className="p-3 bg-village-DEFAULT/90 backdrop-blur-sm text-white rounded-full hover:bg-village-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center border border-white/20"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;






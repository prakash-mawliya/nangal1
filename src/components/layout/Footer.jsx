import { Github, Heart, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] pt-16 pb-8 border-t border-green-600 font-sans relative overflow-hidden">
      {/* Decorative Side Bar */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-gradient-to-tr from-orange-500 to-orange-600 p-2 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                <MessageCircle size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight uppercase">NANGAL</span>
            </Link>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm font-medium">
              The heart of your village, digitized. We help you stay connected, informed, and engaged with your neighbors, turning everyday moments into lasting community bonds.
            </p>

            <h3 className="text-xl font-black text-orange-400 tracking-tight uppercase">
              DON'T JUST LIVE. BE A COMMUNITY.
            </h3>

            <div className="flex items-center gap-2 pt-2 text-gray-200 font-bold text-sm">
              <span>Crafted with</span>
              <Heart className="text-orange-500 fill-orange-500 animate-pulse" size={16} />
              <span>by</span>
              <a href="https://prakash-mawliya.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400/50 underline-offset-4 hover:decoration-orange-500 transition-all cursor-pointer hover:text-orange-400">
                Prakash
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 lg:col-start-5">
            <h4 className="text-orange-400 font-black uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 font-bold hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 font-bold hover:text-orange-400 transition-colors">News & Polls</Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-300 font-bold hover:text-orange-400 transition-colors">Community Chat</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 font-bold hover:text-orange-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className="text-orange-400 font-black uppercase tracking-wider mb-6 text-sm">Legal</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-300 font-bold cursor-default">Privacy Policy</span>
              </li>
              <li>
                <span className="text-gray-300 font-bold cursor-default">Terms of Service</span>
              </li>
              <li>
                <span className="text-gray-300 font-bold cursor-default">Cookie Policy</span>
              </li>
              <li>
                <span className="text-gray-300 font-bold cursor-default">Contact</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-bold text-sm">© 2026 Nangal. All rights reserved.</p>
            <p className="text-gray-500 font-bold text-xs mt-1 uppercase tracking-wider">Village Connectivity Project</p>
          </div>

          <div className="flex items-center gap-4">
             <a href="https://github.com/prakash-mawliya" target="_blank" rel="noopener noreferrer" className="bg-green-900/50 text-white p-2.5 rounded-xl hover:bg-orange-500 transition-colors hover:scale-110 active:scale-95 duration-300 ring-1 ring-white/10">
               <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/prakash-mawliya-5b6330263" target="_blank" rel="noopener noreferrer" className="bg-green-900/50 text-white p-2.5 rounded-xl hover:bg-orange-500 transition-colors hover:scale-110 active:scale-95 duration-300 ring-1 ring-white/10">
               <Linkedin size={20} />
             </a>
             <a href="mailto:prakash2e64@gmail.com" className="bg-green-900/50 text-white p-2.5 rounded-xl hover:bg-orange-500 transition-colors hover:scale-110 active:scale-95 duration-300 ring-1 ring-white/10">
               <Mail size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
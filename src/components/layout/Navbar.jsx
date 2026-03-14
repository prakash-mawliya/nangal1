import { Info, LogOut, Menu, MessageCircle, Newspaper, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chat', path: '/chat', icon: <MessageCircle size={18} /> },
    { name: 'News & Polls', path: '/news', icon: <Newspaper size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
  ];

  if (user?.role === 'admin') {
    navLinks.push({ name: 'Admin Panel', path: '/admin' });
  }

  return (
    <nav className="bg-[#FF9933] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-2xl font-bold font-serif tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1 group"
            >
              <img src="/logo.svg" alt="Nangal Logo" className="h-10 w-10 object-contain transform group-hover:scale-110 transition-transform duration-300" /> Nangal
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                      isActive 
                        ? 'bg-white text-[#FF9933] shadow-md' 
                        : 'text-white hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2" title={user.name}>
                    <div className="w-9 h-9 rounded-full bg-white text-[#FF9933] flex items-center justify-center font-bold text-lg border-2 border-orange-200 shadow-md transform transition-transform hover:scale-110">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="text-sm font-medium hidden lg:block max-w-[100px] truncate">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/90 hover:bg-red-600 text-white p-2 rounded-full shadow-sm transition-colors"
                    title="Logout"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {/* Trigger Login Modal or Route */ navigate('/login')}} 
                  className="bg-white hover:bg-orange-50 text-[#FF9933] hover:text-orange-600 font-bold px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95"
                >
                  Join Community
                </button>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-village-dark/50 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FF9933] shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-village-dark/30 flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
            {!user && (
               <button
               onClick={() => { setIsOpen(false); navigate('/login'); }}
               className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-village-secondary text-village-dark"
             >
               Join Community
             </button>
            )}
             {user && (
                <button
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-red-500/80 text-white"
                >
                  Logout
                </button>
              )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






import { ChevronDown, Info, LogOut, Menu, MessageCircle, Newspaper, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('button[data-mobile-toggle]')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

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
            {user && (
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-white hover:bg-white/10 hover:text-white"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  ) : (
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
                  )
                ))}
              </div>
            )}
            {!user && (
               <div className="ml-10 hidden md:flex items-center space-x-8">
                  {/* Empty space or specific landing links if needed */}
               </div>
            )}
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6" ref={dropdownRef}>
              {user ? (
                <div className="relative group">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 focus:outline-none bg-white py-1 pl-1 pr-4 rounded-full shadow-lg border-2 border-orange-50 hover:border-orange-200 transition-all duration-300 group-hover:shadow-orange-200/50"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange-100 text-[#FF9933] flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        (user.name ? user.name.charAt(0).toUpperCase() : 'U')
                      )}
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-bold text-gray-700 leading-none max-w-[100px] truncate group-hover:text-orange-600 transition-colors">{user.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide leading-none mt-0.5">{user.role}</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-3 w-80 bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2 overflow-hidden z-50">
                      
                      {/* User Header */}
                      <div className="bg-[#FFFBF5] px-6 py-6 border-b border-orange-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
                        
                        <div className="flex items-center gap-4 relative z-10">
                           <div className="w-16 h-16 rounded-full bg-white text-[#FF9933] flex items-center justify-center font-bold text-2xl border-4 border-white shadow-md overflow-hidden shrink-0">
                              {user.avatar ? (
                                <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                              ) : (
                                (user.name ? user.name.charAt(0).toUpperCase() : 'U')
                              )}
                           </div>
                           <div className="overflow-hidden">
                             <h3 className="font-black text-lg text-gray-800 truncate mb-1">{user.name || 'Anonymous'}</h3>
                             <p className="text-xs text-gray-500 font-medium truncate mb-2">{user.email || 'No email linked'}</p>
                             <span className="inline-block bg-orange-100 text-orange-600 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-orange-200">{user.role}</span>
                           </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-3 space-y-1">
                        <Link 
                          to="/profile" 
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-2xl transition-all group"
                        >
                          <div className="bg-gray-50 p-2.5 rounded-xl text-gray-400 group-hover:bg-white group-hover:text-orange-500 group-hover:shadow-sm transition-all border border-transparent group-hover:border-orange-100">
                             <User size={20} />
                          </div>
                          <div className="flex-1">
                             <span className="block text-base">My Profile</span>
                             <span className="text-[11px] text-gray-400 font-medium group-hover:text-orange-400/80">Manage account settings</span>
                          </div>
                          <div className="text-gray-300 group-hover:translate-x-1 transition-transform">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </div>
                        </Link>
                        
                        <div className="h-px bg-gray-50 my-1 mx-4"></div>

                        <button 
                          onClick={() => {
                            handleLogout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all text-left group"
                        >
                          <div className="bg-gray-50 p-2.5 rounded-xl text-gray-400 group-hover:bg-white group-hover:text-red-500 group-hover:shadow-sm transition-all border border-transparent group-hover:border-red-100">
                            <LogOut size={20} />
                          </div>
                          <span className="flex-1 text-base">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <Link to="/login" className="text-white font-black hover:text-orange-100 transition-colors tracking-wide text-sm uppercase">
                    Login
                  </Link>
                  <Link 
                    to="/login" 
                    className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] hover:from-[#FF1493] hover:to-[#C71585] text-white font-black px-6 py-2.5 rounded-full text-sm transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none border-2 border-black tracking-wide uppercase"
                  >
                    Join Community
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              data-mobile-toggle="true"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-village-dark/50 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-[#FF9933] shadow-lg absolute w-full left-0 border-t border-white/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {user && navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 flex items-center gap-3 active:bg-white/20 transition-colors"
                >
                  {link.icon}
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-white text-[#FF9933] font-bold shadow-md' 
                        : 'text-white hover:bg-white/10 active:bg-white/20'
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              )
            ))}
            {user && (
              <>
                <div className="h-px bg-white/20 my-2 mx-4"></div>
                <NavLink
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white shrink-0">
                    {user.avatar ? <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" /> : <div className="bg-white text-orange-500 w-full h-full flex items-center justify-center text-xs font-bold">{user.name?.[0]}</div>}
                  </div>
                  My Profile
                </NavLink>
                <button
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-red-500/20 flex items-center gap-3 text-red-100 hover:text-white"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
            {!user && (
              <div className="space-y-4 px-2 pt-2">
                 <Link
                   to="/login"
                   onClick={() => setIsOpen(false)}
                   className="block text-center text-white font-black text-lg py-3 hover:bg-white/10 rounded-xl border border-white/20"
                 >
                   LOGIN
                 </Link>
                 <Link
                   to="/login"
                   onClick={() => setIsOpen(false)}
                   className="block text-center bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white font-black px-6 py-3 rounded-xl text-lg transition-all shadow-lg active:scale-95 border-2 border-white/20 tracking-wide uppercase"
                 >
                   JOIN COMMUNITY
                 </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






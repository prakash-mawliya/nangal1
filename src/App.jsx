import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import About from './pages/About';
import Admin from './pages/Admin';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';

const AppContent = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isAuthPage = location.pathname === '/login';
  const isHomePage = location.pathname === '/';

  return (
    <div className='min-h-screen flex flex-col font-sans text-gray-800 relative isolation-auto'>
      {!isHomePage && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-60 pointer-events-none"
        >
          <source src="https://v.ftcdn.net/16/32/61/25/700_F_1632612535_SRyevJf3jmVdIiMTkLSFR3Bua5aIhoty_ST.mp4" type="video/mp4" />
        </video>
      )}

      {!isAuthPage && <Navbar />}
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/news' element={<News />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ContentProvider>
          <AppContent />
        </ContentProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;






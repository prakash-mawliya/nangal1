import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import About from './pages/About';
import Admin from './pages/Admin';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';

const AppContent = () => {
  const location = useLocation();
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
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      {!isAuthPage && (
        <footer className='bg-green-900 text-village-light py-6 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} Built by <a href="https://prakash-mawliya.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-village-secondary transition-colors underline decoration-village-secondary/50">Prakash</a> | Village Community Platform</p>
        </footer>
      )}
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






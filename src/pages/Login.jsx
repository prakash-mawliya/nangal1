import { motion } from 'framer-motion';
import { ArrowRight, Disc, Github, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            if (!name.trim()) {
                alert("Please enter your name");
                setLoading(false);
                return;
            }
            if (!phoneNumber.trim()) {
                alert("Please enter your phone number");
                setLoading(false);
                return;
            }

            const role = name.trim().toLowerCase() === 'admin' ? 'admin' : 'user';
            
            // Login with phone method
            login('phone', { name, phoneNumber, role });
            
            navigate(from, { replace: true });
            setLoading(false);
        }, 1500);
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            login('google', { 
                name: 'Prakash User', 
                email: 'prakash@example.com', 
                role: 'user',
                avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
            });
            navigate(from, { replace: true });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#FFF8F0] font-sans p-4 sm:p-8">
            <div className="w-full max-w-[min(90vw,1100px)] bg-white rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black flex flex-col md:flex-row relative">
                
                {/* Top/Left Section - Yellow Header */}
                <div className="w-full md:w-1/2 bg-[#FFD700] h-[450px] md:h-[650px] relative overflow-hidden flex flex-col items-center pt-16 md:justify-center md:pt-0 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
                     
                     {/* Decorative Circles matching screenshot */}
                     <div className="absolute top-[-40px] left-[-40px] w-40 h-40 rounded-full border-[3px] border-black bg-[#FF9999] z-0"></div>
                     
                     {/* Blue circle positioned to be cut off by the white section below in mobile view */}
                     <div className="absolute bottom-[-50px] right-[-30px] w-48 h-48 rounded-full border-[3px] border-black bg-[#99CCFF] z-0"></div>

                     {/* Small green square decoration */}
                     <div className="absolute bottom-10 left-10 w-12 h-16 bg-[#99FF99] border-[3px] border-black transform -rotate-12 z-0 hidden md:block"></div>

                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        {/* Logo Card */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-24 h-24 bg-white border-[3px] border-black rounded-[1.5rem] flex items-center justify-center mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform -rotate-3"
                        >
                            {/* Custom Map Logo based on Nangal outline - Revised */}
                            <svg viewBox="0 0 100 120" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Map Outline */}
                                <path 
                                    d="M35 15 
                                       Q 55 10, 75 15
                                       Q 85 30, 75 50
                                       L 65 85
                                       Q 55 105, 45 100
                                       Q 30 90, 35 60
                                       Q 30 40, 35 15 Z" 
                                    fill="#FFD700" 
                                    stroke="black" 
                                    strokeWidth="3" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                                {/* Location Pin / Dot */}
                                <circle cx="50" cy="50" r="4" fill="black" />
                                <path d="M50 50 L 50 35" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </motion.div>
                        
                        <h1 className="text-5xl font-[900] text-black tracking-tight mb-1 uppercase leading-[0.9]">
                            Welcome
                        </h1>
                        <h1 className="text-5xl font-[900] text-white tracking-tight mb-4 uppercase leading-[0.9] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]" style={{ textShadow: '3px 3px 0px #000' }}>
                            Back
                        </h1>
                        
                        <p className="text-black font-bold text-base max-w-[200px] leading-tight">
                            Your daily village updates are waiting for you.
                        </p>
                    </div>
                </div>

                {/* Bottom/Right Section - Login Form */}
                <div className="w-full md:w-1/2 bg-white px-6 py-8 md:p-12 lg:p-16 flex flex-col relative z-20 -mt-6 rounded-t-[2.5rem] md:rounded-none md:mt-0 border-t-[3px] md:border-t-0 border-black md:border-none">
                    <div className="w-full max-w-sm mx-auto">
                        <div className="mb-6">
                            <h2 className="text-3xl font-[900] text-black uppercase mb-1 tracking-tight">Login</h2>
                            <p className="text-gray-500 font-bold text-xs">Enter your credentials to access your account</p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="space-y-3 mb-6">
                            <button 
                                onClick={handleGoogleLogin} 
                                className="w-full flex items-center justify-center gap-3 bg-white border-[3px] border-black h-12 rounded-xl font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all group"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <span className="tracking-tight text-sm">Sign in with Google</span>
                            </button>
                            
                            <button 
                                disabled
                                className="w-full flex items-center justify-center gap-3 bg-[#24292e] border-[3px] border-black h-12 rounded-xl font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-100 hover:opacity-90 cursor-not-allowed group"
                            >
                                <Github className="w-5 h-5" />
                                <span className="tracking-tight text-sm">Sign in with GitHub</span>
                            </button>
                            
                            <button 
                                disabled
                                className="w-full flex items-center justify-center gap-3 bg-[#5865F2] border-[3px] border-black h-12 rounded-xl font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-100 hover:opacity-90 cursor-not-allowed group"
                            >
                                <Disc className="w-5 h-5" />
                                <span className="tracking-tight text-sm">Sign in with Discord</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center mb-6">
                            <div className="absolute w-full border-t-[2px] border-gray-200"></div>
                            <span className="bg-white px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest relative z-10">
                                OR CONTINUE WITH
                            </span>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-black text-black uppercase tracking-wider block">Your Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                    </div>
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 border-[2px] border-gray-200 rounded-xl text-black font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-0 transition-all text-sm"
                                        placeholder="prakash..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-[11px] font-black text-black uppercase tracking-wider block">Phone Number</label>
                                    <a href="#" className="text-[10px] font-bold text-[#5865F2] hover:underline">Forgot Password?</a>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                                    </div>
                                    <input 
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 border-[2px] border-gray-200 rounded-xl text-black font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-0 transition-all text-sm"
                                        placeholder="●●●●●●●●"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-[#FFCC00] border-[3px] border-black h-12 rounded-xl font-black text-black text-base uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4 group"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-[3px] border-black/20 border-t-black rounded-full animate-spin"></div>
                                ) : (
                                    <>SIGN IN <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;






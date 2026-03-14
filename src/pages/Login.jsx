import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [method, setMethod] = useState('phone'); // 'phone' or 'google'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Input, 2: OTP

  const handleLogin = (e) => {
    e.preventDefault();
    if (method === 'phone' && step === 1) {
      if (!name.trim()) {
        alert("Please enter your name");
        return;
      }
      // Simulate sending OTP
      setStep(2);
      return;
    }
    
    // Final login simulation
    login('phone', { name: name, phoneNumber });
    navigate(from, { replace: true });
  };

  const handleGoogleLogin = () => {
    login('google', { name: 'Google User', email: 'user@gmail.com' });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-village-DEFAULT/90 p-6 text-center text-white backdrop-blur-sm">
          <h2 className="text-3xl font-bold font-serif">Welcome Back</h2>
          <p className="opacity-90 mt-2">Join the digital village square</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => { setMethod('phone'); setStep(1); }}
              className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${method === 'phone' ? 'bg-village-secondary text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Phone
            </button>
            <button 
              onClick={() => setMethod('google')}
              className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${method === 'google' ? 'bg-village-secondary text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Google
            </button>
          </div>

          {method === 'phone' && (
            <form onSubmit={handleLogin} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-village-DEFAULT focus:border-transparent outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-village-DEFAULT focus:border-transparent outline-none"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                   <input 
                      type="text" 
                      required
                      placeholder="1234"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-village-DEFAULT focus:border-transparent outline-none text-center tracking-widest text-lg"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <p className="text-xs text-center mt-2 text-gray-500">OTP sent to {phoneNumber}</p>
                </motion.div>
              )}

              <button 
                type="submit" 
                className="w-full bg-village-DEFAULT text-white py-3 rounded-xl font-bold hover:bg-village-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
              >
                {step === 1 ? 'Send OTP' : 'Verify & Login'}
              </button>
            </form>
          )}

          {method === 'google' && (
             <div className="text-center space-y-4">
               <p className="text-gray-600">Securely login with your Google account</p>
               <button 
                 onClick={handleGoogleLogin}
                 className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-gray-700"
               >
                 <Mail className="text-red-500" /> Use Google Account
               </button>
             </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 flex flex-col gap-2">
          <p>By logging in, you agree to our Community Guidelines.</p>
          <button 
            type="button"
            onClick={() => { login('admin', { name: 'Village Sarpanch', role: 'admin' }); navigate(from, { replace: true }); }}
            className="text-xs text-village-DEFAULT underline hover:text-village-dark"
          >
            Or, Login as Admin (Demo)
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;






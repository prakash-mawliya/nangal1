import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, MessageCircle, Newspaper, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import VillageInfo from '../components/home/VillageInfo';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div className="">
        <Hero />
        <VillageInfo />
        {/* Other sections like Recent News could go here */}
      </div>
    );
  }

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 
        HERO SECTION 
        Inspired by MoodMate's "Your Mood. Your Music." -> "Your Village. Your Voice."
      */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-900/30 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-7000"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
           
           {/* Text Content */}
           <div className="flex-1 text-center md:text-left space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-green-400"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>The Future of Rural Living</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]"
              >
                YOUR VILLAGE.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">YOUR VOICE.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0"
              >
                Connect, govern, and grow. Nangal aligns tradition with technology to create a digital ecosystem for every villager.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link to="/login" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-green-400 transition-colors flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/about" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                  Learn More
                </Link>
              </motion.div>
           </div>

           {/* Hero Visual */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="flex-1 relative"
           >
              <div className="relative z-10 w-full aspect-square max-w-[500px] border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out">
                 {/* Mock UI Interface */}
                 <div className="h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <div className="text-xs font-mono text-gray-500">ADMIN_DASHBOARD_V2.0</div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                       <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                          <BarChart2 className="text-green-500 mb-2" />
                          <div className="text-2xl font-bold">1,240</div>
                          <div className="text-xs text-gray-400">Active Villagers</div>
                       </div>
                       <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                          <MessageCircle className="text-orange-500 mb-2" />
                          <div className="text-2xl font-bold">85</div>
                          <div className="text-xs text-gray-400">Daily Topics</div>
                       </div>
                       <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 col-span-2">
                          <div className="flex items-center gap-2 mb-2">
                             <Newspaper className="text-blue-500" size={16} />
                             <span className="text-xs font-bold text-blue-400">LATEST NEWS</span>
                          </div>
                          <div className="h-2 bg-blue-500/20 rounded-full w-3/4 mb-2"></div>
                          <div className="h-2 bg-blue-500/20 rounded-full w-1/2"></div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center font-bold text-black">
                    <Shield size={20} />
                 </div>
                 <div>
                    <div className="text-xs text-gray-400 font-mono">SYSTEM STATUS</div>
                    <div className="font-bold text-green-400">SECURE & ONLINE</div>
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* 
        FEATURES SECTION 
        Inspired by MoodMate's "How It Works" 
      */}
      <section className="py-32 px-6 relative">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20">
               <h2 className="text-sm font-mono text-green-400 mb-2">/ FEATURES</h2>
               <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Everything you need<br/>to stay connected.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: 'Digital Panchayat', icon: <Shield size={32} />, desc: 'Transparent governance with real-time updates and digital record keeping.' },
                 { title: 'Community Chat', icon: <MessageCircle size={32} />, desc: 'Connect with neighbors instantly. Discuss, debate, and decide together.' },
                 { title: 'News & Polls', icon: <Newspaper size={32} />, desc: 'Stay informed about village events and vote on important community matters.' },
                 { title: 'Smart Profile', icon: <Users size={32} />, desc: 'Your digital identity in the village ecosystem. Secure and customizable.' }
               ].map((feature, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/10 transition-all group"
                 >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-green-400 group-hover:border-green-500/50 transition-colors">
                       {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 
        BIG TEXT / TECH SECTION 
        Inspired by "Under the Hood/Science"
      */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                  BUILT FOR<br/>
                  <span className="text-green-600">IMPACT.</span>
               </h2>
               <p className="text-xl font-medium text-gray-600 max-w-md">
                 We don't just build websites; we build bridges. Nangal's platform combines modern web technologies with rural needs to create a seamless experience.
               </p>
               
               <div className="mt-12 space-y-6">
                  {[
                    { label: 'Real-time Sync', val: 'Instant' },
                    { label: 'Community Members', val: '2,000+' },
                    { label: 'Uptime Guarantee', val: '99.9%' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-4">
                       <span className="font-mono text-sm uppercase text-gray-500">{stat.label}</span>
                       <span className="font-black text-2xl">{stat.val}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 mix-blend-multiply opacity-50"></div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-3xl shadow-xl">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Zap size={24} fill="currentColor" />
                         </div>
                         <div>
                            <div className="font-black text-lg">POWERING PROGRESS</div>
                            <div className="text-sm text-gray-500">Digital infrastructure for the next generation.</div>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 
        CTA SECTION 
        "Ready to feel it?" -> "Ready to join?"
      */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#111]"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
               READY TO BE PART<br/>OF THE <span className="text-[#FF9933]">CHANGE?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
               Join thousands of villagers who are already connected. No paperwork required.
            </p>
            <Link to="/login" className="inline-block px-12 py-5 bg-[#FF9933] text-white font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,153,51,0.5)]">
               JOIN NANGAL NOW
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;






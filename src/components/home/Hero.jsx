import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] sm:min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 -z-10" aria-hidden="true"></div>
      <iframe
        className="absolute top-1/2 left-1/2 w-[200%] sm:w-[260%] md:w-[320%] h-[220%] sm:h-[280%] md:h-[320%] -translate-x-1/2 -translate-y-1/2 -z-20 opacity-60 pointer-events-none"
        src="https://www.youtube.com/embed/c40s85wyi2k?autoplay=1&mute=1&controls=0&loop=1&playlist=c40s85wyi2k&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
        allow="autoplay; encrypted-media"
        loading="lazy"
        title="Background Video"
      ></iframe>
      {/* Content Overlay */}
      <div className="relative z-10 space-y-6 px-4 sm:px-8 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fluid-h1 font-bold font-serif mb-4 drop-shadow-lg"
        >
          Welcome to <span className="text-green-400">Nangal</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md text-gray-100"
        >
          The pride of Danta Ramgarh, Sikar - united in heritage and progress.
        </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 pt-4"
          >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#info" 
            className="inline-block px-10 py-4 bg-green-600/60 backdrop-blur-md text-white font-semibold rounded-full hover:bg-green-600/80 transition duration-300 shadow-lg border border-green-400/30"
          >
            Explore Our Village
          </motion.a>
        </motion.div>
      </div>
      
       {/* Scroll Indicator */}
       <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-10 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-white/10">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;






import { Globe, Heart, Mail, Phone, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5]/70 via-[#FFF5EE]/70 to-[#E0FFFF]/70 backdrop-blur-md pt-20 pb-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF69B4] drop-shadow-sm pb-2">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging tradition with technology. We are building the digital heart of <span className="text-[#FF1493] font-bold">Nangal-Gram</span>.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-xl border border-white/50 text-center space-y-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#FFCC00]"></div>
            <div className="inline-flex p-4 bg-white/60 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-12 h-12 text-[#FF1493]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nangal-Gram is a digital initiative designed to empower our village community in Danta Ramgarh. We provide a centralized platform for communication, information sharing, and collective decision-making, believing that <strong className="text-gray-900">technology can strengthen the bonds of our rural heritage</strong> while opening the door to new opportunities.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
                icon={<Users className="w-8 h-8 text-[#FF1493]" />}
                title="Community First"
                description="Built by Prakash to ensure every villager is connected, informed, and heard."
            />
            <FeatureCard 
                icon={<Zap className="w-8 h-8 text-[#FFCC00]" />}
                title="Real-Time Updates"
                description="Digital notice board, instant news, and a live chat ensure you never miss a beat of village life."
            />
             <FeatureCard 
                icon={<Shield className="w-8 h-8 text-[#FF69B4]" />}
                title="Democratic Voice"
                description="A fair polling system that lets every member have a say in the decisions that shape our future."
            />
        </div>

        {/* Creator & Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FF69B4]/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 flex flex-col justify-center items-start hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Who Built This?</h3>
                <p className="text-gray-700 font-medium mb-6">
                   Developed with <Heart className="inline w-4 h-4 text-red-500 fill-current mx-1"/> by <span className="font-bold text-[#FF1493]">Prakash</span> with support from the Abhyapura Gram Panchayat.
                </p>
            </div>

            <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 hover:shadow-lg transition-all flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Get in Touch</h3>
                <div className="space-y-4">
                    <a href="mailto:prakash2e64@gmail.com" className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors group cursor-pointer shadow-sm">
                        <div className="bg-[#FF1493]/10 p-3 rounded-full group-hover:bg-[#FF1493] transition-colors">
                            <Mail className="w-6 h-6 text-[#FF1493] group-hover:text-white" />
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-[#FF1493]">prakash2e64@gmail.com</span>
                    </a>
                    <a href="tel:+919521302398" className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors group cursor-pointer shadow-sm">
                        <div className="bg-[#FFCC00]/20 p-3 rounded-full group-hover:bg-[#FFCC00] transition-colors">
                            <Phone className="w-6 h-6 text-[#B8860B] group-hover:text-black" />
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-gray-900">+91 9521302398</span>
                    </a>
                    <a href="https://prakash-mawliya.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors group cursor-pointer shadow-sm">
                        <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                            <div className="w-6 h-6 bg-[#003366] text-white rounded-full flex items-center justify-center font-black text-xs tracking-tighter border border-[#003366]">
                                PM
                            </div>
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-[#003366]">Prakash Mawliya</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white/40 backdrop-blur-lg p-8 rounded-[2rem] shadow-lg border border-white/60 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
        <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF1493] transition-colors">{title}</h3>
        <p className="text-gray-600 font-medium leading-relaxed">{description}</p>
    </div>
);

export default About;






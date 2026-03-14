import { Globe, Heart, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20">
        <div className="bg-village-DEFAULT/90 p-8 text-center text-white backdrop-blur-sm">
          <h1 className="text-4xl font-bold font-serif mb-2">About Nangal-Gram</h1>
          <p className="text-lg opacity-90">Bridging Tradition with Technology in Sikar</p>
        </div>
        
        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-md">
              <Globe className="text-village-secondary" /> Our Mission
            </h2>
            <p className="text-gray-200 font-medium leading-relaxed bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              Nangal-Gram is a digital initiative designed to empower our village community in Danta Ramgarh by providing a centralized platform for communication, information sharing, and collective decision-making. We believe that technology can strengthen the bonds of our rural heritage while opening doors to new opportunities.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-3">Who Built This?</h2>
              <p className="text-gray-200 font-medium">
                This platform was developed by the <strong>Nangal Youth Tech Club</strong> with the support of the Abhyapura Gram Panchayat. Our goal is to ensure every villager stay connected, informed, and heard.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-3">Key Features</h2>
              <ul className="space-y-2 text-gray-200 font-medium list-disc list-inside">
                <li className="hover:text-village-secondary transition-colors cursor-pointer">Real-time Community Chat</li>
                <li className="hover:text-village-secondary transition-colors cursor-pointer">Digital Notice Board & News</li>
                <li className="hover:text-village-secondary transition-colors cursor-pointer">Democratic Polling System</li>
                <li className="hover:text-village-secondary transition-colors cursor-pointer">Village Resource Directory</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
            <h2 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-village-secondary transition-colors drop-shadow-md">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center text-white font-bold">
              <div className="flex items-center gap-2 hover:text-village-secondary transition-colors">
                <Mail className="text-village-secondary" />
                <span>prakash2e64@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-village-secondary transition-colors">
                <Phone className="text-village-secondary" />
                <span>+91 9521302398</span>
              </div>
              <a href="https://prakash-mawliya.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-village-secondary transition-colors">
                <Globe className="text-village-secondary" />
                <span>Visit Portfolio</span>
              </a>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                Made with <Heart size={14} className="text-red-500 fill-current" /> by the Community, for the Community.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;






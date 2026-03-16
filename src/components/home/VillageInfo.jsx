import { AnimatePresence, motion } from 'framer-motion';
import { Baby, BookOpen, Building, Bus, DollarSign, HeartPulse, MapPin, Train, Users, X } from 'lucide-react';
import { useState } from 'react';

const StatRow = ({ label, total, male, female, color = "bg-blue-500" }) => (
  <div className="mb-4">
    <div className="flex justify-between items-end mb-1">
      <span className="font-semibold text-gray-300">{label}</span>
      <span className="text-right font-bold text-lg text-white">{total}</span>
    </div>
    <div className="flex h-2 mb-1 rounded-full overflow-hidden bg-white/10">
      <div style={{ width: `${(male / total) * 100}%` }} className={`h-full ${color} opacity-80`}></div>
      <div style={{ width: `${(female / total) * 100}%` }} className={`h-full bg-pink-500 opacity-80`}></div>
    </div>
    <div className="flex justify-between text-xs text-gray-400">
      <span className="flex items-center gap-1"><span className={`w-2 h-2 rounded-full ${color} opacity-80`}></span> Male: {male}</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500 opacity-80"></span> Female: {female}</span>
    </div>
  </div>
);

const ConnectivityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-black/80 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="bg-green-600/20 p-6 text-white flex justify-between items-center shrink-0 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold font-serif">Services & Connectivity</h3>
                <p className="text-white/80 text-sm">Transport, Banking, Health & Nearby Areas</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {/* Transport Section */}
              <div className="mb-8">
                <h4 className="flex items-center gap-2 text-xl font-bold text-green-300 mb-4 border-b border-white/10 pb-2">
                  <Bus className="text-yellow-400" /> Transport Options
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/20">
                    <h5 className="font-bold text-green-200 mb-2">Private Bus Service</h5>
                    <span className="bg-green-500/20 text-green-200 text-xs px-2 py-1 rounded-full font-bold">AVAILABLE</span>
                    <p className="text-sm text-gray-400 mt-2">Regular service available directly from the village.</p>
                  </div>
                  <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/20">
                    <h5 className="font-bold text-orange-200 mb-2">Shared Auto (Tempo)</h5>
                    <span className="bg-orange-500/20 text-orange-200 text-xs px-2 py-1 rounded-full font-bold">AVAILABLE</span>
                    <p className="text-sm text-gray-400 mt-2">Main mode of local transport within the tehsil.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                    <h5 className="font-bold text-gray-200 mb-2 flex items-center gap-2"><Train size={16}/> Railway Station</h5>
                    <span className="bg-red-500/20 text-red-200 text-xs px-2 py-1 rounded-full font-bold">NO</span>
                    <p className="text-sm text-gray-400 mt-2">Nearest station available within <span className="font-bold text-gray-200">5-10 km</span>.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                     <h5 className="font-bold text-gray-200 mb-2">Public Bus Service</h5>
                     <span className="bg-red-500/20 text-red-200 text-xs px-2 py-1 rounded-full font-bold">NO</span>
                     <p className="text-sm text-gray-400 mt-2">Available within <span className="font-bold text-gray-200">5-10 km</span>.</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400 bg-blue-900/20 p-3 rounded border border-blue-500/20">
                  <span className="font-bold text-blue-300">Distance to Sikar:</span> ~38 km (1 hr travel time via road)
                </p>
              </div>

              {/* Facilities Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                   <h4 className="flex items-center gap-2 text-lg font-bold text-green-300 mb-4 border-b border-white/10 pb-2">
                     <DollarSign className="text-yellow-400" /> Banking & Postal
                   </h4>
                   <ul className="space-y-3">
                     <li className="flex justify-between items-center bg-white/10 p-3 rounded border border-white/5">
                       <span className="text-gray-300">Bank / ATM</span>
                       <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">5-10 KM Away</span>
                     </li>
                     <li className="flex justify-between items-center bg-white/10 p-3 rounded border border-white/5">
                       <span className="text-gray-300">Post Office</span>
                       <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">5-10 KM Away</span>
                     </li>
                   </ul>
                </div>
                <div>
                   <h4 className="flex items-center gap-2 text-lg font-bold text-green-300 mb-4 border-b border-white/10 pb-2">
                     <HeartPulse className="text-yellow-400" /> Health Centers
                   </h4>
                   <ul className="space-y-3">
                     <li className="flex justify-between items-center bg-white/10 p-3 rounded border border-white/5">
                       <span className="text-gray-300">Sub-Centre (SC)</span>
                       <span className="text-xs font-bold text-orange-400 bg-orange-900/20 px-2 py-1 rounded">2-5 KM Away</span>
                     </li>
                     <li className="flex justify-between items-center bg-white/10 p-3 rounded border border-white/5">
                       <span className="text-gray-300">PHC / CHC</span>
                       <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">5-10 KM Away</span>
                     </li>
                   </ul>
                </div>
              </div>

              {/* Nearby Villages */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-green-300 mb-4 border-b border-white/10 pb-2">
                  <MapPin className="text-yellow-400" /> Nearby Villages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Chak Badiya', 'Prithvipura', 'Bhagatpura', 'Josiyon Ki Dhani', 'Chak Turkiya', 'Abhaipura', 'Sundarpura', 'Chak Sunderpura', 'Palsana', 'Vijay Nagar', 'Badhala Ki Dhani', 'Chetandas Ki Dhani'].map((village, index) => (
                    <span key={index} className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:bg-green-600 hover:text-white transition-colors cursor-default">
                      {village}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PopulationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-black/80 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            <div className="bg-green-600/20 p-6 text-white flex justify-between items-center border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold font-serif">Census 2011: Nangal (081774)</h3>
                <p className="text-white/80 text-sm">Detailed Demographic Breakdown</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-900/30 p-4 rounded-xl border border-orange-500/20 text-center hover:bg-orange-900/40 transition-colors">
                  <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <Users size={24} className="text-orange-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">2,220</div>
                  <div className="text-sm text-gray-400 font-medium mb-4">Total Population</div>
                  
                  <div className="bg-white/10 rounded-lg p-2 text-sm">
                    <div className="flex justify-between items-center mb-1 border-b border-white/10 pb-1">
                      <span className="flex items-center gap-1 text-gray-400">👨 Male</span>
                      <span className="font-bold text-gray-200">1,191</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-gray-400">👩 Female</span>
                      <span className="font-bold text-gray-200">1,029</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/20 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                    <Building size={24} className="text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">308</div>
                  <div className="text-sm text-gray-400 font-medium">Households</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/40 p-4 rounded-xl border border-white/10">
                  <h4 className="font-bold text-gray-200 mb-4 flex items-center gap-2"><BookOpen size={18} className="text-green-300"/> Literacy & Education</h4>
                  <StatRow label="Literate Population" total={1333} male={846} female={487} color="bg-green-500" />
                  <StatRow label="Illiterate Population" total={887} male={345} female={542} color="bg-red-500" />
                </div>

                <div className="bg-gray-900/40 p-4 rounded-xl border border-white/10">
                  <h4 className="font-bold text-gray-200 mb-4 flex items-center gap-2"><Baby size={18} className="text-green-300"/> Demographics</h4>
                  <StatRow label="Children (0-6 yrs)" total={327} male={187} female={140} color="bg-yellow-500" />
                  <StatRow label="Scheduled Castes (SC)" total={433} male={247} female={186} color="bg-purple-500" />
                  <StatRow label="Scheduled Tribes (ST)" total={39} male={23} female={16} color="bg-indigo-500" />
                </div>
              </div>
              
              <div className="mt-6 text-center text-xs text-gray-500">
                Source: VillageInfo.in (Census 2011 Data)
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const InfoCard = ({ icon: Icon, title, value, description, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, translateY: -10 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    onClick={onClick}
    className={`bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-village-accent/20 border-t-4 border-village-accent cursor-pointer group relative overflow-hidden ${onClick ? 'active:scale-95' : ''}`}
  >
    {onClick && <div className="absolute inset-0 bg-village-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />}
    <div className='flex items-center space-x-4 mb-4 relative z-10'>
      <div className='bg-village-light p-3 rounded-full group-hover:bg-village-DEFAULT transition-colors duration-300'>
        <Icon className='text-village-DEFAULT group-hover:text-white transition-colors duration-300' size={32} />
      </div>
      <div>
        <h3 className='text-xl font-bold text-gray-900 group-hover:text-village-DEFAULT transition-colors'>{title}</h3>
        <p className='text-3xl font-extrabold text-village-secondary'>{value}</p>
      </div>
    </div>
    <p className='text-gray-800 font-medium relative z-10'>{description}</p>
    {onClick && (
       <div className="mt-4 text-xs font-bold text-village-DEFAULT flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          Click for details →
       </div>
    )}
  </motion.div>
);

const VillageInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [connectivityModalOpen, setConnectivityModalOpen] = useState(false);

  return (
    <section id='info' className='py-20 relative overflow-hidden'>
      {/* Background Video for VillageInfo Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60 pointer-events-none"
      >
        <source src="https://v.ftcdn.net/16/32/61/25/700_F_1632612535_SRyevJf3jmVdIiMTkLSFR3Bua5aIhoty_ST.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 via-gray-900/40 to-transparent pointer-events-none z-0"></div>

      <PopulationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ConnectivityModal isOpen={connectivityModalOpen} onClose={() => setConnectivityModalOpen(false)} />
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        <div className='text-center mb-16 bg-black/40 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border border-white/20 shadow-lg'>
          <h2 className='text-4xl font-bold text-white mb-4'>Nangal at a Glance</h2>
          <p className='text-xl text-gray-200 font-medium max-w-2xl mx-auto'>
            Situated in Danta Ramgarh Tehsil, a vibrant community connected by tradition.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20'>
          <InfoCard 
            icon={Users} 
            title='Population' 
            value='2,220' 
            description='Home to 308 households with a balanced community of 1,191 males and 1,029 females.'
            onClick={() => setModalOpen(true)}
          />
          <InfoCard 
            icon={Building} 
            title='Connectivity' 
            value='Active' 
            description='Connected via private bus services and shared autos. Major facilities within 5-10 km radius.'
            onClick={() => setConnectivityModalOpen(true)}
          />
          <InfoCard 
            icon={MapPin} 
            title='Location' 
            value='Sikar' 
            description='Part of Danta Ramgarh Tehsil, located 38km from Sikar district headquarters.' 
            onClick={() => window.open('https://www.google.com/maps/place/Nangal,+Rajasthan+332402', '_blank')}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl'
          >
            <h3 className='text-3xl font-bold text-village-dark mb-6 drop-shadow-sm'>About Our Village</h3>
            <p className='text-gray-900 font-medium leading-relaxed mb-4'>
              Nangal (Code: 081774) is a prominent village in the Danta Ramgarh region of Rajasthan. Governed by the Abhyapura Gram Panchayat, it spans over 700 hectares of land.
            </p>
            <p className='text-gray-900 font-medium leading-relaxed mb-4'>
              With a literacy rate of over 60%, our community values education and growth. The village thrives on local agriculture and maintains strong connectivity with nearby towns like Sikar through a network of roads and transport services.
            </p>
            <div className='grid grid-cols-2 gap-4 mt-4 text-sm font-bold text-gray-800 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30'>
                <div>PIN Code: <span className='text-village-dark'>332402</span></div>
                <div>Tehsil: <span className='text-village-dark'>Danta Ramgarh</span></div>
                <div>District: <span className='text-village-dark'>Sikar</span></div>
                <div>Gram Panchayat: <span className='text-village-dark'>Abhyapura</span></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='rounded-2xl overflow-hidden shadow-2xl h-80 relative group border-4 border-white cursor-pointer ring-4 hover:ring-village-accent/50'
          >
             {/* Map Placeholder or Image */}
             <div className='absolute inset-0 bg-gray-300 w-full h-full flex items-center justify-center text-gray-500'>
               {/* Embed Google Maps for Nangal, Sikar */}
               <iframe 
                 src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14164.05389445173!2d75.14!3d27.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c417a555020!2sNangal%2C%20Rajasthan%20332402!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin' 
                 width='100%' 
                 height='100%' 
                 allowFullScreen='' 
                 loading='lazy'
                 title='Nangal Village Map'
                 className='absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500'
               ></iframe>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VillageInfo;






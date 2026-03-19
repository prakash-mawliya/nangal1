import { BarChart2, Check, Edit2, RefreshCcw, UserCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name || '');

  const handleUpdateName = () => {
    if (nameInput.trim()) {
      updateProfile({ name: nameInput });
      setIsEditingName(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-center bg-[#FFFBF5]">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Login Required</h2>
          <p className="text-gray-500">Please login to access your profile settings.</p>
        </div>
      </div>
    );
  }

  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <div className="min-h-screen bg-[#FFFBF5] relative overflow-hidden font-sans text-gray-800 isolate">
      {/* Background Gradients/Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px] -z-10 opacity-60 translate-x-[-100px] translate-y-[-100px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] -z-10 opacity-50 translate-x-[100px] translate-y-[100px]"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto safe-x py-12 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
              PROFILE <span className="text-[#8B5CF6]">SETTINGS</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium max-w-lg">
              Manage your aesthetics, security, and personal details.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* User Profile Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-purple-500/5 text-center border-4 border-white relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400"></div>
               
               <div className="relative inline-block mb-6 mt-2">
                 <div className="w-40 h-40 rounded-full bg-[#65A30D] flex items-center justify-center text-white text-7xl font-medium shadow-inner mx-auto overflow-hidden ring-4 ring-white shadow-lg transform transition-transform group-hover:scale-105 duration-300">
                    {user.avatar ? <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" /> : initial}
                 </div>
                 <button className="absolute bottom-2 right-2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors border border-gray-100">
                    <Edit2 size={16} />
                 </button>
               </div>
               
               <h2 className="text-3xl font-black text-gray-900 mb-1 uppercase tracking-tight">{user.name || 'USER'}</h2>
               <p className="text-gray-400 font-medium mb-8 text-sm">{user.email || 'No email linked'}</p>
               
            </div>

            {/* Vibe Dashboard Button */}
            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-[2rem] p-6 shadow-xl shadow-indigo-500/30 cursor-pointer transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-between group overflow-hidden relative">
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               
               <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <BarChart2 className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                     <h3 className="font-black text-lg uppercase leading-none mb-1 tracking-wide">VIBE DASHBOARD</h3>
                     <p className="text-white/80 text-xs font-bold tracking-wider uppercase">Check analytics</p>
                  </div>
               </div>
               <div className="bg-white/20 rounded-full p-2 group-hover:translate-x-1 transition-transform relative z-10 backdrop-blur-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Details Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-orange-500/5 border-4 border-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
               <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="bg-[#FEF08A] p-3.5 rounded-2xl text-yellow-700 shadow-sm ring-4 ring-yellow-50">
                    <UserCircle size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">PERSONAL DETAILS</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">DISPLAY NAME</label>
                    {isEditingName ? (
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="bg-white rounded-2xl px-5 py-4 font-bold text-gray-800 border-2 border-purple-500 shadow-lg w-full outline-none h-16 text-lg transition-all focus:ring-4 ring-purple-500/10"
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && handleUpdateName()}
                        />
                         <button onClick={handleUpdateName} className="bg-purple-500 hover:bg-purple-600 text-white w-16 h-16 rounded-2xl transition-all shadow-lg shadow-purple-500/30 active:scale-95 flex items-center justify-center shrink-0">
                           <Check size={24} strokeWidth={3} />
                         </button>
                         <button onClick={() => { setIsEditingName(false); setNameInput(user.name); }} className="bg-gray-100 hover:bg-gray-200 text-gray-500 w-16 h-16 rounded-2xl transition-all active:scale-95 flex items-center justify-center shrink-0">
                           <X size={24} strokeWidth={3} />
                         </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => { setIsEditingName(true); setNameInput(user.name); }}
                        className="bg-gray-50 rounded-2xl px-5 py-4 font-bold text-gray-800 border-2 border-transparent hover:border-gray-200 hover:bg-white transition-all shadow-sm flex justify-between items-center group cursor-pointer h-16"
                      >
                         <span className="text-lg">{user.name}</span>
                         <Edit2 size={18} className="text-gray-300 group-hover:text-purple-500 transition-colors" />
                      </div>
                    )}
                 </div>
                 <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">EMAIL (MANAGED)</label>
                    <div className="bg-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-500 cursor-not-allowed border-2 border-transparent h-16 flex items-center shadow-inner">
                       <span className="text-lg truncate w-full">{user.email || user.phoneNumber || 'Not provided'}</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Avatar Style Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-green-500/5 border-4 border-white hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
               <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="bg-[#BBF7D0] p-3.5 rounded-2xl text-green-700 shadow-sm ring-4 ring-green-50">
                    <RefreshCcw size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">AVATAR STYLE</h2>
               </div>

               <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  <button 
                    onClick={() => updateProfile({ avatar: null })}
                    className={`px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap border-2 group flex items-center gap-2 ${!user.avatar ? 'bg-white border-green-500 text-green-700 shadow-md ring-4 ring-green-50' : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-colors ${!user.avatar ? 'bg-green-500' : 'bg-gray-300 group-hover:bg-gray-400'}`}></span> Initials
                  </button>
                  <button className="opacity-50 cursor-not-allowed bg-gray-50 border-2 border-transparent px-8 py-4 rounded-2xl font-bold text-gray-400 whitespace-nowrap flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span> Picture (Soon)
                  </button>
                  <button 
                    onClick={() => updateProfile({ avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}` })}
                    className={`px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap border-2 group flex items-center gap-2 ${user.avatar && user.avatar.includes('dicebear') ? 'bg-white border-purple-500 text-purple-700 shadow-md ring-4 ring-purple-50' : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                  >
                     <span className={`w-2 h-2 rounded-full transition-colors ${user.avatar && user.avatar.includes('dicebear') ? 'bg-purple-500' : 'bg-gray-300 group-hover:bg-gray-400'}`}></span> Fun Emoji
                  </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
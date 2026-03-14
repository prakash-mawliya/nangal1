import { format } from 'date-fns';
import { CheckCircle, ShieldCheck, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';

const Admin = () => {
  const { user, loading } = useAuth();
  const { posts, approvePost, deletePost } = useContent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending'); // 'pending', 'all', 'users'

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Loading Admin Panel...</div>;

  const pendingPosts = posts.filter(p => p.status === 'pending');

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <ShieldCheck size={40} className="text-white drop-shadow-lg" />
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Village Admin Dashboard</h1>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/30 pb-2">
        <button 
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 font-bold border-b-2 transition-all duration-300 transform hover:scale-105 ${activeTab === 'pending' ? 'border-village-secondary text-white' : 'border-transparent text-gray-400 hover:text-white hover:border-white/50'}`}
        >
          Pending Approvals ({pendingPosts.length})
        </button>
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 font-bold border-b-2 transition-all duration-300 transform hover:scale-105 ${activeTab === 'all' ? 'border-village-secondary text-white' : 'border-transparent text-gray-400 hover:text-white hover:border-white/50'}`}
        >
          All Content ({posts.length})
        </button>
        <button 
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 font-bold border-b-2 transition-all duration-300 transform hover:scale-105 ${activeTab === 'users' ? 'border-village-secondary text-white' : 'border-transparent text-gray-400 hover:text-white hover:border-white/50'}`}
        >
          Users & Reports
        </button>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/10">
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingPosts.length === 0 ? <p className="text-gray-400">No pending requests.</p> : 
              pendingPosts.map(post => (
                <div key={post.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20 gap-4">
                  <div>
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">{post.type}</span>
                    <h3 className="font-bold text-lg text-white">{post.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{post.description}</p>
                    <p className="text-xs text-gray-400 mt-1">By {post.author} • {format(new Date(post.date), 'MMM d, h:mm a')}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => approvePost(post.id)}
                      className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
                    >
                      <CheckCircle size={16} /> Approve
                    </button>
                    <button 
                      onClick={() => deletePost(post.id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
                    >
                      <Trash2 size={16} /> Reject
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        )}

        {activeTab === 'all' && (
          <div className="space-y-4">
             {posts.map(post => (
                <div key={post.id} className="flex flex-col md:flex-row justify-between items-center bg-white/10 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${post.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                      <h3 className="font-semibold text-white">{post.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400">ID: {post.id} • {post.type}</p>
                  </div>
                  <button 
                    onClick={() => { if(window.confirm('Delete this post?')) deletePost(post.id); }}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
             ))}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="text-center py-12 text-gray-500">
            <UserIconPlaceholder />
            <p className="mt-2">User management module coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const UserIconPlaceholder = () => (
  <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default Admin;






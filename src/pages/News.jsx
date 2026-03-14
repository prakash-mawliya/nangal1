import { format } from 'date-fns';
import { PieChart, Plus, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';

const NewsCard = ({ post }) => (
  <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border-l-4 border-village-dark cursor-pointer group">
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-village-DEFAULT transition-colors">{post.title}</h3>
        <span className="text-xs text-gray-700 bg-black/5 px-2 py-1 rounded-full group-hover:bg-village-light/50 transition-colors">{format(new Date(post.date), 'MMM d, yyyy')}</span>
      </div>
      <p className="text-gray-800 mb-4 font-medium">{post.description}</p>
      <div className="flex items-center text-sm text-gray-600 space-x-4">
        <span className="font-semibold text-village-dark">By {post.author}</span>
        {/* Engagement placeholder */}
        <span className="flex items-center gap-1"><ThumbsUp size={14} /> {post.engagement || 0}</span> 
      </div>
    </div>
  </div>
);

const PollCard = ({ post, onVote }) => {
  const [votedOption, setVotedOption] = useState(null);

  const handleVote = (optionId) => {
    if (votedOption) return; // Prevent double voting locally
    onVote(post.id, optionId);
    setVotedOption(optionId);
  };

  const totalVotes = post.votes || 0;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border-l-4 border-village-secondary cursor-pointer">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 hover:text-village-secondary transition-colors">
             <PieChart className="text-village-secondary animate-pulse" /> {post.title}
          </h3>
          <span className="text-xs font-bold bg-village-secondary/20 text-village-dark px-2 py-1 rounded hover:bg-village-secondary hover:text-white transition-colors">POLL</span>
        </div>
        <p className="text-gray-800 mb-6 font-medium">{post.description}</p>
        
        <div className="space-y-3">
          {post.options.map((option) => {
            const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
            return (
              <div key={option.id} className="relative">
                <button
                  onClick={() => handleVote(option.id)}
                  disabled={!!votedOption}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all relative z-10 flex justify-between items-center ${
                    votedOption === option.id 
                      ? 'border-village-DEFAULT bg-village-light font-bold text-gray-900' 
                      : 'border-gray-300 hover:border-village-secondary bg-white/50 text-gray-800'
                  }`}
                >
                  <span>{option.text}</span>
                  <span className="text-sm font-semibold text-gray-600">{percentage}%</span>
                </button>
                {/* Progress Bar Background */}
                <div 
                  className="absolute top-0 left-0 h-full bg-village-secondary/20 rounded-lg z-0 transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-right">{totalVotes} votes total</p>
      </div>
    </div>
  );
};

const CreatePostModal = ({ onClose }) => {
  const { addPost } = useContent();
  const { user } = useAuth();
  const [type, setType] = useState('news');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      type,
      title,
      description,
      author: user.name,
      date: new Date().toISOString(),
      status: 'pending', // Pending approval
      engagement: 0,
      ...(type === 'poll' && {
        options: pollOptions.filter(o => o.trim()).map((text, idx) => ({ id: `opt-${idx}`, text, votes: 0 })),
        votes: 0
      })
    };
    addPost(newPost);
    onClose();
    alert('Post submitted for approval!');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 p-6 w-full max-w-lg text-white">
        <h2 className="text-2xl font-bold mb-4 font-serif">Create New Update</h2>
        
        <div className="flex gap-4 mb-4">
          <button onClick={() => setType('news')} className={`flex-1 py-2 rounded-lg transition-colors ${type === 'news' ? 'bg-green-600 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>News</button>
          <button onClick={() => setType('poll')} className={`flex-1 py-2 rounded-lg transition-colors ${type === 'poll' ? 'bg-green-600 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Poll</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            required 
            placeholder="Title" 
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <textarea 
            required 
            placeholder="Description details..." 
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg h-24 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />

          {type === 'poll' && (
            <div className="space-y-2">
              <label className="font-semibold block text-green-400">Options</label>
              {pollOptions.map((opt, idx) => (
                <input 
                  key={idx}
                  required
                  placeholder={`Option ${idx + 1}`}
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  className="w-full border p-2 rounded"
                  value={opt}
                  onChange={e => {
                    const newOpts = [...pollOptions];
                    newOpts[idx] = e.target.value;
                    setPollOptions(newOpts);
                  }}
                />
              ))}
              <button 
                type="button" 
                onClick={() => setPollOptions([...pollOptions, ''])}
                className="text-sm text-village-DEFAULT hover:underline"
              >
                + Add Option
              </button>
            </div>
          )}

          <div className="flex gap-2 justify-end mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-300 hover:bg-white/10 rounded transition-colors">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-village-DEFAULT text-white rounded hover:bg-village-dark transition-colors shadow-lg shadow-village-DEFAULT/20">Submit Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const News = () => {
  const { posts, votePoll } = useContent();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'news', 'poll'

  // Sort: Polls by engagement, News by date
  // For 'all' view, we can pin polls to top or interleaving.
  // Requirement: "Latest news appears first", "Polls with highest engagement move upward"
  // Let's implement separate arrays logic for display
  const approvedPosts = posts.filter(p => p.status === 'approved'); // Only show approved
  
  const sortedPosts = [...approvedPosts].sort((a, b) => {
    // Primary sort: Type. Polls first? Or mix?
    // "Polls with highest engagement move upward" implies they compete with news?
    // Let's assign a score.
    // News Score = Date (newer is better)
    // Poll Score = Engagement * Weight + Date
    // This is complex. Let's just list highly engaged polls first, then recent news.
    
    if (a.type === 'poll' && b.type === 'poll') return b.engagement - a.engagement;
    if (a.type === 'news' && b.type === 'news') return new Date(b.date) - new Date(a.date);
    
    // If different types, prioritize active Polls? 
    if (a.type === 'poll' && a.engagement > 50) return -1; // High engagement poll to top
    if (b.type === 'poll' && b.engagement > 50) return 1;

    return new Date(b.date) - new Date(a.date); // Default to date
  });

  const filteredPosts = filter === 'all' ? sortedPosts : sortedPosts.filter(p => p.type === filter);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">Community News & Polls</h1>
          <p className="text-gray-200 drop-shadow-md">Stay updated with what's happening efficiently.</p>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Filter Tabs */}
           <div className="flex bg-gray-200 p-1 rounded-lg">
             {['all', 'news', 'poll'].map(f => (
               <button
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`px-4 py-1 rounded-md capitalize transition-all ${filter === f ? 'bg-white shadow text-village-DEFAULT font-bold' : 'text-gray-500'}`}
               >
                 {f}s
               </button>
             ))}
           </div>

           {user && (
             <button 
               onClick={() => setIsModalOpen(true)}
               className="bg-village-accent hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
             >
               <Plus size={20} /> Create Post
             </button>
           )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          post.type === 'news' 
            ? <NewsCard key={post.id} post={post} />
            : <PollCard key={post.id} post={post} onVote={votePoll} />
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center py-20 text-gray-300 font-medium bg-black/20 rounded-xl backdrop-blur-sm">
            No updates found. Be the first to post!
          </div>
        )}
      </div>

      {isModalOpen && <CreatePostModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default News;






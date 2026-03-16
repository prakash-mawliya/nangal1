import { createContext, useContext, useEffect, useState } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const INITIAL_POSTS = [
  {
    id: 1,
    type: 'news',
    title: 'Village Fair 2025 Announced!',
    description: 'The annual village fair will be held on April 15th at the main ground. All artisans are requested to register their stalls by March 30th.',
    author: 'Panchayat Secretary',
    date: new Date(Date.now() - 86400000).toISOString(),
    status: 'approved',
    engagement: 120
  },
  {
    id: 2,
    type: 'poll',
    title: 'Should we build a new community library?',
    description: 'The old library is too small. We have funds for a new one.',
    author: 'Youth Club',
    date: new Date(Date.now() - 43200000).toISOString(),
    status: 'approved',
    options: [
      { id: 'opt1', text: 'Yes, absolutely', votes: 45 },
      { id: 'opt2', text: 'No, renovate the old one', votes: 12 },
      { id: 'opt3', text: 'Use funds for roads instead', votes: 8 }
    ],
    votes: 65, // Total votes
    engagement: 65
  },
  {
    id: 3,
    type: 'news',
    title: 'Heavy Rainfall Alert',
    description: 'Meteorological department predicts heavy rains for the next 3 days. Farmers are advised to take precautions.',
    author: 'Govt. Advisory',
    date: new Date().toISOString(),
    status: 'approved', // Waiting for admin approval
    engagement: 50
  }
];

export const ContentProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('village_posts');
    return savedPosts ? JSON.parse(savedPosts) : INITIAL_POSTS;
  });

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('village_posts', JSON.stringify(posts));
  }, [posts]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'village_posts') {
         // When another tab updates localStorage, update state here
         setPosts(JSON.parse(e.newValue));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  const approvePost = (id) => {
    const updatedPosts = posts.map(post => post.id === id ? { ...post, status: 'approved' } : post);
    setPosts(updatedPosts);
  };

  const votePoll = (pollId, optionId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === pollId && post.type === 'poll') {
        const newOptions = post.options.map(opt => 
          opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
        );
        const newTotalVotes = post.votes + 1;
        return { ...post, options: newOptions, votes: newTotalVotes, engagement: newTotalVotes };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <ContentContext.Provider value={{ posts, addPost, deletePost, approvePost, votePoll }}>
      {children}
    </ContentContext.Provider>
  );
};






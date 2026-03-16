import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real-time sync with Firebase
  useEffect(() => {
    // If no DB (e.g. key missing), fall back or do nothing
    if (!db) {
      console.warn("Firebase DB not initialized");
      setPosts(INITIAL_POSTS);
      setLoading(false);
      return;
    }

    const q = query(collection(db, "posts"), orderBy("date", "desc"));
    
    // Subscribe to updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const livePosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(livePosts);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching posts:", error);
      // Fallback to local/mock data if firebase fails (e.g., config missing)
      setLoading(false); 
      setPosts(INITIAL_POSTS); 
    });

    return () => unsubscribe();
  }, []);

  const addPost = async (newPost) => {
    try {
      // Remove 'id' if present, let Firestore generate it
      const { id, ...postData } = newPost; 
      await addDoc(collection(db, "posts"), {
        ...postData,
        date: new Date().toISOString()
      });
    } catch (e) {
      console.error("Error adding post: ", e);
      alert("Error posting content. Check your firebase config.");
    }
  };

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (e) {
      console.error("Error deleting post: ", e);
    }
  };

  const approvePost = async (id) => {
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        status: 'approved'
      });
    } catch (e) {
      console.error("Error approving post: ", e);
    }
  };

  const votePoll = async (pollId, optionId) => {
    try {
      const post = posts.find(p => p.id === pollId);
      if (!post) return;

      const postRef = doc(db, "posts", pollId);
      const newOptions = post.options.map(opt => 
        opt.id === optionId ? { ...opt, votes: (opt.votes || 0) + 1 } : opt
      );
      const newTotalVotes = (post.votes || 0) + 1;

      await updateDoc(postRef, {
        options: newOptions,
        votes: newTotalVotes,
        engagement: newTotalVotes
      });
    } catch (e) {
      console.error("Error voting: ", e);
    }
  };

  return (
    <ContentContext.Provider value={{ posts, addPost, deletePost, approvePost, votePoll, loading }}>
      {children}
    </ContentContext.Provider>
  );
};






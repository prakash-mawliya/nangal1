import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatRoom from '../components/chat/ChatRoom';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate('/login', { state: { from: '/chat' } });
  }, [user, loading, navigate]);

  if (loading) return <div>Loading access...</div>; 

  return (
    <div className="h-[calc(100vh-64px)] w-full">
      <ChatRoom />
    </div>
  );
};

export default Chat;






import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted user
    const savedUser = localStorage.getItem('village_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (method, userData) => {
    // Mock login logic
    const newUser = {
      id: Date.now().toString(),
      name: userData?.name || 'Villager',
      role: userData?.role || 'user', // 'user' or 'admin'
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      ...userData
    };
    setUser(newUser);
    localStorage.setItem('village_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('village_user');
  };

  const updateProfile = (updatedData) => {
    setUser(prev => {
      const newUser = { ...prev, ...updatedData };
      localStorage.setItem('village_user', JSON.stringify(newUser));
      return newUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};






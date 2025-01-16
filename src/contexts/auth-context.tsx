import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = () => {
    // Placeholder for actual Firebase authentication
    setUser({ email: 'demo@example.com' });
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
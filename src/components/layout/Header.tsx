import React from 'react';
import { useAuthStore } from '../../stores/auth-store';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
  const { user, setUser } = useAuthStore();

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">EcoTale</h1>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{user.email}</span>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button variant="primary">
              Demo App
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}; 
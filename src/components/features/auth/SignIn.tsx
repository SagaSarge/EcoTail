import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../stores/auth-store';
import { Button } from '../../common/Button';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo sign in
    setUser({ email: 'demo@example.com' });
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Demo Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Button type="submit" variant="primary" className="w-full">
          Continue as Demo User
        </Button>
      </form>
    </div>
  );
}; 
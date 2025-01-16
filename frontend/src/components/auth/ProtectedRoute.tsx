import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import { ErrorBoundary } from '../error/ErrorBoundary';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'user' | 'admin';
  fallback?: React.ReactNode;
}

export const ProtectedRoute = ({ 
  children, 
  requiredRole,
  fallback 
}: ProtectedRouteProps) => {
  const { user, isLoading } = useAuthStore();
  const location = useLocation();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // Check role requirements
  if (requiredRole && user.role !== requiredRole) {
    return (
      <Navigate 
        to="/" 
        state={{ 
          error: `Access denied. Required role: ${requiredRole}` 
        }} 
        replace 
      />
    );
  }

  // Wrap children in error boundary
  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}; 
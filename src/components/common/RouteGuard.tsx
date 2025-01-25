import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RouteGuardProps {
  children: React.ReactNode;
  requiresState?: boolean;
  redirectTo?: string;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requiresState = false,
  redirectTo = '/purchase'
}) => {
  const location = useLocation();
  
  // Check if the route requires state and if it's missing
  if (requiresState && (!location.state || Object.keys(location.state).length === 0)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}; 
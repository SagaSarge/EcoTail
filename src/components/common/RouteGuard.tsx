import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RouteGuardProps {
  children: React.ReactNode;
  requiresState?: boolean;
  redirectTo?: string;
}

interface CheckoutState {
  productType: 'v1' | 'v2';
  price: string;
  totalPrice?: string;
  isPreOrder: boolean;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requiresState = false,
  redirectTo = '/purchase'
}) => {
  const location = useLocation();
  const state = location.state as CheckoutState;
  
  if (requiresState) {
    // Check if state exists and has required properties
    if (!state || !state.productType || !state.price) {
      console.warn('Attempted to access checkout without required product information');
      return <Navigate to={redirectTo} replace />;
    }

    // Validate product type
    if (!['v1', 'v2'].includes(state.productType)) {
      console.warn('Invalid product type specified');
      return <Navigate to={redirectTo} replace />;
    }

    // Validate price format
    if (!state.price.startsWith('$')) {
      console.warn('Invalid price format');
      return <Navigate to={redirectTo} replace />;
    }

    // Validate total price for pre-orders
    if (state.isPreOrder && !state.totalPrice) {
      console.warn('Pre-order missing total price');
      return <Navigate to={redirectTo} replace />;
    }
  }

  return <>{children}</>;
}; 
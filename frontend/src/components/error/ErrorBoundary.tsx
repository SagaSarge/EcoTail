import React from 'react';
import { Button } from '../ui/Button';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white dark:bg-eco-secondary">
            <div className="text-center p-8 rounded-lg bg-eco-neutral/5 dark:bg-eco-neutral/10">
              <h2 className="text-2xl font-bold text-eco-secondary dark:text-eco-primary mb-4">
                Something went wrong
              </h2>
              <p className="text-eco-neutral mb-8">{this.state.error?.message}</p>
              <Button
                onClick={() => window.location.reload()}
                variant="primary"
                className="bg-eco-primary hover:bg-eco-primary/90 text-white"
              >
                Try again
              </Button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
} 
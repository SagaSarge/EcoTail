import { ErrorInfo } from 'react';

interface ErrorLog {
  timestamp: string;
  error: Error;
  componentStack?: string;
  additionalInfo?: Record<string, any>;
}

class ErrorTracker {
  private static instance: ErrorTracker;
  private errors: ErrorLog[] = [];
  private readonly MAX_LOGS = 100;

  private constructor() {
    window.onerror = (message, source, lineno, colno, error) => {
      this.logError(error || new Error(String(message)));
    };

    window.onunhandledrejection = (event) => {
      this.logError(event.reason);
    };
  }

  public static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  public logError(error: Error, componentStack?: string, additionalInfo?: Record<string, any>) {
    const errorLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      error,
      componentStack,
      additionalInfo
    };

    this.errors = [errorLog, ...this.errors].slice(0, this.MAX_LOGS);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', {
        message: error.message,
        stack: error.stack,
        componentStack,
        additionalInfo
      });
    }

    // In production, you would send this to your error tracking service
    // this.sendToErrorTrackingService(errorLog);
  }

  public getRecentErrors(): ErrorLog[] {
    return [...this.errors];
  }

  public clearErrors(): void {
    this.errors = [];
  }

  private sendToErrorTrackingService(errorLog: ErrorLog): void {
    // Implementation for sending to error tracking service (e.g., Sentry)
    // This would be implemented when deploying to production
  }
}

export const errorTracker = ErrorTracker.getInstance();

// React Error Boundary Helper
export const logComponentError = (error: Error, errorInfo: ErrorInfo) => {
  errorTracker.logError(error, errorInfo.componentStack);
}; 
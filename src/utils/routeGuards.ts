import { AppRoute } from '../stores/appNavigationStore';
import { errorTracker } from './errorTracking';

interface RouteGuardConfig {
  requiresAuth: boolean;
  roles?: string[];
  validateData?: () => boolean;
}

const routeConfigs: Record<AppRoute, RouteGuardConfig> = {
  dashboard: { requiresAuth: false },
  analytics: { 
    requiresAuth: true,
    validateData: () => true // Add actual data validation logic
  },
  gamification: { 
    requiresAuth: true,
    validateData: () => true
  },
  recommendations: { 
    requiresAuth: true,
    validateData: () => true
  },
  community: { 
    requiresAuth: true,
    validateData: () => true
  },
  profile: { 
    requiresAuth: true,
    validateData: () => true
  }
};

export class RouteGuard {
  private static isAuthenticated = false; // Replace with actual auth state
  private static userRoles: string[] = []; // Replace with actual user roles

  public static setAuthState(isAuth: boolean, roles: string[] = []) {
    this.isAuthenticated = isAuth;
    this.userRoles = roles;
  }

  public static canActivate(route: AppRoute): boolean {
    try {
      const config = routeConfigs[route];
      
      if (!config) {
        errorTracker.logError(new Error(`No route configuration found for ${route}`));
        return false;
      }

      // Check authentication
      if (config.requiresAuth && !this.isAuthenticated) {
        return false;
      }

      // Check roles
      if (config.roles && !config.roles.some(role => this.userRoles.includes(role))) {
        return false;
      }

      // Validate data requirements
      if (config.validateData && !config.validateData()) {
        return false;
      }

      return true;
    } catch (error) {
      errorTracker.logError(error as Error, undefined, { route });
      return false;
    }
  }

  public static beforeRouteEnter(route: AppRoute): Promise<boolean> {
    return new Promise((resolve) => {
      // Add any async checks here (e.g., data preloading)
      resolve(this.canActivate(route));
    });
  }

  public static beforeRouteLeave(route: AppRoute): Promise<boolean> {
    return new Promise((resolve) => {
      // Add any cleanup or state saving logic here
      resolve(true);
    });
  }
} 
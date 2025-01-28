import React from 'react';
import { useNavigationStore, AppRoute } from '../../stores/appNavigationStore';
import { AppRouter } from './AppRouter';
import { cn } from '../../utils/classNames';

interface NavItem {
  route: AppRoute;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { route: 'dashboard', label: 'Home', icon: 'home' },
  { route: 'analytics', label: 'Analytics', icon: 'chart' },
  { route: 'gamification', label: 'Rewards', icon: 'trophy' },
  { route: 'recommendations', label: 'Smart AI', icon: 'sparkles' },
  { route: 'community', label: 'Community', icon: 'users' },
];

const getIconPath = (icon: string) => {
  switch (icon) {
    case 'home':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
    case 'chart':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
    case 'trophy':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />;
    case 'sparkles':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />;
    case 'users':
      return <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />;
    default:
      return null;
  }
};

export const AppLayout: React.FC = () => {
  const { currentRoute, setRoute } = useNavigationStore();

  return (
    <div className="relative h-full flex flex-col bg-gradient-to-b from-[#2A9D8F] via-[#264653] to-[#287271] text-white">
      {/* Status Bar */}
      <div className="h-6 flex items-center justify-between px-4 text-xs bg-[#264653]/80 backdrop-blur-lg border-b border-[#8AB17D]/20">
        <span className="text-[#E9EDC9]">9:41</span>
        <div className="flex items-center gap-1 text-[#E9EDC9]">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 22h20V2L2 22z"/>
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <AppRouter />
      </div>

      {/* Navigation Bar */}
      <nav className="h-16 bg-[#264653]/90 backdrop-blur-lg border-t border-[#8AB17D]/20">
        <div className="h-full max-w-md mx-auto px-6 flex items-center justify-between">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => setRoute(item.route)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300",
                currentRoute === item.route
                  ? "text-[#E9C46A] bg-[#2A9D8F]/10"
                  : "text-[#E9EDC9] hover:text-[#F4A261] hover:bg-[#2A9D8F]/5"
              )}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {getIconPath(item.icon)}
              </svg>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}; 
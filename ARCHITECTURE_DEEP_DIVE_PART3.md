# EcoTail Frontend Architecture: Practical Implementations

## I. EcoTail-Specific Component Patterns

### A. Feature Version Cards
```typescript
// /components/features/version-cards/VersionCard.tsx
interface VersionCardProps {
  version: 'V1' | 'V2' | 'V3' | 'V4';
  title: string;
  description: string;
  metrics: {
    accuracy: number;
    efficiency: number;
    sustainability: number;
  };
}

const VersionCard: React.FC<VersionCardProps> = ({
  version,
  title,
  description,
  metrics
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trackFeatureInteraction } = useAnalytics();
  
  // Version-specific color schemes
  const versionColors = {
    V1: 'bg-[#7DD8C6] text-[#02402C]',
    V2: 'bg-[#02402C] text-[#7DD8C6]',
    V3: 'bg-[#5E7D7E] text-[#F7F4EC]',
    V4: 'bg-[#F7F4EC] text-[#02402C]'
  };
  
  return (
    <motion.div
      layout
      className={`rounded-lg p-6 ${versionColors[version]}`}
      onClick={() => {
        setIsExpanded(!isExpanded);
        trackFeatureInteraction('version_card_click', { version });
      }}
    >
      <div className="flex items-center gap-4">
        <Badge variant="outline">{version}</Badge>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <p className="mb-4">{description}</p>
            <MetricsGrid metrics={metrics} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// /components/features/version-cards/MetricsGrid.tsx
const MetricsGrid: React.FC<{ metrics: VersionCardProps['metrics'] }> = ({
  metrics
}) => (
  <div className="grid grid-cols-3 gap-4">
    <MetricCard
      label="Accuracy"
      value={metrics.accuracy}
      icon={<AccuracyIcon />}
    />
    <MetricCard
      label="Efficiency"
      value={metrics.efficiency}
      icon={<EfficiencyIcon />}
    />
    <MetricCard
      label="Sustainability"
      value={metrics.sustainability}
      icon={<SustainabilityIcon />}
    />
  </div>
);
```

### B. EcoTail Navigation System
```typescript
// /components/navigation/EcoNav.tsx
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: 'new' | 'beta' | 'updated';
}

const EcoNav: React.FC = () => {
  const { currentPath } = useRouter();
  const { theme } = useTheme();
  
  const navItems: NavItem[] = [
    {
      label: 'AI Innovations',
      href: '/ai-innovations',
      icon: <AIIcon />,
      badge: 'updated'
    },
    {
      label: 'Sustainability',
      href: '/sustainability',
      icon: <LeafIcon />
    },
    {
      label: 'Analytics',
      href: '/analytics',
      icon: <ChartIcon />,
      badge: 'beta'
    }
  ];
  
  return (
    <nav className="flex items-center gap-8">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl">🌱</span>
        <span className="font-bold text-[#02402C] dark:text-[#7DD8C6]">
          EcoTail
        </span>
      </Link>
      
      <div className="flex items-center gap-6">
        {navItems.map(item => (
          <NavLink
            key={item.href}
            {...item}
            isActive={currentPath === item.href}
          />
        ))}
      </div>
    </nav>
  );
};

// /components/navigation/NavLink.tsx
const NavLink: React.FC<NavItem & { isActive: boolean }> = ({
  label,
  href,
  icon,
  badge,
  isActive
}) => (
  <Link
    href={href}
    className={cn(
      'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
      'hover:bg-[#7DD8C6]/10',
      isActive && 'bg-[#7DD8C6]/20'
    )}
  >
    <span className="text-[#02402C] dark:text-[#7DD8C6]">
      {icon}
    </span>
    <span>{label}</span>
    {badge && (
      <Badge variant={badge === 'new' ? 'primary' : 'secondary'}>
        {badge}
      </Badge>
    )}
  </Link>
);
```

### C. Sustainability Metrics Dashboard
```typescript
// /components/dashboard/SustainabilityDashboard.tsx
interface SustainabilityMetrics {
  energyUsage: number;
  carbonOffset: number;
  resourceEfficiency: number;
  timeline: {
    date: string;
    metrics: Record<string, number>;
  }[];
}

const SustainabilityDashboard: React.FC = () => {
  const { data, isLoading } = useSustainabilityMetrics();
  const { theme } = useTheme();
  
  if (isLoading) {
    return <DashboardSkeleton />;
  }
  
  return (
    <div className="grid grid-cols-12 gap-6">
      <MetricCard
        className="col-span-4"
        title="Energy Usage"
        value={data.energyUsage}
        trend={-12.5}
        icon={<EnergyIcon />}
        formatter={value => `${value}kWh`}
      />
      
      <MetricCard
        className="col-span-4"
        title="Carbon Offset"
        value={data.carbonOffset}
        trend={8.3}
        icon={<CarbonIcon />}
        formatter={value => `${value}kg CO₂`}
      />
      
      <MetricCard
        className="col-span-4"
        title="Resource Efficiency"
        value={data.resourceEfficiency}
        trend={15.7}
        icon={<EfficiencyIcon />}
        formatter={value => `${value}%`}
      />
      
      <div className="col-span-12">
        <MetricsChart
          data={data.timeline}
          theme={theme}
          height={400}
        />
      </div>
    </div>
  );
};

// /components/dashboard/MetricsChart.tsx
const MetricsChart: React.FC<{
  data: SustainabilityMetrics['timeline'];
  theme: 'light' | 'dark';
  height: number;
}> = ({ data, theme, height }) => {
  const chartColors = {
    energyUsage: '#7DD8C6',
    carbonOffset: '#02402C',
    resourceEfficiency: '#5E7D7E'
  };
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={theme === 'dark' ? '#2D3748' : '#E2E8F0'}
        />
        <XAxis
          dataKey="date"
          stroke={theme === 'dark' ? '#7DD8C6' : '#02402C'}
        />
        <YAxis
          stroke={theme === 'dark' ? '#7DD8C6' : '#02402C'}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === 'dark' ? '#1A2421' : '#F7F4EC',
            border: 'none',
            borderRadius: '8px'
          }}
        />
        <Legend />
        {Object.entries(chartColors).map(([key, color]) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
```

## II. EcoTail State Management

### A. Feature State Store
```typescript
// /stores/features/useFeatureStore.ts
interface Feature {
  id: string;
  name: string;
  version: 'V1' | 'V2' | 'V3' | 'V4';
  metrics: {
    accuracy: number;
    efficiency: number;
    sustainability: number;
  };
  status: 'active' | 'beta' | 'deprecated';
}

interface FeatureState {
  features: Record<string, Feature>;
  selectedVersion: Feature['version'] | null;
  comparisonMode: boolean;
  selectedFeatures: string[];
  filters: {
    version: Feature['version'][];
    status: Feature['status'][];
  };
}

const useFeatureStore = create<FeatureState>((set, get) => ({
  features: {},
  selectedVersion: null,
  comparisonMode: false,
  selectedFeatures: [],
  filters: {
    version: [],
    status: ['active']
  },
  
  // Actions
  setSelectedVersion: (version: Feature['version'] | null) =>
    set({ selectedVersion: version }),
    
  toggleComparisonMode: () =>
    set(state => ({ comparisonMode: !state.comparisonMode })),
    
  toggleFeatureSelection: (featureId: string) =>
    set(state => {
      const isSelected = state.selectedFeatures.includes(featureId);
      return {
        selectedFeatures: isSelected
          ? state.selectedFeatures.filter(id => id !== featureId)
          : [...state.selectedFeatures, featureId]
      };
    }),
    
  updateFilters: (filters: Partial<FeatureState['filters']>) =>
    set(state => ({
      filters: { ...state.filters, ...filters }
    })),
    
  // Computed values
  getFilteredFeatures: () => {
    const state = get();
    return Object.values(state.features).filter(feature => {
      const versionMatch = state.filters.version.length === 0 ||
        state.filters.version.includes(feature.version);
      const statusMatch = state.filters.status.length === 0 ||
        state.filters.status.includes(feature.status);
      return versionMatch && statusMatch;
    });
  }
}));
```

### B. Theme Store with EcoTail Colors
```typescript
// /stores/theme/useThemeStore.ts
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

interface ThemeState {
  mode: 'light' | 'dark';
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

const useThemeStore = create<ThemeState>((set) => ({
  mode: 'light',
  colors: {
    light: {
      primary: '#7DD8C6',
      secondary: '#02402C',
      background: '#F7F4EC',
      text: '#02402C',
      accent: '#5E7D7E'
    },
    dark: {
      primary: '#02402C',
      secondary: '#7DD8C6',
      background: '#1A2421',
      text: '#F7F4EC',
      accent: '#5E7D7E'
    }
  },
  
  toggleTheme: () =>
    set(state => ({
      mode: state.mode === 'light' ? 'dark' : 'light'
    })),
    
  getCurrentColors: () => {
    const state = get();
    return state.colors[state.mode];
  }
}));
```

## III. EcoTail Analytics Integration

### A. Analytics Hook
```typescript
// /hooks/useAnalytics.ts
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

const useAnalytics = () => {
  const trackEvent = useCallback(
    async (event: AnalyticsEvent) => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...event,
            timestamp: event.timestamp || Date.now()
          })
        });
      } catch (error) {
        console.error('Failed to track event:', error);
      }
    },
    []
  );
  
  const trackPageView = useCallback(
    (pageName: string) => {
      trackEvent({
        name: 'page_view',
        properties: { page: pageName }
      });
    },
    [trackEvent]
  );
  
  const trackFeatureInteraction = useCallback(
    (action: string, properties: Record<string, any>) => {
      trackEvent({
        name: 'feature_interaction',
        properties: { action, ...properties }
      });
    },
    [trackEvent]
  );
  
  return {
    trackEvent,
    trackPageView,
    trackFeatureInteraction
  };
};
```

### B. Performance Monitoring
```typescript
// /utils/performance/usePerformanceMonitoring.ts
const usePerformanceMonitoring = () => {
  const { trackEvent } = useAnalytics();
  
  const measurePerformance = useCallback(
    async <T>(
      name: string,
      fn: () => Promise<T>,
      threshold: number
    ): Promise<T> => {
      const start = performance.now();
      
      try {
        const result = await fn();
        const duration = performance.now() - start;
        
        if (duration > threshold) {
          trackEvent({
            name: 'performance_threshold_exceeded',
            properties: {
              operation: name,
              duration,
              threshold
            }
          });
        }
        
        return result;
      } catch (error) {
        trackEvent({
          name: 'performance_error',
          properties: {
            operation: name,
            error: error.message
          }
        });
        throw error;
      }
    },
    [trackEvent]
  );
  
  return { measurePerformance };
};
```

## IV. EcoTail Testing Examples

### A. Feature Card Tests
```typescript
// /components/features/version-cards/__tests__/VersionCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { VersionCard } from '../VersionCard';

describe('VersionCard', () => {
  const mockProps = {
    version: 'V1' as const,
    title: 'Enhanced Efficiency',
    description: 'First iteration focusing on basic efficiency',
    metrics: {
      accuracy: 85,
      efficiency: 75,
      sustainability: 70
    }
  };
  
  it('renders with correct version badge', () => {
    render(<VersionCard {...mockProps} />);
    expect(screen.getByText('V1')).toBeInTheDocument();
  });
  
  it('expands to show details on click', async () => {
    render(<VersionCard {...mockProps} />);
    
    // Initially description is hidden
    expect(screen.queryByText(mockProps.description)).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(screen.getByText(mockProps.title));
    
    // Description should now be visible
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
  
  it('displays metrics in correct format', () => {
    render(<VersionCard {...mockProps} />);
    fireEvent.click(screen.getByText(mockProps.title));
    
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
  });
});
```

### B. Theme Integration Tests
```typescript
// /tests/integration/theme.test.tsx
import { render, act } from '@testing-library/react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { useThemeStore } from '@/stores/theme/useThemeStore';

describe('Theme Integration', () => {
  it('applies correct theme colors to components', () => {
    const TestComponent = () => {
      const { mode, colors } = useThemeStore();
      return (
        <div
          data-testid="themed-element"
          style={{
            backgroundColor: colors[mode].background,
            color: colors[mode].text
          }}
        >
          Themed Content
        </div>
      );
    };
    
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    const element = getByTestId('themed-element');
    
    // Check light theme
    expect(element).toHaveStyle({
      backgroundColor: '#F7F4EC',
      color: '#02402C'
    });
    
    // Toggle to dark theme
    act(() => {
      useThemeStore.getState().toggleTheme();
    });
    
    // Check dark theme
    expect(element).toHaveStyle({
      backgroundColor: '#1A2421',
      color: '#F7F4EC'
    });
  });
});
```

This part provides concrete implementations specific to EcoTail, including:
- Version card components with EcoTail's design system
- Navigation system with proper styling and structure
- Sustainability metrics dashboard
- State management for features and theme
- Analytics integration
- Comprehensive test examples

Would you like me to:
1. Add more specific component examples?
2. Elaborate on any of these implementations?
3. Add more test cases?
4. Include additional EcoTail-specific features? 
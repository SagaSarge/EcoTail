# EcoTail Frontend Architecture

## Directory Structure
```
frontend/src/
├── components/          # Reusable components
│   ├── common/         # Shared components (Spinner, ErrorBoundary)
│   ├── ui/            # Basic UI components (Button, Input)
│   └── layout/        # Layout components (PageLayout, ContentLayout)
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── stores/            # Zustand state management
└── assets/            # Static assets
```

## Component Hierarchy
```
App
└── PageLayout (Layout Component)
    ├── Header Navigation
    ├── Page Content
    │   ├── Home
    │   ├── AIInnovations
    │   ├── Clean
    │   ├── BySelfLabs
    │   └── Education
    └── Footer

ContentLayout (Used by feature pages)
└── Animated content wrapper with title and description
```

## Component Types

### Layout Components (/components/layout/)
- PageLayout: Main layout wrapper
  - Provides navigation header
  - Contains footer with newsletter and links
  - Handles dark mode context
  
- ContentLayout: Feature page wrapper
  - Provides animated page transitions
  - Standardized title and description layout
  - Consistent padding and spacing

### UI Components (/components/ui/)
- Button: Reusable button component
  - Primary and secondary variants
  - Loading states
  - Icon support
  - Hover animations
  
- Input: Form input components
  - Text input with validation
  - Email input with format checking
  - Error state handling

### Common Components (/components/common/)
- Spinner: Loading indicator
  - Customizable size and color
  - Animated SVG implementation
  
- ErrorBoundary: Error handling
  - Graceful error display
  - Retry functionality
  - Error logging

## State Management
- Zustand for global state
  - User preferences
  - Authentication state
  - Theme settings
  
- React hooks for local state
  - Form handling
  - UI interactions
  - Component-specific state

## Styling Architecture
- Tailwind CSS for styling
  - Custom color palette
  - Responsive design utilities
  - Dark mode support
  
- CSS Modules for component-specific styles
  - Scoped styling
  - Animation definitions
  - Complex interactions

## Recommended Improvements

### 1. Enhanced Component Organization
```
frontend/src/components/
└── features/           # Feature-specific components
    ├── ai-innovations/
    │   ├── AIFeatureCard
    │   └── AIMetrics
    ├── clean/
    │   ├── CleaningMetrics
    │   └── ProcessFlow
    └── education/
        ├── CourseCard
        └── ProgressTracker
```

### 2. Type Safety Enhancements
```
frontend/src/types/
├── components.d.ts     # Component prop types
├── api.d.ts           # API response types
└── store.d.ts         # State management types
```

### 3. Documentation Structure
```
frontend/src/
├── stories/           # Storybook documentation
│   ├── components/
│   └── pages/
└── docs/             # Technical documentation
    ├── architecture/
    ├── components/
    └── api/
```

### 4. Testing Structure
```
frontend/src/
└── __tests__/
    ├── components/    # Component tests
    ├── hooks/        # Custom hook tests
    └── utils/        # Utility function tests
```

## Best Practices

1. Component Guidelines:
   - Use functional components with hooks
   - Keep components focused and single-responsibility
   - Implement proper prop-types and TypeScript interfaces
   - Document complex component logic

2. State Management:
   - Use Zustand for global state
   - Implement proper state selectors
   - Keep state normalized and minimal
   - Document state shape and mutations

3. Performance:
   - Implement proper memoization
   - Use lazy loading for routes
   - Optimize bundle size
   - Monitor and optimize render cycles

4. Accessibility:
   - Implement proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain proper heading hierarchy
   - Test with screen readers

5. Code Quality:
   - Follow ESLint configuration
   - Maintain consistent code style
   - Write unit tests for components
   - Document complex logic

## Future Considerations

1. Scalability:
   - Implement code splitting
   - Consider micro-frontend architecture
   - Plan for internationalization
   - Design for multiple themes

2. Performance:
   - Implement service workers
   - Add PWA capabilities
   - Optimize for core web vitals
   - Implement proper caching

3. Developer Experience:
   - Add comprehensive documentation
   - Implement proper CI/CD
   - Add development tools
   - Maintain changelog 
# EcoTale 🌱

A modern web application built with React, TypeScript, and Firebase, focusing on environmental and technological innovation. EcoTale aims to bridge the gap between environmental sustainability and cutting-edge technology.

## 🎯 Project Overview

EcoTale is a platform that combines:
- Environmental awareness and education
- AI-driven technological solutions
- Research and development initiatives
- Clean technology innovations
- Educational resources for sustainable development

### Key Features
- Interactive UI with modern design principles
- Real-time data synchronization
- User authentication and authorization
- Responsive design for all devices
- Performance-optimized components
- Accessibility compliance

## 🚀 Tech Stack

### Frontend
- **Core:** React 18.2.0 with TypeScript
- **Build System:** Vite 6.0.7
- **Styling:** 
  - TailwindCSS 3.4.1 for utility-first CSS
  - PostCSS for processing
  - Autoprefixer for browser compatibility
- **State Management:** 
  - Zustand 4.5.0 for global state
  - React Context for component-level state
- **Routing:** React Router 6.28.2
- **Type Checking:** TypeScript 5.3.3

### Backend & Services
- **Firebase Platform:**
  - Firebase 11.2.0
  - Firestore for database
  - Firebase Authentication
  - Firebase Hosting
- **API Integration:**
  - RESTful endpoints
  - Real-time data subscription

### Testing & Quality
- **Testing Framework:** Jest
- **Component Testing:** React Testing Library
- **Linting:** ESLint with TypeScript rules
- **Code Formatting:** Prettier

## 📁 Project Structure

```
project-root/
├── src/                    # Source code directory
│   ├── components/         # React components
│   │   ├── common/        # Shared, reusable components
│   │   │   ├── Button/    # Button variants and styles
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── types.ts
│   │   │   ├── Input/     # Form input components
│   │   │   │   ├── TextInput.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   └── Checkbox.tsx
│   │   │   ├── Card/      # Card components
│   │   │   │   ├── Card.tsx
│   │   │   │   └── CardHeader.tsx
│   │   │   ├── Modal/     # Modal dialogs
│   │   │   ├── Toast/     # Notification components
│   │   │   └── Icons/     # SVG icons and assets
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar/    # Navigation components
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── NavItem.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer/    # Footer components
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── FooterLinks.tsx
│   │   │   └── Sidebar/   # Sidebar navigation
│   │   │       ├── Sidebar.tsx
│   │   │       └── SidebarItem.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── AiInnovations/  # AI features page
│   │   │   │   ├── index.tsx
│   │   │   │   ├── AIFeatures.tsx
│   │   │   │   └── MLModels.tsx
│   │   │   ├── Clean/     # Clean tech page
│   │   │   │   ├── index.tsx
│   │   │   │   └── Metrics.tsx
│   │   │   ├── Labs/      # Research labs page
│   │   │   ├── Education/ # Educational content
│   │   │   └── Contact/   # Contact forms
│   │   ├── sections/      # Reusable page sections
│   │   │   ├── Hero/      # Hero sections
│   │   │   ├── Features/  # Feature highlights
│   │   │   └── CTA/       # Call-to-action sections
│   │   └── features/      # Feature-specific components
│   │       ├── Auth/      # Authentication UI
│   │       ├── Dashboard/ # User dashboard
│   │       └── Analytics/ # Analytics components
│   ├── services/          # External service integrations
│   │   ├── firestore/     # Firestore database services
│   │   │   ├── users.ts
│   │   │   ├── projects.ts
│   │   │   └── analytics.ts
│   │   ├── auth/          # Authentication services
│   │   │   ├── auth.ts
│   │   │   └── providers.ts
│   │   └── api/          # External API integrations
│   │       ├── endpoints.ts
│   │       └── client.ts
│   ├── stores/           # Zustand state stores
│   │   ├── auth-store.ts  # Authentication state
│   │   ├── app-store.ts   # Application state
│   │   └── ui-store.ts    # UI state management
│   ├── hooks/            # Custom React hooks
│   │   ├── useAuth.ts     # Authentication hooks
│   │   ├── useFirestore.ts # Database hooks
│   │   └── useAnalytics.ts # Analytics hooks
│   ├── contexts/         # React contexts
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── utils/           # Utility functions
│   │   ├── validation.ts  # Form validation
│   │   ├── formatting.ts  # Data formatting
│   │   └── analytics.ts   # Analytics helpers
│   ├── types/           # TypeScript type definitions
│   │   ├── auth.ts       # Authentication types
│   │   ├── api.ts        # API response types
│   │   └── models.ts     # Data model types
│   └── config/          # Configuration files
│       ├── firebase.ts   # Firebase config
│       ├── routes.ts     # Route definitions
│       └── constants.ts  # App constants
├── public/              # Static assets
│   ├── images/          # Image assets
│   ├── fonts/          # Font files
│   └── locales/        # i18n translations
├── tests/              # Test files
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/           # End-to-end tests
└── docs/              # Documentation
    ├── api/           # API documentation
    ├── components/    # Component documentation
    └── guides/       # Development guides
```

### Key Directory Explanations

#### `/src/components`
- **common/**: Reusable UI components following atomic design principles
  - Each component has its own directory with component, test, and type files
  - Includes variants, styles, and documentation
- **layout/**: Page structure components
  - Responsive navigation with mobile support
  - Footer with dynamic content sections
  - Configurable sidebar for dashboard views
- **pages/**: Full page components
  - Each page is a standalone module
  - Includes page-specific components and logic
- **sections/**: Larger reusable page sections
  - Hero sections with dynamic content
  - Feature grids and highlights
  - Call-to-action components
- **features/**: Complex feature modules
  - Authentication flows
  - User dashboard components
  - Analytics visualizations

#### `/src/services`
- **firestore/**: Database service layer
  - CRUD operations for each collection
  - Real-time subscription handlers
  - Batch operation utilities
- **auth/**: Authentication services
  - Multiple provider support
  - Session management
  - Token handling
- **api/**: External API integration
  - RESTful client configuration
  - API endpoint definitions
  - Response type handling

#### `/src/stores`
- State management using Zustand
- Separate stores for different concerns
- Persistent state handling
- Action creators and selectors

#### `/src/hooks`
- Custom hooks for reusable logic
- Data fetching and caching
- Form handling and validation
- Analytics and tracking

#### `/src/utils`
- Shared utility functions
- Data validation and formatting
- Analytics and tracking helpers
- Type guards and checkers

#### `/public`
- Static assets and resources
- Optimized images and icons
- Font files and stylesheets
- Localization files

#### `/tests`
- Comprehensive test suite
- Unit tests for components and utilities
- Integration tests for features
- E2E tests for critical paths

#### `/docs`
- Technical documentation
- API references
- Component usage guides
- Development workflows

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Git

### Development Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd ecotale
```

2. Install dependencies:
```bash
npm install
```

3. Configure Environment Variables:
Create a `.env` file in the root directory:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Additional Configuration
VITE_API_URL=your_api_url
VITE_ENVIRONMENT=development
```

4. Start Development Server:
```bash
npm run dev
```

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Preview production build:
```bash
npm run preview
```

3. Deploy to Firebase:
```bash
npm run deploy
```

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Testing
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

### Deployment
- `npm run deploy` - Deploy to Firebase
- `npm run deploy:staging` - Deploy to staging environment

## 🌐 Pages and Features

### AI Innovations
- Machine learning integration
- Predictive analytics
- Environmental impact assessment

### Clean Tech
- Sustainable technology solutions
- Energy efficiency metrics
- Carbon footprint tracking

### Labs
- Research projects
- Innovation experiments
- Technology demonstrations

### Education
- Learning resources
- Interactive tutorials
- Documentation

### Contact
- User support
- Feedback system
- Contact form

## 🔒 Authentication and Security

### Authentication Methods
- Email/Password
- Google Sign-In
- GitHub Authentication

### Security Features
- JWT token management
- Route protection
- Data encryption
- CORS configuration
- Rate limiting

## 💾 Data Management

### Firestore Collections
- Users
- Projects
- Resources
- Analytics

### State Management
- Zustand stores for global state
- React Context for component state
- Local storage integration
- Session management

## 🧪 Testing Strategy

### Unit Testing
- Component testing
- Hook testing
- Utility function testing
- State management testing

### Integration Testing
- API integration tests
- Authentication flow tests
- Route navigation tests

### E2E Testing
- User flow testing
- Critical path testing
- Performance testing

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Design Principles
- Mobile-first approach
- Fluid typography
- Flexible layouts
- Touch-friendly interfaces

## 🔧 Development Guidelines

### Code Style
- Functional components
- Custom hooks for logic
- TypeScript strict mode
- ESLint configuration
- Prettier formatting

### Best Practices
- Component composition
- Performance optimization
- Error boundaries
- Lazy loading
- Code splitting

### Git Workflow
- Feature branching
- Conventional commits
- Pull request reviews
- Version tagging

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Guidelines
- Follow the PR template
- Include tests
- Update documentation
- Link related issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Component Documentation](docs/components.md)
- [API Documentation](docs/api.md)
- [Testing Guide](docs/testing.md)
- [Deployment Guide](docs/deployment.md)
- [Contributing Guide](CONTRIBUTING.md)

## 🙋‍♂️ Support

For support, please:
1. Check the [documentation](docs/)
2. Open an issue
3. Contact the maintainers

---

Built with ❤️ by the EcoTale Team 
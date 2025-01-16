import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { LoadingProvider } from './components/providers/LoadingProvider';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { PageLayout } from './components/layout/PageLayout';

// Pages
import { Home } from './pages/Home';
import { ProductV1 } from './pages/products/ProductV1';
import { ProductV2 } from './pages/products/ProductV2';
import { ProductV3 } from './pages/products/ProductV3';
import { Education } from './pages/blog/Education';
import { AIInnovations } from './pages/features/AIInnovations';
import { BySelfLabs } from './pages/company/BySelfLabs';
import { Clean } from './pages/products/Clean';

// Route configuration
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

// Products layout component
const ProductsLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
};

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { 
    path: '/products', 
    element: <ProductsLayout />,
    children: [
      { path: '', element: <ProductV1 /> }, // Default product page shows V1
      { path: 'v1', element: <ProductV1 /> },
      { path: 'v2', element: <ProductV2 /> },
      { path: 'v3', element: <ProductV3 /> },
      { path: 'features', element: <Clean /> }
    ]
  },
  { path: '/blog', element: <Education /> },
  { path: '/features', element: <AIInnovations /> },
  { path: '/company', element: <BySelfLabs /> },
];

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LoadingProvider>
          <Router>
            <PageLayout>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element}>
                    {route.children?.map((child) => (
                      <Route
                        key={`${route.path}/${child.path}`}
                        path={child.path}
                        element={child.element}
                      />
                    ))}
                  </Route>
                ))}
              </Routes>
            </PageLayout>
          </Router>
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

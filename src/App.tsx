import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { LandingHero } from './components/pages/LandingHero';
import { MobileAppLandingPage } from './components/pages/MobileAppLandingPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { PageTransition } from './components/common/PageTransition';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <LandingHero />
              </PageTransition>
            } 
          />
          <Route 
            path="/mobile-app" 
            element={
              <PageTransition>
                <MobileAppLandingPage />
              </PageTransition>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <PageTransition>
                <DashboardPage />
              </PageTransition>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}; 
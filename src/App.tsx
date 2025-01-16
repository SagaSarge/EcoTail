import { useEffect, useState } from 'react';
import { AuthProvider } from './contexts/auth-context';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { useAuth } from './contexts/auth-context';
import { StickyProductCard } from './components/common/StickyProductCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ContactPage } from './components/pages/ContactPage';
import { AiInnovationsPage } from './components/pages/AiInnovationsPage';
import { CleanPage } from './components/pages/CleanPage';
import { LabsPage } from './components/pages/LabsPage';
import { EducationPage } from './components/pages/EducationPage';
import { TestimonialsSection } from './components/sections/TestimonialsSection';

function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTransform = (scrollY: number) => {
    const baseThreshold = 50;
    const maxScroll = 300;
    const progress = Math.min(Math.max((scrollY - baseThreshold) / (maxScroll - baseThreshold), 0), 1);
    
    return {
      alignY: progress * 100, // Move to parallel line
      slideLeft: progress * 150, // Slide off to left
      opacity: 1 - progress * 0.8 // Fade out slightly
    };
  };

  return calculateTransform(scrollY);
}

function LandingHero() {
  const { alignY, slideLeft, opacity } = useScrollAnimation();

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto min-h-[90vh] flex items-start justify-center pt-52">
          <div className="absolute left-0 w-[740px] h-[400px] bg-gray-300 rounded-r-3xl shadow-xl border-2 border-gray-400 transition-all duration-300"
               style={{ 
                 top: `${32 * 16 - alignY}px`,
                 transform: `translateX(calc(-25% - ${slideLeft}px))`,
                 opacity: opacity
               }}
          />
          
          <div className="absolute w-[225px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400 transition-all duration-300"
               style={{ 
                 top: `${18 * 16 + alignY}px`,
                 left: `calc(50% + 500px - ${slideLeft}px)`,
                 opacity: opacity
               }}
          />
          
          <div className="absolute w-[140px] h-[350px] bg-gray-300 rounded-l-3xl shadow-xl border-2 border-gray-400 transition-all duration-300"
               style={{ 
                 top: `${52 * 16 - alignY * 1.5}px`,
                 right: `calc(0px - ${slideLeft}px)`,
                 transform: 'translateX(25%)',
                 opacity: opacity
               }}
          />
          
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block mb-2">Effortless</span>
              <span className="block text-primary-600 mb-4">Sustainability</span>
            </h1>
            
            <p className="mt-3 text-xl text-gray-500 sm:text-2xl md:text-3xl font-medium">
              AI Rewards Zero Waste
            </p>
            
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="primary" className="px-8 py-3">
                Buy Now
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Pre Order V2
              </Button>
            </div>

            <Link 
              to="/contact" 
              className="inline-block mt-4 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200 hover:underline"
            >
              Submit a Request
            </Link>

            <p className="mt-8 text-base text-gray-500 sm:text-lg md:text-xl max-w-2xl mx-auto">
              Experience next-level waste management with AI-powered sorting, gamified rewards, and real-time eco-insights—all designed to make going green second nature.
            </p>

            <div className="mt-32 h-[400px] bg-gray-300 rounded-xl shadow-lg border-2 border-gray-400 max-w-2xl mx-auto transition-all duration-300"
                 style={{ 
                   transform: `translateX(-${slideLeft}px)`,
                   marginTop: `${32 * 4 + alignY}px`,
                   opacity: opacity
                 }}
            />
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </>
  );
}

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/ai-innovations" element={<AiInnovationsPage />} />
          <Route path="/clean" element={<CleanPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={
            !user ? <LandingHero /> : (
              <div className="text-center mt-10">
                Welcome, {user.email}!
              </div>
            )
          } />
        </Routes>
      </main>
      <StickyProductCard />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App; 
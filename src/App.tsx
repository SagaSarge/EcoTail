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
    const maxScroll = 600;
    const progress = Math.min(scrollY / maxScroll, 1);
    
    // Final scale for all images when aligned
    const finalScale = 0.75; // 75% of original size
    const scaleProgress = 1 - (progress * 0.25); // Scale down to 75%
    
    return {
      // First image movement
      firstMoveDown: progress * 300,
      firstScale: scaleProgress,

      // Third image movement
      moveDown: progress * 600,
      moveLeft: progress * 300,
      thirdScale: scaleProgress,
      
      // Fourth image movement
      moveUp: progress * 250,
      moveFourthLeft: progress * 50,
      fourthScale: scaleProgress,

      // Center image movement
      centerMoveUp: progress * 60,
      centerScale: scaleProgress,

      // Fifth image movement - position between first and center
      fifthMoveUp: progress * 400,
      fifthScale: scaleProgress
    };
  };

  return calculateTransform(scrollY);
}

function LandingHero() {
  const transforms = useScrollAnimation();

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto min-h-[90vh] flex items-start justify-center pt-52">
          {/* First Image */}
          <div className="absolute left-0 w-[740px] h-[400px] bg-gray-300 rounded-r-3xl transform -translate-x-1/2 shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(32rem + ${transforms.firstMoveDown}px)`,
                 transform: `translateX(-50%) scale(${transforms.firstScale})`
               }}
          />

          {/* Fifth Image (between first and center) */}
          <div className="absolute w-[225px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(70rem - ${transforms.fifthMoveUp}px)`,
                 left: 'calc(50% - 600px)', // Adjusted position with more space
                 transform: `scale(${transforms.fifthScale})`
               }}
          />
          
          {/* Third Image (iPhone-shaped) */}
          <div className="absolute w-[225px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(24rem + ${transforms.moveDown}px)`,
                 left: `calc(50% + 650px - ${transforms.moveLeft}px)`, // Moved further right
                 transform: `scale(${transforms.thirdScale})`
               }}
          />
          
          {/* Fourth Image */}
          <div className="absolute right-0 w-[225px] h-[450px] bg-gray-300 rounded-l-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(52rem - ${transforms.moveUp}px)`,
                 right: `calc(0px + ${transforms.moveFourthLeft}px)`,
                 transform: `translateX(25%) scale(${transforms.fourthScale})`
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

            {/* Center Image */}
            <div 
              className="mt-32 h-[400px] bg-gray-300 rounded-xl shadow-lg border-2 border-gray-400 max-w-2xl mx-auto transition-all duration-700"
              style={{
                transform: `translateY(-${transforms.centerMoveUp}px) scale(${transforms.centerScale})`,
                marginLeft: '100px' // Shift center image right
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
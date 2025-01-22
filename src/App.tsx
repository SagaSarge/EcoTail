import { useEffect, useState } from 'react';
import { AuthProvider } from './contexts/auth-context';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { useAuth } from './contexts/auth-context';
import { StickyProductCard } from './components/common/StickyProductCard';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { MobileAppPage } from './components/pages/MobileAppPage';
import { AuthPage } from './components/pages/AuthPage';
import { SignInPage } from './components/pages/SignInPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoadingPage } from './components/pages/LoadingPage';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { SmartWasteSection } from './components/sections/SmartWasteSection';
import { EnvironmentalImpactSection } from './components/sections/EnvironmentalImpactSection';
import { CostSavingsSection } from './components/sections/CostSavingsSection';
import { HowSavingsSection } from './components/sections/HowSavingsSection';
import { ProblemSolvingSection } from './components/sections/HowToUseSection';
import { ProductSection } from './components/sections/ProductSection';
import { FAQSection } from './components/sections/FAQSection';
import { BlogSection } from './components/sections/BlogSection';

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
    
    return {
      // First image moves down and left
      firstMoveDown: progress * 100,
      firstMoveLeft: progress * 300,
      
      // Center image moves slightly right and up
      centerMoveUp: progress * 50,
      centerMoveRight: progress * 200,
      
      // Third image moves down diagonally
      thirdMoveDown: progress * 200,
      thirdMoveLeft: progress * 100,
      
      // Fourth image moves up and left
      fourthMoveUp: progress * 150,
      fourthMoveLeft: progress * 75,
      
      // Scale effect
      scale: 1 - (progress * 0.1)
    };
  };

  return calculateTransform(scrollY);
}

function LandingHero() {
  const transforms = useScrollAnimation();
  const [rotatingWord, setRotatingWord] = useState('families');
  const navigate = useNavigate();
  
  useEffect(() => {
    const words = ['families', 'selfs', 'work', 'friends', 'kids'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setRotatingWord(words[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto min-h-[90vh] flex items-start justify-center pt-52">
          {/* First Image */}
          <div className="absolute left-0 w-[814px] h-[450px] bg-gray-300 rounded-r-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(32rem + ${transforms.firstMoveDown}px)`,
                 transform: `translateX(-50%) translateX(-${transforms.firstMoveLeft}px) scale(${transforms.scale})`
               }}
          />

          {/* Third Image (iPhone-shaped) */}
          <div className="absolute w-[275px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(20rem + ${transforms.thirdMoveDown}px)`,
                 left: `calc(50% + 450px - ${transforms.thirdMoveLeft}px)`,
                 transform: `scale(${transforms.scale})`
               }}
          />
          
          {/* Fourth Image */}
          <div className="absolute w-[275px] h-[450px] bg-gray-300 rounded-l-3xl shadow-xl border-2 border-gray-400 transition-all duration-700"
               style={{ 
                 top: `calc(52rem - ${transforms.fourthMoveUp}px)`,
                 right: `calc(0px + ${transforms.fourthMoveLeft}px)`,
                 transform: `scale(${transforms.scale})`
               }}
          />
          
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
              <span className="text-gray-900">Sustainable </span>
              <span className="text-primary-600">Saga</span>
            </h1>
            
            <p className="mt-3 text-xl text-gray-500 sm:text-2xl md:text-3xl font-medium">
              AI Rewards Zero Waste
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button 
                variant="primary" 
                className="px-12 py-3"
                onClick={() => navigate('/purchase')}
              >
                Buy Now
              </Button>
            </div>

            <Link 
              to="/contact" 
              className="inline-block mt-4 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200 hover:underline"
            >
              Pre Order V2
            </Link>

            <p className="mt-8 text-sm text-gray-500 sm:text-base max-w-2xl mx-auto">
              What story does your <span className="text-primary-600 transition-all duration-300">{rotatingWord}</span> recycling habits tell?
            </p>

            {/* Center Image */}
            <div 
              className="mt-32 bg-gray-300 rounded-xl shadow-lg border-2 border-gray-400 transition-all duration-700"
              style={{
                transform: `translateY(-${transforms.centerMoveUp}px) translateX(${transforms.centerMoveRight}px) scale(${transforms.scale})`,
                marginLeft: '-100px',
                width: '800px',
                height: '400px'
              }}
            />
          </div>
        </div>
      </div>
      <ProblemSolvingSection />
      <CostSavingsSection />
      <HowSavingsSection />
      <SmartWasteSection />
      <ProductSection />
      <EnvironmentalImpactSection />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
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
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/mobile-app" element={<MobileAppPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/signin" element={<SignInPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/loading" element={<LoadingPage />} />
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
import { useEffect, useState } from 'react';
import { AuthProvider } from './contexts/auth-context';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { useAuth } from './contexts/auth-context';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RouteGuard } from './components/common/RouteGuard';
import { PageTransition } from './components/common/PageTransition';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { MobileAppPage } from './components/pages/MobileAppPage';
import { AuthPage } from './components/pages/AuthPage';
import { SignInPage } from './components/pages/SignInPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoadingPage } from './components/pages/LoadingPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { SmartWasteSection } from './components/sections/SmartWasteSection';
import { EnvironmentalImpactSection } from './components/sections/EnvironmentalImpactSection';
import { CostSavingsSection } from './components/sections/CostSavingsSection';
import { HowSavingsSection } from './components/sections/HowSavingsSection';
import { ProblemSolvingSection } from './components/sections/HowToUseSection';
import { ProductSection } from './components/sections/ProductSection';
import { FAQSection } from './components/sections/FAQSection';
import { BlogSection } from './components/sections/BlogSection';
import { MobileAppLandingPage } from './components/pages/MobileAppLandingPage';
import PurchasePage from './components/pages/PurchasePage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import { BlogListingPage } from './components/pages/BlogListingPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { blogPosts } from './components/sections/BlogSection';
import { EnterpriseContactPage } from './components/pages/EnterpriseContactPage';

function LandingHero() {
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
      <div className="relative overflow-hidden">
        {/* Background gradient overlay - extended and softened */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
        
        {/* Decorative elements - adjusted for better blending */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-100/20 to-primary-50/10 blur-3xl opacity-70" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-primary-50/20 to-primary-100/10 blur-3xl opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center relative z-10 pt-12">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-gray-900">Sustainable </span>
              <span className="text-primary-600">Saga</span>
            </h1>
            
            <p className="mt-2 text-xl text-gray-500 sm:text-2xl md:text-3xl font-medium">
              AI Rewards Zero Waste
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button 
                variant="primary" 
                className="px-12 py-3"
                onClick={() => navigate('/purchase')}
              >
                Buy Now
              </Button>
            </div>

            <Link 
              to="/purchase" 
              className="inline-block mt-3 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200 hover:underline"
            >
              Pre Order V2
            </Link>

            <p className="mt-6 text-sm text-gray-500 sm:text-base max-w-2xl mx-auto">
              What story does your <span className="text-primary-600 transition-all duration-300">{rotatingWord}</span> recycling habits tell?
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative bg-gradient-to-b from-transparent to-gray-50">
        <ProblemSolvingSection />
        <CostSavingsSection />
        <HowSavingsSection />
        <SmartWasteSection />
        <ProductSection />
        <EnvironmentalImpactSection />
        <TestimonialSection />
        <BlogSection />
        <FAQSection />
      </div>
    </>
  );
}

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/technology" element={
              <PageTransition>
                <TechnologyPage />
              </PageTransition>
            } />
            <Route path="/mobile-app" element={
              <PageTransition>
                <MobileAppPage />
              </PageTransition>
            } />
            <Route path="/auth" element={
              <PageTransition>
                <AuthPage />
              </PageTransition>
            } />
            <Route path="/auth/signin" element={
              <PageTransition>
                <SignInPage />
              </PageTransition>
            } />
            <Route path="/auth/register" element={
              <PageTransition>
                <RegisterPage />
              </PageTransition>
            } />
            <Route path="/auth/loading" element={
              <PageTransition>
                <LoadingPage />
              </PageTransition>
            } />
            <Route path="/purchase" element={
              <PageTransition>
                <PurchasePage />
              </PageTransition>
            } />
            <Route path="/checkout" element={
              <PageTransition>
                <RouteGuard requiresState>
                  <CheckoutPage />
                </RouteGuard>
              </PageTransition>
            } />
            <Route path="/" element={
              <PageTransition>
                {!user ? <LandingHero /> : <MobileAppLandingPage />}
              </PageTransition>
            } />
            <Route path="/blog" element={
              <PageTransition>
                <BlogListingPage posts={blogPosts} />
              </PageTransition>
            } />
            <Route path="/blog/:slug" element={
              <PageTransition>
                <BlogPostPage posts={blogPosts} />
              </PageTransition>
            } />
            <Route path="/enterprise-contact" element={<EnterpriseContactPage />} />
            <Route path="*" element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
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
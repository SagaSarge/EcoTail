import { AuthProvider } from './contexts/auth-context';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { useAuth } from './contexts/auth-context';

function LandingHero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-[80vh] flex items-start justify-center pt-20">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block mb-2">Effortless</span>
            <span className="block text-primary-600 mb-4">Sustainability</span>
          </h1>
          
          <p className="mt-3 text-xl text-gray-500 sm:text-2xl md:text-3xl font-medium">
            AI Rewards Zero Waste
          </p>
          
          <p className="mt-4 text-base text-gray-500 sm:text-lg md:text-xl max-w-2xl mx-auto">
            Experience next-level waste management with AI-powered sorting, gamified rewards, and real-time eco-insights—all designed to make going green second nature.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="primary" className="px-8 py-3">
              Buy Now
            </Button>
            <Button variant="outline" className="px-8 py-3">
              Submit a Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {!user ? <LandingHero /> : (
          <div className="text-center mt-10">
            Welcome, {user.email}!
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App; 
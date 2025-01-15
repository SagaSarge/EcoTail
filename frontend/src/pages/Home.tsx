import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export function Home() {
  const { scrollY } = useScroll()
  
  // Transform for the hero images sliding left
  const heroImagesX = useTransform(scrollY, 
    [0, 400], 
    ['0%', '-20%']
  )
  
  // Transform for the navigation opacity
  const navOpacity = useTransform(scrollY,
    [0, 100],
    [0, 1]
  )

  return (
    <div className="relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl">🌱</span>
              <span className="font-medium">EcoTail</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/ai-innovations" className="text-gray-600 hover:text-gray-900">AI Innovations</Link>
              <Link to="/clean" className="text-gray-600 hover:text-gray-900">Clean</Link>
              <Link to="/by-self-labs" className="text-gray-600 hover:text-gray-900">By Self Labs</Link>
              <Link to="/education" className="text-gray-600 hover:text-gray-900">Education</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative pt-16">
        {/* Fixed QR Code */}
        <div className="fixed top-8 right-8 bg-white rounded-2xl shadow-lg p-6 z-50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🌱</span>
            <span className="font-medium">EcoTail</span>
          </div>
          <img src="/qr-code.svg" alt="Download EcoTail" className="w-32 h-32" />
          <p className="text-sm text-gray-600 mt-3 whitespace-nowrap text-center">
            Get EcoTail for<br />your phone
          </p>
        </div>

        {/* Logo Circle */}
        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-12">
          <span className="text-4xl">🌱</span>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[72px] leading-[1.1] font-bold mb-6">
            <span className="block">Effortless</span>
            <span className="block">Sustainability</span>
          </h1>

          <h2 className="text-2xl text-gray-600 mb-6">
            AI Rewards Zero Waste
          </h2>

          <div className="flex flex-col items-center gap-4 mb-4">
            <Button>Buy Now</Button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">
              Submit a Request
            </button>
            <p className="text-sm text-gray-600 max-w-xl">
              Gamified rewards, and real-time eco-insights—all designed to make going green effortless.
            </p>
          </div>
        </div>
      </div>

      {/* Below the Fold Section */}
      <div className="relative bg-gradient-to-b from-white to-gray-50">
        {/* Sticky Navigation */}
        <motion.nav
          style={{ opacity: navOpacity }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <span className="font-medium">Updates</span>
              </div>
              <div className="flex items-center gap-8">
                <Link to="/ai-innovations" className="text-gray-600 hover:text-gray-900">AI Innovations</Link>
                <Link to="/clean" className="text-gray-600 hover:text-gray-900">Clean</Link>
                <Link to="/by-self-labs" className="text-gray-600 hover:text-gray-900">By Self Labs</Link>
                <Link to="/education" className="text-gray-600 hover:text-gray-900">Education</Link>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Content Section */}
        <div className="relative z-10 max-w-6xl mx-auto pt-48 px-4">
          <motion.div 
            style={{ x: heroImagesX }}
            className="flex flex-col"
          >
            <h2 className="text-[80px] leading-tight font-bold">
              <span className="block mb-4">Discover</span>
              <span className="block mb-4">the latest</span>
              <span className="block text-[64px]">from EcoTail</span>
            </h2>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link to="/smart-bins" className="text-gray-600 hover:text-gray-900">Smart Bins</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link to="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-gray-600">© 2025 EcoTail.</p>
              <p className="text-gray-600">All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 
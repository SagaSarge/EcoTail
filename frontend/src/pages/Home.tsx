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

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience next-level waste management with AI-powered sorting, gamified rewards, 
            and real-time eco-insights—all designed to make going green second nature.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button>Buy Now</Button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">
              Submit a Request
            </button>
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
        <div className="relative z-10 max-w-6xl mx-auto pt-32 px-4">
          <motion.div 
            style={{ x: heroImagesX }}
            className="flex items-start"
          >
            {/* Persistent Hero Elements */}
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mr-8">
              <span className="text-3xl">🌱</span>
            </div>

            <div>
              <h2 className="text-6xl font-bold">
                <span className="block">Discover the latest</span>
                <div className="flex items-center gap-4 mt-4">
                  <span className="inline-block">from EcoTail</span>
                </div>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
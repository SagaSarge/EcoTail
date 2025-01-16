import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

// SEO-optimized section headings
const SECTION_HEADINGS = {
  hero: {
    title: "Smart Waste Management",
    subtitle: "AI-Powered • Eco-Friendly • Rewarding",
    description: "Transform your daily waste management with AI-powered sorting, real-time analytics, and eco-rewards."
  },
  valueProposition: {
    title: "Why Choose EcoTail?",
    subtitle: "Join the eco-friendly revolution in waste management with our innovative smart solution."
  },
  journey: {
    title: "Your EcoTail Journey",
    subtitle: "Experience the evolution of smart waste management, from basic AI sorting to premium closed-loop recycling."
  },
  features: {
    title: "Revolutionary Features",
    subtitle: "Discover how EcoTail's cutting-edge technology makes sustainable living effortless and rewarding."
  },
  impact: {
    title: "Make a Real Impact",
    subtitle: "Track your environmental savings and join a community of eco-conscious households."
  }
}

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-[#7DD8C6] via-[#5E7D7E] to-[#02402C]"
        aria-label="Hero section introducing EcoTail's smart waste management solution"
      >
        {/* Fixed QR Code */}
        <div className="fixed top-4 md:top-8 right-4 md:right-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 z-50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" aria-hidden="true">🦝</span>
            <span className="font-medium text-[#1A2421]">EcoTail</span>
          </div>
          <img 
            src="/qr-code.svg" 
            alt="QR code to download EcoTail mobile app" 
            className="w-24 md:w-32 h-24 md:h-32" 
          />
          <p className="text-sm text-[#5E7D7E] mt-3 whitespace-nowrap text-center">
            Get EcoTail for<br />your phone
          </p>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-bold mb-4 md:mb-6">
              <span className="block text-white">
                Effortless Sustainability
              </span>
              <span className="block text-2xl md:text-3xl text-[#7DD8C6] mt-4 font-normal">
                AI Rewards Zero Waste
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience next-level waste management with AI-powered sorting, gamified rewards, and real-time eco-insights—all designed to make going green second nature.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <Button className="w-full md:w-auto text-lg py-4 px-8 bg-[#02402C] hover:bg-[#7DD8C6] text-white transition-all duration-300">
                Buy Now
              </Button>
            </div>

            {/* Feature Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {/* Mobile UI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 hover:shadow-lg hover:shadow-[#02402C]/20 transition-all duration-300"
              >
                <img 
                  src="/mobile-ui.webp" 
                  alt="EcoTail mobile interface" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-medium">Smart Mobile Interface</h3>
              </motion.div>

              {/* AI Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 hover:shadow-lg hover:shadow-[#02402C]/20 transition-all duration-300"
              >
                <img 
                  src="/ai-dashboard.webp" 
                  alt="AI-powered waste sorting dashboard" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-medium">AI Sorting Dashboard</h3>
              </motion.div>

              {/* Rewards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 hover:shadow-lg hover:shadow-[#02402C]/20 transition-all duration-300"
              >
                <img 
                  src="/rewards.webp" 
                  alt="Gamified rewards leaderboard" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-medium">Rewards Leaderboard</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section 
        className="py-16 md:py-24 bg-[#F7F4EC]"
        aria-label="Latest updates and features from EcoTail"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Updates Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-sm font-medium text-[#5E7D7E]">UPDATES</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2421] mt-2 mb-4">
                Automatic Updates
              </h2>
              <p className="text-[#5E7D7E] text-lg">
                Stay ahead with automatic updates ensuring seamless functionality.
              </p>
              <Button className="mt-6 bg-[#02402C] hover:bg-[#7DD8C6] text-white transition-all duration-300">
                Learn More
              </Button>
            </motion.div>

            {/* What's New Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-sm font-medium text-[#5E7D7E]">LATEST</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2421] mt-2 mb-4">
                What's New from EcoTail
              </h2>
              <p className="text-[#5E7D7E] text-lg">
                Explore the latest features making waste management smarter and easier.
              </p>
              <Button className="mt-6 bg-[#02402C] hover:bg-[#7DD8C6] text-white transition-all duration-300">
                View Updates
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
    </div>
  )
} 
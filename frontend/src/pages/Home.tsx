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
        className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-white via-green-50 to-white"
        aria-label="Hero section introducing EcoTail's smart waste management solution"
      >
        {/* Fixed QR Code */}
        <div className="fixed top-4 md:top-8 right-4 md:right-8 bg-white rounded-2xl shadow-lg p-4 md:p-6 z-50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" aria-hidden="true">🌱</span>
            <span className="font-medium text-gray-900">EcoTail</span>
          </div>
          <img 
            src="/qr-code.svg" 
            alt="QR code to download EcoTail mobile app" 
            className="w-24 md:w-32 h-24 md:h-32" 
          />
          <p className="text-sm text-gray-600 mt-3 whitespace-nowrap text-center">
            Get EcoTail for<br />your phone
          </p>
        </div>

        {/* Logo Circle */}
        <div 
          className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-8 md:mb-12 shadow-lg"
          aria-hidden="true"
        >
          <span className="text-3xl md:text-4xl">🌱</span>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-bold mb-4 md:mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                {SECTION_HEADINGS.hero.title}
              </span>
              <span className="block text-sm md:text-xl text-gray-600 mt-4 font-normal">
                {SECTION_HEADINGS.hero.subtitle}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {SECTION_HEADINGS.hero.description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Button className="w-full md:w-auto text-lg py-4 px-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400">
                Pre-order Now
              </Button>
              <span className="text-gray-500">Starting at $99/month</span>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                AI-Powered Sorting
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Real-Time Analytics
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Eco Rewards
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-green-600">10,000+</p>
                <p className="text-sm text-gray-600">Pounds of Waste Diverted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">4.9/5</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">30%</p>
                <p className="text-sm text-gray-600">Average Waste Reduction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section 
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
        aria-label="Value proposition section highlighting EcoTail's benefits"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {SECTION_HEADINGS.valueProposition.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {SECTION_HEADINGS.valueProposition.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Market Need */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Demand</h3>
              <p className="text-gray-600">Premium waste management solutions with advanced features are in high demand, especially in the $50-$100 range.</p>
            </motion.div>

            {/* Eco-Friendly Revolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Revolution</h3>
              <p className="text-gray-600">Transform waste management with AI sorting, analytics, and guidance toward greener habits.</p>
            </motion.div>

            {/* High Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">High Engagement</h3>
              <p className="text-gray-600">Smart home integration, AI-driven suggestions, and gamified rewards keep users actively involved.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Journey Section */}
      <section 
        className="py-16 md:py-24 bg-white"
        aria-label="EcoTail's product evolution journey"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {SECTION_HEADINGS.journey.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {SECTION_HEADINGS.journey.subtitle}
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-24">
            {/* V1 - Disruptive Launch */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
                  V1 – Available Now
                </div>
                <h3 className="text-2xl font-semibold mb-4">Disruptive Launch ✨</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">AI Sorting & Analytics</span>
                      <p className="text-gray-600 mt-1">Real-time categorization of waste with basic app integration</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">13 Gallon Capacity</span>
                      <p className="text-gray-600 mt-1">Perfect size for household use</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">Basic Rewards System</span>
                      <p className="text-gray-600 mt-1">Earn points for correct sorting</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400">
                  Pre-order V1 Now
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <span className="text-8xl">🤖</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                  <p className="text-sm font-medium text-gray-900">Starting at</p>
                  <p className="text-2xl font-bold text-green-600">$99/mo</p>
                </div>
              </div>
            </motion.div>

            {/* V2 - Advanced Evolution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                  V2 – Coming Q3 2025
                </div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Evolution 🔧</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Enhanced Sensors & Analytics</span>
                      <p className="text-gray-600 mt-1">Detect partial-product disposal and provide waste reduction recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Voice Assistant Integration</span>
                      <p className="text-gray-600 mt-1">Works with Alexa, Google Home, and Apple HomeKit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Premium Subscription</span>
                      <p className="text-gray-600 mt-1">Access advanced AI features and deeper analytics</p>
                    </div>
                  </li>
                </ul>
                <button className="mt-8 text-gray-600 hover:text-gray-900">
                  Join Waitlist →
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center opacity-75">
                  <span className="text-8xl">🔧</span>
                </div>
              </div>
            </motion.div>

            {/* V3 - Subscription & Reusability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                  V3 – Vision for 2026
                </div>
                <h3 className="text-2xl font-semibold mb-4">Subscription & Reusability ♻️</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Reusable Canisters</span>
                      <p className="text-gray-600 mt-1">Weekly canister swaps with professional cleaning</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Premium App Experience</span>
                      <p className="text-gray-600 mt-1">Carbon footprint tracking and advanced gamification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">○</span>
                    <div>
                      <span className="font-medium">Concierge Recycling</span>
                      <p className="text-gray-600 mt-1">On-demand pickups and integrated recycling solutions</p>
                    </div>
                  </li>
                </ul>
                <button className="mt-8 text-gray-600 hover:text-gray-900">
                  Learn More →
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center opacity-75">
                  <span className="text-8xl">♻️</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        aria-label="Key features and benefits of EcoTail"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {SECTION_HEADINGS.features.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {SECTION_HEADINGS.features.subtitle}
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Frontend */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Interface</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    React + Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Real-time updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Mobile-first design
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Powerful Backend</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Node.js & Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Firebase integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Secure authentication
                  </li>
                </ul>
              </div>

              {/* IoT & AI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">IoT & AI</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    TensorFlow Lite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    MQTT protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Edge optimization
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mobile App Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Mobile Application</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-green-500">●</span>
                        Real-Time Insights
                      </h4>
                      <p className="text-gray-600">Fill-level alerts, usage stats, and sorting accuracy feedback with personalized monthly reports.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-green-500">●</span>
                        Gamification & Rewards
                      </h4>
                      <p className="text-gray-600">Earn points for correct sorting, unlock achievements, and compete on community leaderboards.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-green-500">●</span>
                        Smart Recommendations
                      </h4>
                      <p className="text-gray-600">Get personalized tips, auto-reordering suggestions, and seasonal waste reduction strategies.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/app-preview.webp"
                    alt="EcoTail mobile app interface preview"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">4.9 App Store Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section 
        className="py-16 md:py-24 bg-white"
        aria-label="Environmental impact and sustainability achievements"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {SECTION_HEADINGS.impact.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {SECTION_HEADINGS.impact.subtitle}
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">10K+</p>
              <p className="text-sm text-gray-600">Pounds of Waste<br />Diverted Monthly</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">30%</p>
              <p className="text-sm text-gray-600">Average Waste<br />Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">5K+</p>
              <p className="text-sm text-gray-600">Trees Saved<br />Annually</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">50K</p>
              <p className="text-sm text-gray-600">CO₂ Reduction<br />(lbs)</p>
            </div>
          </motion.div>

          {/* Sustainability Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Vision for Sustainability</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Closed-Loop Recycling</h4>
                    <p className="text-gray-600">Our canister swap program ensures minimal waste and optimal recycling efficiency.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Carbon Footprint Tracking</h4>
                    <p className="text-gray-600">Real-time monitoring and feedback help users understand and reduce their environmental impact.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Community Impact</h4>
                    <p className="text-gray-600">Partnerships with local organizations and municipalities create lasting environmental change.</p>
                  </div>
                </div>
                <Button className="mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400">
                  Join Our Mission
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/sustainability-vision.webp"
                  alt="EcoTail's vision for sustainable waste management"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                  <p className="text-sm font-medium text-gray-900">2025 Goal</p>
                  <p className="text-2xl font-bold text-green-600">100K+</p>
                  <p className="text-xs text-gray-600">Households Impacted</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-gray-600 mb-8">
                Join thousands of households transforming waste management with EcoTail.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Button className="w-full md:w-auto text-lg py-4 px-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400">
                  Pre-order Now
                </Button>
                <span className="text-gray-500">Starting at $99/month</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
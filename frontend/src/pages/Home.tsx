import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'

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
    <PageLayout>
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

            {/* Video/Animation Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-24 rounded-2xl overflow-hidden bg-white shadow-xl"
            >
              <div className="aspect-video relative bg-gray-50">
                {/* Placeholder for video - replace src with actual video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/video-poster.webp"
                >
                  <source src="/ecotail-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110 group-hover:bg-white">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white text-sm font-medium">
                    See EcoTail in action: Smart waste management for a sustainable future
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI-Powered Sorting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Sorting</h3>
                <p className="text-gray-600">Advanced machine learning ensures accurate waste classification and optimal recycling.</p>
              </motion.div>

              {/* Reusable Canisters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reusable Canisters</h3>
                <p className="text-gray-600">Durable, smart containers designed for long-term use and efficient waste management.</p>
              </motion.div>

              {/* Gamified Rewards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gamified Rewards</h3>
                <p className="text-gray-600">Earn points and rewards for your sustainable choices and recycling achievements.</p>
              </motion.div>

              {/* Real-Time Tracking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">Monitor your environmental impact with detailed analytics and progress tracking.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-label="Step-by-step guide to using EcoTail"
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
                {SECTION_HEADINGS.howItWorks.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {SECTION_HEADINGS.howItWorks.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-100 via-green-200 to-green-100 transform -translate-y-1/2" />

              {/* Step 1: Scan & Sort */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">📸</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto absolute -top-4 right-1/2 transform translate-x-1/2">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Scan & Sort</h3>
                  <p className="text-gray-600">Built-in AI camera identifies waste category instantly and accurately.</p>
                </div>
              </motion.div>

              {/* Step 2: Reusable Canister Swap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">♻️</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto absolute -top-4 right-1/2 transform translate-x-1/2">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reusable Canister Swap</h3>
                  <p className="text-gray-600">Say goodbye to single-use bags with our smart canister system.</p>
                </div>
              </motion.div>

              {/* Step 3: Track Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">📱</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto absolute -top-4 right-1/2 transform translate-x-1/2">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
                  <p className="text-gray-600">Get instant feedback and personalized waste reduction tips.</p>
                </div>
              </motion.div>

              {/* Step 4: Earn Rewards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto absolute -top-4 right-1/2 transform translate-x-1/2">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Earn Rewards</h3>
                  <p className="text-gray-600">Accumulate points and unlock rewards for eco-friendly habits.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button className="w-full md:w-auto text-lg py-4 px-8">
                Start Your EcoTail Journey
              </Button>
            </motion.div>
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

            <div className="space-y-12">
              {/* AI-Powered Efficiency */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4">AI-Powered Efficiency</h3>
                  <p className="text-gray-600 mb-6">
                    Our advanced machine learning algorithms instantly identify and sort waste items, 
                    preventing contamination and ensuring optimal recycling efficiency.
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-3xl font-bold text-green-600">99%</p>
                      <p className="text-sm text-gray-600">Sorting Accuracy</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-600">0.5s</p>
                      <p className="text-sm text-gray-600">Recognition Speed</p>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <blockquote className="mt-6 border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "The AI sorting is incredibly accurate and makes recycling effortless!"
                    <footer className="text-sm text-gray-500 mt-2">- Sarah M., Early Adopter</footer>
                  </blockquote>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-white rounded-2xl shadow-lg p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                </div>
              </motion.div>

              {/* Gamification & Rewards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2">
                  <h3 className="text-2xl font-semibold mb-4">Gamification & Rewards</h3>
                  <p className="text-gray-600 mb-6">
                    Turn your eco-friendly habits into rewards with our engaging gamification system. 
                    Earn points, unlock achievements, and redeem real-world benefits.
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-3xl font-bold text-green-600">50+</p>
                      <p className="text-sm text-gray-600">Achievements</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-600">$100+</p>
                      <p className="text-sm text-gray-600">Monthly Rewards</p>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <blockquote className="mt-6 border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "The rewards program keeps me motivated to maintain sustainable habits!"
                    <footer className="text-sm text-gray-500 mt-2">- Mike R., Premium User</footer>
                  </blockquote>
                </div>
                <div className="order-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">🎮</span>
                  </div>
                </div>
              </motion.div>

              {/* Real-Time Insights */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4">Real-Time Insights & Analytics</h3>
                  <p className="text-gray-600 mb-6">
                    Track your environmental impact in real-time with detailed analytics and personalized 
                    recommendations for improving your sustainability habits.
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-3xl font-bold text-green-600">24/7</p>
                      <p className="text-sm text-gray-600">Monitoring</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-600">30%</p>
                      <p className="text-sm text-gray-600">Avg. Waste Reduction</p>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <blockquote className="mt-6 border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "The insights helped me reduce my waste by 40% in just two months!"
                    <footer className="text-sm text-gray-500 mt-2">- Alex K., Business Owner</footer>
                  </blockquote>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-white rounded-2xl shadow-lg p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-label="Customer testimonials and success stories"
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
                {SECTION_HEADINGS.testimonials.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {SECTION_HEADINGS.testimonials.subtitle}
              </p>
            </motion.div>

            {/* Featured Success Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-8 mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <img
                        src="/testimonials/green-cafe.webp"
                        alt="Green Café"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Green Café</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                  <blockquote className="text-xl text-gray-800 mb-6">
                    "EcoTail revolutionized our waste management. The AI sorting and real-time analytics 
                    helped us reduce waste by 60% and cut costs significantly."
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-600">60%</p>
                      <p className="text-sm text-gray-600">Waste Reduction</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-600">$12K</p>
                      <p className="text-sm text-gray-600">Annual Savings</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-600">95%</p>
                      <p className="text-sm text-gray-600">Staff Adoption</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/testimonials/cafe-impact.webp"
                    alt="Green Café Impact"
                    className="rounded-2xl shadow-lg w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3">
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
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Individual User 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/testimonials/user1.webp"
                    alt="Emily Chen"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Emily Chen</h3>
                    <p className="text-sm text-gray-600">Homeowner</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "As a busy mom, EcoTail made it easy to teach my kids about recycling. 
                  The gamification aspect got them excited about being eco-friendly!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-green-600 font-semibold">45% Reduction</span>
                </div>
              </motion.div>

              {/* Individual User 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/testimonials/user2.webp"
                    alt="Marcus Johnson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Marcus Johnson</h3>
                    <p className="text-sm text-gray-600">Apartment Resident</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The real-time tracking helped me understand my waste patterns. 
                  I've earned over $200 in rewards just by being more mindful!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-green-600 font-semibold">$200+ Earned</span>
                </div>
              </motion.div>

              {/* Individual User 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/testimonials/user3.webp"
                    alt="Sofia Rodriguez"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Sofia Rodriguez</h3>
                    <p className="text-sm text-gray-600">Small Business Owner</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "EcoTail's AI sorting is a game-changer for my shop. We've reduced 
                  contamination in our recycling and saved on waste management costs."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-green-600 font-semibold">35% Cost Savings</span>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-sm text-gray-600 mb-6">Trusted by Leading Organizations</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <img src="/logos/cert1.svg" alt="Certification 1" className="h-12" />
                <img src="/logos/cert2.svg" alt="Certification 2" className="h-12" />
                <img src="/logos/cert3.svg" alt="Certification 3" className="h-12" />
                <img src="/logos/cert4.svg" alt="Certification 4" className="h-12" />
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
                  Ready to Transform Your Waste Management?
                </h3>
                <p className="text-gray-600 mb-8">
                  Join thousands of satisfied users who are making a difference with EcoTail.
                </p>
                <Button className="w-full md:w-auto text-lg py-4 px-8">
                  Download EcoTail Today
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 
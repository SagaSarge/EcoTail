import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import { Button } from '../components/ui/Button'
import { useState } from 'react'

export function Home() {
  const { scrollYProgress } = useScroll()
  const heroAnimation = useScrollAnimation({
    offset: ["start start", "end start"],
    inputRange: [0, 0.5],
    outputRange: [0, -50]
  })

  const previewAnimation = useScrollAnimation({
    offset: ["start end", "end start"],
    inputRange: [0, 1],
    outputRange: [100, 0]
  })

  const updateAnimation = useScrollAnimation({
    inputRange: [0.3, 0.6],
    outputRange: [50, 0]
  })

  const parallaxY = useParallax(scrollYProgress, 100)

  const [isAnnual, setIsAnnual] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroAnimation.ref}
        style={{ y: heroAnimation.y }}
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 pt-16"
      >
        {/* Fixed QR Code */}
        <div className="fixed top-8 right-8 bg-white rounded-2xl shadow-lg p-6 z-50">
          <img src="/qr-code.svg" alt="Download EcoTail" className="w-32 h-32" />
          <p className="text-sm text-gray-600 mt-3 whitespace-nowrap text-center">
            Get EcoTail for<br />your phone
          </p>
        </div>

        {/* Logo Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <span className="text-4xl">🌱</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[72px] leading-[1.1] font-bold mb-16 text-gray-900"
          >
            <span className="block">Effortless</span>
            <span className="block">Sustainability</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-gray-600 mb-16 font-normal"
          >
            AI Rewards Zero Waste
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <Button>Buy Now</Button>
            <p className="text-sm text-gray-500">For macOS 11 or later.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        className="py-32 px-4 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A New Era in Waste Management
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of waste management with EcoTail's innovative approach. 
            Our smart system combines AI technology with sustainable practices to make recycling 
            effortless and rewarding.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered Sorting",
                description: "Advanced algorithms ensure accurate waste classification",
                icon: "🤖"
              },
              {
                title: "Reusable Canisters",
                description: "Eliminate single-use bags with our durable solution",
                icon: "♻️"
              },
              {
                title: "Gamified Rewards",
                description: "Earn points and rewards for sustainable habits",
                icon: "🎮"
              },
              {
                title: "Real-Time Tracking",
                description: "Monitor your impact with detailed analytics",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-32 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How EcoTail Simplifies Your Routine
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 hidden lg:block" />

            {[
              {
                step: "1",
                title: "Scan & Sort",
                description: "Built-in AI camera identifies waste category instantly",
                icon: "📸"
              },
              {
                step: "2",
                title: "Reusable Canister Swap",
                description: "Replace single-use bags with our eco-friendly solution",
                icon: "🔄"
              },
              {
                step: "3",
                title: "Track Progress",
                description: "Get instant feedback and waste reduction tips",
                icon: "📱"
              },
              {
                step: "4",
                title: "Earn Rewards",
                description: "Accumulate points for eco-friendly habits",
                icon: "🎯"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center relative">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <span className="text-4xl mb-4 block">{step.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button>Start Your EcoTail Journey</Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Preview Section with Floating Effect */}
      <motion.section
        ref={previewAnimation.ref}
        style={{ y: previewAnimation.y, opacity: previewAnimation.opacity }}
        className="relative py-40 px-4"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
        >
          <img
            src="/eco-dashboard.webp"
            alt="EcoTail Dashboard"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.section>

      {/* Updates Section with Staggered Fade */}
      <motion.section
        ref={updateAnimation.ref}
        className="py-40 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            style={{ opacity: updateAnimation.opacity, y: updateAnimation.y }}
            className="text-center mb-32"
          >
            <h2 className="text-6xl font-bold mb-16">
              <span className="block">Discover the latest</span>
              <div className="flex items-center justify-center gap-4 mt-4">
                {/* New Notification Button */}
                <button className="group relative">
                  <div className="absolute -right-2 -top-2 z-10">
                    <div className="flex h-5 w-5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-gray-900 via-gray-950 to-black p-[1px] shadow-2xl shadow-emerald-500/20">
                    <div className="relative flex items-center gap-4 rounded-xl bg-gray-950 px-6 py-3 transition-all duration-300 group-hover:bg-gray-950/50">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 transition-transform duration-300 group-hover:scale-110">
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 rounded-lg bg-emerald-500/50 blur-sm transition-all duration-300 group-hover:blur-md" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold text-white">New Updates</span>
                        <span className="text-[10px] font-medium text-emerald-400/80">Check your notifications</span>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-150" />
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 transition-transform duration-300 group-hover:scale-150 group-hover:delay-100" />
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/30 transition-transform duration-300 group-hover:scale-150 group-hover:delay-200" />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 opacity-20 transition-opacity duration-300 group-hover:opacity-40" />
                  </div>
                </button>
                <span className="inline-block">from EcoTail</span>
              </div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Feature Cards with Staggered Animation */}
            {["Automatic updates", "New from EcoTail"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="bg-gray-50 p-16 rounded-3xl"
              >
                <h3 className="text-4xl font-semibold mb-8">{title}</h3>
                <p className="text-xl text-gray-600">
                  {index === 0
                    ? "Regular updates every four weeks, keeping your experience fresh and secure."
                    : "Discover new features and tools that enhance your sustainability journey."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-bold mb-6">Features That Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how EcoTail's innovative features transform waste management into an engaging, 
              rewarding experience while making a real impact on the environment.
            </p>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                title: "AI-Powered Efficiency",
                description: "Our advanced machine learning algorithms instantly identify and sort waste items, ensuring optimal recycling and composting outcomes.",
                benefits: [
                  "Real-time waste classification",
                  "Contamination prevention",
                  "Automated sorting guidance",
                  "Learning algorithm adaptation"
                ],
                image: "/feature-ai.webp",
                stats: { value: "99.9%", label: "Sorting Accuracy" }
              },
              {
                title: "Gamification & Rewards",
                description: "Turn your eco-friendly habits into rewards with our engaging gamification system that makes sustainability fun and rewarding.",
                benefits: [
                  "Daily eco-challenges",
                  "Achievement badges",
                  "Redeemable points",
                  "Community leaderboards"
                ],
                image: "/feature-rewards.webp",
                stats: { value: "2.5M+", label: "Points Awarded" }
              },
              {
                title: "Smart Analytics Dashboard",
                description: "Gain valuable insights into your waste patterns with detailed analytics that help you make informed decisions for a greener future.",
                benefits: [
                  "Real-time tracking",
                  "Trend analysis",
                  "Impact visualization",
                  "Custom reports"
                ],
                image: "/feature-analytics.webp",
                stats: { value: "40%", label: "Average Waste Reduction" }
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                      
                      <ul className="space-y-4">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3">
                            <span className="text-primary-500">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-primary-50 rounded-xl p-6 inline-block"
                    >
                      <div className="text-4xl font-bold text-primary-700 mb-1">
                        {feature.stats.value}
                      </div>
                      <div className="text-sm text-primary-600">
                        {feature.stats.label}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Proof Section */}
      <motion.section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how EcoTail is helping individuals and businesses make a meaningful impact 
              on the environment, one smart decision at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "EcoTail has transformed how we handle waste in our office. The analytics help us make data-driven decisions for sustainability.",
                author: "Sarah Chen",
                role: "Sustainability Lead",
                company: "GreenTech Solutions",
                image: "/testimonial-1.webp",
                result: "40% reduction in office waste"
              },
              {
                quote: "The gamification aspect makes recycling fun! My kids love competing to see who can earn more eco-points.",
                author: "Michael Rodriguez",
                role: "Parent & Environmental Advocate",
                image: "/testimonial-2.webp",
                result: "Family of 4 saving $30/month"
              },
              {
                quote: "Implementing EcoTail in our restaurant chain has significantly improved our waste management efficiency.",
                author: "Emma Thompson",
                role: "Operations Director",
                company: "Fresh Bites Group",
                image: "/testimonial-3.webp",
                result: "60% less contamination"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white flex items-center justify-center text-2xl rounded-full">
                  "
                </div>
                
                <p className="text-gray-600 mb-6 relative">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    {testimonial.company && (
                      <div className="text-sm text-primary-600">{testimonial.company}</div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium text-primary-600">
                    Result: {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button>Join Our Community</Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Choose Your EcoTail Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Select the perfect plan for your sustainability journey. All plans include our core features 
              with options to scale as your needs grow.
            </p>

            {/* Pricing Toggle */}
            <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isAnnual ? 'bg-white shadow-md text-primary-600' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAnnual ? 'bg-white shadow-md text-primary-600' : 'text-gray-600'
                }`}
              >
                Annual
                <span className="ml-1 text-xs text-primary-500">Save 20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: isAnnual ? 79 : 99,
                description: "Perfect for households starting their sustainability journey",
                features: [
                  "1 Smart Bin",
                  "Basic AI Sorting",
                  "Mobile App Access",
                  "Weekly Reports",
                  "Email Support"
                ]
              },
              {
                name: "Pro",
                price: isAnnual ? 159 : 199,
                description: "Ideal for families committed to zero waste living",
                features: [
                  "3 Smart Bins",
                  "Advanced AI Sorting",
                  "Real-time Analytics",
                  "Priority Support",
                  "Custom Reports",
                  "Family Account Sharing"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: isAnnual ? 299 : 379,
                description: "Tailored solutions for businesses and organizations",
                features: [
                  "10+ Smart Bins",
                  "Enterprise Analytics",
                  "API Access",
                  "Dedicated Support",
                  "Custom Integration",
                  "Employee Training"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-shadow duration-300 hover:shadow-2xl ${
                  plan.popular ? 'border-primary-500' : 'border-transparent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary-500">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button className="w-full">
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about EcoTail's smart waste management system.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How often do I need to swap canisters?",
                answer: "Our smart system monitors fill levels and notifies you when it's time to swap. Typically, households swap canisters every 1-2 weeks, but this varies based on usage patterns."
              },
              {
                question: "What if I don't have room for multiple canisters?",
                answer: "EcoTail's canisters are designed to be space-efficient and stackable. The base model requires only 2 square feet of floor space, making it suitable for apartments and small spaces."
              },
              {
                question: "Does EcoTail integrate with smart home systems?",
                answer: "Yes! EcoTail integrates seamlessly with popular smart home platforms including Alexa, Google Home, and Apple HomeKit. You can check bin status, schedule pickups, and more using voice commands."
              },
              {
                question: "Is there a warranty or money-back guarantee?",
                answer: "We offer a 2-year warranty on all hardware and a 30-day money-back guarantee. If you're not completely satisfied, we'll provide a full refund including return shipping."
              },
              {
                question: "How accurate is the AI sorting system?",
                answer: "Our AI system achieves 99.9% accuracy in waste classification. It continuously learns from new data and receives regular updates to improve performance and adapt to new packaging types."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
} 
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import { Button } from '../components/ui/Button'

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

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <img src="/eco-icon.svg" alt="EcoTail" className="w-40 h-40 mx-auto" />
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
            className="space-y-4"
          >
            <Button>Download EcoTail</Button>
            <p className="text-sm text-gray-500">For macOS 11 or later.</p>
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
            <h2 className="text-6xl font-bold mb-4">
              <span className="block mb-4">Discover the latest</span>
              <div className="flex items-center justify-center gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-8 py-3 bg-primary-50 text-primary-900 rounded-full"
                >
                  updates
                </motion.span>
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
    </div>
  )
} 
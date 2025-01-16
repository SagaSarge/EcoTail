import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../stores/useThemeStore';

// Product showcase data
const FEATURED_PRODUCTS = [
  {
    id: 'eco-bin-pro',
    name: 'EcoBin Pro',
    price: 99,
    description: 'AI-powered smart waste bin with sorting capabilities',
    image: '/products/eco-bin-pro.webp',
    features: ['AI Sorting', 'Mobile App', '13 Gallon'],
    badge: 'Best Seller'
  },
  {
    id: 'eco-bin-lite',
    name: 'EcoBin Lite',
    price: 79,
    description: 'Smart waste management for smaller spaces',
    image: '/products/eco-bin-lite.webp',
    features: ['Basic Sorting', 'Mobile App', '8 Gallon'],
    badge: 'New'
  },
  {
    id: 'eco-bin-plus',
    name: 'EcoBin Plus',
    price: 129,
    description: 'Premium smart bin with advanced analytics',
    image: '/products/eco-bin-plus.webp',
    features: ['Advanced Analytics', 'Voice Control', '15 Gallon'],
    badge: 'Premium'
  }
]

export function Home() {
  const { theme } = useThemeStore();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center relative bg-eco-particles"
        aria-label="Hero section showcasing EcoTail's smart waste bins"
      >
        <div className="max-w-4xl mx-auto text-center px-4 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-10"
          >
            <h1 className="flex flex-col items-center max-w-4xl">
              <span className="text-hero-heading font-bold text-eco-secondary mt-8 tracking-tight">
                Smartly Sustainable
              </span>
              <span className="text-hero-subheading text-eco-neutral font-medium tracking-tight leading-tight max-w-[90%]">
                AI-Powered, Zero Impact
              </span>
            </h1>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-8">
              <Button 
                variant="primary"
                size="xl"
                className="w-full md:w-auto bg-eco-cta-orange hover:bg-eco-cta-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
                onClick={() => window.location.href = '#products'}
              >
                Get Started Today
              </Button>
              <a
                href="#demo"
                className="text-eco-neutral hover:text-eco-secondary text-sm font-medium transition-colors duration-300 hover:translate-y-[-1px] mt-2 block"
              >
                Request a Demo →
              </a>
            </div>

            <p className="text-base md:text-lg text-eco-neutral max-w-2xl mx-auto mt-6">
              Transform your waste into a positive force with AI sorting, gamified challenges, and real-time eco-tracking. Join the movement now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section
        id="products"
        className="py-16 md:py-24 bg-white"
        aria-label="Featured EcoTail products"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-eco-secondary mb-4">
              Choose Your EcoBin
            </h2>
            <p className="text-lg text-eco-neutral max-w-2xl mx-auto">
              Select the perfect smart bin that matches your needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg mb-6"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-eco-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-eco-dark-bg mb-2">
                  {product.name}
                </h3>
                <p className="text-eco-neutral mb-4">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span 
                      key={feature}
                      className="bg-eco-primary/20 text-eco-secondary text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-eco-secondary">
                    ${product.price}
                    <span className="text-sm font-normal text-eco-neutral">/mo</span>
                  </p>
                  <Button 
                    variant="primary"
                    className="bg-eco-cta-orange hover:bg-eco-cta-orange-dark text-white transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24 bg-eco-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 bg-eco-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-eco-secondary mb-2">Smart Sorting</h3>
              <p className="text-eco-neutral">AI-powered waste categorization for effortless recycling</p>
            </motion.div>

            {/* Mobile App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 bg-eco-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-eco-secondary mb-2">Mobile Control</h3>
              <p className="text-eco-neutral">Monitor and manage your waste from anywhere</p>
            </motion.div>

            {/* Eco Rewards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 bg-eco-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-eco-secondary mb-2">Eco Rewards</h3>
              <p className="text-eco-neutral">Earn points and rewards for sustainable choices</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
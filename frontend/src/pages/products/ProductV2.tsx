import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export function ProductV2() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <div className="relative">
              <img 
                src="/products/eco-bin-pro.webp" 
                alt="EcoBin Pro - Advanced Smart Waste Management"
                className="w-full rounded-2xl shadow-lg"
              />
              <span className="absolute top-4 right-4 bg-eco-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                V2
              </span>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-secondary">
                EcoBin Pro
              </h1>
              <p className="text-xl text-eco-neutral">
                Starting from <span className="font-bold">$99/month</span>
              </p>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-eco-secondary">Key Features:</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-eco-primary">✓</span>
                    <span className="text-eco-neutral">Advanced AI sorting with 95% accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-eco-primary">✓</span>
                    <span className="text-eco-neutral">13 Gallon capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-eco-primary">✓</span>
                    <span className="text-eco-neutral">Real-time waste analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-eco-primary">✓</span>
                    <span className="text-eco-neutral">Voice control capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-eco-primary">✓</span>
                    <span className="text-eco-neutral">Automated maintenance alerts</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-eco-secondary">Perfect For:</h2>
                <ul className="space-y-2">
                  <li className="text-eco-neutral">• Medium-sized offices</li>
                  <li className="text-eco-neutral">• Restaurants</li>
                  <li className="text-eco-neutral">• Retail spaces</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  variant="primary"
                  className="bg-eco-cta-orange hover:bg-eco-cta-orange/90 text-white"
                >
                  Order Now
                </Button>
                <Button 
                  variant="secondary"
                  className="text-eco-neutral hover:text-eco-secondary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import { Button } from '../components/ui/Button'
import { useState } from 'react'

export function Home() {
  const { scrollY } = useScroll()
  
  // Transform for the hero images sliding left
  const heroImagesX = useTransform(scrollY, 
    [0, 400], 
    ['0%', '-30%']
  )
  
  // Transform for the navigation opacity
  const navOpacity = useTransform(scrollY,
    [0, 100],
    [0, 1]
  )

  return (
    <div className="relative">
      {/* Sticky Navigation that appears on scroll */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg">🌱</span>
              </div>
              <span className="font-medium">Updates</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-600">AI</span>
              <span className="text-gray-600">Yours</span>
              <span className="text-gray-600">Safe</span>
              <span className="text-gray-600">Fast</span>
              <span className="text-gray-600">By EcoTail</span>
            </div>
          </div>
          <Button>Download EcoTail</Button>
        </div>
      </motion.nav>

      {/* Hero Section with Persistent Images */}
      <div className="min-h-screen">
        {/* Your existing hero content */}
        {/* ... */}
      </div>

      {/* Transition Section with Sliding Images */}
      <motion.div 
        style={{ x: heroImagesX }}
        className="relative h-[80vh] bg-gradient-to-b from-white to-gray-50"
      >
        <div className="absolute inset-0 flex items-center">
          {/* Hero images that persist and slide left */}
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-4xl">🌱</span>
            </div>
            {/* Add more decorative elements that match your hero section */}
          </div>
        </div>

        {/* Content that appears as you scroll */}
        <div className="relative z-10 max-w-6xl mx-auto pt-32 px-4">
          <h2 className="text-6xl font-bold mb-16">
            <span className="block">Discover the latest</span>
            <div className="flex items-center gap-4 mt-4">
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
        </div>
      </motion.div>

      {/* Rest of your sections */}
      {/* ... */}
    </div>
  )
} 
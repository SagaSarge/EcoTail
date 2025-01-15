import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'

export function Home() {
  return (
    <PageLayout>
      <div className="relative">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center relative">
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
      </div>
    </PageLayout>
  )
} 
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ContentLayout } from '../components/layout/ContentLayout'

interface Feature {
  id: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: 'ai-recognition',
    title: 'AI Recognition',
    description: 'Advanced machine learning algorithms for precise waste classification.'
  },
  {
    id: 'real-time-monitoring',
    title: 'Real-time Monitoring',
    description: 'Continuous tracking of waste metrics and system performance.'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Data-driven insights for optimizing waste management processes.'
  }
]

export function AIInnovations() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(selectedFeature === featureId ? null : featureId)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`p-6 rounded-xl shadow-lg cursor-pointer ${
                  selectedFeature === feature.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => handleFeatureClick(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
} 
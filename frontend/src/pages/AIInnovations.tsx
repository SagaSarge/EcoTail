import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, Suspense } from 'react'
import { ContentLayout } from '../components/layout/ContentLayout'
import { ErrorBoundary } from '../components/common/ErrorBoundary'
import { useAnalytics } from '../hooks/useAnalytics'
import { Spinner } from '../components/common/Spinner'

/**
 * Interface representing a feature in the AI Innovations page
 */
interface Feature {
  id: string
  title: string
  description: string
  version: string
  details: string[]
  metrics: {
    label: string
    value: string
  }[]
}

/**
 * Array of AI features with their details and metrics
 */
const features: Feature[] = [
  {
    id: 'ai-recognition',
    title: 'AI Recognition',
    description: 'Advanced machine learning algorithms for precise waste classification.',
    version: 'V4',
    details: [
      'Real-time waste categorization',
      'Multi-material detection',
      'Contamination prevention',
      'Learning from user feedback'
    ],
    metrics: [
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Processing Time', value: '<0.5s' }
    ]
  },
  {
    id: 'real-time-monitoring',
    title: 'Real-time Monitoring',
    description: 'Continuous tracking of waste metrics and system performance.',
    version: 'V4',
    details: [
      'Fill level tracking',
      'Temperature monitoring',
      'Odor detection',
      'Predictive maintenance'
    ],
    metrics: [
      { label: 'Update Frequency', value: 'Real-time' },
      { label: 'Sensor Accuracy', value: '99.5%' }
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Data-driven insights for optimizing waste management processes.',
    version: 'V4',
    details: [
      'Collection route optimization',
      'Waste trend analysis',
      'Cost reduction strategies',
      'Environmental impact tracking'
    ],
    metrics: [
      { label: 'Cost Savings', value: '45%' },
      { label: 'Route Efficiency', value: '85%' }
    ]
  }
]

/**
 * AIInnovations component displays the AI capabilities of the EcoTail system
 * @returns React component displaying AI features and their details
 */
export function AIInnovations(): JSX.Element {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { trackEvent } = useAnalytics()

  const handleFeatureClick = useCallback((featureId: string): void => {
    setIsLoading(true)
    trackEvent('feature_click', { featureId })
    setSelectedFeature(prevSelected => prevSelected === featureId ? null : featureId)
    // Simulate loading for smooth animation
    setTimeout(() => setIsLoading(false), 300)
  }, [trackEvent])

  const handleKeyDown = useCallback((featureId: string) => (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFeatureClick(featureId)
    }
  }, [handleFeatureClick])

  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please try again later.</div>}>
      <ContentLayout
        title="AI Innovations"
        description="Discover our cutting-edge AI solutions for smart waste management"
      >
        <Suspense fallback={<Spinner />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white dark:bg-gray-900"
            role="main"
            aria-label="AI Innovations features"
          >
            <section className="py-24" aria-labelledby="ai-innovations-title">
              <div className="container mx-auto px-4">
                <h2 id="ai-innovations-title" className="sr-only">AI Innovation Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`p-6 rounded-xl shadow-lg cursor-pointer 
                        ${selectedFeature === feature.id ? 'ring-2 ring-green-500 dark:ring-green-400' : ''}
                        bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                        transition-colors duration-200
                      `}
                      onClick={() => handleFeatureClick(feature.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      role="button"
                      aria-expanded={selectedFeature === feature.id}
                      aria-controls={`${feature.id}-details`}
                      tabIndex={0}
                      onKeyDown={handleKeyDown(feature.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <span 
                          className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm rounded-full" 
                          aria-label={`Version ${feature.version}`}
                        >
                          {feature.version}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                      
                      <AnimatePresence mode="wait">
                        {selectedFeature === feature.id && !isLoading && (
                          <motion.div
                            id={`${feature.id}-details`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4"
                          >
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                Key Features
                              </h4>
                              <ul className="space-y-2" role="list">
                                {feature.details.map((detail, index) => (
                                  <li 
                                    key={`${feature.id}-detail-${index}`} 
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-green-500 dark:text-green-400" aria-hidden="true">•</span>
                                    <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div 
                              className="grid grid-cols-2 gap-4" 
                              role="group" 
                              aria-label={`${feature.title} metrics`}
                            >
                              {feature.metrics.map((metric, index) => (
                                <div 
                                  key={`${feature.id}-metric-${index}`} 
                                  className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
                                >
                                  <div className="font-semibold text-green-600 dark:text-green-400">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        {isLoading && selectedFeature === feature.id && (
                          <div className="flex justify-center py-8">
                            <Spinner size="sm" />
                          </div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </Suspense>
      </ContentLayout>
    </ErrorBoundary>
  )
} 
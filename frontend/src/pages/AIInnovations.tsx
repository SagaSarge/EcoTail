import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, Suspense, useEffect } from 'react'
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

  useEffect(() => {
    trackEvent('page_view', { page: 'ai-innovations' })
  }, [trackEvent])

  const handleFeatureClick = useCallback((featureId: string): void => {
    setIsLoading(true)
    trackEvent('feature_click', { featureId })
    setSelectedFeature(prevSelected => prevSelected === featureId ? null : featureId)
    setTimeout(() => setIsLoading(false), 300)
  }, [trackEvent])

  const handleKeyDown = useCallback((featureId: string) => (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFeatureClick(featureId)
    }
  }, [handleFeatureClick])

  return (
    <ErrorBoundary 
      fallback={
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#02402C] dark:text-[#7DD8C6]">
            Oops! Something went wrong
          </h2>
          <p className="text-[#5E7D7E] dark:text-[#F7F4EC]">
            Please try refreshing the page or contact support if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#7DD8C6] hover:bg-[#6BC7B5] text-[#1A2421] font-medium rounded-lg 
              transition-colors duration-200
              dark:bg-[#02402C] dark:hover:bg-[#035038] dark:text-[#7DD8C6]"
          >
            Refresh Page
          </button>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#F7F4EC] dark:bg-[#1A2421]"
      >
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#02402C] dark:text-[#7DD8C6] mb-4">
              AI Innovations
            </h1>
            <p className="text-xl text-[#5E7D7E] dark:text-[#F7F4EC] max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI solutions for smart waste management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => trackEvent('pre_order_click')}
                className="px-6 py-3 bg-[#7DD8C6] hover:bg-[#6BC7B5] text-[#1A2421] font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]
                  dark:bg-[#02402C] dark:hover:bg-[#035038] dark:text-[#7DD8C6]"
              >
                Pre-order Now
              </button>
              <span className="text-[#5E7D7E] dark:text-[#F7F4EC]">
                Starting at $99/month
              </span>
            </div>
          </div>

          <Suspense fallback={<Spinner />}>
            <section className="py-12" aria-labelledby="ai-innovations-title">
              <div className="container mx-auto px-4">
                <h2 id="ai-innovations-title" className="sr-only">AI Innovation Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`p-6 rounded-xl shadow-lg cursor-pointer 
                        ${selectedFeature === feature.id ? 'ring-2 ring-[#7DD8C6] dark:ring-[#7DD8C6]' : ''}
                        bg-white dark:bg-[#1A2421] hover:bg-[#F7F4EC] dark:hover:bg-[#02402C]
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
                        <h3 className="text-xl font-semibold text-[#02402C] dark:text-[#7DD8C6]">
                          {feature.title}
                        </h3>
                        <span 
                          className="px-3 py-1.5 bg-[#7DD8C6] text-[#1A2421] dark:bg-[#02402C] dark:text-[#7DD8C6] text-sm rounded-full font-medium" 
                          aria-label={`Version ${feature.version}`}
                        >
                          {feature.version}
                        </span>
                      </div>
                      <p className="text-[#5E7D7E] dark:text-[#F7F4EC] mb-4">{feature.description}</p>
                      
                      <AnimatePresence mode="wait">
                        {selectedFeature === feature.id && !isLoading && (
                          <motion.div
                            id={`${feature.id}-details`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4"
                          >
                            <div className="border-t border-[#5E7D7E]/20 dark:border-[#5E7D7E]/20 pt-4">
                              <h4 className="font-semibold mb-2 text-[#02402C] dark:text-[#7DD8C6]">
                                Key Features
                              </h4>
                              <ul className="space-y-2" role="list">
                                {feature.details.map((detail, index) => (
                                  <li 
                                    key={`${feature.id}-detail-${index}`} 
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-[#7DD8C6] dark:text-[#7DD8C6]" aria-hidden="true">•</span>
                                    <span className="text-[#5E7D7E] dark:text-[#F7F4EC]">{detail}</span>
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
                                  className="bg-[#F7F4EC] dark:bg-[#02402C] p-4 rounded-lg text-center"
                                >
                                  <div className="font-semibold text-[#02402C] dark:text-[#7DD8C6] text-lg">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-[#5E7D7E] dark:text-[#F7F4EC]">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        {isLoading && selectedFeature === feature.id && (
                          <div className="flex justify-center py-8">
                            <Spinner size="sm" className="text-[#7DD8C6]" />
                          </div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </Suspense>
        </div>
      </motion.div>
    </ErrorBoundary>
  )
}
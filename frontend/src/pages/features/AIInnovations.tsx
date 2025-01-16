import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, Suspense, useEffect } from 'react'
import { ErrorBoundary } from '../../components/error/ErrorBoundary'
import { useAnalytics } from '../../hooks/useAnalytics'
import { Spinner } from '../../components/ui/Spinner'

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
 */
export function AIInnovations(): JSX.Element {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { trackEvent, trackPageView } = useAnalytics()

  useEffect(() => {
    trackPageView('/features/ai-innovations')
  }, [trackPageView])

  const handleFeatureClick = useCallback((featureId: string): void => {
    setIsLoading(true)
    trackEvent({
      category: 'Features',
      action: 'Feature Click',
      label: featureId,
      value: 1
    })
    setSelectedFeature(prevSelected => prevSelected === featureId ? null : featureId)
    setTimeout(() => setIsLoading(false), 300)
  }, [trackEvent])

  const handlePreOrderClick = useCallback((): void => {
    trackEvent({
      category: 'Conversion',
      action: 'Pre-order Click',
      label: 'AI Innovations',
      value: 1
    })
  }, [trackEvent])

  const handleKeyDown = useCallback((featureId: string) => (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleFeatureClick(featureId)
    }
  }, [handleFeatureClick])

  return (
    <ErrorBoundary 
      fallback={
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-eco-secondary dark:text-eco-primary">
            Oops! Something went wrong
          </h2>
          <p className="text-eco-neutral dark:text-eco-light">
            Please try refreshing the page or contact support if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-eco-primary hover:bg-eco-primary/90 text-eco-dark font-medium rounded-lg 
              transition-all duration-200
              dark:bg-eco-secondary dark:hover:bg-eco-secondary/90 dark:text-eco-primary"
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
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="min-h-screen bg-eco-light dark:bg-eco-dark"
      >
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-eco-secondary dark:text-eco-primary mb-4">
              AI Innovations
            </h1>
            <p className="text-xl text-eco-neutral dark:text-eco-light max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI solutions for smart waste management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handlePreOrderClick}
                className="px-6 py-3 bg-eco-cta-orange hover:bg-eco-cta-orange/90 text-white font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
                aria-label="Pre-order AI Innovations"
              >
                Pre-order Now
              </button>
              <span className="text-eco-neutral dark:text-eco-light">
                Starting at $99/month
              </span>
            </div>
          </div>

          <Suspense fallback={<div className="flex justify-center py-8"><Spinner size="lg" /></div>}>
            <section className="py-12" aria-labelledby="ai-innovations-title">
              <div className="container mx-auto px-4">
                <h2 id="ai-innovations-title" className="sr-only">AI Innovation Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`p-6 rounded-xl shadow-lg cursor-pointer 
                        ${selectedFeature === feature.id ? 'ring-2 ring-eco-primary dark:ring-eco-primary' : ''}
                        bg-white dark:bg-eco-dark hover:bg-eco-light dark:hover:bg-eco-secondary
                        transition-all duration-200
                      `}
                      onClick={() => handleFeatureClick(feature.id)}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                      role="button"
                      aria-expanded={selectedFeature === feature.id}
                      aria-controls={`${feature.id}-details`}
                      tabIndex={0}
                      onKeyDown={handleKeyDown(feature.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-eco-secondary dark:text-eco-primary">
                          {feature.title}
                        </h3>
                        <span 
                          className="px-3 py-1.5 bg-eco-primary text-eco-dark dark:bg-eco-secondary dark:text-eco-primary text-sm rounded-full font-medium" 
                          aria-label={`Version ${feature.version}`}
                        >
                          {feature.version}
                        </span>
                      </div>
                      <p className="text-eco-neutral dark:text-eco-light mb-4">{feature.description}</p>
                      
                      <AnimatePresence mode="wait" initial={false}>
                        {selectedFeature === feature.id && !isLoading && (
                          <motion.div
                            id={`${feature.id}-details`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="space-y-4"
                          >
                            <div className="border-t border-eco-neutral/20 dark:border-eco-neutral/20 pt-4">
                              <h4 className="font-semibold mb-2 text-eco-secondary dark:text-eco-primary">
                                Key Features
                              </h4>
                              <ul className="space-y-2" role="list">
                                {feature.details.map((detail, index) => (
                                  <li 
                                    key={`${feature.id}-detail-${index}`} 
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-eco-primary dark:text-eco-primary" aria-hidden="true">•</span>
                                    <span className="text-eco-neutral dark:text-eco-light">{detail}</span>
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
                                  className="bg-eco-light dark:bg-eco-secondary p-4 rounded-lg text-center"
                                >
                                  <div className="font-semibold text-eco-secondary dark:text-eco-primary text-lg">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-eco-neutral dark:text-eco-light">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        {isLoading && selectedFeature === feature.id && (
                          <div 
                            className="flex justify-center py-8"
                            aria-live="polite"
                            aria-busy="true"
                            role="status"
                          >
                            <Spinner size="sm" className="text-eco-primary" />
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
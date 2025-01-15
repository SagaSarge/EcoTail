import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'

const innovations = [
  {
    title: 'Smart Waste Recognition',
    description:
      'Our advanced AI algorithms can identify and categorize waste items with over 95% accuracy, making recycling effortless and error-free.',
    icon: '🤖',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Machine learning models analyze waste patterns to optimize collection routes and predict bin capacity needs before they arise.',
    icon: '📊',
  },
  {
    title: 'Real-time Optimization',
    description:
      'Continuous learning systems adapt to changing waste patterns, ensuring optimal sorting and processing efficiency.',
    icon: '⚡',
  },
  {
    title: 'Computer Vision Integration',
    description:
      'Advanced image recognition technology helps identify contamination in recycling streams and provides instant feedback.',
    icon: '👁️',
  },
]

export function AIInnovations() {
  return (
    <ContentLayout
      title="AI Innovations"
      description="Discover how EcoTail leverages cutting-edge artificial intelligence to revolutionize waste management."
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {innovations.map((innovation, index) => (
          <motion.div
            key={innovation.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
          >
            <div className="mb-4 text-3xl">{innovation.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {innovation.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{innovation.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 rounded-lg bg-primary-50 p-6 dark:bg-primary-900/10"
      >
        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          The Future of Waste Management
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Our AI technology is continuously evolving, learning from millions of waste disposal
          interactions to become more accurate and efficient. By combining machine learning with
          real-world waste management challenges, we're creating a smarter, more sustainable future.
        </p>
      </motion.div>
    </ContentLayout>
  )
} 
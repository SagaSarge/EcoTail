import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'

const features = [
  {
    title: 'Zero Waste Solutions',
    description:
      'Our comprehensive approach to waste reduction ensures that materials are reused, recycled, or composted, minimizing landfill impact.',
    stats: '90% Waste Reduction',
    icon: '♻️',
  },
  {
    title: 'Carbon Footprint Tracking',
    description:
      'Monitor and reduce your environmental impact with real-time carbon footprint tracking and actionable insights.',
    stats: '-45% CO2 Emissions',
    icon: '🌱',
  },
  {
    title: 'Sustainable Materials',
    description:
      'All EcoTail bins and equipment are made from recycled materials and designed for longevity and future recyclability.',
    stats: '100% Recyclable',
    icon: '🌿',
  },
]

const impactMetrics = [
  { label: 'Waste Diverted', value: '1.2M', unit: 'Tons' },
  { label: 'Trees Saved', value: '850K', unit: 'Trees' },
  { label: 'CO2 Reduced', value: '2.5M', unit: 'Tons' },
  { label: 'Water Saved', value: '4.8B', unit: 'Gallons' },
]

export function Clean() {
  return (
    <ContentLayout
      title="Clean & Sustainable"
      description="Leading the way in sustainable waste management with innovative solutions that protect our planet."
    >
      <div className="space-y-16">
        {/* Features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{feature.description}</p>
              <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                {feature.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg bg-primary-50 p-8 dark:bg-primary-900/10"
        >
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-white">
            Our Environmental Impact
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {metric.unit}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Join the Sustainability Movement
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Be part of the solution. Start your journey towards zero waste today.
          </p>
          <button className="rounded-lg bg-primary-600 px-6 py-3 text-white shadow-sm transition hover:bg-primary-700">
            Get Started with EcoTail
          </button>
        </motion.div>
      </div>
    </ContentLayout>
  )
} 
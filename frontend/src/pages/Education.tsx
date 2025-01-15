import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'

const resources = [
  {
    title: 'Waste Management Basics',
    description: 'Learn the fundamentals of proper waste sorting and recycling techniques.',
    duration: '15 min read',
    type: 'Article',
    icon: '📚',
  },
  {
    title: 'Smart Bin Technology',
    description: 'Discover how AI and IoT are revolutionizing waste collection and sorting.',
    duration: '10 min video',
    type: 'Video',
    icon: '🎥',
  },
  {
    title: 'Sustainability Guide',
    description: 'Comprehensive guide to reducing waste and living more sustainably.',
    duration: '30 min read',
    type: 'Guide',
    icon: '📖',
  },
  {
    title: 'Interactive Tutorial',
    description: 'Hands-on learning experience with our smart bin system.',
    duration: '20 min',
    type: 'Interactive',
    icon: '🎮',
  },
]

const topics = [
  {
    title: 'Recycling Best Practices',
    lessons: ['Sorting Basics', 'Common Mistakes', 'Local Guidelines'],
    icon: '♻️',
  },
  {
    title: 'Sustainable Living',
    lessons: ['Zero Waste Lifestyle', 'Composting', 'Reducing Consumption'],
    icon: '🌱',
  },
  {
    title: 'Technology & Environment',
    lessons: ['AI in Recycling', 'Smart Cities', 'Data Analytics'],
    icon: '🤖',
  },
]

export function Education() {
  return (
    <ContentLayout
      title="Education Center"
      description="Explore our educational resources and learn how to make a positive environmental impact."
    >
      <div className="space-y-16">
        {/* Featured Resources */}
        <section>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Featured Resources
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-800"
              >
                <div className="mb-4 text-3xl">{resource.icon}</div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/20 dark:text-primary-300">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{resource.duration}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Learning Paths
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <div className="mb-4 text-3xl">{topic.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {topic.title}
                </h3>
                <ul className="space-y-2">
                  {topic.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-lg bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 transition hover:bg-primary-100 dark:bg-primary-900/10 dark:text-primary-400 dark:hover:bg-primary-900/20">
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-lg bg-primary-50 p-8 text-center dark:bg-primary-900/10"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Stay Updated with EcoTail Education
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Subscribe to receive weekly tips, new resources, and sustainability insights.
          </p>
          <form className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-600 px-6 py-2 text-white shadow-sm transition hover:bg-primary-700 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </div>
    </ContentLayout>
  )
} 
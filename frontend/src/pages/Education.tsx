import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'
import { useState } from 'react'

// Progress tracking interface
interface Progress {
  completed: string[]
  currentModule: string | null
}

const resources = [
  {
    title: 'Waste Management Basics',
    description: 'Learn the fundamentals of proper waste sorting and recycling techniques.',
    duration: '15 min read',
    type: 'Article',
    icon: '📚',
    difficulty: 'Beginner'
  },
  {
    title: 'Smart Bin Technology',
    description: 'Discover how AI and IoT are revolutionizing waste collection and sorting.',
    duration: '10 min video',
    type: 'Video',
    icon: '🎥',
    difficulty: 'Intermediate'
  },
  {
    title: 'Sustainability Guide',
    description: 'Comprehensive guide to reducing waste and living more sustainably.',
    duration: '30 min read',
    type: 'Guide',
    icon: '📖',
    difficulty: 'Beginner'
  },
  {
    title: 'Interactive Tutorial',
    description: 'Hands-on learning experience with our smart bin system.',
    duration: '20 min',
    type: 'Interactive',
    icon: '🎮',
    difficulty: 'Advanced'
  },
]

const topics = [
  {
    title: 'Recycling Best Practices',
    lessons: ['Sorting Basics', 'Common Mistakes', 'Local Guidelines'],
    icon: '♻️',
    description: 'Master the fundamentals of effective recycling and waste reduction.',
  },
  {
    title: 'Sustainable Living',
    lessons: ['Zero Waste Lifestyle', 'Composting', 'Reducing Consumption'],
    icon: '🌱',
    description: 'Transform your lifestyle with practical sustainability tips.',
  },
  {
    title: 'Technology & Environment',
    lessons: ['AI in Recycling', 'Smart Cities', 'Data Analytics'],
    icon: '🤖',
    description: 'Explore how technology is shaping environmental conservation.',
  },
]

const certifications = [
  {
    title: 'EcoTail Certified User',
    description: 'Complete the basics and become a certified EcoTail user.',
    requirements: ['Complete Waste Management Basics', 'Pass certification quiz'],
    icon: '🏆',
    level: 'Basic'
  },
  {
    title: 'Sustainability Champion',
    description: 'Advanced certification for sustainability experts.',
    requirements: ['Complete all learning paths', 'Submit case study'],
    icon: '🌟',
    level: 'Advanced'
  }
]

export function Education() {
  const [progress, setProgress] = useState<Progress>({
    completed: [],
    currentModule: null
  })

  const [activeTab, setActiveTab] = useState('all')

  return (
    <ContentLayout
      title="Education Center"
      description="Explore our educational resources and learn how to make a positive environmental impact."
    >
      <div className="space-y-16">
        {/* Progress Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-1">Resources Completed</h3>
              <p className="text-2xl font-bold text-green-600">{progress.completed.length} / {resources.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-1">Current Focus</h3>
              <p className="text-gray-600">{progress.currentModule || 'Not started'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1">Achievements</h3>
              <p className="text-2xl font-bold text-green-600">0 / {certifications.length}</p>
            </div>
          </div>
        </motion.section>

        {/* Featured Resources */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Resources</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === 'all'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('beginner')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === 'beginner'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === 'advanced'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Advanced
              </button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {resources
              .filter(
                resource =>
                  activeTab === 'all' ||
                  resource.difficulty.toLowerCase() === activeTab
              )
              .map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-800"
                >
                  <div className="mb-4 text-3xl">{resource.icon}</div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.difficulty}</span>
                    <button 
                      onClick={() => {
                        setProgress(prev => ({
                          ...prev,
                          currentModule: resource.title,
                          completed: [...prev.completed, resource.title]
                        }))
                      }}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      {progress.completed.includes(resource.title) ? 'Completed ✓' : 'Start Learning →'}
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Learning Paths</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 text-3xl">{topic.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {topic.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{topic.description}</p>
                <div className="space-y-3">
                  {topic.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lesson}
                      className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm text-gray-600">{lesson}</span>
                      <span className="text-xs text-gray-400">Lesson {lessonIndex + 1}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-100">
                  Start Path
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Get Certified</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * (index + 1) }}
                className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                    <span className="text-sm text-green-600">{cert.level} Level</span>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{cert.description}</p>
                <div className="space-y-2 mb-6">
                  {cert.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">•</span>
                      {req}
                    </div>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                  Start Certification
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
          className="rounded-lg bg-gradient-to-br from-green-50 to-gray-50 p-8 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Stay Updated with EcoTail Education
          </h2>
          <p className="mb-6 text-gray-600">
            Subscribe to receive weekly tips, new resources, and sustainability insights.
          </p>
          <form className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-6 py-2 text-white shadow-sm transition hover:bg-green-700 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </div>
    </ContentLayout>
  )
} 
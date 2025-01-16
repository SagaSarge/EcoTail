import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'
import { useState } from 'react'

// Core interfaces
interface LearningPath {
  title: string
  description: string
  icon: string
  duration: string
  difficulty: string
  modules: {
    title: string
    lessons: string[]
    duration: string
    skills: string[]
  }[]
}

interface Resource {
  title: string
  description: string
  duration: string
  type: string
  icon: string
  difficulty: string
}

interface Progress {
  completed: string[]
  totalHours: number
  badges: {
    id: string
    name: string
    icon: string
    unlockedAt: string
  }[]
  lastActive: string
}

// Mock data
const learningPaths: LearningPath[] = [
  {
    title: 'Waste Management Fundamentals',
    description: 'Master the core principles of modern waste management',
    icon: '♻️',
    duration: '3 months',
    difficulty: 'Beginner',
    modules: [
      {
        title: 'Basics of Recycling',
        lessons: ['Material Types', 'Sorting Guidelines'],
        duration: '2 weeks',
        skills: ['Material Identification', 'Sorting']
      }
    ]
  },
  {
    title: 'Smart Technology in Waste Management',
    description: 'Explore how AI and IoT are transforming waste management',
    icon: '🤖',
    duration: '4 months',
    difficulty: 'Intermediate',
    modules: [
      {
        title: 'AI in Recycling',
        lessons: ['Machine Learning Basics', 'Smart Sorting'],
        duration: '6 weeks',
        skills: ['AI Understanding', 'Technical Analysis']
      }
    ]
  }
]

const resources: Resource[] = [
  {
    title: 'Introduction to Waste Management',
    description: 'Learn the fundamentals of proper waste sorting.',
    duration: '15 min read',
    type: 'Article',
    icon: '📚',
    difficulty: 'Beginner'
  },
  {
    title: 'Smart Bin Technology Overview',
    description: 'Discover how AI and IoT revolutionize waste collection.',
    duration: '10 min video',
    type: 'Video',
    icon: '🎥',
    difficulty: 'Intermediate'
  }
]

const badges = [
  {
    id: 'quick-start',
    name: 'Quick Starter',
    icon: '🚀',
    description: 'Complete your first module'
  },
  {
    id: 'path-complete',
    name: 'Path Pioneer',
    icon: '🏆',
    description: 'Complete an entire learning path'
  }
]

export function Education() {
  const [progress, setProgress] = useState<Progress>({
    completed: [],
    totalHours: 0,
    badges: [],
    lastActive: new Date().toISOString()
  })

  // Calculate total modules
  const totalModules = learningPaths.reduce(
    (total, path) => total + path.modules.length,
    0
  )

  // Handle completing a lesson
  const handleCompleteLesson = (pathTitle: string, moduleTitle: string, lesson: string) => {
    const lessonId = `${pathTitle} - ${moduleTitle} - ${lesson}`
    if (!progress.completed.includes(lessonId)) {
      setProgress(prev => ({
        ...prev,
        completed: [...prev.completed, lessonId],
        totalHours: prev.totalHours + 1,
        lastActive: new Date().toISOString()
      }))

      // Award Quick Starter badge for first completion
      if (progress.completed.length === 0) {
        unlockBadge('quick-start')
      }
    }
  }

  // Handle unlocking badges
  const unlockBadge = (badgeId: string) => {
    const badge = badges.find(b => b.id === badgeId)
    if (badge && !progress.badges.some(b => b.id === badgeId)) {
      setProgress(prev => ({
        ...prev,
        badges: [...prev.badges, {
          ...badge,
          unlockedAt: new Date().toISOString()
        }]
      }))
    }
  }

  // Calculate path progress
  const getPathProgress = (path: LearningPath) => {
    const totalLessons = path.modules.reduce(
      (total, module) => total + module.lessons.length,
      0
    )
    const completedLessons = path.modules.reduce((total, module) => {
      return total + module.lessons.filter(lesson => 
        progress.completed.includes(`${path.title} - ${module.title} - ${lesson}`)
      ).length
    }, 0)
    return Math.round((completedLessons / totalLessons) * 100)
  }

  return (
    <ContentLayout
      title="Education Center"
      description="Explore our learning paths and become a waste management expert."
    >
      <div className="space-y-16">
        {/* Progress Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#7DD8C6]/10 to-[#5E7D7E]/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-[#1A2421] mb-8">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-1 text-[#02402C]">Completed Modules</h3>
              <p className="text-2xl font-bold text-[#7DD8C6]">
                {progress.completed.length}
              </p>
              <p className="text-sm text-[#5E7D7E] mt-1">
                {Math.round((progress.completed.length / totalModules) * 100)}% complete
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-semibold mb-1 text-[#02402C]">Total Hours</h3>
              <p className="text-2xl font-bold text-[#7DD8C6]">{progress.totalHours}h</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1 text-[#02402C]">Badges Earned</h3>
              <p className="text-2xl font-bold text-[#7DD8C6]">{progress.badges.length}</p>
              <p className="text-sm text-[#5E7D7E] mt-1">
                {badges.length - progress.badges.length} to unlock
              </p>
            </div>
          </div>
        </motion.section>

        {/* Learning Paths */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A2421] mb-8">Learning Paths</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-semibold text-[#02402C] mb-2">
                  {path.title}
                </h3>
                <p className="text-[#5E7D7E] mb-4">{path.description}</p>
                <div className="space-y-4">
                  {path.modules.map(module => (
                    <div key={module.title} className="bg-[#F7F4EC] rounded-lg p-4">
                      <h4 className="font-medium text-[#02402C] mb-2">
                        {module.title}
                      </h4>
                      <div className="space-y-2">
                        {module.lessons.map(lesson => (
                          <div
                            key={lesson}
                            onClick={() => handleCompleteLesson(path.title, module.title, lesson)}
                            className="flex items-center text-sm cursor-pointer group"
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 transition-colors
                              ${progress.completed.includes(`${path.title} - ${module.title} - ${lesson}`)
                                ? 'bg-[#7DD8C6] text-white'
                                : 'bg-[#5E7D7E]/20 text-[#5E7D7E] group-hover:bg-[#7DD8C6]/20'
                              }`}
                            >
                              {progress.completed.includes(`${path.title} - ${module.title} - ${lesson}`)
                                ? '✓'
                                : '→'
                              }
                            </span>
                            <span className={`${progress.completed.includes(`${path.title} - ${module.title} - ${lesson}`)
                              ? 'text-[#02402C]'
                              : 'text-[#5E7D7E] group-hover:text-[#02402C]'
                            } transition-colors`}>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#5E7D7E]">Progress</span>
                    <span className="text-[#02402C] font-medium">{getPathProgress(path)}%</span>
                  </div>
                  <div className="h-2 bg-[#F7F4EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7DD8C6] rounded-full transition-all"
                      style={{ width: `${getPathProgress(path)}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A2421] mb-8">Learning Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">{resource.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#02402C] group-hover:text-[#7DD8C6] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[#5E7D7E]">{resource.duration}</p>
                  </div>
                </div>
                <p className="mt-4 text-[#5E7D7E]">{resource.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#7DD8C6]/20 text-[#02402C]">
                    {resource.difficulty}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#F7F4EC] text-[#5E7D7E]">
                    {resource.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </ContentLayout>
  )
} 
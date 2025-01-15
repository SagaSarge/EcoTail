import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'
import { useState, useEffect } from 'react'

// Progress tracking interface
interface Progress {
  completed: string[]
  currentModule: string | null
  achievements: string[]
  totalHours: number
  level: string
  quizScores: {
    moduleId: string
    score: number
    date: string
  }[]
  badges: {
    id: string
    name: string
    icon: string
    unlockedAt: string
  }[]
  streakDays: number
  lastActive: string
}

// Learning path interface
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

// Resource interface
interface Resource {
  title: string
  description: string
  duration: string
  type: string
  icon: string
  difficulty: string
}

// Quiz related interfaces
interface QuizQuestion {
  id: string
  type: 'multiple-choice' | 'true-false' | 'matching'
  text: string
  options: string[]
  correctAnswer: string | string[]
  explanation: string
  points: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

interface QuizAttempt {
  questionId: string
  selectedAnswer: string | string[]
  isCorrect: boolean
  timestamp: string
  timeSpent: number
}

interface QuizProgress {
  totalAttempts: number
  correctAnswers: number
  averageScore: number
  timeSpent: number
  lastAttempt: string
  strongCategories: string[]
  weakCategories: string[]
  streakCount: number
}

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
        lessons: ['Material Types', 'Sorting Guidelines', 'Local Regulations', 'Common Mistakes'],
        duration: '2 weeks',
        skills: ['Material Identification', 'Sorting Proficiency']
      },
      {
        title: 'Composting Mastery',
        lessons: ['Composting Basics', 'Advanced Techniques', 'Troubleshooting'],
        duration: '3 weeks',
        skills: ['Composting', 'Soil Management']
      },
      {
        title: 'Zero Waste Lifestyle',
        lessons: ['Waste Audit', 'Reduction Strategies', 'Sustainable Shopping'],
        duration: '4 weeks',
        skills: ['Waste Reduction', 'Sustainable Living']
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
        lessons: ['Machine Learning Basics', 'Computer Vision', 'Smart Sorting Systems'],
        duration: '6 weeks',
        skills: ['AI Understanding', 'Technical Analysis']
      },
      {
        title: 'IoT Applications',
        lessons: ['Sensor Networks', 'Data Collection', 'Real-time Monitoring'],
        duration: '5 weeks',
        skills: ['IoT Knowledge', 'Data Analysis']
      }
    ]
  },
  {
    title: 'Environmental Impact Assessment',
    description: 'Learn to measure and analyze environmental impact',
    icon: '🌍',
    duration: '6 months',
    difficulty: 'Advanced',
    modules: [
      {
        title: 'Carbon Footprint Analysis',
        lessons: ['Measurement Methods', 'Data Collection', 'Impact Reporting'],
        duration: '8 weeks',
        skills: ['Carbon Accounting', 'Environmental Analysis']
      },
      {
        title: 'Sustainability Metrics',
        lessons: ['KPI Development', 'Data Visualization', 'Progress Tracking'],
        duration: '8 weeks',
        skills: ['Data Analysis', 'Reporting']
      }
    ]
  },
  {
    title: 'Commercial Waste Solutions',
    description: 'Specialized training for business waste management',
    icon: '🏢',
    duration: '4 months',
    difficulty: 'Advanced',
    modules: [
      {
        title: 'Business Waste Audit',
        lessons: ['Waste Stream Analysis', 'Cost Assessment', 'Compliance Requirements', 'Reporting Standards'],
        duration: '3 weeks',
        skills: ['Waste Auditing', 'Cost Analysis']
      },
      {
        title: 'Supply Chain Optimization',
        lessons: ['Packaging Reduction', 'Vendor Management', 'Circular Economy Principles'],
        duration: '4 weeks',
        skills: ['Supply Chain', 'Vendor Relations']
      },
      {
        title: 'Employee Training Programs',
        lessons: ['Training Development', 'Implementation Strategies', 'Monitoring & Feedback'],
        duration: '3 weeks',
        skills: ['Training', 'Program Management']
      }
    ]
  },
  {
    title: 'Policy & Regulation',
    description: 'Master environmental regulations and compliance',
    icon: '📜',
    duration: '5 months',
    difficulty: 'Expert',
    modules: [
      {
        title: 'Environmental Law Basics',
        lessons: ['Regulatory Framework', 'Compliance Standards', 'Reporting Requirements'],
        duration: '6 weeks',
        skills: ['Legal Knowledge', 'Compliance']
      },
      {
        title: 'Policy Implementation',
        lessons: ['Strategy Development', 'Stakeholder Management', 'Risk Assessment'],
        duration: '7 weeks',
        skills: ['Policy Planning', 'Risk Management']
      },
      {
        title: 'Future Trends',
        lessons: ['Emerging Regulations', 'Global Standards', 'Policy Innovation'],
        duration: '7 weeks',
        skills: ['Trend Analysis', 'Strategic Planning']
      }
    ]
  },
  {
    title: 'Circular Economy Design',
    description: 'Learn to design waste-free systems and products',
    icon: '🔄',
    duration: '6 months',
    difficulty: 'Advanced',
    modules: [
      {
        title: 'Circular Design Principles',
        lessons: ['Material Selection', 'Product Lifecycle', 'Waste Elimination Strategies'],
        duration: '8 weeks',
        skills: ['Design Thinking', 'Material Science']
      },
      {
        title: 'Implementation & Innovation',
        lessons: ['Business Model Design', 'Innovation Methods', 'Case Studies'],
        duration: '8 weeks',
        skills: ['Innovation', 'Business Strategy']
      },
      {
        title: 'Impact Assessment',
        lessons: ['Metrics Development', 'ROI Analysis', 'Environmental Impact'],
        duration: '8 weeks',
        skills: ['Impact Analysis', 'Financial Planning']
      }
    ]
  }
]

const certifications = [
  {
    title: 'EcoTail Certified Associate',
    description: 'Entry-level certification for waste management basics',
    requirements: ['Complete Waste Management Fundamentals', 'Pass basic assessment'],
    icon: '🎓',
    level: 'Basic',
    duration: '3 months'
  },
  {
    title: 'Smart Waste Professional',
    description: 'Intermediate certification focusing on technology integration',
    requirements: ['Complete Smart Technology path', 'Submit practical project'],
    icon: '🏆',
    level: 'Intermediate',
    duration: '6 months'
  },
  {
    title: 'Environmental Impact Analyst',
    description: 'Advanced certification for sustainability experts',
    requirements: ['Complete Environmental Impact Assessment', 'Present research project'],
    icon: '🌟',
    level: 'Advanced',
    duration: '9 months'
  },
  {
    title: 'Master of Sustainable Solutions',
    description: 'Expert-level certification for industry leaders',
    requirements: ['Complete all paths', 'Contribute to research', 'Lead community project'],
    icon: '👑',
    level: 'Expert',
    duration: '12+ months'
  }
]

const resources: Resource[] = [
  {
    title: 'Introduction to Waste Management',
    description: 'Learn the fundamentals of proper waste sorting and recycling techniques.',
    duration: '15 min read',
    type: 'Article',
    icon: '📚',
    difficulty: 'Beginner'
  },
  {
    title: 'Smart Bin Technology Overview',
    description: 'Discover how AI and IoT are revolutionizing waste collection and sorting.',
    duration: '10 min video',
    type: 'Video',
    icon: '🎥',
    difficulty: 'Intermediate'
  },
  {
    title: 'Comprehensive Sustainability Guide',
    description: 'In-depth guide to reducing waste and living more sustainably.',
    duration: '30 min read',
    type: 'Guide',
    icon: '📖',
    difficulty: 'Beginner'
  },
  {
    title: 'Smart Bin System Tutorial',
    description: 'Hands-on learning experience with our smart bin system.',
    duration: '20 min',
    type: 'Interactive',
    icon: '🎮',
    difficulty: 'Advanced'
  },
]

// Add achievement badges
const badges = [
  {
    id: 'quick-start',
    name: 'Quick Starter',
    icon: '🚀',
    description: 'Complete your first module'
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    icon: '🔥',
    description: 'Maintain a 7-day learning streak'
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    icon: '🎯',
    description: 'Score 100% on 5 module quizzes'
  },
  {
    id: 'path-complete',
    name: 'Path Pioneer',
    icon: '🏆',
    description: 'Complete an entire learning path'
  },
  {
    id: 'community-leader',
    name: 'Community Leader',
    icon: '👥',
    description: 'Help 10 other learners in discussions'
  }
]

// Helper functions
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const submitQuiz = () => {
  // TODO: Implement quiz submission logic
  console.log('Quiz submitted')
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    text: 'What is the primary goal of a circular economy?',
    options: [
      'Maximize resource extraction',
      'Eliminate waste and pollution',
      'Increase production speed',
      'Reduce labor costs'
    ],
    correctAnswer: 'Eliminate waste and pollution',
    explanation: 'A circular economy aims to eliminate waste and pollution by keeping products and materials in use and regenerating natural systems.',
    points: 10,
    category: 'Circular Economy',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    type: 'true-false',
    text: 'Smart bins can automatically sort different types of waste using AI.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Modern smart bins utilize AI and computer vision to automatically identify and sort different types of waste materials.',
    points: 5,
    category: 'Smart Technology',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    type: 'multiple-choice',
    text: 'Which of the following is NOT a benefit of composting?',
    options: [
      'Reduces landfill waste',
      'Produces natural fertilizer',
      'Increases carbon emissions',
      'Improves soil health'
    ],
    correctAnswer: 'Increases carbon emissions',
    explanation: 'Composting actually helps reduce carbon emissions by preventing organic waste from decomposing in landfills.',
    points: 10,
    category: 'Composting',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    type: 'matching',
    text: 'Match the waste type with its correct bin color:',
    options: [
      'Paper - Blue',
      'Glass - Green',
      'Plastic - Yellow',
      'Organic - Brown'
    ],
    correctAnswer: ['Blue', 'Green', 'Yellow', 'Brown'],
    explanation: 'Different colored bins are used internationally to help standardize waste sorting.',
    points: 15,
    category: 'Waste Sorting',
    difficulty: 'medium'
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    text: 'What technology is commonly used in smart bins for fill-level monitoring?',
    options: [
      'Ultrasonic sensors',
      'X-ray scanning',
      'Thermal imaging',
      'Radio waves'
    ],
    correctAnswer: 'Ultrasonic sensors',
    explanation: 'Ultrasonic sensors are commonly used in smart bins to measure the distance to the waste surface, determining fill levels.',
    points: 10,
    category: 'Smart Technology',
    difficulty: 'hard'
  }
]

export function Education() {
  // Calculate total modules across all learning paths
  const totalModules = learningPaths.reduce(
    (total, path) => total + path.modules.length,
    0
  )

  const [progress, setProgress] = useState<Progress>({
    completed: [],
    currentModule: null,
    achievements: [],
    totalHours: 0,
    level: 'Beginner',
    quizScores: [],
    badges: [],
    streakDays: 0,
    lastActive: new Date().toISOString()
  })

  const [activeTab, setActiveTab] = useState('all')
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [showProfile, setShowProfile] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string | string[]>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizResults, setQuizResults] = useState<{
    score: number
    totalPoints: number
    correctAnswers: number
    incorrectAnswers: number
    feedback: Record<string, {
      isCorrect: boolean
      explanation: string
    }>
  } | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(900) // 15 minutes in seconds

  // Handle answer selection
  const handleAnswerSelect = (questionId: string, answer: string | string[]) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  // Submit quiz
  const submitQuiz = () => {
    const results = {
      score: 0,
      totalPoints: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      feedback: {} as Record<string, { isCorrect: boolean; explanation: string }>
    }

    quizQuestions.forEach(question => {
      results.totalPoints += question.points
      const userAnswer = quizAnswers[question.id]
      const isCorrect = Array.isArray(question.correctAnswer)
        ? JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer)
        : userAnswer === question.correctAnswer

      if (isCorrect) {
        results.score += question.points
        results.correctAnswers++
      } else {
        results.incorrectAnswers++
      }

      results.feedback[question.id] = {
        isCorrect,
        explanation: question.explanation
      }
    })

    setQuizResults(results)
    setQuizSubmitted(true)

    // Update progress
    const attempt: QuizAttempt = {
      questionId: selectedModule || '',
      selectedAnswer: Object.values(quizAnswers).join(','),
      isCorrect: results.score >= results.totalPoints * 0.7, // Pass threshold 70%
      timestamp: new Date().toISOString(),
      timeSpent: 900 - timeRemaining
    }

    setProgress(prev => ({
      ...prev,
      quizScores: [...prev.quizScores, {
        moduleId: selectedModule || '',
        score: Math.round((results.score / results.totalPoints) * 100),
        date: new Date().toISOString()
      }]
    }))
  }

  // Timer effect
  useEffect(() => {
    if (selectedModule && !quizSubmitted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            submitQuiz()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [selectedModule, quizSubmitted, timeRemaining])

  // Format time remaining
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  // Add learning path progress tracking
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

  // Handle starting a learning path
  const handleStartPath = (path: LearningPath) => {
    setSelectedPath(path.title)
    // Update last active timestamp
    setProgress(prev => ({
      ...prev,
      lastActive: new Date().toISOString()
    }))
  }

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

      // Check for badge unlocks
      if (progress.completed.length === 0) {
        // Quick Starter badge
        unlockBadge('quick-start')
      }
      if (progress.completed.length === 9) {
        // Path Pioneer badge
        unlockBadge('path-complete')
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

  return (
    <ContentLayout
      title="Education Center"
      description="Explore our comprehensive learning paths and become a waste management expert."
    >
      <div className="space-y-16">
        {/* Progress Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Learning Journey</h2>
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700"
            >
              View Full Profile
              <span className="text-xl">→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-1">Completed Modules</h3>
              <p className="text-2xl font-bold text-green-600">{progress.completed.length}</p>
              <p className="text-sm text-gray-500 mt-1">
                {Math.round((progress.completed.length / totalModules) * 100)}% complete
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-semibold mb-1">Total Hours</h3>
              <p className="text-2xl font-bold text-green-600">{progress.totalHours}h</p>
              <p className="text-sm text-gray-500 mt-1">Last active: {formatDate(progress.lastActive)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1">Achievements</h3>
              <p className="text-2xl font-bold text-green-600">{progress.badges.length}</p>
              <p className="text-sm text-gray-500 mt-1">{badges.length - progress.badges.length} to unlock</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-semibold mb-1">Learning Streak</h3>
              <p className="text-2xl font-bold text-green-600">{progress.streakDays} days</p>
              <p className="text-sm text-gray-500 mt-1">Keep it going!</p>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {progress.badges.slice(-4).map((badge) => (
                <div
                  key={badge.id}
                  className="flex-shrink-0 w-32 bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="text-sm font-medium text-gray-900">{badge.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(badge.unlockedAt)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quiz Modal */}
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Module Assessment</h3>
                  <p className="text-sm text-gray-500 mt-1">Complete all questions to earn your certificate</p>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-8">
                {quizQuestions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 bg-gray-50 rounded-xl ${
                      quizSubmitted
                        ? quizResults
                          ? quizResults.feedback[question.id].isCorrect
                            ? 'ring-2 ring-green-500'
                            : 'ring-2 ring-red-500'
                          : ''
                        : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">Question {index + 1}</h4>
                        <p className="text-gray-800">{question.text}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full
                          ${question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}`}
                        >
                          {question.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">{question.points} pts</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {question.type === 'matching' ? (
                        <div className="grid grid-cols-2 gap-4">
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                                {optionIndex + 1}
                              </span>
                              <input
                                type="text"
                                placeholder="Enter matching item"
                                value={(quizAnswers[question.id] as string[])?.[optionIndex] || ''}
                                onChange={(e) => {
                                  const newAnswers = [...(quizAnswers[question.id] as string[] || [])]
                                  newAnswers[optionIndex] = e.target.value
                                  handleAnswerSelect(question.id, newAnswers)
                                }}
                                disabled={quizSubmitted}
                                className="flex-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        question.options.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-4 bg-white rounded-lg cursor-pointer transition-colors ${
                              quizSubmitted
                                ? quizAnswers[question.id] === option
                                  ? quizResults?.feedback[question.id].isCorrect
                                    ? 'bg-green-50'
                                    : 'bg-red-50'
                                  : option === question.correctAnswer
                                  ? 'bg-green-50'
                                  : ''
                                : 'hover:bg-green-50'
                            }`}
                          >
                            <input
                              type={question.type === 'true-false' ? 'radio' : 'radio'}
                              name={`question-${question.id}`}
                              value={option}
                              checked={quizAnswers[question.id] === option}
                              onChange={() => handleAnswerSelect(question.id, option)}
                              disabled={quizSubmitted}
                              className="w-4 h-4 text-green-600 focus:ring-green-500"
                            />
                            <span className="ml-3 text-gray-700">{option}</span>
                          </label>
                        ))
                      )}
                    </div>

                    {quizSubmitted && quizResults && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 p-4 rounded-lg bg-gray-100"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-lg ${
                            quizResults.feedback[question.id].isCorrect
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}>
                            {quizResults.feedback[question.id].isCorrect ? '✓' : '✗'}
                          </span>
                          <span className="font-medium text-gray-900">
                            {quizResults.feedback[question.id].isCorrect ? 'Correct!' : 'Incorrect'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{question.explanation}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">Time remaining:</span>
                    <span className="ml-2">{formatTime(timeRemaining)}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">Progress:</span>
                    <span className="ml-2">
                      {Object.keys(quizAnswers).length}/{quizQuestions.length} questions
                    </span>
                  </div>
                </div>
                {!quizSubmitted ? (
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      Object.keys(quizAnswers).length < quizQuestions.length
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Close Quiz
                  </button>
                )}
              </div>

              {quizSubmitted && quizResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-gray-50 rounded-xl"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quiz Results</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Score</p>
                      <p className="text-2xl font-bold text-green-600">
                        {Math.round((quizResults.score / quizResults.totalPoints) * 100)}%
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Time Taken</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatTime(900 - timeRemaining)}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Correct Answers</p>
                      <p className="text-2xl font-bold text-green-600">
                        {quizResults.correctAnswers}/{quizQuestions.length}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Points Earned</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {quizResults.score}/{quizResults.totalPoints}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setSelectedModule(null)}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Return to Learning Path
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Profile Modal */}
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Learning Profile</h3>
                <button
                  onClick={() => setShowProfile(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Learning Stats */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Learning Statistics</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Average Quiz Score</span>
                        <span className="font-medium text-green-600">
                          {progress.quizScores.length > 0
                            ? Math.round(
                                progress.quizScores.reduce((acc, curr) => acc + curr.score, 0) /
                                  progress.quizScores.length
                              )
                            : 0}
                          %
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-600 rounded-full"
                          style={{
                            width: `${
                              progress.quizScores.length > 0
                                ? Math.round(
                                    progress.quizScores.reduce((acc, curr) => acc + curr.score, 0) /
                                      progress.quizScores.length
                                  )
                                : 0
                            }%`
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-3">Recent Activity</h5>
                      <div className="space-y-2">
                        {progress.completed.slice(-3).map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item}</span>
                            <span className="text-gray-500">Completed</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements & Badges */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Achievements & Badges</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {badges.map((badge) => {
                      const isUnlocked = progress.badges.some((b) => b.id === badge.id)
                      return (
                        <div
                          key={badge.id}
                          className={`p-4 rounded-lg ${
                            isUnlocked ? 'bg-green-50' : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{badge.icon}</div>
                            <div>
                              <p className="font-medium text-gray-900">{badge.name}</p>
                              <p className="text-xs text-gray-500">{badge.description}</p>
                            </div>
                          </div>
                          {isUnlocked && (
                            <p className="text-xs text-green-600 mt-2">
                              Unlocked on{' '}
                              {formatDate(
                                progress.badges.find((b) => b.id === badge.id)?.unlockedAt || ''
                              )}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Learning Paths */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Learning Paths</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 text-3xl">{path.icon}</div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    {path.difficulty}
                  </span>
                </div>
                <p className="mb-2 text-sm text-gray-600">{path.description}</p>
                <p className="mb-4 text-sm text-green-600 font-medium">{path.duration}</p>
                
                {/* Progress indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-green-600 font-medium">
                      {getPathProgress(path)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${getPathProgress(path)}%` }}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {path.modules.map((module, moduleIndex) => {
                    const moduleProgress = module.lessons.filter(lesson => 
                      progress.completed.includes(`${path.title} - ${module.title} - ${lesson}`)
                    ).length
                    
                    return (
                      <div
                        key={module.title}
                        className="rounded-lg bg-gray-50 p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900">{module.title}</h4>
                          <span className="text-xs text-gray-500">
                            {moduleProgress}/{module.lessons.length} completed
                          </span>
                        </div>
                        <div className="space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => {
                            const isCompleted = progress.completed.includes(
                              `${path.title} - ${module.title} - ${lesson}`
                            )
                            
                            return (
                              <div
                                key={lesson}
                                className="flex items-center text-sm"
                                onClick={() => handleCompleteLesson(path.title, module.title, lesson)}
                              >
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2
                                  ${isCompleted 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-400'
                                  }`}
                                >
                                  {isCompleted ? '✓' : lessonIndex + 1}
                                </span>
                                <span className={isCompleted ? 'text-green-600' : 'text-gray-600'}>
                                  {lesson}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {module.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                <button 
                  onClick={() => handleStartPath(path)}
                  className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium transition
                    ${getPathProgress(path) === 100
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  disabled={getPathProgress(path) === 100}
                >
                  {getPathProgress(path) === 100
                    ? 'Path Completed'
                    : selectedPath === path.title
                    ? 'Continue Learning'
                    : 'Start Learning Path'
                  }
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Certification Paths</h2>
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
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                        {cert.level}
                      </span>
                      <span className="text-sm text-gray-500">
                        {cert.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{cert.description}</p>
                
                {/* Requirements with progress indicators */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-900">Requirements:</h4>
                  {cert.requirements.map((req, reqIndex) => (
                    <div 
                      key={reqIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs
                        ${progress.completed.includes(req)
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {progress.completed.includes(req) ? '✓' : (reqIndex + 1)}
                      </div>
                      <span className={progress.completed.includes(req)
                        ? 'text-green-600 line-through'
                        : 'text-gray-600'
                      }>
                        {req}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-green-600 font-medium">
                      {Math.round((progress.completed.filter(item => 
                        cert.requirements.includes(item)
                      ).length / cert.requirements.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-600 rounded-full transition-all duration-500"
                      style={{
                        width: `${(progress.completed.filter(item => 
                          cert.requirements.includes(item)
                        ).length / cert.requirements.length) * 100}%`
                      }}
                    />
                  </div>
                </div>

                <button 
                  className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition
                    ${progress.completed.length >= cert.requirements.length
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  disabled={progress.completed.length < cert.requirements.length}
                >
                  {progress.completed.length >= cert.requirements.length
                    ? 'Get Certified'
                    : 'Complete Requirements to Unlock'
                  }
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
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            Subscribe to receive weekly tips, new courses, and sustainability insights. 
            Join our community of over 10,000 learners making a difference.
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
          <p className="mt-4 text-sm text-gray-500">
            Join today and get access to exclusive learning resources and early access to new courses.
          </p>
        </motion.section>
      </div>
    </ContentLayout>
  )
} 
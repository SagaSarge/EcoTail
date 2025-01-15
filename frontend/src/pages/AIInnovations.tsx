import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { ContentLayout } from '../components/layout/ContentLayout'

interface Feature {
  title: string
  description: string
  icon: string
  stats: {
    value: string
    label: string
  }[]
  techStack: string[]
  details: string[]
}

const features: Feature[] = [
  {
    title: "Smart Waste Recognition",
    description: "Advanced CNN-powered algorithms identify and categorize waste items in real-time with 99% accuracy, leveraging transfer learning and edge optimization.",
    icon: "🤖",
    stats: [
      { value: "99%", label: "Sorting Accuracy" },
      { value: "0.5s", label: "Recognition Speed" },
      { value: "50+", label: "Material Types" }
    ],
    techStack: ["TensorFlow Lite", "PyTorch", "ResNet", "Edge Computing"],
    details: [
      "Real-time waste categorization using CNN",
      "Transfer learning for efficient training",
      "Model quantization for edge devices",
      "Active learning for continuous improvement"
    ]
  },
  {
    title: "IoT Integration & Analytics",
    description: "Connected smart bins with advanced sensors form a distributed network, providing real-time data on fill levels, temperature, and waste composition through secure protocols.",
    icon: "📡",
    stats: [
      { value: "1000+", label: "Active Sensors" },
      { value: "24/7", label: "Monitoring" },
      { value: "5min", label: "Update Frequency" }
    ],
    techStack: ["MQTT", "AWS IoT Core", "InfluxDB", "Kafka"],
    details: [
      "Fill-level and weight monitoring",
      "Temperature and composition analysis",
      "Secure data transmission",
      "Real-time dashboard updates"
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Advanced machine learning models analyze historical data to optimize collection routes, predict fill levels, and detect anomalies, reducing operational costs significantly.",
    icon: "📊",
    stats: [
      { value: "30%", label: "Cost Reduction" },
      { value: "95%", label: "Prediction Accuracy" },
      { value: "24h", label: "Forecast Window" }
    ],
    techStack: ["Machine Learning", "ARIMA", "Power BI", "Grafana"],
    details: [
      "Route optimization algorithms",
      "Fill-level predictions",
      "Anomaly detection",
      "Performance analytics"
    ]
  }
]

// Add new interfaces for technical specs
interface TechnicalSpec {
  category: string
  icon: string
  features: string[]
}

const technicalSpecs: TechnicalSpec[] = [
  {
    category: "Hardware",
    icon: "🔧",
    features: [
      "AI-powered cameras and sensors",
      "Edge processing capabilities",
      "Reusable canister system",
      "IoT connectivity modules"
    ]
  },
  {
    category: "Software",
    icon: "💻",
    features: [
      "TensorFlow Lite for edge AI",
      "MQTT protocols for IoT",
      "React Native mobile app",
      "Real-time analytics engine"
    ]
  },
  {
    category: "Cloud Integration",
    icon: "☁️",
    features: [
      "Google Cloud Platform",
      "Firebase real-time database",
      "Secure user authentication",
      "Scalable data storage"
    ]
  }
]

interface Version {
  id: string
  title: string
  subtitle: string
  description: string
  keyFeatures: {
    title: string
    description: string
  }[]
  technicalHighlights: {
    title: string
    description: string
  }[]
  metrics: {
    label: string
    value: string
  }[]
  support: {
    email: string
    phone: string
  }
}

const versions: Version[] = [
  {
    id: 'v1',
    title: 'EcoTail V1',
    subtitle: 'Disruptive Launch ✨♻️',
    description: 'Welcome to EcoTail V1, the disruptive first version of our Smart Trash System. Inspired by Tony Fadell\'s product philosophy, V1 is all about bold innovation that changes how people interact with waste management.',
    keyFeatures: [
      {
        title: 'AI Sorting & Basic Analytics',
        description: 'Real-time detection of recyclables, compostables, and landfill items with simple app dashboard.'
      },
      {
        title: 'Rewards System',
        description: 'Earn points for correct sorting with early-stage gamification.'
      },
      {
        title: 'Durable Design',
        description: '13-gallon capacity, easy setup, and firmware-updatable hardware.'
      }
    ],
    technicalHighlights: [
      {
        title: 'On-Device AI',
        description: 'TensorFlow Lite with basic model recognition'
      },
      {
        title: 'IoT Connectivity',
        description: 'MQTT / Wi-Fi for real-time data and commands'
      },
      {
        title: 'Mobile App',
        description: 'React Native app showing fill level and sorting accuracy'
      }
    ],
    metrics: [
      { label: 'User Adoption', value: 'Growing' },
      { label: 'Sorting Accuracy', value: '85%' },
      { label: 'Daily Active Users', value: '1000+' }
    ],
    support: {
      email: 'support@ecotail.com',
      phone: '1-800-RECYCLE'
    }
  },
  {
    id: 'v2',
    title: 'EcoTail V2',
    subtitle: 'Enhanced Evolution 🔧🌟',
    description: 'EcoTail V2 builds upon the disruptive core of V1, incorporating user feedback and advanced sensors for deeper insights. We\'ve refined the experience to improve accuracy, add convenience, and cater to a broader range of household needs.',
    keyFeatures: [
      {
        title: 'Enhanced Sensors',
        description: 'Detect partially used items and provide recommendations to reduce waste.'
      },
      {
        title: 'Voice Assistant Integration',
        description: 'Compatible with Alexa, Google Home, and Apple HomeKit.'
      },
      {
        title: 'Premium App Features',
        description: 'Advanced waste tracking and priority customer support.'
      }
    ],
    technicalHighlights: [
      {
        title: 'Sensor Fusion',
        description: 'Integrates weight, fill-level, and camera-based AI'
      },
      {
        title: 'Cloud Analytics',
        description: 'Detailed data stored in Firestore for insights'
      },
      {
        title: 'Voice Commands',
        description: 'Smart home integration for hands-free control'
      }
    ],
    metrics: [
      { label: 'Subscription Rate', value: '45%' },
      { label: 'Waste Reduction', value: '30%' },
      { label: 'Brand Partners', value: '25+' }
    ],
    support: {
      email: 'support@ecotail.com',
      phone: '1-800-RECYCLE'
    }
  },
  {
    id: 'v3',
    title: 'EcoTail V3',
    subtitle: 'Subscription & Reusability ♻️🚀',
    description: 'EcoTail V3 transitions from a great smart trash can to a holistic service, offering reusable canisters and curated pickups. This version aims to close the loop on household waste by minimizing single-use materials.',
    keyFeatures: [
      {
        title: 'Reusable Canisters',
        description: 'Weekly swaps for fresh, sanitized canisters eliminating single-use bags.'
      },
      {
        title: 'Concierge Pickup',
        description: 'Automatic route scheduling and special waste handling.'
      },
      {
        title: 'Premium Experience',
        description: 'Carbon footprint tracking and neighborhood comparisons.'
      }
    ],
    technicalHighlights: [
      {
        title: 'Route Optimization',
        description: 'AI-driven scheduling for efficient pickups'
      },
      {
        title: 'Fleet Management',
        description: 'Real-time tracking of canister swaps'
      },
      {
        title: 'Federated Learning',
        description: 'Regional AI improvements with privacy'
      }
    ],
    metrics: [
      { label: 'Plastic Reduction', value: '2 Tons' },
      { label: 'Route Efficiency', value: '85%' },
      { label: 'User Rating', value: '4.8/5' }
    ],
    support: {
      email: 'support@ecotail.com',
      phone: '1-800-RECYCLE'
    }
  },
  {
    id: 'v4',
    title: 'EcoTail V4',
    subtitle: 'The Closed-Loop End Goal 🌍✨',
    description: 'The ultimate vision of EcoTail: a completely closed-loop recycling and waste management ecosystem where nothing goes to waste unnecessarily, and communities benefit from a circular economy approach.',
    keyFeatures: [
      {
        title: 'Local Recycling Centers',
        description: 'Hyper-local processing within defined radius for reduced emissions.'
      },
      {
        title: 'Manufacturer Integration',
        description: 'Direct material reclamation for new product creation.'
      },
      {
        title: 'Smart City Platform',
        description: 'Real-time data for city planning and community incentives.'
      }
    ],
    technicalHighlights: [
      {
        title: 'Advanced AI',
        description: 'Federated & Active Learning across cities'
      },
      {
        title: 'Blockchain Integration',
        description: 'Enhanced transparency for product lifecycle'
      },
      {
        title: 'Carbon Analytics',
        description: 'Real-time tracking of environmental impact'
      }
    ],
    metrics: [
      { label: 'Landfill Diversion', value: '95%' },
      { label: 'CO₂ Reduction', value: '50K lbs' },
      { label: 'Community Impact', value: '100K+' }
    ],
    support: {
      email: 'support@ecotail.com',
      phone: '1-800-RECYCLE'
    }
  }
]

// Add tracking interface
interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
}

// Add lead form interface
interface LeadForm {
  email: string;
  company?: string;
  interests: string[];
  role?: string;
  projectSize?: string;
}

export function AIInnovations() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [comparisonMode, setComparisonMode] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState(versions[0].id)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  
  // New state for lead capture and tracking
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadFormData, setLeadFormData] = useState<LeadForm>({
    email: '',
    company: '',
    interests: [],
    role: '',
    projectSize: ''
  })
  
  // Simplified animation refs - keep only essential ones
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  
  // Enhanced tracking function
  const trackEvent = (event: TrackingEvent) => {
    // Implementation for analytics tracking
    console.log('Track:', event)
    // Add timestamp and session data
    const enhancedEvent = {
      ...event,
      timestamp: new Date().toISOString(),
      sessionId: 'user_session_id', // Would come from auth
      path: window.location.pathname
    }
    console.log('Enhanced Track:', enhancedEvent)
  }

  return (
    <ContentLayout
      title="AI Innovations"
      description="Discover how EcoTail leverages cutting-edge AI and IoT technology."
    >
      <div className="space-y-12">
        {/* Hero Section - Keep entrance animation */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Waste Management is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our advanced AI and IoT technology transforms waste management through intelligent recognition,
            real-time monitoring, and predictive analytics.
          </p>
          
          {/* Stats Banner with improved mobile layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-24 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer transform transition-all"
            >
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-2xl font-bold text-green-600">99%</p>
              <p className="text-gray-600">Sorting Accuracy</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer transform transition-all"
            >
              <div className="text-3xl mb-2">⚡️</div>
              <p className="text-2xl font-bold text-green-600">0.5s</p>
              <p className="text-gray-600">Processing Speed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer transform transition-all"
            >
              <div className="text-3xl mb-2">🌍</div>
              <p className="text-2xl font-bold text-green-600">1M+</p>
              <p className="text-gray-600">Items Processed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer transform transition-all"
            >
              <div className="text-3xl mb-2">📈</div>
              <p className="text-2xl font-bold text-green-600">30%</p>
              <p className="text-gray-600">Cost Reduction</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Sticky Comparison Toolbar */}
        {comparisonMode && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <span className="font-semibold">Comparing Features</span>
              <button
                onClick={() => {
                  setComparisonMode(false)
                  trackEvent({
                    category: 'Feature Comparison',
                    action: 'Exit Comparison Mode'
                  })
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Exit Comparison
              </button>
            </div>
          </div>
        )}

        {/* Features Section - Simplified animations */}
        <section ref={featuresRef} className="space-y-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <button
              onClick={() => {
                setComparisonMode(!comparisonMode)
                trackEvent({
                  category: 'Feature Comparison',
                  action: comparisonMode ? 'Exit Comparison' : 'Enter Comparison'
                })
              }}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {comparisonMode ? 'Exit Comparison' : 'Compare Features'}
            </button>
          </div>
          
          {/* Feature grid with minimal animations */}
          <div className={`grid gap-6 ${
            comparisonMode ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'
          }`}>
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                onClick={() => trackEvent({
                  category: 'Feature',
                  action: 'View Feature',
                  label: feature.title
                })}
              >
                <div className={comparisonMode ? '' : 'grid grid-cols-1 gap-4 md:gap-8'}>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.span 
                        className="text-4xl"
                        animate={{ 
                          rotate: (!comparisonMode && selectedFeature === feature.title) ? 360 : 0,
                          scale: comparisonMode ? [1, 1.2, 1] : 1
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: comparisonMode ? Infinity : 0,
                          repeatDelay: 1
                        }}
                      >
                        {feature.icon}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {feature.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm transition-colors duration-200
                            ${hoveredTech === tech 
                              ? 'bg-green-600 text-white' 
                              : 'bg-green-50 text-green-700'
                            } ${comparisonMode ? 'text-xs' : ''}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    {(!comparisonMode || selectedFeature === feature.title) && (
                      <motion.ul 
                        className="space-y-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1 
                        }}
                      >
                        {feature.details.map((detail, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <span className="text-green-500">•</span>
                            {detail}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                  {!comparisonMode && (
                    <div className="grid grid-cols-3 gap-4">
                      {feature.stats.map((stat) => (
                        <motion.div
                          key={stat.label}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-4 text-center 
                            hover:bg-green-50 transition-colors"
                        >
                          <p className="text-2xl font-bold text-green-600 mb-1">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center py-8">
            <button
              onClick={() => setShowLeadForm(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Get Feature Details
            </button>
          </div>
        </section>

        {/* Version Timeline - Improved progression */}
        <section className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2">
            <div 
              className="h-full bg-green-600 transition-all" 
              style={{ 
                width: `${(versions.findIndex(v => v.id === selectedVersion) + 1) * 25}%` 
              }} 
            />
          </div>
          <div className="relative flex justify-between max-w-4xl mx-auto">
            {versions.map((version, index) => (
              <button
                key={version.id}
                onClick={() => {
                  setSelectedVersion(version.id)
                  trackEvent({
                    category: 'Version',
                    action: 'Select Version',
                    label: version.id
                  })
                }}
                className={`relative px-4 py-2 rounded-full ${
                  selectedVersion === version.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white border border-gray-300'
                }`}
              >
                {version.id.toUpperCase()}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm">
                  {index === 0 ? 'Launch' : index === versions.length - 1 ? 'Latest' : ''}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Lead Capture Form Modal */}
        {showLeadForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Get Detailed Features</h3>
                <button 
                  onClick={() => {
                    setShowLeadForm(false)
                    trackEvent({
                      category: 'Lead',
                      action: 'Close Form'
                    })
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={(e) => {
                e.preventDefault()
                trackEvent({
                  category: 'Lead',
                  action: 'Form Submit',
                  label: leadFormData.email
                })
                // Handle form submission
                setShowLeadForm(false)
                // Show success message or redirect
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={leadFormData.email}
                      onChange={(e) => {
                        setLeadFormData(prev => ({
                          ...prev,
                          email: e.target.value
                        }))
                        trackEvent({
                          category: 'Lead',
                          action: 'Email Input',
                        })
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={leadFormData.company}
                      onChange={(e) => setLeadFormData(prev => ({
                        ...prev,
                        company: e.target.value
                      }))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={leadFormData.role}
                      onChange={(e) => {
                        setLeadFormData(prev => ({
                          ...prev,
                          role: e.target.value
                        }))
                        trackEvent({
                          category: 'Lead',
                          action: 'Role Select',
                          label: e.target.value
                        })
                      }}
                    >
                      <option value="">Select your role</option>
                      <option value="executive">Executive</option>
                      <option value="manager">Manager</option>
                      <option value="engineer">Engineer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Size
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={leadFormData.projectSize}
                      onChange={(e) => {
                        setLeadFormData(prev => ({
                          ...prev,
                          projectSize: e.target.value
                        }))
                        trackEvent({
                          category: 'Lead',
                          action: 'Project Size Select',
                          label: e.target.value
                        })
                      }}
                    >
                      <option value="">Select project size</option>
                      <option value="small">1-50 units</option>
                      <option value="medium">51-200 units</option>
                      <option value="large">201+ units</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Interests
                    </label>
                    <div className="space-y-2">
                      {['AI Recognition', 'IoT Integration', 'Analytics', 'Sustainability'].map(interest => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            checked={leadFormData.interests.includes(interest)}
                            onChange={(e) => {
                              const newInterests = e.target.checked
                                ? [...leadFormData.interests, interest]
                                : leadFormData.interests.filter(i => i !== interest)
                              setLeadFormData(prev => ({
                                ...prev,
                                interests: newInterests
                              }))
                              trackEvent({
                                category: 'Lead',
                                action: 'Interest Toggle',
                                label: `${interest}:${e.target.checked}`
                              })
                            }}
                          />
                          <span className="ml-2 text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg mt-6 hover:bg-green-700 transition-colors"
                >
                  Get Access
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Success Metrics - Real-time updates */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Active Users', value: '10,000+' },
              { label: 'Waste Reduction', value: '45%' },
              { label: 'Cost Savings', value: '$2M+' }
            ].map((metric) => (
              <div key={metric.label} className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Waste Management?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join industry leaders using EcoTail's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setShowLeadForm(true)
                trackEvent({
                  category: 'CTA',
                  action: 'Click',
                  label: 'Schedule Demo'
                })
              }}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => trackEvent({
                category: 'CTA',
                action: 'Click',
                label: 'View Documentation'
              })}
              className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50"
            >
              View Documentation
            </button>
          </div>
        </section>
      </div>
    </ContentLayout>
  )
} 
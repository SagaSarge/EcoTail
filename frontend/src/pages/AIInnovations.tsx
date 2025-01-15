import { motion } from 'framer-motion'
import { useState } from 'react'
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

export function AIInnovations() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <ContentLayout
      title="AI Innovations"
      description="Discover how EcoTail leverages cutting-edge artificial intelligence and IoT technology to revolutionize waste management."
    >
      <div className="space-y-16">
        {/* Hero Section with enhanced animations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          
          {/* Stats Banner with enhanced hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Features Section with enhanced interactions */}
        <section className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFeature(selectedFeature === feature.title ? null : feature.title)}
              transition={{ delay: 0.2 * (index + 1) }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg cursor-pointer transition-all
                ${selectedFeature === feature.title ? 'ring-2 ring-green-500' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span 
                      className="text-4xl"
                      animate={{ rotate: selectedFeature === feature.title ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        onHoverStart={() => setHoveredTech(tech)}
                        onHoverEnd={() => setHoveredTech(null)}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm transition-colors duration-200
                          ${hoveredTech === tech 
                            ? 'bg-green-600 text-white' 
                            : 'bg-green-50 text-green-700'}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.ul 
                    className="space-y-2"
                    animate={{ height: selectedFeature === feature.title ? 'auto' : '100%' }}
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
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {feature.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors"
                    >
                      <p className="text-2xl font-bold text-green-600 mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Technology Stack with enhanced interactions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Powered by Advanced Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🧠", title: "Edge AI", desc: "TensorFlow Lite optimization" },
              { icon: "👁️", title: "Computer Vision", desc: "Real-time waste recognition" },
              { icon: "📊", title: "Analytics", desc: "Advanced data insights" },
              { icon: "🔄", title: "IoT Network", desc: "Secure device communication" }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgb(240, 253, 244)" // green-50
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 text-center cursor-pointer transform transition-all"
              >
                <motion.div 
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-semibold text-gray-900">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action with enhanced button */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience the Future of Smart Waste Management
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the network of forward-thinking businesses and communities using EcoTail's
            AI-powered solutions to revolutionize waste management.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 
              transition-colors shadow-md hover:shadow-lg"
          >
            Schedule a Demo
          </motion.button>
        </motion.section>
      </div>
    </ContentLayout>
  )
} 
import { motion } from 'framer-motion'
import { ContentLayout } from '../components/layout/ContentLayout'

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    description: 'AI and machine learning expert with 15+ years of experience in waste management optimization.',
    image: '/images/team/sarah.webp',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Sustainability',
    description: 'Environmental scientist focused on developing zero-waste solutions and circular economy initiatives.',
    image: '/images/team/michael.webp',
  },
  {
    name: 'Emma Thompson',
    role: 'Product Director',
    description: 'Product strategist with a passion for creating user-friendly sustainable technology solutions.',
    image: '/images/team/emma.webp',
  },
]

const companyValues = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of technology to solve environmental challenges.',
    icon: '💡',
  },
  {
    title: 'Sustainability Always',
    description: 'Every decision we make considers its long-term environmental impact.',
    icon: '🌍',
  },
  {
    title: 'User-Centered',
    description: 'We create solutions that make sustainable choices easy and rewarding.',
    icon: '👥',
  },
]

export function BySelfLabs() {
  return (
    <ContentLayout
      title="By Self Labs"
      description="Meet the team behind EcoTail and discover our mission to revolutionize waste management through innovation."
    >
      <div className="space-y-16">
        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-primary-50 p-8 text-center dark:bg-primary-900/10"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            At Self Labs, we're committed to creating innovative solutions that make sustainable living
            accessible to everyone. Through cutting-edge technology and user-centered design, we're
            building a future where environmental responsibility becomes second nature.
          </p>
        </motion.div>

        {/* Company Values */}
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mb-1 text-center text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-center text-sm font-medium text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="text-center text-gray-600 dark:text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Join Our Team</h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            We're always looking for passionate individuals who want to make a difference.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white shadow-sm transition hover:bg-primary-700"
          >
            View Open Positions
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </ContentLayout>
  )
} 
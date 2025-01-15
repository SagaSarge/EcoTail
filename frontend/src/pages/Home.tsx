import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative -mt-6">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[#1A2421]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02402C]/90 to-[#1A2421]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="text-center">
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="bg-gradient-to-r from-[#7DD8C6] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.1]">
                  Effortless Sustainability
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mt-4 text-base font-medium tracking-tight text-[#7DD8C6] sm:text-xl md:text-2xl lg:text-[32px] lg:leading-[1.3]">
                  AI Rewards Zero Waste
                </h2>
              </motion.div>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto mt-6 max-w-2xl text-sm text-[#5E7D7E] sm:text-base md:text-lg lg:text-[18px] lg:leading-[1.6]"
              >
                Experience next-level waste management with AI-powered sorting, gamified rewards, and
                real-time eco-insights—all designed to make going green second nature.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex justify-center"
              >
                <Button onClick={() => window.location.href = '/buy'}>
                  Buy Now
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Image Showcase Grid - Matching Google Chrome's Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                src: '/placeholder-1.jpg',
                alt: 'EcoTail mobile interface showing waste scanning',
                className: 'aspect-[4/3] rounded-xl shadow-lg',
              },
              {
                src: '/placeholder-2.jpg',
                alt: 'EcoTail dashboard with sustainability metrics',
                className: 'aspect-[4/3] rounded-xl shadow-lg',
              },
              {
                src: '/placeholder-3.jpg',
                alt: 'EcoTail rewards and achievements interface',
                className: 'aspect-[4/3] rounded-xl shadow-lg',
              },
              {
                src: '/placeholder-4.jpg',
                alt: 'EcoTail community impact visualization',
                className: 'aspect-[4/3] rounded-xl shadow-lg',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`${image.className} w-full object-cover transition-transform duration-300 hover:scale-105`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#7DD8C6]/20 blur-3xl" />
            <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-[#02402C]/20 blur-3xl" />
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full"
            style={{ transform: 'rotate(180deg)' }}
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50L48 45.8333C96 41.6667 192 33.3333 288 29.1667C384 25 480 25 576 33.3333C672 41.6667 768 58.3333 864 62.5C960 66.6667 1056 58.3333 1152 45.8333C1248 33.3333 1344 16.6667 1392 8.33333L1440 0V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
              fill="#F7F4EC"
            />
          </svg>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Smart Sign-In',
              image: '/images/sign-in.webp',
              alt: 'EcoTail sign-in interface',
            },
            {
              title: 'Main Dashboard',
              image: '/images/dashboard.webp',
              alt: 'EcoTail main dashboard interface',
            },
            {
              title: 'Mobile App',
              image: '/images/mobile.webp',
              alt: 'EcoTail mobile application interface',
            },
            {
              title: 'Analytics View',
              image: '/images/analytics.webp',
              alt: 'EcoTail analytics interface',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md dark:bg-gray-800"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Updates Section - Matching Google's Layout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[40px] font-medium leading-tight text-[#1A2421] lg:text-[52px]">
            Discover the latest{' '}
            <span className="inline-flex items-center rounded-full bg-[#E6F7F3] px-4 py-1">
              <img src="/eco-icon.svg" alt="" className="mr-2 h-6 w-6" />
              <span className="text-[#02402C]">updates</span>
            </span>{' '}
            from EcoTail
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Updates Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-[#E6F7F3] p-8 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#7DD8C6]/10" />
            <div className="relative">
              <div className="text-sm font-medium uppercase tracking-wider text-[#02402C]">UPDATES</div>
              <h3 className="mt-4 text-2xl font-medium text-[#1A2421] lg:text-3xl">
                Automatic updates
              </h3>
              <p className="mt-4 text-[#5E7D7E] lg:text-lg">
                New features roll out every two weeks, ensuring you always have the latest in sustainable waste management technology.
              </p>
              <Link
                to="/updates"
                className="mt-6 inline-flex items-center text-[#02402C] hover:underline"
              >
                Learn about automatic updates
                <span className="ml-2">→</span>
              </Link>
              
              {/* Preview Image */}
              <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src="/updates-preview.webp"
                  alt="EcoTail updates interface"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Latest Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-[#F7F4EC] p-8 lg:p-12"
          >
            <div className="relative">
              <div className="text-sm font-medium uppercase tracking-wider text-[#02402C]">LATEST</div>
              <h3 className="mt-4 text-2xl font-medium text-[#1A2421] lg:text-3xl">
                New from EcoTail
              </h3>
              <p className="mt-4 text-[#5E7D7E] lg:text-lg">
                EcoTail regularly updates with tools and features that make sustainable living easier and more rewarding.
              </p>
              <Link
                to="/whats-new"
                className="mt-6 inline-flex items-center text-[#02402C] hover:underline"
              >
                Learn what's new on EcoTail
                <span className="ml-2">→</span>
              </Link>

              {/* EcoTail Logo */}
              <div className="mt-12 flex justify-center">
                <img
                  src="/ecotail-logo.svg"
                  alt="EcoTail Logo"
                  className="h-24 w-24"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Make it yours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-[40px] font-medium leading-tight text-[#1A2421] lg:text-[52px]">
            Make it{' '}
            <span className="inline-flex items-center rounded-full bg-[#E6F7F3] px-4 py-1">
              <img src="/eco-icon.svg" alt="" className="mr-2 h-6 w-6" />
              <span className="text-[#02402C]">yours</span>
            </span>{' '}
            and take it with you
          </h2>

          {/* Large Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 overflow-hidden rounded-3xl"
          >
            <img
              src="/eco-dashboard.webp"
              alt="EcoTail Dashboard"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Wave */}
      <div className="relative mt-24">
        <svg
          className="relative block w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50L48 45.8333C96 41.6667 192 33.3333 288 29.1667C384 25 480 25 576 33.3333C672 41.6667 768 58.3333 864 62.5C960 66.6667 1056 58.3333 1152 45.8333C1248 33.3333 1344 16.6667 1392 8.33333L1440 0V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="#E6F7F3"
          />
        </svg>
      </div>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden bg-[#F7F4EC] py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-[#1A2421] sm:text-4xl lg:text-5xl"
            >
              A New Era in Waste Management
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#5E7D7E]"
            >
              EcoTail revolutionizes waste management by combining AI technology with sustainable
              practices, making recycling not just a responsibility, but a rewarding experience.
            </motion.p>

            {/* Feature Grid */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'AI-Powered Sorting',
                  description: 'Smart technology that automatically identifies and sorts waste',
                  icon: '🤖',
                  color: 'bg-[#7DD8C6]',
                },
                {
                  title: 'Reusable Canisters',
                  description: 'Eco-friendly containers that reduce plastic waste',
                  icon: '♻️',
                  color: 'bg-[#02402C]',
                },
                {
                  title: 'Gamified Rewards',
                  description: 'Earn points and rewards for sustainable choices',
                  icon: '🎮',
                  color: 'bg-[#7DD8C6]',
                },
                {
                  title: 'Real-Time Tracking',
                  description: 'Monitor your environmental impact instantly',
                  icon: '📊',
                  color: 'bg-[#02402C]',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div
                    className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${feature.color} opacity-10 transition-transform group-hover:scale-150`}
                  />
                  <div className="relative">
                    <div className="mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold text-[#1A2421]">{feature.title}</h3>
                    <p className="text-[#5E7D7E]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-[#1A2421] sm:text-4xl lg:text-5xl"
            >
              How EcoTail Simplifies Your Routine
            </motion.h2>

            {/* Steps */}
            <div className="mt-16">
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  {
                    step: '01',
                    title: 'Scan & Sort',
                    description: 'Built-in AI camera identifies waste category instantly',
                    icon: '📱',
                  },
                  {
                    step: '02',
                    title: 'Reusable Canister Swap',
                    description: 'No more single-use bags, just swap and go',
                    icon: '🔄',
                  },
                  {
                    step: '03',
                    title: 'Track Progress',
                    description: 'Receive instant feedback and waste reduction tips',
                    icon: '📈',
                  },
                  {
                    step: '04',
                    title: 'Earn Rewards',
                    description: 'Accumulate points for eco-friendly habits',
                    icon: '🎁',
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className="relative rounded-2xl bg-white p-8 shadow-lg"
                  >
                    <div className="absolute -top-4 left-8 rounded-full bg-[#7DD8C6] px-4 py-1 text-sm font-bold text-[#1A2421]">
                      {step.step}
                    </div>
                    <div className="mb-4 text-4xl">{step.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold text-[#1A2421]">{step.title}</h3>
                    <p className="text-[#5E7D7E]">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Progress Line (Desktop) */}
              <div className="relative mt-8 hidden lg:block">
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#7DD8C6]/20">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full origin-left bg-[#7DD8C6]"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex justify-center"
            >
              <Link
                to="/signup"
                className="group relative overflow-hidden rounded-lg bg-[#02402C] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <span className="relative z-10">Start Your EcoTail Journey</span>
                <div className="absolute inset-0 -z-10 translate-y-full bg-[#7DD8C6] transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Join Our Growing Community
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "EcoTail has transformed how our office handles waste. We've reduced our waste by 60% in just three months!",
                author: 'Sarah Chen',
                role: 'Office Manager',
                company: 'TechCorp Inc.',
              },
              {
                quote: 'The gamification aspect makes recycling fun for our whole family. My kids love checking their eco-scores!',
                author: 'Michael Rodriguez',
                role: 'Parent',
                location: 'San Francisco',
              },
              {
                quote: 'Implementation was seamless, and the real-time analytics help us make data-driven decisions about our waste management.',
                author: 'Emma Thompson',
                role: 'Sustainability Director',
                company: 'Green Solutions Ltd.',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <p className="text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                    {testimonial.location && ` • ${testimonial.location}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-6">
            {[
              {
                question: "How does EcoTail's AI sorting technology work?",
                answer:
                  'Our AI uses advanced computer vision to instantly identify waste types and guide proper sorting. Simply scan items using your smartphone camera, and our system will tell you exactly how to dispose of them.',
              },
              {
                question: 'What kind of rewards can I earn?',
                answer:
                  'You can earn eco-points for proper waste sorting, which can be redeemed for sustainable products, gift cards, or charitable donations. The more you recycle, the more you earn!',
              },
              {
                question: 'Is EcoTail suitable for businesses?',
                answer:
                  'Absolutely! We offer scalable solutions for businesses of all sizes, from small offices to large enterprises. Our commercial plans include additional features like detailed analytics and custom reporting.',
              },
              {
                question: 'How do I get started with EcoTail?',
                answer:
                  "Getting started is easy! Sign up for an account, download our app, and we'll guide you through the setup process. For businesses, we offer personalized onboarding support.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary-600 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Stay in the Loop</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Get monthly eco-tips, sustainability updates, and exclusive offers delivered to your inbox.
            </p>
            <form className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-white sm:w-96"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-primary-50 sm:w-auto"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 
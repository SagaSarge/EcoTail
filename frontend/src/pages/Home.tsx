import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative -mt-6 bg-gradient-to-b from-primary-600 to-primary-800 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-[64px] lg:leading-[1.1]">
              Effortless Sustainability
            </h1>
            <h2 className="mt-4 text-base font-medium tracking-tight text-primary-50 sm:text-xl md:text-2xl lg:text-[32px] lg:leading-[1.3]">
              AI Rewards Zero Waste
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-primary-100 sm:text-base md:text-lg lg:text-[18px] lg:leading-[1.6]">
              Experience next-level waste management with AI-powered sorting, gamified rewards, and real-time eco-insights—all designed to make going green second nature.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/download"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm transition hover:bg-primary-50 sm:text-lg"
              >
                Download EcoTail
              </Link>
              <Link
                to="/learn-more"
                className="rounded-lg border border-white px-6 py-3 text-base font-medium text-white transition hover:bg-white/10 sm:text-lg"
              >
                Learn more about EcoTail
              </Link>
            </div>
          </div>
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

      {/* Latest Updates Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-[36px]">
          Discover the latest <span className="text-primary-600">EcoTail updates</span>
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            {
              label: 'UPDATES',
              title: 'Automatic updates',
              description:
                'Stay current with the latest features and improvements. EcoTail updates automatically to ensure you always have the best experience.',
              link: '/updates',
              linkText: 'Learn about automatic updates',
            },
            {
              label: 'LATEST',
              title: "What's New from EcoTail",
              description:
                'Explore our newest features designed to make waste management even more efficient, sustainable, and rewarding.',
              link: '/whats-new',
              linkText: "Learn what's new on EcoTail",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-lg bg-primary-50/50 p-6 dark:bg-primary-900/10"
            >
              <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {card.label}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">{card.description}</p>
              <Link
                to={card.link}
                className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {card.linkText}
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A New Era in Waste Management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            EcoTail revolutionizes waste management by combining AI technology with sustainable practices,
            making recycling not just a responsibility, but a rewarding experience.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'AI-Powered Sorting',
                description: 'Smart technology that automatically identifies and sorts waste',
                icon: '🤖',
              },
              {
                title: 'Reusable Canisters',
                description: 'Eco-friendly containers that reduce plastic waste',
                icon: '♻️',
              },
              {
                title: 'Gamified Rewards',
                description: 'Earn points and rewards for sustainable choices',
                icon: '🎮',
              },
              {
                title: 'Real-Time Tracking',
                description: 'Monitor your environmental impact instantly',
                icon: '📊',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How EcoTail Simplifies Your Routine
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Scan & Sort',
                  description: 'Use our AI to identify waste type instantly',
                  icon: '📱',
                },
                {
                  step: '02',
                  title: 'Smart Disposal',
                  description: 'Place items in designated smart bins',
                  icon: '🗑️',
                },
                {
                  step: '03',
                  title: 'Track Progress',
                  description: 'Monitor your impact in real-time',
                  icon: '📈',
                },
                {
                  step: '04',
                  title: 'Earn Rewards',
                  description: 'Get points for sustainable choices',
                  icon: '🎁',
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
                >
                  <div className="absolute -top-4 left-6 rounded-full bg-primary-600 px-4 py-1 text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                to="/signup"
                className="rounded-lg bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-700"
              >
                Start Your EcoTail Journey
              </Link>
            </div>
          </div>
        </div>
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
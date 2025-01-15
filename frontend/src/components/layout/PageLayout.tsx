import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  const [email, setEmail] = useState('')
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [preOrderSuccess, setPreOrderSuccess] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribeSuccess(true)
      setEmail('')
      // Reset success message after 3 seconds
      setTimeout(() => setSubscribeSuccess(false), 3000)
    }
  }

  const handlePreOrder = () => {
    setPreOrderSuccess(true)
    // Reset success message after 3 seconds
    setTimeout(() => setPreOrderSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Circle */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <span className="font-medium text-gray-900">EcoTail</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link to="/ai-innovations" className="text-gray-600 hover:text-gray-900">AI Innovations</Link>
            <Link to="/clean" className="text-gray-600 hover:text-gray-900">Clean</Link>
            <Link to="/by-self-labs" className="text-gray-600 hover:text-gray-900">By Self Labs</Link>
            <Link to="/education" className="text-gray-600 hover:text-gray-900">Education</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Logo and social links */}
          <div className="flex flex-col items-center mb-12">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">EcoTail</span>
            </Link>
            <div className="flex gap-6">
              <a href="https://twitter.com/ecotail" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/ecotail" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/ecotail" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/ai-innovations" className="text-sm text-gray-600 hover:text-gray-900">
                    AI Innovations
                  </Link>
                </li>
                <li>
                  <Link to="/clean" className="text-sm text-gray-600 hover:text-gray-900">
                    Clean
                  </Link>
                </li>
                <li>
                  <Link to="/bins" className="text-sm text-gray-600 hover:text-gray-900">
                    Smart Bins
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-sm text-gray-600 hover:text-gray-900">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/by-self-labs" className="text-sm text-gray-600 hover:text-gray-900">
                    By Self Labs
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="text-sm text-gray-600 hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-sm text-gray-600 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-sm text-gray-600 hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-sm text-gray-600 hover:text-gray-900">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Pre-order Section */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-green-50 to-teal-50 p-8 sm:p-10">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold text-gray-900">Join the EcoTail Revolution</h3>
              <p className="mt-2 text-sm text-gray-600">
                Be the first to experience smart waste management. Get exclusive updates and early access.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-lg border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Subscribe
                  </button>
                </div>
                {/* Success Message for Subscribe */}
                <div className={`mt-2 transition-all duration-300 ${subscribeSuccess ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-sm text-green-600">
                    ✓ Thank you for subscribing! Check your email for updates.
                  </p>
                </div>
              </form>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handlePreOrder}
                  className="inline-flex items-center gap-x-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span>Pre-order Now</span>
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Success Message for Pre-order */}
                <div className={`mt-2 transition-all duration-300 ${preOrderSuccess ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-sm text-green-600">
                    ✓ Pre-order received! We'll contact you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} EcoTail. All rights reserved.
              </p>
              <div className="flex gap-x-6">
                <Link to="/accessibility" className="text-sm text-gray-500 hover:text-gray-900">
                  Accessibility
                </Link>
                <Link to="/sitemap" className="text-sm text-gray-500 hover:text-gray-900">
                  Sitemap
                </Link>
                <Link to="/cookies" className="text-sm text-gray-500 hover:text-gray-900">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
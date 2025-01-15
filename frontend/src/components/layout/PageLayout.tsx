import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
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

          {/* Download Button */}
          <div>
            <Button>Download EcoTail</Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white py-4 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bins"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Smart Bins
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} EcoTail.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'

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
      setTimeout(() => setSubscribeSuccess(false), 3000)
    }
  }

  const handlePreOrder = () => {
    setPreOrderSuccess(true)
    setTimeout(() => setPreOrderSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] dark:bg-[#1A2421]">
      <header className="sticky top-0 z-50 bg-[#F7F4EC] dark:bg-[#1A2421] border-b border-[#7DD8C6]/20">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#7DD8C6]/10 flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <span className="font-bold text-xl text-[#02402C] dark:text-[#7DD8C6]">EcoTail</span>
            </Link>

            <Link to="/ai-innovations" className="text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
              AI Innovations
            </Link>
            <Link to="/clean" className="text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
              Clean
            </Link>
            <Link to="/by-self-labs" className="text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
              By Self Labs
            </Link>
            <Link to="/education" className="text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
              Education
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#F7F4EC] dark:bg-[#1A2421] border-t border-[#7DD8C6]/20 py-16 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-12 h-12 rounded-full bg-[#7DD8C6]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-xl font-semibold text-[#02402C] dark:text-[#7DD8C6]">EcoTail</span>
            </Link>
            <div className="flex gap-8">
              <a href="https://twitter.com/ecotail" className="text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6 transform hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] tracking-wider uppercase">Product</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link to="/ai-innovations" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    AI Innovations
                  </Link>
                </li>
                <li>
                  <Link to="/clean" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Clean
                  </Link>
                </li>
                <li>
                  <Link to="/bins" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Smart Bins
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] tracking-wider uppercase">Company</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link to="/by-self-labs" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    By Self Labs
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] tracking-wider uppercase">Resources</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link to="/blog" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] tracking-wider uppercase">Legal</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link to="/privacy" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="text-base text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Pre-order Section */}
          <div className="mt-16 rounded-2xl bg-[#7DD8C6]/10 dark:bg-[#02402C]/20 p-8 sm:p-10">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold text-[#02402C] dark:text-[#7DD8C6]">Join the EcoTail Revolution</h3>
              <p className="mt-2 text-sm text-[#5E7D7E] dark:text-[#F7F4EC]">
                Be the first to experience smart waste management. Get exclusive updates and early access.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-lg border-0 px-4 py-2.5 text-[#02402C] dark:text-[#F7F4EC] bg-white dark:bg-[#1A2421] shadow-sm ring-1 ring-inset ring-[#7DD8C6]/20 placeholder:text-[#5E7D7E] focus:ring-2 focus:ring-inset focus:ring-[#7DD8C6] text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-lg bg-[#7DD8C6] hover:bg-[#6BC7B5] dark:bg-[#02402C] dark:hover:bg-[#035038] px-4 py-2.5 text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] shadow-sm transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
                <div className={`mt-2 transition-all duration-300 ${subscribeSuccess ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-sm text-[#02402C] dark:text-[#7DD8C6]">
                    ✓ Thank you for subscribing! Check your email for updates.
                  </p>
                </div>
              </form>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handlePreOrder}
                  className="inline-flex items-center gap-x-2 rounded-lg bg-[#7DD8C6] hover:bg-[#6BC7B5] dark:bg-[#02402C] dark:hover:bg-[#035038] px-5 py-2.5 text-sm font-semibold text-[#02402C] dark:text-[#7DD8C6] shadow-sm transition-colors duration-200"
                >
                  <span>Pre-order Now</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`mt-2 transition-all duration-300 ${preOrderSuccess ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-sm text-[#02402C] dark:text-[#7DD8C6]">
                    ✓ Pre-order received! We'll contact you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 border-t border-[#7DD8C6]/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-[#5E7D7E] dark:text-[#7DD8C6]">
                © {new Date().getFullYear()} EcoTail. All rights reserved.
              </p>
              <div className="flex gap-x-8">
                <Link to="/accessibility" className="text-sm text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                  Accessibility
                </Link>
                <Link to="/sitemap" className="text-sm text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
                  Sitemap
                </Link>
                <Link to="/cookies" className="text-sm text-[#5E7D7E] hover:text-[#02402C] dark:text-[#7DD8C6] dark:hover:text-[#F7F4EC] transition-colors">
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
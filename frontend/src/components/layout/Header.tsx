import { Link } from 'react-router-dom'
import { ThemeToggle } from '../common/ThemeToggle'

export function Header() {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              EcoTail
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Dashboard
              </Link>
              <Link to="/bins" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Smart Bins
              </Link>
              <Link to="/analytics" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Analytics
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
} 
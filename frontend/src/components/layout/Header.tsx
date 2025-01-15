import { Link } from 'react-router-dom'
import { Button } from '../common/Button'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="EcoTail" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            EcoTail
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <Link 
            to="/dashboard" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link 
            to="/analytics" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Analytics
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
} 
import { ReactNode } from 'react'
import { Header } from './Header'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="mt-auto py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} EcoTail. All rights reserved.
      </footer>
    </div>
  )
} 
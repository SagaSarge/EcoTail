import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoTail - Smart Waste Management',
  description: 'Revolutionary smart trash can system that makes recycling and waste management easy and fun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 
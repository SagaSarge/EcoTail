import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { PageLayout } from '@/components/layout/PageLayout'
import { Home } from '@/pages/Home'
import { SmartBins } from '@/pages/SmartBins'
import { AIInnovations } from '@/pages/AIInnovations'
import { Clean } from '@/pages/Clean'
import { BySelfLabs } from '@/pages/BySelfLabs'
import { Education } from '@/pages/Education'
import { ErrorBoundary } from '@/components/error/ErrorBoundary'

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bins" element={<SmartBins />} />
              <Route path="/ai-innovations" element={<AIInnovations />} />
              <Route path="/clean" element={<Clean />} />
              <Route path="/by-self-labs" element={<BySelfLabs />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </PageLayout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

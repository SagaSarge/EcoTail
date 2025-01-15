import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { PageLayout } from './components/layout/PageLayout'
import { SmartBins } from './pages/SmartBins'
import { Home } from './pages/Home'
import { AIInnovations } from './pages/AIInnovations'
import { Clean } from './pages/Clean'
import { BySelfLabs } from './pages/BySelfLabs'
import { Education } from './pages/Education'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/bins" element={<SmartBins />} />
        <Route path="/ai-innovations" element={<AIInnovations />} />
        <Route path="/clean" element={<Clean />} />
        <Route path="/by-self-labs" element={<BySelfLabs />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <PageLayout>
        <AnimatedRoutes />
      </PageLayout>
    </Router>
  )
}

export default App

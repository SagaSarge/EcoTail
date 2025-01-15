import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { SmartBins } from './pages/SmartBins'

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="space-y-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Welcome to EcoTail
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  The future of smart waste management
                </p>
              </div>
            } 
          />
          <Route path="/bins" element={<SmartBins />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}

export default App

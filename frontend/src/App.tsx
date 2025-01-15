import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAppStore } from './stores/useAppStore'

function App() {
  const isLoading = useAppStore((state) => state.isLoading)

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white">Loading...</div>
          </div>
        )}
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-gray-900">
                EcoTail Smart Trash
              </h1>
              <p className="mt-4 text-gray-600">
                Welcome to the future of waste management
              </p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App

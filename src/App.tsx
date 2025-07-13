import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function AppContent() {
  const { isDarkMode } = useDarkMode()
  
  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/second" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App

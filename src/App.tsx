import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { NotificationProvider } from './contexts/NotificationContext'
import Header from './components/Header'
import ToastContainer from './components/ToastContainer'
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
        <ToastContainer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </DarkModeProvider>
  )
}

export default App

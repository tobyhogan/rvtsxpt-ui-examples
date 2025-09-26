import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { NotificationProvider } from './contexts/NotificationContext'
import Header from './1-struct-components/Header'
import ToastContainer from './2-gen-components/ToastContainer'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'

function AppContent() {
  const { isDarkMode } = useDarkMode()
  
  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/page1" replace />} />
            
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            <Route path="/page8" element={<Page8 />} />

            <Route path="*" element={<Navigate to="/page1" replace />} />
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

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { NotificationProvider } from './contexts/NotificationContext'
import Header from './1-struct-components/Header'
import ToastContainer from './2-gen-components/ToastContainer'
import ThemedShowcasePage from './pages/ThemedShowcasePage'
import { 
  defaultTheme, 
  duolingoTheme, 
  todoistTheme, 
  glassmorphicTheme, 
  spotifyTheme, 
  protonTheme, 
  iosTheme 
} from './themes'

function AppContent() {
  const { isDarkMode } = useDarkMode()
  
  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/default" replace />} />
            
            {/* Themed showcase pages */}
            <Route path="/default" element={<ThemedShowcasePage theme={defaultTheme} />} />
            <Route path="/duolingo" element={<ThemedShowcasePage theme={duolingoTheme} />} />
            <Route path="/todoist" element={<ThemedShowcasePage theme={todoistTheme} />} />
            <Route path="/glassmorphic" element={<ThemedShowcasePage theme={glassmorphicTheme} />} />
            <Route path="/spotify" element={<ThemedShowcasePage theme={spotifyTheme} />} />
            <Route path="/proton" element={<ThemedShowcasePage theme={protonTheme} />} />
            <Route path="/ios" element={<ThemedShowcasePage theme={iosTheme} />} />

            <Route path="*" element={<Navigate to="/default" replace />} />
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

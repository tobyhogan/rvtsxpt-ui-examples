import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { DEFAULT_DARK_MODE } from '../config/defaults'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

// Helper function to get initial dark mode state from localStorage
const getInitialDarkMode = (): boolean => {
  if (typeof window === 'undefined') {
    return DEFAULT_DARK_MODE // Default for SSR
  }
  
  try {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      return JSON.parse(savedMode)
    }
    
    // Use the configured default from defaults.ts
    return DEFAULT_DARK_MODE
  } catch (error) {
    console.warn('Error reading dark mode from localStorage:', error)
    return DEFAULT_DARK_MODE
  }
}

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode)

  // Save to localStorage whenever dark mode changes
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    } catch (error) {
      console.warn('Error saving dark mode to localStorage:', error)
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

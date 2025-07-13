import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

// Helper function to get initial dark mode state from localStorage
const getInitialDarkMode = (): boolean => {
  if (typeof window === 'undefined') {
    return false // Default for SSR
  }
  
  try {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      return JSON.parse(savedMode)
    }
    
    // If no saved preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch (error) {
    console.warn('Error reading dark mode from localStorage:', error)
    return false
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

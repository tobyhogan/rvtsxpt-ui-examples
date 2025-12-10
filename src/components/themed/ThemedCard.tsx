import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedCardProps {
  theme: Theme
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function ThemedCard({ theme, title, subtitle, children, className = '' }: ThemedCardProps) {
  const { isDarkMode } = useDarkMode()
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium} ${className}`}>
      {title && (
        <h3 className={`text-lg md:text-xl ${theme.styles.fontWeight.bold} mb-2 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-4 ${theme.styles.fontWeight.normal} ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

interface ThemedNotificationCardProps {
  theme: Theme
}

export function ThemedNotificationCard({ theme }: ThemedNotificationCardProps) {
  const { isDarkMode } = useDarkMode()
  const { emoji, title, message } = theme.content.notificationCard
  
  // Theme-specific card styling
  const getCardStyle = () => {
    switch (theme.slug) {
      case 'duolingo':
        return isDarkMode 
          ? 'bg-green-800 border-4 border-green-700' 
          : 'bg-green-100 border-4 border-green-300'
      case 'glassmorphic':
        return 'backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/30'
      case 'spotify':
        return isDarkMode 
          ? 'bg-gray-800 border border-green-600' 
          : 'bg-green-50 border border-green-200'
      case 'proton':
        return isDarkMode 
          ? 'bg-purple-900 border border-purple-700' 
          : 'bg-purple-50 border border-purple-200'
      case 'ios':
        return isDarkMode 
          ? 'bg-blue-900/50 backdrop-blur-md border border-blue-700' 
          : 'bg-blue-50/70 backdrop-blur-md border border-blue-200'
      default:
        return isDarkMode 
          ? 'bg-blue-900 border border-blue-700' 
          : 'bg-blue-50 border border-blue-200'
    }
  }
  
  const getTextColors = () => {
    if (theme.slug === 'glassmorphic') {
      return { title: 'text-white', message: 'text-white/80' }
    }
    switch (theme.slug) {
      case 'duolingo':
        return { 
          title: isDarkMode ? 'text-green-200' : 'text-green-800', 
          message: isDarkMode ? 'text-green-300' : 'text-green-700' 
        }
      case 'spotify':
        return { 
          title: isDarkMode ? 'text-green-400' : 'text-green-800', 
          message: isDarkMode ? 'text-gray-300' : 'text-green-700' 
        }
      case 'proton':
        return { 
          title: isDarkMode ? 'text-purple-300' : 'text-purple-800', 
          message: isDarkMode ? 'text-purple-200' : 'text-purple-700' 
        }
      default:
        return { 
          title: isDarkMode ? 'text-blue-200' : 'text-blue-800', 
          message: isDarkMode ? 'text-blue-300' : 'text-blue-700' 
        }
    }
  }
  
  const colors = getTextColors()

  return (
    <div className={`${getCardStyle()} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 text-2xl mr-3">
          {emoji}
        </div>
        <div>
          <h3 className={`text-sm md:text-base ${theme.styles.fontWeight.bold} ${colors.title}`}>
            {title}
          </h3>
          <p className={`text-sm mt-1 ${theme.styles.fontWeight.normal} ${colors.message}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

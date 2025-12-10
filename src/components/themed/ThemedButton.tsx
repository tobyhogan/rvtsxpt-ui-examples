import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedButtonProps {
  theme: Theme
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  onClick?: () => void
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ThemedButton({ 
  theme, 
  variant = 'primary', 
  onClick, 
  children, 
  className = '',
  size = 'md'
}: ThemedButtonProps) {
  const { isDarkMode } = useDarkMode()
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  const getVariantClasses = () => {
    // Use theme's custom button classes if available
    if (variant === 'primary' && theme.customClasses?.primaryButton) {
      return theme.customClasses.primaryButton
    }
    if (variant === 'secondary' && theme.customClasses?.secondaryButton) {
      return theme.customClasses.secondaryButton
    }
    
    // Default button styling by variant
    switch (variant) {
      case 'primary':
        return `${theme.colors.primary} ${theme.colors.primaryHover} ${theme.colors.primaryText}`
      case 'secondary':
        return isDarkMode 
          ? 'border-2 border-gray-600 text-gray-300 hover:bg-gray-700' 
          : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
      case 'success':
        return `${theme.colors.success} hover:opacity-90 text-white`
      case 'danger':
        return `${theme.colors.error} hover:opacity-90 text-white`
      case 'warning':
        return `${theme.colors.warning} hover:opacity-90 text-white`
      case 'info':
        return `${theme.colors.info} hover:opacity-90 text-white`
      default:
        return `${theme.colors.primary} ${theme.colors.primaryHover} ${theme.colors.primaryText}`
    }
  }
  
  const baseClasses = `${theme.styles.borderRadius.small} ${theme.styles.fontWeight.medium} transition-colors ${theme.styles.effects.transform || ''}`

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${getVariantClasses()} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

interface ThemedButtonGroupProps {
  theme: Theme
  title: string
  subtitle?: string
  buttons: {
    label: string
    variant: 'success' | 'danger' | 'warning' | 'info'
    onClick: () => void
  }[]
}

export function ThemedButtonGroup({ theme, title, subtitle, buttons }: ThemedButtonGroupProps) {
  const { isDarkMode } = useDarkMode()
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  // Get theme-specific button styling for toast buttons
  const getToastButtonStyle = (variant: string) => {
    const baseStyle = `px-4 py-2 ${theme.styles.borderRadius.small} transition-colors text-sm text-white`
    
    if (theme.slug === 'duolingo') {
      const borderStyle = 'border-b-4 shadow-lg transform hover:scale-105'
      switch (variant) {
        case 'success': return `${baseStyle} bg-green-500 hover:bg-green-600 ${borderStyle} border-green-600 font-black`
        case 'danger': return `${baseStyle} bg-red-500 hover:bg-red-600 ${borderStyle} border-red-600 font-black`
        case 'warning': return `${baseStyle} bg-yellow-500 hover:bg-yellow-600 ${borderStyle} border-yellow-600 font-black`
        case 'info': return `${baseStyle} bg-blue-500 hover:bg-blue-600 ${borderStyle} border-blue-600 font-black`
      }
    }
    
    if (theme.slug === 'glassmorphic') {
      const glassStyle = 'backdrop-blur-md border border-white/30 shadow-lg hover:scale-105 transition-all'
      switch (variant) {
        case 'success': return `${baseStyle} bg-green-500/50 hover:bg-green-500/70 ${glassStyle}`
        case 'danger': return `${baseStyle} bg-red-500/50 hover:bg-red-500/70 ${glassStyle}`
        case 'warning': return `${baseStyle} bg-yellow-500/50 hover:bg-yellow-500/70 ${glassStyle}`
        case 'info': return `${baseStyle} bg-blue-500/50 hover:bg-blue-500/70 ${glassStyle}`
      }
    }
    
    // Default styling
    switch (variant) {
      case 'success': return `${baseStyle} bg-green-600 hover:bg-green-700`
      case 'danger': return `${baseStyle} bg-red-600 hover:bg-red-700`
      case 'warning': return `${baseStyle} bg-yellow-600 hover:bg-yellow-700`
      case 'info': return `${baseStyle} bg-blue-600 hover:bg-blue-700`
      default: return baseStyle
    }
  }

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      <h3 className={`text-lg md:text-xl ${theme.styles.fontWeight.bold} mb-4 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`text-sm mb-4 ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
          {subtitle}
        </p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={getToastButtonStyle(button.variant === 'danger' ? 'danger' : button.variant)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

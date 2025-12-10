import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedQuickActionsProps {
  theme: Theme
  onActionClick: (action: string) => void
}

export function ThemedQuickActions({ theme, onActionClick }: ThemedQuickActionsProps) {
  const { isDarkMode } = useDarkMode()
  const { title, subtitle, actions } = theme.content.quickActions
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  const getActionButtonStyle = () => {
    if (theme.slug === 'duolingo') {
      return isDarkMode
        ? 'hover:bg-slate-700 text-slate-300 border-2 border-slate-600 rounded-2xl font-bold transition-all transform hover:scale-105'
        : 'hover:bg-green-50 text-green-700 border-2 border-green-200 rounded-2xl font-bold transition-all transform hover:scale-105'
    }
    if (theme.slug === 'glassmorphic') {
      return 'hover:bg-white/20 text-white/80 backdrop-blur-sm rounded-xl transition-all border border-white/10'
    }
    return isDarkMode
      ? 'hover:bg-gray-700 text-gray-300 rounded-lg transition-colors'
      : 'hover:bg-gray-50 text-gray-700 rounded-lg transition-colors'
  }

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      <h3 className={`text-lg ${theme.styles.fontWeight.bold} mb-2 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
        {title}
      </h3>
      <p className={`text-sm mb-4 ${theme.styles.fontWeight.normal} ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
        {subtitle}
      </p>
      <div className="space-y-2">
        {actions.map((action: { icon: string; label: string }, index: number) => (
          <button
            key={index}
            onClick={() => onActionClick(action.label)}
            className={`w-full text-left px-3 py-2 md:px-4 md:py-3 ${getActionButtonStyle()}`}
          >
            {action.icon} {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}

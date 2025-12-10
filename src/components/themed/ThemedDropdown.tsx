import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedDropdownProps {
  theme: Theme
  isOpen: boolean
  onToggle: () => void
  onSelect: (option: string) => void
}

export function ThemedDropdown({ theme, isOpen, onToggle, onSelect }: ThemedDropdownProps) {
  const { isDarkMode } = useDarkMode()
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  const getButtonStyle = () => {
    if (theme.slug === 'duolingo') {
      return isDarkMode
        ? 'border-4 border-slate-600 bg-slate-700 text-white font-bold rounded-2xl hover:scale-105 transition-all'
        : 'border-4 border-green-300 bg-green-50 text-green-900 font-bold rounded-2xl hover:scale-105 transition-all'
    }
    if (theme.slug === 'glassmorphic') {
      return 'backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all'
    }
    return isDarkMode
      ? 'border border-gray-600 bg-gray-700 text-white rounded-lg'
      : 'border border-gray-300 bg-white text-gray-900 rounded-lg'
  }

  const getDropdownStyle = () => {
    if (theme.slug === 'duolingo') {
      return isDarkMode
        ? 'bg-slate-700 border-4 border-slate-600 rounded-2xl'
        : 'bg-white border-4 border-green-200 rounded-2xl'
    }
    if (theme.slug === 'glassmorphic') {
      return 'backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl'
    }
    return isDarkMode
      ? 'bg-gray-700 border border-gray-600 rounded-lg'
      : 'bg-white border border-gray-200 rounded-lg'
  }

  const getOptionStyle = () => {
    if (theme.slug === 'duolingo') {
      return isDarkMode
        ? 'hover:bg-slate-600 font-bold first:rounded-t-xl last:rounded-b-xl'
        : 'hover:bg-green-50 font-bold first:rounded-t-xl last:rounded-b-xl'
    }
    if (theme.slug === 'glassmorphic') {
      return 'hover:bg-white/20 first:rounded-t-lg last:rounded-b-lg'
    }
    return isDarkMode
      ? 'hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg'
      : 'hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
  }

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      <h3 className={`text-lg ${theme.styles.fontWeight.bold} mb-4 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
        {theme.content.dropdownTitle}
      </h3>
      <div className="relative">
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between px-4 py-2 md:py-3 ${getButtonStyle()}`}
        >
          {theme.content.dropdownTitle}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className={`absolute top-full left-0 right-0 mt-1 md:mt-2 shadow-lg z-10 ${getDropdownStyle()}`}>
            {theme.content.dropdownOptions.map((option) => (
              <button
                key={option.label}
                className={`w-full text-left px-4 py-2 md:py-3 ${getOptionStyle()} ${
                  isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary
                }`}
                onClick={() => {
                  onSelect(option.label)
                }}
              >
                {option.icon} {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

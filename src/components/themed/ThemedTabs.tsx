import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedTabsProps {
  theme: Theme
  selectedTab: string
  onTabChange: (tab: string) => void
  children: React.ReactNode
}

export function ThemedTabs({ theme, selectedTab, onTabChange, children }: ThemedTabsProps) {
  const { isDarkMode } = useDarkMode()
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  const getTabClass = (tab: string) => {
    const isActive = selectedTab === tab
    
    if (theme.customClasses?.tabButton) {
      return `${theme.customClasses.tabButton} ${
        isActive 
          ? theme.customClasses.tabButtonActive 
          : isDarkMode 
            ? `${theme.colors.textSecondaryDark} hover:${theme.colors.textPrimaryDark}` 
            : `${theme.colors.textSecondary} hover:${theme.colors.textPrimary}`
      }`
    }
    
    // Default tab styling
    return `px-4 py-2 ${theme.styles.borderRadius.small} ${theme.styles.fontWeight.medium} transition-colors ${
      isActive
        ? `${theme.colors.primary} ${theme.colors.primaryText}`
        : isDarkMode 
          ? `${theme.colors.textSecondaryDark} hover:bg-gray-700` 
          : `${theme.colors.textSecondary} hover:bg-gray-100`
    }`
  }

  // Get emoji for tab based on theme
  const getTabEmoji = (tab: string): string => {
    const tabIndex = theme.content.tabs.indexOf(tab)
    const emojis: Record<string, string[]> = {
      default: ['📊', '✨', '💰'],
      duolingo: ['📖', '🎯', '🏆'],
      todoist: ['📋', '📁', '📈'],
      glassmorphic: ['📊', '✨', '🎨'],
      spotify: ['🎵', '🎶', '🎤'],
      proton: ['🔒', '🌍', '🛡️'],
      ios: ['📱', '🔗', '🔒'],
    }
    return emojis[theme.slug]?.[tabIndex] || ''
  }

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      {/* Tab Navigation */}
      <div className={`flex ${theme.slug === 'ios' ? 'bg-gray-200/50 dark:bg-gray-700/50 p-1 rounded-2xl backdrop-blur-sm' : 'space-x-1'} mb-6`}>
        {theme.content.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={getTabClass(tab)}
          >
            {getTabEmoji(tab)} {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className={isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}>
        {children}
      </div>
    </div>
  )
}

interface ThemedTabContentProps {
  theme: Theme
  tab: string
}

export function ThemedTabContent({ theme, tab }: ThemedTabContentProps) {
  const { isDarkMode } = useDarkMode()
  const content = theme.content.tabContent[tab]
  
  if (!content) return null
  
  return (
    <div>
      <h3 className={`text-xl md:text-2xl ${theme.styles.fontWeight.bold} mb-3 md:mb-4 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
        {content.title}
      </h3>
      <p className={`text-base md:text-lg ${theme.styles.fontWeight.normal}`}>
        {content.description}
      </p>
      {content.highlightBox && (
        <div className={`mt-4 p-4 ${theme.styles.borderRadius.medium} ${
          theme.slug === 'duolingo' 
            ? 'bg-yellow-100 border-4 border-yellow-300' 
            : theme.slug === 'glassmorphic'
              ? 'backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/30'
              : 'bg-blue-50 border border-blue-200'
        }`}>
          <p className={`${theme.styles.fontWeight.medium} ${
            theme.slug === 'duolingo' 
              ? 'text-yellow-800' 
              : theme.slug === 'glassmorphic'
                ? 'text-white'
                : 'text-blue-800'
          }`}>
            {content.highlightBox}
          </p>
        </div>
      )}
    </div>
  )
}

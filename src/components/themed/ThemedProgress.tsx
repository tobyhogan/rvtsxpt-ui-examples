import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedProgressProps {
  theme: Theme
}

export function ThemedProgress({ theme }: ThemedProgressProps) {
  const { isDarkMode } = useDarkMode()
  const { title, progressLabel, progressValue, items } = theme.content.stats
  
  const containerClass = isDarkMode
    ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
    : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`

  const getProgressBarStyle = () => {
    if (theme.slug === 'duolingo') {
      return {
        container: isDarkMode ? 'bg-slate-700 border-4 border-slate-600' : 'bg-gray-200 border-4 border-gray-300',
        bar: 'bg-green-500 border-2 border-green-400',
      }
    }
    if (theme.slug === 'glassmorphic') {
      return {
        container: 'bg-white/20 border border-white/30',
        bar: 'bg-gradient-to-r from-cyan-400 to-purple-500',
      }
    }
    if (theme.slug === 'spotify') {
      return {
        container: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
        bar: 'bg-green-500',
      }
    }
    if (theme.slug === 'proton') {
      return {
        container: isDarkMode ? 'bg-gray-700' : 'bg-purple-100',
        bar: 'bg-purple-600',
      }
    }
    return {
      container: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
      bar: 'bg-blue-600',
    }
  }

  const getStatCardStyle = () => {
    if (theme.slug === 'duolingo') {
      return (index: number) => {
        const colors = ['bg-orange-100 border-4 border-orange-300', 'bg-purple-100 border-4 border-purple-300', 'bg-blue-100 border-4 border-blue-300']
        return isDarkMode ? 'bg-slate-700 border border-slate-600' : colors[index % colors.length]
      }
    }
    if (theme.slug === 'glassmorphic') {
      return () => 'backdrop-blur-md bg-white/10 border border-white/30'
    }
    return () => isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
  }

  const progressStyles = getProgressBarStyle()
  const statCardStyle = getStatCardStyle()

  // Parse progress value to get percentage
  const getProgressPercent = () => {
    if (progressValue.includes('/')) {
      const parts = progressValue.split('/')
      const current = parseFloat(parts[0].replace(/[^0-9.]/g, ''))
      const total = parseFloat(parts[1].replace(/[^0-9.]/g, ''))
      return (current / total) * 100
    }
    return parseFloat(progressValue.replace(/[^0-9.]/g, '')) || 60
  }

  return (
    <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
      <h3 className={`text-xl ${theme.styles.fontWeight.bold} mb-4 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
        {title}
      </h3>
      <div className="space-y-4 md:space-y-6">
        <div>
          <div className="flex justify-between mb-2 md:mb-3">
            <span className={`text-sm md:text-lg ${theme.styles.fontWeight.medium} ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
              {progressLabel}
            </span>
            <span className={`text-sm md:text-lg ${theme.styles.fontWeight.bold} ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
              {progressValue}
            </span>
          </div>
          <div className={`w-full ${theme.styles.borderRadius.full} h-2 md:h-4 ${progressStyles.container}`}>
            <div 
              className={`${progressStyles.bar} h-full ${theme.styles.borderRadius.full}`} 
              style={{ width: `${getProgressPercent()}%` }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`text-center p-2 md:p-4 ${theme.styles.borderRadius.medium} ${statCardStyle(index)}`}
            >
              <div className={`text-xl md:text-2xl ${theme.styles.fontWeight.black} ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
                {item.value}
              </div>
              <div className={`text-xs md:text-sm ${theme.styles.fontWeight.medium} ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

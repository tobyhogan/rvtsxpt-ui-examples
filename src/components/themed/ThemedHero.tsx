import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedHeroProps {
  theme: Theme
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function ThemedHero({ theme, onPrimaryClick, onSecondaryClick }: ThemedHeroProps) {
  const { isDarkMode } = useDarkMode()
  
  const containerClass = isDarkMode 
    ? theme.customClasses?.heroContainerDark || `${theme.colors.cardBackgroundDark} ${theme.styles.borderRadius.large} p-6`
    : theme.customClasses?.heroContainer || `${theme.colors.cardBackground} ${theme.styles.borderRadius.large} p-6`

  return (
    <div className={`${containerClass} mb-8`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-4xl md:text-5xl ${theme.styles.fontWeight.bold} text-white mb-4 ${theme.slug === 'glassmorphic' ? 'drop-shadow-lg' : ''}`}>
            {theme.content.hero.title}
          </h1>
          <p className={`text-lg md:text-xl mb-6 ${theme.styles.fontWeight.normal} ${theme.slug === 'glassmorphic' ? 'text-white/80 drop-shadow-sm' : 'text-white/90'}`}>
            {theme.content.hero.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={onPrimaryClick}
              className={theme.customClasses?.primaryButton || `${theme.colors.primary} ${theme.colors.primaryHover} ${theme.colors.primaryText} px-6 py-3 ${theme.styles.borderRadius.medium} ${theme.styles.fontWeight.semibold} transition-colors`}
            >
              {theme.content.hero.primaryButton}
            </button>
            <button 
              onClick={onSecondaryClick}
              className={theme.customClasses?.secondaryButton || `${theme.colors.secondary} ${theme.colors.secondaryHover} ${theme.colors.secondaryText} px-6 py-3 ${theme.styles.borderRadius.medium} ${theme.styles.fontWeight.semibold} transition-colors`}
            >
              {theme.content.hero.secondaryButton}
            </button>
          </div>
        </div>
        {theme.content.hero.emoji && (
          <div className="hidden md:block text-6xl md:text-8xl opacity-80">
            {theme.content.hero.emoji}
          </div>
        )}
      </div>
    </div>
  )
}

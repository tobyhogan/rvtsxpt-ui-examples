import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { Theme } from '../themes'
import { useThemedToasts } from '../hooks/useThemedToasts'
import {
  ThemedHero,
  ThemedTabs,
  ThemedTabContent,
  ThemedCard,
  ThemedNotificationCard,
  ThemedButtonGroup,
  ThemedDropdown,
  ThemedModal,
  ThemedProgress,
  ThemedQuickActions,
} from '../components/themed'

interface ThemedShowcasePageProps {
  theme: Theme
}

export default function ThemedShowcasePage({ theme }: ThemedShowcasePageProps) {
  const { isDarkMode } = useDarkMode()
  const toasts = useThemedToasts(theme)
  
  // State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(theme.content.tabs[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  // Background elements for glassmorphic theme
  const renderBackgroundElements = () => {
    if (theme.slug !== 'glassmorphic') return null
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-30 ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-pink-300 to-orange-300'} blur-3xl`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-30 ${isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'} blur-3xl`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20 ${isDarkMode ? 'bg-gradient-to-r from-green-400 to-cyan-500' : 'bg-gradient-to-r from-yellow-200 to-pink-200'} blur-3xl`}></div>
      </div>
    )
  }

  // Get page background class
  const pageBackground = isDarkMode ? theme.colors.pageBackgroundDark : theme.colors.pageBackground

  // Toast button configurations
  const topRightToastButtons = [
    { label: 'Success Toast', variant: 'success' as const, onClick: toasts.showSuccessToast },
    { label: 'Error Toast', variant: 'danger' as const, onClick: toasts.showErrorToast },
    { label: 'Warning Toast', variant: 'warning' as const, onClick: toasts.showWarningToast },
    { label: 'Info Toast', variant: 'info' as const, onClick: toasts.showInfoToast },
  ]

  const bottomLeftToastButtons = [
    { label: '↙ Success', variant: 'success' as const, onClick: toasts.showBottomSuccessToast },
    { label: '↙ Error', variant: 'danger' as const, onClick: toasts.showBottomErrorToast },
    { label: '↙ Warning', variant: 'warning' as const, onClick: toasts.showBottomWarningToast },
    { label: '↙ Info', variant: 'info' as const, onClick: toasts.showBottomInfoToast },
  ]

  const timerToastButtons = [
    { label: '⏱️ Success (6s)', variant: 'success' as const, onClick: toasts.showTimerSuccessToast },
    { label: '⏱️ Error (8s)', variant: 'danger' as const, onClick: toasts.showTimerErrorToast },
    { label: '⏱️ Warning (7s)', variant: 'warning' as const, onClick: toasts.showTimerWarningToast },
    { label: '⏱️ Info (5s)', variant: 'info' as const, onClick: toasts.showTimerInfoToast },
  ]

  // Dialog button style based on theme
  const getDialogButtonStyle = (variant: 'default' | 'alert' | 'confirm') => {
    const base = `px-4 py-2 ${theme.styles.borderRadius.small} transition-colors`
    
    if (theme.slug === 'duolingo') {
      const colors = {
        default: isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600 border-4 border-slate-600' : 'bg-green-100 text-green-700 hover:bg-green-200 border-4 border-green-300',
        alert: 'bg-orange-500 text-white hover:bg-orange-600 border-4 border-orange-300',
        confirm: 'bg-purple-500 text-white hover:bg-purple-600 border-4 border-purple-300',
      }
      return `${base} ${colors[variant]} font-black rounded-2xl transform hover:scale-105 shadow-lg`
    }
    
    if (theme.slug === 'glassmorphic') {
      const colors = {
        default: 'backdrop-blur-md bg-white/20 text-white hover:bg-white/30 border border-white/30',
        alert: 'backdrop-blur-md bg-orange-500/50 text-white hover:bg-orange-500/70 border border-white/30',
        confirm: 'backdrop-blur-md bg-purple-500/50 text-white hover:bg-purple-500/70 border border-white/30',
      }
      return `${base} ${colors[variant]} rounded-xl shadow-lg`
    }
    
    const colors = {
      default: isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      alert: 'bg-orange-600 text-white hover:bg-orange-700',
      confirm: 'bg-purple-600 text-white hover:bg-purple-700',
    }
    return `${base} ${colors[variant]}`
  }

  // Button styles section
  const renderButtonStyles = () => {
    const containerClass = isDarkMode
      ? theme.customClasses?.cardDark || `${theme.colors.cardBackgroundDark} ${theme.colors.cardBorderDark}`
      : theme.customClasses?.card || `${theme.colors.cardBackground} ${theme.colors.cardBorder}`
    
    const getButtonStyle = (variant: 'primary' | 'secondary' | 'success' | 'danger') => {
      const base = `px-4 py-2 md:py-3 ${theme.styles.borderRadius.small} ${theme.styles.fontWeight.medium} transition-colors`
      
      if (theme.slug === 'duolingo') {
        const duoStyles = {
          primary: 'bg-green-500 text-white hover:bg-green-600 border-b-4 border-green-600 shadow-lg transform hover:scale-105',
          secondary: isDarkMode ? 'border-4 border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-4 border-gray-300 text-gray-700 hover:bg-gray-50',
          success: 'bg-yellow-500 text-white hover:bg-yellow-600 border-b-4 border-yellow-600 shadow-lg transform hover:scale-105',
          danger: 'bg-red-500 text-white hover:bg-red-600 border-b-4 border-red-600 shadow-lg transform hover:scale-105',
        }
        return `${base} ${duoStyles[variant]} font-black rounded-2xl`
      }
      
      if (theme.slug === 'glassmorphic') {
        const glassStyles = {
          primary: 'backdrop-blur-md bg-white/30 text-white hover:bg-white/40 border border-white/40 shadow-lg',
          secondary: 'backdrop-blur-md bg-black/20 text-white hover:bg-black/30 border border-white/20',
          success: 'backdrop-blur-md bg-green-500/40 text-white hover:bg-green-500/60 border border-white/30',
          danger: 'backdrop-blur-md bg-red-500/40 text-white hover:bg-red-500/60 border border-white/30',
        }
        return `${base} ${glassStyles[variant]} rounded-xl`
      }
      
      if (theme.slug === 'spotify') {
        const spotifyStyles = {
          primary: 'bg-green-500 text-black hover:bg-green-400 rounded-full',
          secondary: isDarkMode ? 'border border-gray-500 text-gray-300 hover:border-white' : 'border border-gray-400 text-gray-700 hover:border-gray-600',
          success: 'bg-green-400 text-black hover:bg-green-300 rounded-full',
          danger: 'bg-red-500 text-white hover:bg-red-400 rounded-full',
        }
        return `${base} ${spotifyStyles[variant]}`
      }
      
      const defaultStyles = {
        primary: `${theme.colors.primary} ${theme.colors.primaryHover} ${theme.colors.primaryText}`,
        secondary: isDarkMode ? 'border-2 border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
        success: 'bg-green-600 text-white hover:bg-green-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      }
      return `${base} ${defaultStyles[variant]}`
    }

    return (
      <div className={`${containerClass} ${theme.styles.borderRadius.medium} p-6 ${theme.styles.shadow.medium}`}>
        <h3 className={`text-xl ${theme.styles.fontWeight.bold} mb-4 ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
          Button Styles
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className={getButtonStyle('primary')}>Primary</button>
          <button className={getButtonStyle('secondary')}>Secondary</button>
          <button className={getButtonStyle('success')}>Success</button>
          <button className={getButtonStyle('danger')}>Danger</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${pageBackground} ${theme.slug === 'glassmorphic' ? 'relative overflow-hidden' : ''}`}>
      {renderBackgroundElements()}
      
      <div className={`${theme.slug === 'glassmorphic' ? 'relative z-10' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
        {/* Hero Section */}
        <ThemedHero theme={theme} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Tab Navigation */}
            <ThemedTabs 
              theme={theme} 
              selectedTab={selectedTab} 
              onTabChange={setSelectedTab}
            >
              <ThemedTabContent theme={theme} tab={selectedTab} />
            </ThemedTabs>

            {/* Toast Notifications - Top Right */}
            <ThemedButtonGroup
              theme={theme}
              title="Toast Notifications (Top-Right)"
              subtitle="Click the buttons below to trigger toast notifications in the top-right corner"
              buttons={topRightToastButtons}
            />

            {/* Toast Notifications - Bottom Left */}
            <ThemedButtonGroup
              theme={theme}
              title="Toast Notifications (Bottom-Left)"
              subtitle="Click the buttons below to trigger toast notifications in the bottom-left corner"
              buttons={bottomLeftToastButtons}
            />

            {/* Timer Toast Notifications */}
            <ThemedButtonGroup
              theme={theme}
              title="Timer Toast Notifications"
              subtitle="These toasts show a countdown progress bar and timer - watch them disappear automatically!"
              buttons={timerToastButtons}
            />

            {/* Pop-up Dialogs */}
            <ThemedCard theme={theme} title="Pop-up Dialogs" subtitle="Various types of modal dialogs and pop-ups">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={getDialogButtonStyle('default')}
                >
                  Info Modal
                </button>
                <button 
                  onClick={() => setIsAlertOpen(true)}
                  className={getDialogButtonStyle('alert')}
                >
                  Alert Dialog
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(true)}
                  className={getDialogButtonStyle('confirm')}
                >
                  Confirm Dialog
                </button>
              </div>
            </ThemedCard>

            {/* Button Styles */}
            {renderButtonStyles()}

            {/* Progress & Stats */}
            <ThemedProgress theme={theme} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Dropdown Menu */}
            <ThemedDropdown
              theme={theme}
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
              onSelect={() => setIsDropdownOpen(false)}
            />

            {/* Quick Actions */}
            <ThemedQuickActions
              theme={theme}
              onActionClick={(action) => {
                if (action.includes('Modal') || action.includes('Details')) {
                  setIsModalOpen(true)
                }
              }}
            />

            {/* Notification Card */}
            <ThemedNotificationCard theme={theme} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ThemedModal
        theme={theme}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="info"
      />
      
      <ThemedModal
        theme={theme}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        type="alert"
      />
      
      <ThemedModal
        theme={theme}
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        type="confirm"
        onConfirm={() => {
          toasts.showCustomToast('success', 'Action Confirmed', 'Your action has been successfully completed.')
        }}
      />
    </div>
  )
}

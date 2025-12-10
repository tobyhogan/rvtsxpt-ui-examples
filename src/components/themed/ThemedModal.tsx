import { Theme } from '../../themes'
import { useDarkMode } from '../../contexts/DarkModeContext'

interface ThemedModalProps {
  theme: Theme
  isOpen: boolean
  onClose: () => void
  type: 'info' | 'alert' | 'confirm'
  onConfirm?: () => void
}

export function ThemedModal({ theme, isOpen, onClose, type, onConfirm }: ThemedModalProps) {
  const { isDarkMode } = useDarkMode()
  
  if (!isOpen) return null

  const modalContent = theme.content.modals[type]
  
  const getModalStyle = () => {
    if (theme.customClasses?.modal || theme.customClasses?.modalDark) {
      return isDarkMode
        ? theme.customClasses.modalDark || theme.customClasses.modal
        : theme.customClasses.modal
    }
    
    // Theme-specific modal styling
    if (theme.slug === 'duolingo') {
      const borderColor = type === 'info' ? 'border-green-300' : type === 'alert' ? 'border-orange-300' : 'border-purple-300'
      return isDarkMode
        ? `bg-slate-800 border-4 border-slate-700 rounded-3xl p-8 shadow-2xl`
        : `bg-white border-4 ${borderColor} rounded-3xl p-8 shadow-2xl`
    }
    
    if (theme.slug === 'glassmorphic') {
      return isDarkMode
        ? 'backdrop-blur-xl bg-black/50 border border-white/20 rounded-3xl p-8 shadow-2xl'
        : 'backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 shadow-2xl'
    }
    
    if (theme.slug === 'ios') {
      return isDarkMode
        ? 'bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700'
        : 'bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl'
    }
    
    return isDarkMode
      ? 'bg-gray-800 rounded-xl p-6'
      : 'bg-white rounded-xl p-6'
  }

  const getButtonStyle = (isPrimary: boolean) => {
    if (theme.slug === 'duolingo') {
      const colors = type === 'info' ? 'bg-green-500 border-green-600 hover:bg-green-600' 
        : type === 'alert' ? 'bg-orange-500 border-orange-600 hover:bg-orange-600' 
        : 'bg-purple-500 border-purple-600 hover:bg-purple-600'
      
      if (isPrimary) {
        return `flex-1 ${colors} text-white py-3 rounded-2xl transition-all transform hover:scale-105 font-black border-b-4 shadow-lg`
      }
      return isDarkMode
        ? 'flex-1 border-4 border-slate-600 text-slate-300 hover:bg-slate-700 py-3 rounded-2xl transition-all transform hover:scale-105 font-black'
        : 'flex-1 border-4 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-2xl transition-all transform hover:scale-105 font-black'
    }
    
    if (theme.slug === 'glassmorphic') {
      if (isPrimary) {
        return 'flex-1 backdrop-blur-md bg-white/30 text-white py-3 rounded-xl hover:bg-white/40 transition-all border border-white/40 shadow-lg'
      }
      return 'flex-1 backdrop-blur-md bg-black/20 text-white py-3 rounded-xl hover:bg-black/30 transition-all border border-white/20'
    }
    
    // Default styling
    const primaryColors = type === 'info' ? 'bg-blue-600 hover:bg-blue-700' 
      : type === 'alert' ? 'bg-orange-600 hover:bg-orange-700' 
      : 'bg-purple-600 hover:bg-purple-700'
    
    if (isPrimary) {
      return `flex-1 ${primaryColors} text-white py-2 rounded-lg transition-colors`
    }
    return isDarkMode
      ? 'flex-1 border border-gray-600 text-gray-300 hover:bg-gray-700 py-2 rounded-lg transition-colors'
      : 'flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg transition-colors'
  }

  // Get button text based on modal type
  const getButtonText = () => {
    if (type === 'confirm') {
      return {
        confirm: (modalContent as { confirmButton: string }).confirmButton,
        cancel: (modalContent as { cancelButton: string }).cancelButton,
      }
    }
    return {
      button: (modalContent as { button: string }).button,
    }
  }

  const buttonText = getButtonText()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full ${getModalStyle()}`}>
        <div className="flex items-center mb-4 md:mb-6">
          <span className={`text-3xl md:text-4xl mr-3 md:mr-4`}>
            {modalContent.emoji}
          </span>
          <h3 className={`text-lg md:text-2xl ${theme.styles.fontWeight.bold} ${isDarkMode ? theme.colors.textPrimaryDark : theme.colors.textPrimary}`}>
            {modalContent.title}
          </h3>
        </div>
        <p className={`mb-6 text-base md:text-lg ${isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondary}`}>
          {modalContent.message}
        </p>
        <div className="flex gap-3">
          {type === 'confirm' ? (
            <>
              <button 
                onClick={() => {
                  onConfirm?.()
                  onClose()
                }}
                className={getButtonStyle(true)}
              >
                {'confirm' in buttonText ? buttonText.confirm : ''}
              </button>
              <button 
                onClick={onClose}
                className={getButtonStyle(false)}
              >
                {'cancel' in buttonText ? buttonText.cancel : ''}
              </button>
            </>
          ) : (
            <button 
              onClick={onClose}
              className={getButtonStyle(true)}
            >
              {'button' in buttonText ? buttonText.button : ''}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

import { useNotifications } from '../contexts/NotificationContext'
import { Theme } from '../themes'

type ToastPosition = 'top-right' | 'bottom-left' | 'bottom-left-timer'

export function useThemedToasts(theme: Theme) {
  const { addNotification } = useNotifications()

  const createToast = (
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string,
    duration: number,
    position?: ToastPosition
  ) => {
    addNotification({
      type,
      title,
      message,
      duration,
      position: position || 'top-right',
    })
  }

  // Top-right toasts
  const showSuccessToast = () => {
    createToast('success', theme.content.toasts.success.title, theme.content.toasts.success.message, 4000)
  }

  const showErrorToast = () => {
    createToast('error', theme.content.toasts.error.title, theme.content.toasts.error.message, 5000)
  }

  const showWarningToast = () => {
    createToast('warning', theme.content.toasts.warning.title, theme.content.toasts.warning.message, 6000)
  }

  const showInfoToast = () => {
    createToast('info', theme.content.toasts.info.title, theme.content.toasts.info.message, 4500)
  }

  // Bottom-left toasts
  const showBottomSuccessToast = () => {
    createToast('success', theme.content.toasts.bottomSuccess.title, theme.content.toasts.bottomSuccess.message, 4000, 'bottom-left')
  }

  const showBottomErrorToast = () => {
    createToast('error', theme.content.toasts.bottomError.title, theme.content.toasts.bottomError.message, 5000, 'bottom-left')
  }

  const showBottomWarningToast = () => {
    createToast('warning', theme.content.toasts.bottomWarning.title, theme.content.toasts.bottomWarning.message, 6000, 'bottom-left')
  }

  const showBottomInfoToast = () => {
    createToast('info', theme.content.toasts.bottomInfo.title, theme.content.toasts.bottomInfo.message, 4500, 'bottom-left')
  }

  // Timer toasts (bottom-left-timer)
  const showTimerSuccessToast = () => {
    createToast('success', theme.content.toasts.timerSuccess.title, theme.content.toasts.timerSuccess.message, 6000, 'bottom-left-timer')
  }

  const showTimerErrorToast = () => {
    createToast('error', theme.content.toasts.timerError.title, theme.content.toasts.timerError.message, 8000, 'bottom-left-timer')
  }

  const showTimerWarningToast = () => {
    createToast('warning', theme.content.toasts.timerWarning.title, theme.content.toasts.timerWarning.message, 7000, 'bottom-left-timer')
  }

  const showTimerInfoToast = () => {
    createToast('info', theme.content.toasts.timerInfo.title, theme.content.toasts.timerInfo.message, 5000, 'bottom-left-timer')
  }

  // Custom toast (for confirm dialogs etc.)
  const showCustomToast = (
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string,
    duration: number = 3000
  ) => {
    createToast(type, title, message, duration)
  }

  return {
    // Top-right
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
    // Bottom-left
    showBottomSuccessToast,
    showBottomErrorToast,
    showBottomWarningToast,
    showBottomInfoToast,
    // Timer
    showTimerSuccessToast,
    showTimerErrorToast,
    showTimerWarningToast,
    showTimerInfoToast,
    // Custom
    showCustomToast,
  }
}

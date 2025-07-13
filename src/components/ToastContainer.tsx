import { useNotifications } from '../contexts/NotificationContext'
import { useDarkMode } from '../contexts/DarkModeContext'

function ToastContainer() {
  const { notifications, removeNotification } = useNotifications()
  const { isDarkMode } = useDarkMode()

  const topRightNotifications = notifications.filter(n => n.position === 'top-right')
  const bottomLeftNotifications = notifications.filter(n => n.position === 'bottom-left')

  const getNotificationStyles = (type: string) => {
    const baseStyles = "flex items-start p-4 rounded-lg shadow-lg border-l-4 mb-3 transition-all duration-300 transform"
    
    switch (type) {
      case 'success':
        return `${baseStyles} ${isDarkMode ? 'bg-green-900 border-green-500 text-green-100' : 'bg-green-50 border-green-500 text-green-800'}`
      case 'error':
        return `${baseStyles} ${isDarkMode ? 'bg-red-900 border-red-500 text-red-100' : 'bg-red-50 border-red-500 text-red-800'}`
      case 'warning':
        return `${baseStyles} ${isDarkMode ? 'bg-yellow-900 border-yellow-500 text-yellow-100' : 'bg-yellow-50 border-yellow-500 text-yellow-800'}`
      case 'info':
        return `${baseStyles} ${isDarkMode ? 'bg-blue-900 border-blue-500 text-blue-100' : 'bg-blue-50 border-blue-500 text-blue-800'}`
      default:
        return `${baseStyles} ${isDarkMode ? 'bg-gray-800 border-gray-500 text-gray-100' : 'bg-gray-50 border-gray-500 text-gray-800'}`
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        )
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
      case 'info':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  if (notifications.length === 0) return null

  const renderNotifications = (notificationList: typeof notifications) => (
    notificationList.map((notification) => (
      <div
        key={notification.id}
        className={getNotificationStyles(notification.type)}
      >
        <div className="flex-shrink-0">
          {getIcon(notification.type)}
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium">
            {notification.title}
          </p>
          <p className="mt-1 text-sm opacity-90">
            {notification.message}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={() => removeNotification(notification.id)}
            className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    ))
  )

  return (
    <>
      {/* Top Right Notifications */}
      {topRightNotifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2 w-80">
          {renderNotifications(topRightNotifications)}
        </div>
      )}

      {/* Bottom Left Notifications */}
      {bottomLeftNotifications.length > 0 && (
        <div className="fixed bottom-4 left-4 z-50 space-y-2 w-80">
          {renderNotifications(bottomLeftNotifications)}
        </div>
      )}
    </>
  )
}

export default ToastContainer

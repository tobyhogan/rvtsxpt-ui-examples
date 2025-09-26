import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page8() {
  const { isDarkMode } = useDarkMode()
  const { addNotification } = useNotifications()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState('overview')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const showSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'AirDrop Complete',
      message: 'File successfully shared to MacBook Pro.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Connection Failed',
      message: 'Unable to connect to iCloud. Check your connection.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Storage Almost Full',
      message: 'Only 2GB left in iCloud. Consider upgrading.',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'iOS Update Available',
      message: 'iOS 18.1 is ready to install tonight.',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Backup Complete',
      message: 'iPhone backup finished successfully to iCloud.',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Face ID Failed',
      message: 'Unable to authenticate. Try again or use passcode.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Battery Low',
      message: '10% battery remaining. Consider charging soon.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Screen Time Report',
      message: 'Your weekly screen time report is ready.',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Focus Mode Complete',
      message: 'Work focus session finished. Great job!',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Sync Error',
      message: 'Unable to sync with other Apple devices.',
      duration: 8000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Do Not Disturb',
      message: 'Focus mode will start in 5 minutes.',
      duration: 7000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Siri Suggestion',
      message: 'Based on your routine, would you like to set a reminder?',
      duration: 5000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section - iOS Style */}
        <div className={`rounded-3xl p-8 mb-8 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'} shadow-2xl backdrop-blur-xl`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-light text-white mb-4 tracking-tight">iOS Experience</h1>
              <p className="text-white/80 text-xl mb-6 font-light">Seamlessly connected. Beautifully simple.</p>
              <div className="flex gap-4">
                <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg border border-white/10">
                  📱 Continue on iPhone
                </button>
                <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                  ⚙️ Settings
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <span className="text-6xl">🍎</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Test Buttons */}
        <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>iOS Notifications</h2>
          
          {/* Top-right notifications */}
          <div className="mb-6">
            <h3 className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>System Notifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button 
                onClick={showSuccessToast}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                ✓ AirDrop
              </button>
              <button 
                onClick={showErrorToast}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                ✗ iCloud Error
              </button>
              <button 
                onClick={showWarningToast}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                ⚠ Storage
              </button>
              <button 
                onClick={showInfoToast}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                ℹ Update
              </button>
            </div>
          </div>

          {/* Bottom-left notifications */}
          <div className="mb-6">
            <h3 className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lock Screen Style</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button 
                onClick={showBottomSuccessToast}
                className="bg-green-500/90 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                ✓ Backup
              </button>
              <button 
                onClick={showBottomErrorToast}
                className="bg-red-500/90 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                ✗ Face ID
              </button>
              <button 
                onClick={showBottomWarningToast}
                className="bg-orange-500/90 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                🔋 Battery
              </button>
              <button 
                onClick={showBottomInfoToast}
                className="bg-blue-500/90 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                📊 Screen Time
              </button>
            </div>
          </div>

          {/* Timer notifications */}
          <div>
            <h3 className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Focus & Productivity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button 
                onClick={showTimerSuccessToast}
                className="bg-green-600/80 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm border border-green-500/30"
              >
                ✓ Focus
              </button>
              <button 
                onClick={showTimerErrorToast}
                className="bg-red-600/80 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm border border-red-500/30"
              >
                ✗ Sync
              </button>
              <button 
                onClick={showTimerWarningToast}
                className="bg-orange-600/80 hover:bg-orange-700 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm border border-orange-500/30"
              >
                🌙 Do Not Disturb
              </button>
              <button 
                onClick={showTimerInfoToast}
                className="bg-purple-600/80 hover:bg-purple-700 text-white px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm border border-purple-500/30"
              >
                🤖 Siri
              </button>
            </div>
          </div>
        </div>

        {/* iOS Control Center Style Tabs */}
        <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
          <div className="flex space-x-1 bg-gray-200/50 dark:bg-gray-700/50 p-1 rounded-xl mb-6 backdrop-blur-sm">
            {['overview', 'apps', 'devices', 'privacy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all capitalize ${
                  selectedTab === tab 
                    ? `${isDarkMode ? 'bg-gray-800 text-white shadow-lg' : 'bg-white text-gray-900 shadow-lg'}` 
                    : `${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-200/30 dark:hover:bg-gray-600/30`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {selectedTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>iPhone</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>iPhone 15 Pro</p>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last backup: 2 hours ago</p>
              </div>

              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💻</span>
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MacBook</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>MacBook Pro 14"</p>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Connected via Handoff</p>
              </div>

              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AirPods</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>AirPods Pro (2nd gen)</p>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Battery: 85%</p>
              </div>
            </div>
          )}

          {selectedTab === 'apps' && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Messages', emoji: '💬', color: 'bg-green-500' },
                { name: 'Photos', emoji: '📸', color: 'bg-yellow-500' },
                { name: 'Safari', emoji: '🧭', color: 'bg-blue-500' },
                { name: 'Music', emoji: '🎵', color: 'bg-red-500' },
                { name: 'Maps', emoji: '🗺️', color: 'bg-green-600' },
                { name: 'Weather', emoji: '🌤️', color: 'bg-blue-400' },
                { name: 'Calendar', emoji: '📅', color: 'bg-red-600' },
                { name: 'Notes', emoji: '📝', color: 'bg-yellow-600' },
              ].map((app) => (
                <div key={app.name} className="flex flex-col items-center p-4 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all cursor-pointer">
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg transform hover:scale-105 transition-transform`}>
                    <span className="text-2xl">{app.emoji}</span>
                  </div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{app.name}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'devices' && (
            <div className="space-y-4">
              {[
                { name: 'iPhone 15 Pro', status: 'This device', battery: '78%', color: 'text-blue-500' },
                { name: 'MacBook Pro', status: 'Connected', battery: '92%', color: 'text-green-500' },
                { name: 'iPad Air', status: 'Last seen 2h ago', battery: '45%', color: 'text-gray-500' },
                { name: 'Apple Watch', status: 'Connected', battery: '67%', color: 'text-green-500' },
              ].map((device) => (
                <div key={device.name} className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <div>
                      <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{device.name}</h4>
                      <p className={`text-sm ${device.color}`}>{device.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{device.battery}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Battery</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'privacy' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50/80 border-blue-200'} border backdrop-blur-sm`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Privacy & Security</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Your data stays on your device</p>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  End-to-end encryption ensures your personal information remains private and secure across all your Apple devices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm`}>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔐 Face ID & Passcode</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Secure authentication enabled</p>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm`}>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌐 iCloud Private Relay</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Browse privately with Safari</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* iOS Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className={`rounded-3xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'} transform transition-all`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Connect Your Device
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sign in with your Apple ID to sync your data across all devices seamlessly.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 px-6 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                  >
                    Not Now
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 px-6 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* iOS Actions */}
        <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-left hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">Setup Device</h3>
              <p className="text-blue-100 text-sm">Connect and sync your Apple devices</p>
            </button>

            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-left hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg relative"
            >
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold mb-1">System Settings</h3>
              <p className="text-purple-100 text-sm">Customize your experience</p>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-10 backdrop-blur-md">
                  <a href="#" className="block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <span className="mr-3">🔔</span>
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Notifications</span>
                    </div>
                  </a>
                  <a href="#" className="block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <span className="mr-3">🔒</span>
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Privacy & Security</span>
                    </div>
                  </a>
                  <a href="#" className="block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <span className="mr-3">☁️</span>
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>iCloud Settings</span>
                    </div>
                  </a>
                </div>
              )}
            </button>

            <button 
              onClick={() => setIsAlertOpen(true)}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white text-left hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold mb-1">Screen Time</h3>
              <p className="text-green-100 text-sm">View your usage patterns</p>
            </button>
          </div>
        </div>

        {/* iOS Alert */}
        {isAlertOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className={`rounded-3xl p-8 max-w-sm w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'} transform transition-all`}>
              <div className="text-center">
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Screen Time Report
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  You spent 4h 32m on your device today. Your daily average is 3h 45m.
                </p>
                <button 
                  onClick={() => setIsAlertOpen(false)}
                  className="w-full py-3 px-6 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page8
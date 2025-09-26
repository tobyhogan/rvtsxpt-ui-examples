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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const showSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'AirDrop Complete 📱',
      message: 'File successfully shared to MacBook Pro.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'iCloud Sync Failed',
      message: 'Unable to connect to iCloud. Check your connection.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Storage Almost Full ⚠️',
      message: 'Only 2GB left in iCloud. Consider upgrading.',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'iOS Update Available 📱',
      message: 'iOS 18.1 is ready to install tonight.',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Backup Complete ☁️',
      message: 'iPhone backup finished successfully to iCloud.',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Face ID Failed 🔒',
      message: 'Unable to authenticate. Try again or use passcode.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Battery Low 🔋',
      message: '10% battery remaining. Consider charging soon.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Screen Time Report 📊',
      message: 'Your weekly screen time report is ready.',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Focus Mode Complete 🎯',
      message: 'Work focus session finished. Great job!',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Sync Error ❌',
      message: 'Unable to sync with other Apple devices.',
      duration: 8000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Do Not Disturb 🌙',
      message: 'Focus mode will start in 5 minutes.',
      duration: 7000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Siri Suggestion 🤖',
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
              <h1 className="text-5xl font-light text-white mb-4 tracking-tight">Think different. 🍎</h1>
              <p className="text-white/80 text-xl mb-6 font-light">Seamlessly connected. Beautifully simple. Incredibly powerful.</p>
              <div className="flex gap-4">
                <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg border border-white/10">
                  📱 Continue on iPhone
                </button>
                <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                  ⚙️ System Preferences
                </button>
              </div>
            </div>
            <div className="hidden md:block text-8xl">
              🍎
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Navigation - iOS Style */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <div className="flex space-x-1 bg-gray-200/50 dark:bg-gray-700/50 p-1 rounded-2xl mb-6 backdrop-blur-sm">
                {['overview', 'devices', 'privacy'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all capitalize ${
                      selectedTab === tab 
                        ? `${isDarkMode ? 'bg-gray-800 text-white shadow-lg' : 'bg-white text-gray-900 shadow-lg'}` 
                        : `${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-200/30 dark:hover:bg-gray-600/30`
                    }`}
                  >
                    {tab === 'overview' && '📱'} {tab === 'devices' && '🔗'} {tab === 'privacy' && '🔒'} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📱 Your Apple Ecosystem</h3>
                    <p className="text-lg mb-4">Your devices work together seamlessly, keeping you connected wherever you go.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-white text-lg">📱</span>
                          </div>
                          <div>
                            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>iPhone 15 Pro</h4>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Battery: 78%</p>
                          </div>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last backup: 2 hours ago</p>
                      </div>

                      <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-white text-lg">💻</span>
                          </div>
                          <div>
                            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MacBook Pro</h4>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connected</p>
                          </div>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Handoff available</p>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'devices' && (
                  <div>
                    <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔗 Connected Devices</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'iPhone 15 Pro', status: 'This device', battery: '78%', icon: '📱' },
                        { name: 'MacBook Pro', status: 'Connected', battery: '92%', icon: '💻' },
                        { name: 'AirPods Pro', status: 'Connected', battery: '85%', icon: '🎧' },
                        { name: 'Apple Watch', status: 'Connected', battery: '67%', icon: '⌚' },
                      ].map((device) => (
                        <div key={device.name} className={`flex items-center justify-between p-4 rounded-2xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm`}>
                          <div className="flex items-center">
                            <span className="text-2xl mr-4">{device.icon}</span>
                            <div>
                              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{device.name}</h4>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{device.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{device.battery}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedTab === 'privacy' && (
                  <div>
                    <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔒 Privacy & Security</h3>
                    <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50/80 border-blue-200'} border backdrop-blur-sm mb-4`}>
                      <p className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                        Your personal information stays private with end-to-end encryption across all your Apple devices.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm`}>
                        <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔐 Face ID & Passcode</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Secure authentication enabled</p>
                      </div>
                      <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-800/40' : 'bg-gray-50/60'} backdrop-blur-sm`}>
                        <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌐 Private Relay</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Browse privately with Safari</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - iOS Style */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📱 iOS Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Experience authentic iOS-style system notifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="bg-green-500 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg"
                >
                  📱 AirDrop
                </button>
                <button 
                  onClick={showErrorToast}
                  className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg"
                >
                  ☁️ iCloud Error
                </button>
                <button 
                  onClick={showWarningToast}
                  className="bg-orange-500 text-white px-4 py-3 rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg"
                >
                  ⚠️ Storage Full
                </button>
                <button 
                  onClick={showInfoToast}
                  className="bg-blue-500 text-white px-4 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg"
                >
                  📱 iOS Update
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔔 System Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Lock screen style notifications that appear from the bottom
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="bg-green-500/90 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm"
                >
                  ↙ ☁️ Backup
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className="bg-red-500/90 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm"
                >
                  ↙ 🔒 Face ID
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className="bg-orange-500/90 text-white px-4 py-3 rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm"
                >
                  ↙ 🔋 Battery
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className="bg-blue-500/90 text-white px-4 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm"
                >
                  ↙ 📊 Screen Time
                </button>
              </div>
            </div>

            {/* Timer Toast Notifications */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ Focus & Productivity Notifications</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                iOS Focus mode and productivity notifications with progress indicators
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="bg-green-600/80 text-white px-4 py-3 rounded-2xl hover:bg-green-700 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm border border-green-500/30"
                >
                  ⏱️ 🎯 Focus (6s)
                </button>
                <button 
                  onClick={showTimerErrorToast}
                  className="bg-red-600/80 text-white px-4 py-3 rounded-2xl hover:bg-red-700 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm border border-red-500/30"
                >
                  ⏱️ ❌ Sync (8s)
                </button>
                <button 
                  onClick={showTimerWarningToast}
                  className="bg-purple-600/80 text-white px-4 py-3 rounded-2xl hover:bg-purple-700 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm border border-purple-500/30"
                >
                  ⏱️ 🌙 DND (7s)
                </button>
                <button 
                  onClick={showTimerInfoToast}
                  className="bg-blue-600/80 text-white px-4 py-3 rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 text-sm font-medium shadow-lg backdrop-blur-sm border border-blue-500/30"
                >
                  ⏱️ 🤖 Siri (5s)
                </button>
              </div>
            </div>

            {/* Pop-up Examples */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>💬 iOS System Dialogs</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Authentic iOS-style modal dialogs and alerts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`px-4 py-3 rounded-2xl font-medium transition-all transform hover:scale-105 shadow-lg ${
                    isDarkMode ? 'bg-gray-800/60 text-white hover:bg-gray-700 border border-gray-600' : 'bg-blue-50/80 text-blue-700 hover:bg-blue-100 border border-blue-200'
                  }`}
                >
                  📱 Device Setup
                </button>
                <button 
                  onClick={() => setIsAlertOpen(true)}
                  className="bg-orange-500/90 text-white px-4 py-3 rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-105 font-medium shadow-lg backdrop-blur-sm"
                >
                  ⚠️ Storage Alert
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(true)}
                  className="bg-red-500/90 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 font-medium shadow-lg backdrop-blur-sm"
                >
                  🗑️ Delete Data
                </button>
              </div>
            </div>

            {/* iOS Button Styles */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎨 iOS Button Styles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-blue-500 text-white px-4 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 font-medium shadow-lg">
                  📱 Primary
                </button>
                <button className={`border-2 px-4 py-3 rounded-2xl transition-all transform hover:scale-105 font-medium shadow-lg ${
                  isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  ⚪ Secondary
                </button>
                <button className="bg-green-500 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 font-medium shadow-lg">
                  ✅ Success
                </button>
                <button className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 font-medium shadow-lg">
                  ❌ Destructive
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🍎 Apple Services</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border-2 font-medium transition-all transform hover:scale-105 ${
                    isDarkMode ? 'border-gray-600 bg-gray-800/60 text-white backdrop-blur-sm' : 'border-gray-300 bg-gray-50/80 text-gray-900 backdrop-blur-sm'
                  }`}
                >
                  ☁️ iCloud Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl z-10 border-2 backdrop-blur-md ${
                    isDarkMode ? 'bg-gray-800/90 border-gray-600' : 'bg-white/90 border-gray-200'
                  }`}>
                    {[
                      { icon: '☁️', name: 'iCloud Drive' },
                      { icon: '📸', name: 'iCloud Photos' },
                      { icon: '🔑', name: 'Keychain' }
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`w-full text-left px-4 py-3 hover:${isDarkMode ? 'bg-gray-700/60' : 'bg-gray-50/60'} first:rounded-t-2xl last:rounded-b-2xl font-medium transition-all flex items-center`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="mr-3">{option.icon}</span>
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card with Actions */}
            <div className={`rounded-3xl p-6 ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/70'} backdrop-blur-md shadow-xl`}>
              <h3 className={`text-xl font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Quick Actions</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your Apple ecosystem</p>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-gray-800/60' : 'bg-blue-50/60'} transition-all transform hover:scale-105 font-medium border-2 backdrop-blur-sm ${isDarkMode ? 'text-gray-300 border-gray-600' : 'text-blue-700 border-blue-200'}`}>
                  📊 Screen Time Settings
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-gray-800/60' : 'bg-green-50/60'} transition-all transform hover:scale-105 font-medium border-2 backdrop-blur-sm ${isDarkMode ? 'text-gray-300 border-gray-600' : 'text-green-700 border-green-200'}`}>
                  ⚙️ System Preferences
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-gray-800/60' : 'bg-purple-50/60'} transition-all transform hover:scale-105 font-medium border-2 backdrop-blur-sm ${isDarkMode ? 'text-gray-300 border-gray-600' : 'text-purple-700 border-purple-200'}`}
                >
                  📱 Device Management
                </button>
              </div>
            </div>

            {/* Notification Card */}
            <div className={`rounded-3xl p-6 border-2 shadow-xl backdrop-blur-md ${isDarkMode ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50/80 border-blue-200'}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">
                  🍎
                </div>
                <div>
                  <h3 className={`text-lg font-medium ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                    Apple Ecosystem
                  </h3>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    Your devices work together seamlessly. Start something on one device and pick it up on another with Handoff, Universal Clipboard, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`rounded-3xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'} transform transition-all`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className={`text-2xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect Your Device
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Sign in with your Apple ID to sync your data across all devices seamlessly and enable features like Handoff, AirDrop, and Universal Clipboard.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 px-6 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  Not Now
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 px-6 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Dialog */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`rounded-3xl p-8 max-w-sm w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'} transform transition-all`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Storage Almost Full
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your iCloud storage is almost full. You have 2GB remaining out of 50GB. Consider upgrading your storage plan or managing your data.
              </p>
              <button 
                onClick={() => setIsAlertOpen(false)}
                className="w-full py-3 px-6 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
              >
                Manage Storage
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`rounded-3xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'} transform transition-all`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🗑️</span>
              </div>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Delete All Data?
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                This will permanently delete all data from this device and iCloud. This action cannot be undone. Are you sure you want to continue?
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setIsConfirmOpen(false)
                    addNotification({
                      type: 'success',
                      title: 'Data Deleted 🗑️',
                      message: 'All data has been permanently removed.',
                      duration: 3000
                    })
                  }}
                  className="flex-1 bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600 transition-all font-medium"
                >
                  Delete
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(false)}
                  className={`flex-1 border-2 py-3 rounded-2xl transition-all font-medium ${
                    isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page8
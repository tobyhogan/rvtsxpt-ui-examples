import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page5() {
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
      title: 'Glass Effect Applied',
      message: 'Beautiful glassmorphism design activated!',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Transparency Error',
      message: 'Something went wrong with the glass effect.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Blur Warning',
      message: 'High blur effects may impact performance.',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Glass Design Info',
      message: 'Glassmorphism creates depth with transparency.',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Frosted Glass Ready',
      message: 'Your frosted glass interface is now active!',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Backdrop Filter Failed',
      message: 'Browser may not support backdrop filters.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Performance Notice',
      message: 'Multiple glass layers may slow rendering.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Glass Layers',
      message: 'Experiment with different opacity levels!',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Glass Animation Complete',
      message: 'Smooth glass transitions finished!',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Glass Render Error',
      message: 'Failed to render glass effects properly.',
      duration: 8000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'GPU Intensive',
      message: 'Glass effects are using significant GPU resources.',
      duration: 7000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Glass Pro Tip',
      message: 'Use subtle shadows for better depth perception.',
      duration: 5000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' : 'bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200'}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-30 ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-pink-300 to-orange-300'} blur-3xl`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-30 ${isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'} blur-3xl`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20 ${isDarkMode ? 'bg-gradient-to-r from-green-400 to-cyan-500' : 'bg-gradient-to-r from-yellow-200 to-pink-200'} blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section - Glassmorphism Style */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-5xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}>
                Glassmorphism Design
              </h1>
              <p className={`text-xl mb-6 font-light ${isDarkMode ? 'text-white/80' : 'text-gray-800/80'} drop-shadow-sm`}>
                Experience the future of UI with transparent, frosted glass effects
              </p>
              <div className="flex gap-4">
                <button className="backdrop-blur-md bg-white/20 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:scale-105">
                  ✨ Explore Glass
                </button>
                <button className="backdrop-blur-md bg-black/10 border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105">
                  🔍 Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block text-6xl opacity-80">
              🌌
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Navigation - Glassmorphism Style */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex space-x-2 mb-6">
                {['overview', 'effects', 'properties'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      selectedTab === tab
                        ? 'backdrop-blur-md bg-white/30 text-white shadow-lg border border-white/40'
                        : isDarkMode ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-gray-800/70 hover:text-gray-900 hover:bg-white/20'
                    }`}
                  >
                    {tab === 'overview' && '📊'} {tab === 'effects' && '✨'} {tab === 'properties' && '🎨'} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className={`${isDarkMode ? 'text-white/80' : 'text-gray-800/80'}`}>
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>✨ Glassmorphism Overview</h3>
                    <p className="text-lg font-light mb-4">A design trend that creates a frosted glass effect with transparency, blur, and subtle shadows.</p>
                    <div className="p-4 backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-white/30">
                      <p className="text-white font-medium">💡 Key Feature: Creates depth through layered transparency and backdrop filters</p>
                    </div>
                  </div>
                )}
                {selectedTab === 'effects' && (
                  <div>
                    <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>✨ Glass Effects Gallery</h3>
                    <div className="space-y-4">
                      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🌫️</span>
                          <div>
                            <div className="font-medium text-white">Light Blur</div>
                            <div className="text-white/70 text-sm">Subtle backdrop blur effect</div>
                          </div>
                        </div>
                      </div>
                      <div className="backdrop-blur-md bg-white/15 p-4 rounded-xl border border-white/25">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">💎</span>
                          <div>
                            <div className="font-medium text-white">Medium Blur</div>
                            <div className="text-white/70 text-sm">Balanced transparency and clarity</div>
                          </div>
                        </div>
                      </div>
                      <div className="backdrop-blur-xl bg-white/20 p-4 rounded-xl border border-white/30">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🔮</span>
                          <div>
                            <div className="font-medium text-white">Heavy Blur</div>
                            <div className="text-white/70 text-sm">Maximum frosted glass effect</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'properties' && (
                  <div>
                    <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎨 Glass Properties</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-white/30">
                        <h4 className="font-medium text-white">Backdrop Blur</h4>
                        <p className="text-sm text-white/70">backdrop-filter: blur()</p>
                      </div>
                      <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-xl border border-white/30">
                        <h4 className="font-medium text-white">Transparency</h4>
                        <p className="text-sm text-white/70">background: rgba()</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - Glassmorphism Style */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔔 Glass Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>
                Experience notifications with beautiful glassmorphism effects
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="backdrop-blur-md bg-emerald-500/20 text-white px-4 py-3 rounded-xl hover:bg-emerald-500/30 transition-all duration-300 text-sm font-medium border border-emerald-400/30 shadow-lg hover:scale-105"
                >
                  ✨ Glass Success
                </button>
                <button 
                  onClick={showErrorToast}
                  className="backdrop-blur-md bg-red-500/20 text-white px-4 py-3 rounded-xl hover:bg-red-500/30 transition-all duration-300 text-sm font-medium border border-red-400/30 shadow-lg hover:scale-105"
                >
                  💥 Glass Error
                </button>
                <button 
                  onClick={showWarningToast}
                  className="backdrop-blur-md bg-amber-500/20 text-white px-4 py-3 rounded-xl hover:bg-amber-500/30 transition-all duration-300 text-sm font-medium border border-amber-400/30 shadow-lg hover:scale-105"
                >
                  ⚠️ Glass Warning
                </button>
                <button 
                  onClick={showInfoToast}
                  className="backdrop-blur-md bg-cyan-500/20 text-white px-4 py-3 rounded-xl hover:bg-cyan-500/30 transition-all duration-300 text-sm font-medium border border-cyan-400/30 shadow-lg hover:scale-105"
                >
                  💡 Glass Info
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌟 Frosted Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>
                Frosted glass effects with beautiful transparency layers
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="backdrop-blur-lg bg-emerald-400/15 text-white px-4 py-3 rounded-xl hover:bg-emerald-400/25 transition-all duration-300 text-sm font-medium border border-emerald-300/30 shadow-lg hover:scale-105"
                >
                  ↙ 🧊 Frosted Success
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className="backdrop-blur-lg bg-red-400/15 text-white px-4 py-3 rounded-xl hover:bg-red-400/25 transition-all duration-300 text-sm font-medium border border-red-300/30 shadow-lg hover:scale-105"
                >
                  ↙ 🔥 Frosted Error
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className="backdrop-blur-lg bg-amber-400/15 text-white px-4 py-3 rounded-xl hover:bg-amber-400/25 transition-all duration-300 text-sm font-medium border border-amber-300/30 shadow-lg hover:scale-105"
                >
                  ↙ ⚡ Frosted Warning
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className="backdrop-blur-lg bg-cyan-400/15 text-white px-4 py-3 rounded-xl hover:bg-cyan-400/25 transition-all duration-300 text-sm font-medium border border-cyan-300/30 shadow-lg hover:scale-105"
                >
                  ↙ 💫 Frosted Info
                </button>
              </div>
            </div>

            {/* Timer Toast Notifications */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ Timed Glass Notifications</h3>
              <p className={`text-sm mb-4 font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>
                Watch the glass effect countdown with beautiful transparency animations
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="backdrop-blur-xl bg-emerald-500/15 text-white px-4 py-3 rounded-xl hover:bg-emerald-500/25 transition-all duration-300 text-sm font-medium border-2 border-emerald-200/30 shadow-xl hover:scale-105"
                >
                  ⏱️ 🌿 Glass (6s)
                </button>
                <button 
                  onClick={showTimerErrorToast}
                  className="backdrop-blur-xl bg-red-500/15 text-white px-4 py-3 rounded-xl hover:bg-red-500/25 transition-all duration-300 text-sm font-medium border-2 border-red-200/30 shadow-xl hover:scale-105"
                >
                  ⏱️ 💀 Error (8s)
                </button>
                <button 
                  onClick={showTimerWarningToast}
                  className="backdrop-blur-xl bg-amber-500/15 text-white px-4 py-3 rounded-xl hover:bg-amber-500/25 transition-all duration-300 text-sm font-medium border-2 border-amber-200/30 shadow-xl hover:scale-105"
                >
                  ⏱️ 🌅 Warning (7s)
                </button>
                <button 
                  onClick={showTimerInfoToast}
                  className="backdrop-blur-xl bg-cyan-500/15 text-white px-4 py-3 rounded-xl hover:bg-cyan-500/25 transition-all duration-300 text-sm font-medium border-2 border-cyan-200/30 shadow-xl hover:scale-105"
                >
                  ⏱️ 🌊 Info (5s)
                </button>
              </div>
            </div>

            {/* Pop-up Examples */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>💬 Glass Modal Dialogs</h3>
              <p className={`text-sm mb-4 font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>
                Elegant modal dialogs with sophisticated glassmorphism effects
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="backdrop-blur-md bg-white/15 text-white px-4 py-3 rounded-xl hover:bg-white/25 transition-all duration-300 font-medium border border-white/30 shadow-lg hover:scale-105"
                >
                  🔮 Glass Info
                </button>
                <button 
                  onClick={() => setIsAlertOpen(true)}
                  className="backdrop-blur-md bg-orange-500/20 text-white px-4 py-3 rounded-xl hover:bg-orange-500/30 transition-all duration-300 font-medium border border-orange-300/30 shadow-lg hover:scale-105"
                >
                  ⚠️ Glass Alert
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(true)}
                  className="backdrop-blur-md bg-red-500/20 text-white px-4 py-3 rounded-xl hover:bg-red-500/30 transition-all duration-300 font-medium border border-red-300/30 shadow-lg hover:scale-105"
                >
                  🗑️ Glass Confirm
                </button>
              </div>
            </div>

            {/* Button Styles */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎨 Glassmorphism Button Styles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="backdrop-blur-md bg-blue-500/20 text-white px-4 py-3 rounded-xl hover:bg-blue-500/30 transition-all duration-300 font-medium border border-blue-300/30 shadow-lg hover:scale-105">
                  ✨ Primary
                </button>
                <button className="backdrop-blur-md bg-white/10 border-2 border-white/40 text-white px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium shadow-lg hover:scale-105">
                  🌙 Secondary
                </button>
                <button className="backdrop-blur-md bg-emerald-500/20 text-white px-4 py-3 rounded-xl hover:bg-emerald-500/30 transition-all duration-300 font-medium border border-emerald-300/30 shadow-lg hover:scale-105">
                  🌿 Success
                </button>
                <button className="backdrop-blur-md bg-red-500/20 text-white px-4 py-3 rounded-xl hover:bg-red-500/30 transition-all duration-300 font-medium border border-red-300/30 shadow-lg hover:scale-105">
                  🔥 Danger
                </button>
              </div>
            </div>

            {/* Progress and Stats */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📊 Glass Progress & Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-lg font-light ${isDarkMode ? 'text-white/80' : 'text-gray-800/80'}`}>🌈 Glass Effect Progress</span>
                    <span className={`text-lg font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-800/80'}`}>85%</span>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 w-full rounded-full h-4 border border-white/20">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full backdrop-blur-sm" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-white/30">
                    <div className={`text-3xl font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>✨ 2.8k</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>Glass Views</div>
                  </div>
                  <div className="text-center backdrop-blur-md bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-xl border border-white/30">
                    <div className={`text-3xl font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔮 1.5k</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>Effects</div>
                  </div>
                  <div className="text-center backdrop-blur-md bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-4 rounded-xl border border-white/30">
                    <div className={`text-3xl font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌟 99.8%</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>Clarity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-lg font-light mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎛️ Glass Controls</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl backdrop-blur-md bg-white/15 border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/25"
                >
                  🌫️ Blur Level
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-xl backdrop-blur-xl bg-white/15 shadow-2xl z-10 border border-white/30">
                    {[
                      { icon: '🌫️', name: 'Light Blur' },
                      { icon: '💎', name: 'Medium Blur' },
                      { icon: '🔮', name: 'Heavy Blur' }
                    ].map((option) => (
                      <button
                        key={option.name}
                        className="w-full text-left px-4 py-3 hover:bg-white/20 first:rounded-t-xl last:rounded-b-xl font-medium text-white transition-all duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {option.icon} {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card with Actions */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className={`text-lg font-light mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Quick Glass Actions</h3>
              <p className={`text-sm mb-4 font-light ${isDarkMode ? 'text-white/70' : 'text-gray-800/70'}`}>Control your glass interface</p>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-white border border-white/20">
                  📊 Glass Analytics
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-white border border-white/20">
                  ⚙️ Glass Settings
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-white border border-white/20"
                >
                  📝 Glass Details
                </button>
              </div>
            </div>

            {/* Glass Effect Info Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">
                  💎
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Glass Effect Active! 
                  </h3>
                  <p className="text-sm mt-1 font-light text-white/80">
                    Your interface is now using advanced backdrop filters and transparency layers for a stunning glass effect. Enjoy the depth and clarity! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🔮</span>
              <h3 className="text-2xl font-light text-white">Glass Information</h3>
            </div>
            <p className="mb-6 text-lg font-light text-white/80">
              Glassmorphism creates a sense of depth and hierarchy through the use of background blur, transparency, and subtle borders. This design trend mimics frosted glass effects.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 backdrop-blur-md bg-blue-500/30 text-white py-3 rounded-xl hover:bg-blue-500/40 transition-all duration-300 font-medium border border-blue-300/40 shadow-lg"
              >
                ✨ Amazing!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Glass Alert Dialog */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">⚠️</span>
              <h3 className="text-2xl font-light text-white">Glass Performance Alert</h3>
            </div>
            <p className="mb-6 text-lg font-light text-white/80">
              Heavy glass effects with multiple backdrop filters may impact performance on older devices. Consider reducing blur intensity for better performance.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsAlertOpen(false)}
                className="flex-1 backdrop-blur-md bg-orange-500/30 text-white py-3 rounded-xl hover:bg-orange-500/40 transition-all duration-300 font-medium border border-orange-300/40 shadow-lg"
              >
                🎛️ Optimize Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Glass Confirm Dialog */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🗑️</span>
              <h3 className="text-2xl font-light text-white">Reset Glass Effects?</h3>
            </div>
            <p className="mb-6 text-lg font-light text-white/80">
              Are you sure you want to reset all glass effects to default? This will remove all custom blur levels, transparency settings, and effect configurations. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setIsConfirmOpen(false)
                  addNotification({
                    type: 'success',
                    title: 'Glass Effects Reset',
                    message: 'All glass effects have been reset to default settings.',
                    duration: 3000
                  })
                }}
                className="flex-1 backdrop-blur-md bg-red-500/30 text-white py-3 rounded-xl hover:bg-red-500/40 transition-all duration-300 font-medium border border-red-300/40 shadow-lg"
              >
                🔄 Reset Glass
              </button>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className="flex-1 backdrop-blur-md bg-white/15 border-2 border-white/40 text-white py-3 rounded-xl hover:bg-white/25 transition-all duration-300 font-medium shadow-lg"
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page5

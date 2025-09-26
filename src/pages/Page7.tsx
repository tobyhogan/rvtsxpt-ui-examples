import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page7() {
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
      title: 'VPN Connected! 🔒',
      message: 'Your connection is now secure and private.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Connection Failed 🚫',
      message: 'Unable to connect to VPN server. Please try again.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Server Overloaded ⚠️',
      message: 'Current server is at 85% capacity. Consider switching.',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'NetShield Active 🛡️',
      message: 'Ad-blocker is protecting your browsing experience.',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Kill Switch Activated! 🛡️',
      message: 'Your internet is now protected if VPN drops.',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Server Maintenance 🔧',
      message: 'Selected server is under maintenance.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Data Limit Warning 📊',
      message: 'You\'ve used 90% of your monthly data allowance.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'New Server Available 🌍',
      message: 'Added new high-speed server in Singapore!',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Secure Core Active! 🔐',
      message: 'Your traffic is now routed through multiple secure servers.',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ProtonVPN UI Components</h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Secure VPN interface with purple branding</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Navigation */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <div className="flex space-x-1 mb-6">
                {['overview', 'servers', 'security'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      selectedTab === tab
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : isDarkMode ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-700' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[300px]">
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔒 Your Privacy Dashboard</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🛡️</span>
                          <div>
                            <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>Protection Status</div>
                            <div className={`${isDarkMode ? 'text-gray-300' : 'text-purple-600'} text-sm`}>Secure connection active</div>
                          </div>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-purple-200'}`}>
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">📊</span>
                          <div>
                            <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>Data Usage</div>
                            <div className={`${isDarkMode ? 'text-gray-300' : 'text-purple-600'} text-sm`}>2.4 GB transferred</div>
                          </div>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-purple-200'}`}>
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'servers' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌍 Available Servers</h3>
                    <div className="space-y-4">
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <span className="text-2xl mr-3">🇺🇸</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>United States</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-purple-600'} text-sm`}>1,547 servers • 23% load</div>
                        </div>
                      </div>
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <span className="text-2xl mr-3">🇨🇭</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>Switzerland</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-purple-600'} text-sm`}>189 servers • 8% load</div>
                        </div>
                      </div>
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <span className="text-2xl mr-3">🇳🇱</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>Netherlands</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-purple-600'} text-sm`}>234 servers • 12% load</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'security' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔐 Security Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kill Switch</h4>
                        <p className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>Active</p>
                      </div>
                      <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                        <div className="text-3xl mb-2">🚫</div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>NetShield</h4>
                        <p className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>Enabled</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - ProtonVPN Style */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔔 VPN Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Experience ProtonVPN-style notifications for connection and security events!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 text-sm font-semibold shadow-lg"
                >
                  🔒 Connected
                </button>
                <button 
                  onClick={showErrorToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  🚫 Failed
                </button>
                <button 
                  onClick={showWarningToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  ⚠️ Overloaded
                </button>
                <button 
                  onClick={showInfoToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  🛡️ NetShield
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎯 Security Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get notified about security features and server updates!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-105 text-sm font-semibold shadow-lg"
                >
                  ↙ 🛡️ Kill Switch
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-400 text-white hover:bg-red-500'
                  }`}
                >
                  ↙ 🔧 Maintenance
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-yellow-400 text-white hover:bg-yellow-500'
                  }`}
                >
                  ↙ 📊 Data Limit
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className={`px-4 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg ${
                    isDarkMode ? 'bg-gray-500 text-white hover:bg-gray-600' : 'bg-gray-400 text-white hover:bg-gray-500'
                  }`}
                >
                  ↙ 🌍 New Server
                </button>
              </div>
            </div>

            {/* Timer Notification Examples */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ Timed Security Notifications</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Notifications that appear for longer durations with custom timing!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="bg-purple-600 text-white px-6 py-4 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
                >
                  ↙ 🔐 Show Secure Core (6s)
                </button>
              </div>
            </div>

            {/* VPN Progress Section */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📊 Your VPN Stats</h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Monthly Data Usage</span>
                  <span>45.2 GB / 500 GB</span>
                </div>
                <div className={`w-full rounded-full h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="bg-purple-600 h-full rounded-full" style={{ width: '9%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔒 127h</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Connected Time</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌐 23</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Countries Used</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🛡️ 100%</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Security Level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌍 Server Selection</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all ${
                    isDarkMode ? 'border border-gray-600 bg-gray-700 text-white hover:bg-gray-600' : 'border border-purple-300 bg-purple-50 text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  🇺🇸 Choose Server
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-xl z-10 ${
                    isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-purple-200'
                  }`}>
                    {[
                      { flag: '🇺🇸', name: 'United States' },
                      { flag: '🇨🇭', name: 'Switzerland' },
                      { flag: '🇳🇱', name: 'Netherlands' }
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`w-full text-left px-4 py-3 hover:${isDarkMode ? 'bg-gray-600' : 'bg-purple-50'} first:rounded-t-xl last:rounded-b-xl font-semibold transition-all`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {option.flag} {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card with Actions */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Quick Actions</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your VPN connection</p>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 border border-gray-600' : 'text-purple-700 hover:bg-purple-50 border border-purple-200'}`}>
                  📊 View Connection Stats
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 border border-gray-600' : 'text-purple-700 hover:bg-purple-50 border border-purple-200'}`}>
                  ⚙️ VPN Settings
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 border border-gray-600' : 'text-purple-700 hover:bg-purple-50 border border-purple-200'}`}
                >
                  📝 Server Details
                </button>
              </div>
            </div>

            {/* Notification Card */}
            <div className={`rounded-xl p-6 shadow-lg ${isDarkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-100 border border-purple-300'}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">
                  🔒
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                    Privacy Protected! 
                  </h3>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    Your connection is secure and your data is encrypted. NetShield is blocking ads and trackers to keep you safe online! 🛡️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-purple-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌍</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Server Information</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This server provides high-speed, secure connection with military-grade encryption. Perfect for streaming, torrenting, and secure browsing!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-all transform hover:scale-105 font-bold shadow-lg"
              >
                🔒 Connect Now!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Dialog */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-yellow-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">⚠️</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Server Overloaded!</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The current server is at 85% capacity. For optimal performance, we recommend switching to a less crowded server.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsAlertOpen(false)}
                className={`flex-1 py-3 rounded-xl transition-all transform hover:scale-105 font-bold shadow-lg ${
                  isDarkMode ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }`}
              >
                🎯 Find Better Server!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-purple-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🔌</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Disconnect VPN?</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Are you sure you want to disconnect from the VPN? Your real IP address and location will be exposed.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setIsConfirmOpen(false)
                  addNotification({
                    type: 'success',
                    title: 'VPN Disconnected! 🔌',
                    message: 'You are no longer connected to the VPN.',
                    duration: 3000
                  })
                }}
                className={`flex-1 py-3 rounded-xl transition-all transform hover:scale-105 font-bold shadow-lg ${
                  isDarkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                🔌 Yes, Disconnect!
              </button>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className={`flex-1 py-3 rounded-xl transition-all transform hover:scale-105 font-bold ${
                  isDarkMode ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
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

export default Page7
import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page6() {
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
      title: 'Song Added! 🎵',
      message: 'Added to your Liked Songs playlist.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Playback Failed 🔇',
      message: 'Unable to play this song. Check your connection.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Premium Feature 🎧',
      message: 'Upgrade to Spotify Premium for ad-free listening!',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'New Release 🆕',
      message: 'Your favorite artist just dropped a new album!',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Playlist Created! 🎶',
      message: 'Your new playlist is ready to go!',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Offline Mode 📱',
      message: 'No internet connection detected.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Storage Full 💾',
      message: 'Not enough space for offline downloads.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Discover Weekly 📻',
      message: 'Your personalized playlist is ready!',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Perfect Mix! 🎯',
      message: 'Added 50 songs to your daily mix.',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-black font-bold text-xl">♪</span>
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Spotify UI Components</h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Music streaming interface with green accents</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Navigation */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <div className="flex space-x-1 mb-6">
                {['overview', 'playlists', 'artists'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      selectedTab === tab
                        ? 'bg-green-500 text-black hover:bg-green-400'
                        : isDarkMode ? 'text-gray-300 hover:text-green-400 hover:bg-gray-800' : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[300px]">
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎵 Your Music Dashboard</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🎧</span>
                          <div>
                            <div className={`font-bold text-lg ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Recently Played</div>
                            <div className={`${isDarkMode ? 'text-gray-300' : 'text-green-600'} text-sm`}>Last 30 tracks</div>
                          </div>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-green-200'}`}>
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">💚</span>
                          <div>
                            <div className={`font-bold text-lg ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Liked Songs</div>
                            <div className={`${isDarkMode ? 'text-gray-300' : 'text-green-600'} text-sm`}>234 favorites</div>
                          </div>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-green-200'}`}>
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'playlists' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎶 Your Playlists</h3>
                    <div className="space-y-4">
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <span className="text-2xl mr-3">🎵</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>My Playlist #1</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-green-600'} text-sm`}>45 songs • 2.8 hours</div>
                        </div>
                      </div>
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <span className="text-2xl mr-3">📻</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Discover Weekly</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-green-600'} text-sm`}>30 songs • 1.9 hours</div>
                        </div>
                      </div>
                      <div className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <span className="text-2xl mr-3">🔥</span>
                        <div>
                          <div className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Release Radar</div>
                          <div className={`${isDarkMode ? 'text-gray-300' : 'text-green-600'} text-sm`}>28 songs • 1.7 hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'artists' && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎤 Top Artists</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <div className="text-3xl mb-2">👨‍🎤</div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>The Weeknd</h4>
                        <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>150 plays</p>
                      </div>
                      <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                        <div className="text-3xl mb-2">👩‍🎤</div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dua Lipa</h4>
                        <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>89 plays</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - Spotify Style */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔔 Music Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Experience Spotify-style notifications for your music interactions!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="bg-green-500 text-black px-4 py-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 text-sm font-bold shadow-lg"
                >
                  🎵 Song Added
                </button>
                <button 
                  onClick={showErrorToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  🔇 Playback Error
                </button>
                <button 
                  onClick={showWarningToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  🎧 Premium Feature
                </button>
                <button 
                  onClick={showInfoToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  🆕 New Release
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎯 Playlist Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get notified about playlist updates and music discoveries!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="bg-green-400 text-black px-4 py-3 rounded-full hover:bg-green-500 transition-all transform hover:scale-105 text-sm font-bold shadow-lg"
                >
                  ↙ 🎶 Playlist Created
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-400 text-white hover:bg-red-500'
                  }`}
                >
                  ↙ 📱 Offline Mode
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-yellow-400 text-white hover:bg-yellow-500'
                  }`}
                >
                  ↙ 💾 Storage Full
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className={`px-4 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-bold shadow-lg ${
                    isDarkMode ? 'bg-gray-500 text-white hover:bg-gray-600' : 'bg-gray-400 text-white hover:bg-gray-500'
                  }`}
                >
                  ↙ 📻 Discover Weekly
                </button>
              </div>
            </div>

            {/* Timer Notification Examples */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ Timed Music Notifications</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Notifications that appear for longer durations with custom timing!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="bg-green-500 text-black px-6 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  ↙ 🎯 Show Perfect Mix (6s)
                </button>
              </div>
            </div>

            {/* Music Progress Section */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📊 Your Music Stats</h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Daily Goal Progress</span>
                  <span>75%</span>
                </div>
                <div className={`w-full rounded-full h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎵 45</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Songs Today</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ 3.2h</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Listening Time</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-green-50 border border-green-200'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🏆 12</div>
                  <div className={`text-sm font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>New Discoveries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎧 Device Selection</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all ${
                    isDarkMode ? 'border border-gray-600 bg-gray-800 text-white hover:bg-gray-700' : 'border border-green-300 bg-green-50 text-green-900 hover:bg-green-100'
                  }`}
                >
                  🖥️ Choose Device
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-xl z-10 ${
                    isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-green-200'
                  }`}>
                    {[
                      { icon: '🖥️', name: 'Desktop' },
                      { icon: '📱', name: 'iPhone' },
                      { icon: '🎧', name: 'AirPods' }
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`w-full text-left px-4 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} first:rounded-t-xl last:rounded-b-xl font-semibold transition-all`}
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
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Quick Actions</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your music experience</p>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-800 border border-gray-600' : 'text-green-700 hover:bg-green-50 border border-green-200'}`}>
                  📊 View Music Stats
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-800 border border-gray-600' : 'text-green-700 hover:bg-green-50 border border-green-200'}`}>
                  ⚙️ Audio Settings
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold ${isDarkMode ? 'text-gray-300 hover:bg-gray-800 border border-gray-600' : 'text-green-700 hover:bg-green-50 border border-green-200'}`}
                >
                  📝 Playlist Details
                </button>
              </div>
            </div>

            {/* Notification Card */}
            <div className={`rounded-xl p-6 shadow-lg ${isDarkMode ? 'bg-green-900 border border-green-700' : 'bg-green-100 border border-green-300'}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">
                  🎵
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>
                    New Music Friday! 
                  </h3>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                    Discover fresh tracks curated just for you. Your new Discover Weekly playlist is ready with 30 personalized songs! 🎶
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
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-green-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🎶</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Playlist Information</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This playlist contains your favorite songs and new discoveries. Listen to personalized music based on your taste and enjoy unlimited streaming!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-green-500 text-black py-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow-lg"
              >
                🎵 Start Playing!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Dialog */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-yellow-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🎧</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Premium Required!</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This feature requires Spotify Premium. Upgrade now to enjoy ad-free music, unlimited skips, and offline listening!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsAlertOpen(false)}
                className={`flex-1 py-3 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg ${
                  isDarkMode ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }`}
              >
                ⭐ Upgrade to Premium!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-green-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🗑️</span>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Delete Playlist?</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Are you sure you want to delete this playlist? This action cannot be undone and you'll lose all the songs in this playlist.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setIsConfirmOpen(false)
                  addNotification({
                    type: 'success',
                    title: 'Playlist Deleted! 🗑️',
                    message: 'Your playlist has been successfully removed.',
                    duration: 3000
                  })
                }}
                className={`flex-1 py-3 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg ${
                  isDarkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                🗑️ Yes, Delete!
              </button>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className={`flex-1 py-3 rounded-full transition-all transform hover:scale-105 font-bold ${
                  isDarkMode ? 'border border-gray-600 text-gray-300 hover:bg-gray-800' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
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

export default Page6
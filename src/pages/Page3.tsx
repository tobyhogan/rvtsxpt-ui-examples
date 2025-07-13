import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page3() {
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
      title: 'Lesson Complete! 🎉',
      message: 'You earned 15 XP! Keep up the great work.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Streak Lost 💔',
      message: 'Your streak ended. Start a new one today!',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Hearts Running Low ❤️',
      message: 'Only 2 hearts left. Be careful with mistakes!',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Daily Reminder 🦉',
      message: 'Complete your daily goal to maintain your streak!',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Achievement Unlocked! 🏆',
      message: 'You completed 7 days in a row!',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Connection Lost 📡',
      message: 'Check your internet connection.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Practice Reminder ⏰',
      message: 'You haven\'t practiced today. Keep your streak alive!',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'New Course Available 📚',
      message: 'Check out the new Japanese course!',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Perfect Lesson! ⭐',
      message: 'No mistakes made! Bonus XP awarded.',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Exercise Failed ❌',
      message: 'Review the lesson and try again.',
      duration: 8000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Last Heart! 💖',
      message: 'One more mistake and you\'ll need to wait.',
      duration: 7000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Tip of the Day 💡',
      message: 'Practice speaking exercises to improve pronunciation!',
      duration: 5000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-green-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section - Duolingo Style */}
        <div className={`rounded-3xl p-8 mb-8 ${isDarkMode ? 'bg-gradient-to-r from-green-800 to-emerald-800 border border-green-700' : 'bg-gradient-to-r from-green-500 to-green-600'} shadow-2xl`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-black text-white mb-4">Learn & Practice! 🦉</h1>
              <p className="text-green-100 text-xl mb-6 font-semibold">Master new skills with fun, bite-sized lessons</p>
              <div className="flex gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg border-b-4 border-green-200">
                  🚀 Start Learning
                </button>
                <button className="border-4 border-white text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
                  📊 View Progress
                </button>
              </div>
            </div>
            <div className="hidden md:block text-8xl">
              🦉
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Navigation - Duolingo Style */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-green-200'} shadow-xl`}>
              <div className="flex space-x-2 mb-6">
                {['overview', 'lessons', 'achievements'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-3 rounded-2xl font-black text-lg transition-all transform hover:scale-105 ${
                      selectedTab === tab
                        ? 'bg-green-500 text-white shadow-lg border-b-4 border-green-600'
                        : isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-700 border-2 border-slate-600' : 'text-green-600 hover:text-green-700 hover:bg-green-50 border-2 border-green-200'
                    }`}
                  >
                    {tab === 'overview' && '📖'} {tab === 'lessons' && '🎯'} {tab === 'achievements' && '🏆'} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎓 Learning Overview</h3>
                    <p className="text-lg font-semibold">Track your progress and celebrate your achievements as you master new skills!</p>
                    <div className="mt-4 p-4 bg-yellow-100 rounded-2xl border-4 border-yellow-300">
                      <p className="text-yellow-800 font-bold">💡 Daily Goal: Complete 3 lessons to maintain your streak!</p>
                    </div>
                  </div>
                )}
                {selectedTab === 'lessons' && (
                  <div>
                    <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎯 Active Lessons</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-4 bg-green-100 rounded-2xl border-2 border-green-300">
                        <span className="text-2xl mr-3">🌟</span>
                        <div>
                          <div className="font-bold text-green-800">Basic Greetings</div>
                          <div className="text-green-600 text-sm">4/5 completed</div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-blue-100 rounded-2xl border-2 border-blue-300">
                        <span className="text-2xl mr-3">📚</span>
                        <div>
                          <div className="font-bold text-blue-800">Common Phrases</div>
                          <div className="text-blue-600 text-sm">2/6 completed</div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-purple-100 rounded-2xl border-2 border-purple-300">
                        <span className="text-2xl mr-3">🎵</span>
                        <div>
                          <div className="font-bold text-purple-800">Pronunciation</div>
                          <div className="text-purple-600 text-sm">0/4 completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'achievements' && (
                  <div>
                    <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🏆 Your Achievements</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-2xl text-center ${isDarkMode ? 'bg-slate-700 border border-slate-600' : 'bg-yellow-100 border-4 border-yellow-300'}`}>
                        <div className="text-3xl mb-2">🔥</div>
                        <h4 className={`font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7-day Streak</h4>
                        <p className="text-orange-600 font-bold">Keep it up!</p>
                      </div>
                      <div className={`p-4 rounded-2xl text-center ${isDarkMode ? 'bg-slate-700 border border-slate-600' : 'bg-purple-100 border-4 border-purple-300'}`}>
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className={`font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1,250 XP</h4>
                        <p className="text-purple-600 font-bold">Total earned</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - Duolingo Style */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-blue-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔔 Learning Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Experience how Duolingo celebrates your learning milestones!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="bg-green-500 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 text-sm font-black border-b-4 border-green-600 shadow-lg"
                >
                  🎉 Lesson Complete
                </button>
                <button 
                  onClick={showErrorToast}
                  className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 text-sm font-black border-b-4 border-red-600 shadow-lg"
                >
                  💔 Streak Lost
                </button>
                <button 
                  onClick={showWarningToast}
                  className="bg-yellow-500 text-white px-4 py-3 rounded-2xl hover:bg-yellow-600 transition-all transform hover:scale-105 text-sm font-black border-b-4 border-yellow-600 shadow-lg"
                >
                  ❤️ Low Hearts
                </button>
                <button 
                  onClick={showInfoToast}
                  className="bg-blue-500 text-white px-4 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-sm font-black border-b-4 border-blue-600 shadow-lg"
                >
                  🦉 Daily Reminder
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-purple-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎯 Achievement Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Get motivated with achievement unlocks and milestone celebrations!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="bg-green-400 text-white px-4 py-3 rounded-2xl hover:bg-green-500 transition-all transform hover:scale-105 text-sm font-black border-4 border-green-300 shadow-lg"
                >
                  ↙ 🏆 Achievement
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className="bg-red-400 text-white px-4 py-3 rounded-2xl hover:bg-red-500 transition-all transform hover:scale-105 text-sm font-black border-4 border-red-300 shadow-lg"
                >
                  ↙ 📡 Connection
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className="bg-yellow-400 text-white px-4 py-3 rounded-2xl hover:bg-yellow-500 transition-all transform hover:scale-105 text-sm font-black border-4 border-yellow-300 shadow-lg"
                >
                  ↙ ⏰ Reminder
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className="bg-blue-400 text-white px-4 py-3 rounded-2xl hover:bg-blue-500 transition-all transform hover:scale-105 text-sm font-black border-4 border-blue-300 shadow-lg"
                >
                  ↙ 📚 New Course
                </button>
              </div>
            </div>

            {/* Timer Toast Notifications */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-orange-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⏱️ Timed Learning Notifications</h3>
              <p className={`text-sm mb-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Watch the progress bar as you complete timed exercises and challenges!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="bg-green-500 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 text-sm font-black border-4 border-green-200 shadow-xl"
                >
                  ⏱️ ⭐ Perfect (6s)
                </button>
                <button 
                  onClick={showTimerErrorToast}
                  className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 text-sm font-black border-4 border-red-200 shadow-xl"
                >
                  ⏱️ ❌ Failed (8s)
                </button>
                <button 
                  onClick={showTimerWarningToast}
                  className="bg-yellow-500 text-white px-4 py-3 rounded-2xl hover:bg-yellow-600 transition-all transform hover:scale-105 text-sm font-black border-4 border-yellow-200 shadow-xl"
                >
                  ⏱️ 💖 Last Heart (7s)
                </button>
                <button 
                  onClick={showTimerInfoToast}
                  className="bg-blue-500 text-white px-4 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-sm font-black border-4 border-blue-200 shadow-xl"
                >
                  ⏱️ 💡 Tip (5s)
                </button>
              </div>
            </div>

            {/* Pop-up Examples */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-green-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>💬 Learning Dialogs</h3>
              <p className={`text-sm mb-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Interactive modals for lessons, achievements, and confirmations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`px-4 py-3 rounded-2xl font-black transition-all transform hover:scale-105 border-4 shadow-lg ${
                    isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600 border-slate-600' : 'bg-green-100 text-green-700 hover:bg-green-200 border-green-300'
                  }`}
                >
                  📖 Lesson Info
                </button>
                <button 
                  onClick={() => setIsAlertOpen(true)}
                  className="bg-orange-500 text-white px-4 py-3 rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-105 font-black border-4 border-orange-300 shadow-lg"
                >
                  ⚠️ Hearts Alert
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(true)}
                  className="bg-purple-500 text-white px-4 py-3 rounded-2xl hover:bg-purple-600 transition-all transform hover:scale-105 font-black border-4 border-purple-300 shadow-lg"
                >
                  🔄 Reset Progress
                </button>
              </div>
            </div>

            {/* Button Styles */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-pink-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎨 Duolingo Button Styles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-green-500 text-white px-4 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 font-black border-b-4 border-green-600 shadow-lg">
                  ✅ Primary
                </button>
                <button className={`border-4 px-4 py-3 rounded-2xl transition-all transform hover:scale-105 font-black shadow-lg ${
                  isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  ⚪ Secondary
                </button>
                <button className="bg-yellow-500 text-white px-4 py-3 rounded-2xl hover:bg-yellow-600 transition-all transform hover:scale-105 font-black border-b-4 border-yellow-600 shadow-lg">
                  🌟 Success
                </button>
                <button className="bg-red-500 text-white px-4 py-3 rounded-2xl hover:bg-red-600 transition-all transform hover:scale-105 font-black border-b-4 border-red-600 shadow-lg">
                  ❌ Danger
                </button>
              </div>
            </div>

            {/* Progress and Stats */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-blue-200'} shadow-xl`}>
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📊 Learning Progress & Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>🎯 Daily Goal Progress</span>
                    <span className={`text-lg font-black ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>3/5 lessons</span>
                  </div>
                  <div className={`w-full rounded-full h-4 border-4 ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-200 border-gray-300'}`}>
                    <div className="bg-green-500 h-full rounded-full border-2 border-green-400" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 rounded-2xl bg-orange-100 border-4 border-orange-300">
                    <div className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🔥 7</div>
                    <div className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-orange-600'}`}>Day Streak</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-purple-100 border-4 border-purple-300">
                    <div className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ 1.2k</div>
                    <div className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-purple-600'}`}>Total XP</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-blue-100 border-4 border-blue-300">
                    <div className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🏆 15</div>
                    <div className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-blue-600'}`}>Achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-green-200'} shadow-xl`}>
              <h3 className={`text-xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🌍 Language Selection</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border-4 font-bold transition-all transform hover:scale-105 ${
                    isDarkMode ? 'border-slate-600 bg-slate-700 text-white' : 'border-green-300 bg-green-50 text-green-900'
                  }`}
                >
                  🇪🇸 Choose Language
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-xl z-10 border-4 ${
                    isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-green-200'
                  }`}>
                    {[
                      { flag: '🇪🇸', name: 'Spanish' },
                      { flag: '🇫🇷', name: 'French' },
                      { flag: '🇩🇪', name: 'German' }
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`w-full text-left px-4 py-3 hover:${isDarkMode ? 'bg-slate-600' : 'bg-green-50'} first:rounded-t-2xl last:rounded-b-2xl font-bold transition-all`}
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
            <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border-4 border-blue-200'} shadow-xl`}>
              <h3 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Quick Actions</h3>
              <p className={`text-sm mb-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Manage your learning journey</p>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'} transition-all transform hover:scale-105 font-bold border-2 ${isDarkMode ? 'text-slate-300 border-slate-600' : 'text-blue-700 border-blue-200'}`}>
                  📊 View Learning Stats
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-slate-700' : 'bg-green-50'} transition-all transform hover:scale-105 font-bold border-2 ${isDarkMode ? 'text-slate-300 border-slate-600' : 'text-green-700 border-green-200'}`}>
                  ⚙️ Learning Settings
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left px-4 py-3 rounded-2xl hover:${isDarkMode ? 'bg-slate-700' : 'bg-purple-50'} transition-all transform hover:scale-105 font-bold border-2 ${isDarkMode ? 'text-slate-300 border-slate-600' : 'text-purple-700 border-purple-200'}`}
                >
                  📝 Course Details
                </button>
              </div>
            </div>

            {/* Notification Card */}
            <div className={`rounded-2xl p-6 border-4 shadow-xl ${isDarkMode ? 'bg-green-800 border-green-700' : 'bg-green-100 border-green-300'}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">
                  🦉
                </div>
                <div>
                  <h3 className={`text-lg font-black ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>
                    Duo's Daily Reminder! 
                  </h3>
                  <p className={`text-sm mt-1 font-semibold ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                    Your 7-day streak is amazing! Don't let it end today. Complete just one lesson to keep it going! 🔥
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
          <div className={`rounded-3xl p-8 max-w-md w-full border-4 shadow-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-green-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">📚</span>
              <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Lesson Information</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              This lesson will teach you basic greetings and common phrases. You'll earn 15 XP upon completion and unlock the next lesson in your course!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-green-500 text-white py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 font-black border-b-4 border-green-600 shadow-lg"
              >
                🚀 Start Lesson!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Dialog */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-3xl p-8 max-w-md w-full border-4 shadow-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-orange-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💖</span>
              <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Hearts Warning!</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              You only have 1 heart left! If you make another mistake, you'll need to wait for your hearts to refill or use gems to continue practicing.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsAlertOpen(false)}
                className="flex-1 bg-orange-500 text-white py-3 rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-105 font-black border-b-4 border-orange-600 shadow-lg"
              >
                💪 I'll Be Careful!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-3xl p-8 max-w-md w-full border-4 shadow-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-purple-300'}`}>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🔄</span>
              <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Reset Progress?</h3>
            </div>
            <p className={`mb-6 text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              Are you sure you want to reset your progress in this course? You'll lose your current streak and XP, but you can always start fresh! This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setIsConfirmOpen(false)
                  addNotification({
                    type: 'success',
                    title: 'Progress Reset! 🔄',
                    message: 'Your course has been reset. Time for a fresh start!',
                    duration: 3000
                  })
                }}
                className="flex-1 bg-purple-500 text-white py-3 rounded-2xl hover:bg-purple-600 transition-all transform hover:scale-105 font-black border-b-4 border-purple-600 shadow-lg"
              >
                🔄 Yes, Reset!
              </button>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className={`flex-1 border-4 py-3 rounded-2xl transition-all transform hover:scale-105 font-black ${
                  isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
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

export default Page3

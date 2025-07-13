import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useNotifications } from '../contexts/NotificationContext'

function Page4() {
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
      title: 'Task Completed',
      message: 'Great job! You\'ve completed your task.',
      duration: 4000
    })
  }

  const showErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Sync Failed',
      message: 'Unable to sync with server. Check connection.',
      duration: 5000
    })
  }

  const showWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Deadline Approaching',
      message: 'Task due in 1 hour. Consider prioritizing.',
      duration: 6000
    })
  }

  const showInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Productivity Tip',
      message: 'Break large tasks into smaller subtasks.',
      duration: 4500
    })
  }

  // Bottom-left notification functions
  const showBottomSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Project Completed',
      message: 'All tasks in "Website Redesign" are done!',
      duration: 4000,
      position: 'bottom-left'
    })
  }

  const showBottomErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Upload Failed',
      message: 'Could not attach file to task.',
      duration: 5000,
      position: 'bottom-left'
    })
  }

  const showBottomWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Overdue Tasks',
      message: 'You have 3 overdue tasks. Review them now.',
      duration: 6000,
      position: 'bottom-left'
    })
  }

  const showBottomInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Weekly Review',
      message: 'Time for your weekly productivity review!',
      duration: 4500,
      position: 'bottom-left'
    })
  }

  // Timer notification functions
  const showTimerSuccessToast = () => {
    addNotification({
      type: 'success',
      title: 'Focus Session Complete',
      message: 'You completed a 25-minute focus session!',
      duration: 6000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerErrorToast = () => {
    addNotification({
      type: 'error',
      title: 'Task Failed',
      message: 'Could not mark task as complete.',
      duration: 8000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerWarningToast = () => {
    addNotification({
      type: 'warning',
      title: 'Break Reminder',
      message: 'You\'ve been working for 2 hours. Take a break!',
      duration: 7000,
      position: 'bottom-left-timer'
    })
  }

  const showTimerInfoToast = () => {
    addNotification({
      type: 'info',
      title: 'Smart Schedule',
      message: 'AI suggests working on high-priority tasks now.',
      duration: 5000,
      position: 'bottom-left-timer'
    })
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section - Todoist Style */}
        <div className={`rounded-lg p-8 mb-8 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Organize your work and life
              </h1>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Become focused, organized, and calm with the world's #1 task manager
              </p>
              <div className="flex gap-3">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Start for free
                </button>
                <button className={`border px-6 py-3 rounded-lg font-medium transition-colors ${
                  isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Watch demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <svg className="w-24 h-24 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tab Navigation - Todoist Style */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <div className="flex space-x-1 mb-6 border-b border-gray-200 dark:border-gray-700">
                {['overview', 'projects', 'analytics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                      selectedTab === tab
                        ? 'border-red-600 text-red-600'
                        : isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedTab === 'overview' && (
                  <div>
                    <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Today's Overview</h3>
                    <p className="mb-4">Stay on top of your tasks and projects with a clear overview of what needs to be done.</p>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-red-600 rounded" />
                        <span className="flex-1">Review project proposal</span>
                        <span className="text-sm text-gray-500">High priority</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-red-600 rounded" />
                        <span className="flex-1">Call client about feedback</span>
                        <span className="text-sm text-gray-500">Due today</span>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'projects' && (
                  <div>
                    <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Active Projects</h3>
                    <div className="space-y-3">
                      <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Website Redesign</h4>
                          <span className="text-sm text-red-600">7 tasks</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Marketing Campaign</h4>
                          <span className="text-sm text-red-600">3 tasks</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === 'analytics' && (
                  <div>
                    <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Productivity Analytics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>This Week</h4>
                        <p className="text-2xl font-bold text-red-600">24</p>
                        <p className="text-sm text-gray-500">Tasks completed</p>
                      </div>
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Streak</h4>
                        <p className="text-2xl font-bold text-red-600">12</p>
                        <p className="text-sm text-gray-500">Days active</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Examples - Todoist Style */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Task Notifications (Top-Right)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Experience how Todoist keeps you informed about your productivity
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showSuccessToast}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Task Complete
                </button>
                <button 
                  onClick={showErrorToast}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Sync Failed
                </button>
                <button 
                  onClick={showWarningToast}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                >
                  Deadline Warning
                </button>
                <button 
                  onClick={showInfoToast}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Productivity Tip
                </button>
              </div>
            </div>

            {/* Bottom-Left Notification Examples */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Notifications (Bottom-Left)</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Stay updated on project progress and important milestones
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showBottomSuccessToast}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium border border-green-400"
                >
                  ↙ Project Done
                </button>
                <button 
                  onClick={showBottomErrorToast}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium border border-red-400"
                >
                  ↙ Upload Failed
                </button>
                <button 
                  onClick={showBottomWarningToast}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium border border-orange-400"
                >
                  ↙ Overdue Alert
                </button>
                <button 
                  onClick={showBottomInfoToast}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium border border-blue-400"
                >
                  ↙ Weekly Review
                </button>
              </div>
            </div>

            {/* Timer Toast Notifications */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Focus Timer Notifications</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Track your focus sessions and productivity patterns with timed notifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button 
                  onClick={showTimerSuccessToast}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium border-2 border-green-300"
                >
                  ⏱️ Focus Done (6s)
                </button>
                <button 
                  onClick={showTimerErrorToast}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium border-2 border-red-300"
                >
                  ⏱️ Task Error (8s)
                </button>
                <button 
                  onClick={showTimerWarningToast}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium border-2 border-orange-300"
                >
                  ⏱️ Break Time (7s)
                </button>
                <button 
                  onClick={showTimerInfoToast}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium border-2 border-blue-300"
                >
                  ⏱️ AI Suggest (5s)
                </button>
              </div>
            </div>

            {/* Pop-up Examples */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Task Management Dialogs</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage tasks, projects, and settings with clean modal interfaces
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  Task Details
                </button>
                <button 
                  onClick={() => setIsAlertOpen(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Due Date Alert
                </button>
                <button 
                  onClick={() => setIsConfirmOpen(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Delete Project
                </button>
              </div>
            </div>

            {/* Button Styles */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Todoist Button Styles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Primary
                </button>
                <button className={`border px-4 py-2 rounded-lg transition-colors font-medium ${
                  isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Secondary
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Complete
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                  Archive
                </button>
              </div>
            </div>

            {/* Progress and Stats */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Productivity Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Daily Goal Progress</span>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>6/8 tasks</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tasks this week</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active projects</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>12</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Day streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Dropdown Menu */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Filter</h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm font-medium ${
                    isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'
                  }`}
                >
                  All Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-lg shadow-lg z-10 border ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    {['All Projects', 'Website Redesign', 'Marketing Campaign', 'Personal'].map((option) => (
                      <button
                        key={option}
                        className={`w-full text-left px-3 py-2 text-sm hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'} first:rounded-t-lg last:rounded-b-lg`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your productivity</p>
              <div className="space-y-2">
                <button className={`w-full text-left px-3 py-2 rounded-lg hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  📊 Productivity Report
                </button>
                <button className={`w-full text-left px-3 py-2 rounded-lg hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  ⚙️ Task Settings
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full text-left px-3 py-2 rounded-lg hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  📝 Task Details
                </button>
              </div>
            </div>

            {/* Focus Timer */}
            <div className={`rounded-lg p-6 border ${isDarkMode ? 'bg-red-900 border-red-800' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${isDarkMode ? 'text-red-200' : 'text-red-800'}`}>
                    Focus Timer Active
                  </h3>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                    15:30 remaining in your focus session. Stay focused on your current task!
                  </p>
                  <button className="mt-2 text-xs text-red-600 hover:text-red-500 font-medium">
                    Take a break
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg p-6 max-w-md w-full border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Task Details</h3>
            </div>
            <div className="mb-4">
              <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Review project proposal</h4>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Review the complete project proposal for the Q4 marketing campaign. Check budget allocations, timeline, and resource requirements.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📅 Due: Today</span>
                <span>🔴 High priority</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Mark Complete
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  isDarkMode ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Due Date Alert */}
      {isAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg p-6 max-w-md w-full border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Deadline Approaching</h3>
            </div>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              You have 3 tasks due today and 2 tasks overdue. Consider rescheduling or prioritizing these tasks to stay on track with your goals.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsAlertOpen(false)}
                className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Review Tasks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Project Confirm */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg p-6 max-w-md w-full border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Delete Project</h3>
            </div>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Are you sure you want to delete "Website Redesign" project? This will permanently delete all tasks, comments, and files associated with this project. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setIsConfirmOpen(false)
                  addNotification({
                    type: 'success',
                    title: 'Project Deleted',
                    message: 'Website Redesign project has been permanently deleted.',
                    duration: 3000
                  })
                }}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Delete Project
              </button>
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className={`flex-1 border py-2 rounded-lg transition-colors font-medium ${
                  isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page4

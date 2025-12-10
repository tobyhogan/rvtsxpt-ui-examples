import { Theme } from './types'

export const duolingoTheme: Theme = {
  name: 'Duolingo-esque',
  slug: 'duolingo',
  
  colors: {
    pageBackground: 'bg-green-50',
    pageBackgroundDark: 'bg-slate-900',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-slate-800',
    cardBorder: 'border-4 border-green-200',
    cardBorderDark: 'border border-slate-700',
    primary: 'bg-green-500',
    primaryHover: 'hover:bg-green-600',
    primaryText: 'text-white',
    secondary: 'border-4 border-gray-300',
    secondaryHover: 'hover:bg-gray-50',
    secondaryText: 'text-gray-700',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-600',
    textSecondaryDark: 'text-slate-300',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-xl',
      medium: 'rounded-2xl',
      large: 'rounded-3xl',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-lg',
      medium: 'shadow-xl',
      large: 'shadow-2xl',
    },
    fontWeight: {
      normal: 'font-semibold',
      medium: 'font-bold',
      semibold: 'font-bold',
      bold: 'font-black',
      black: 'font-black',
    },
    effects: {
      transform: 'transform hover:scale-105 transition-all',
    },
  },
  
  content: {
    hero: {
      title: 'Learn & Practice! 🦉',
      subtitle: 'Master new skills with fun, bite-sized lessons',
      primaryButton: '🚀 Start Learning',
      secondaryButton: '📊 View Progress',
      emoji: '🦉',
    },
    
    tabs: ['overview', 'lessons', 'achievements'],
    
    tabContent: {
      overview: {
        title: '🎓 Learning Overview',
        description: 'Track your progress and celebrate your achievements as you master new skills!',
        highlightBox: '💡 Daily Goal: Complete 3 lessons to maintain your streak!',
      },
      lessons: {
        title: '🎯 Active Lessons',
        description: 'Continue your learning journey with these lessons.',
      },
      achievements: {
        title: '🏆 Your Achievements',
        description: 'Celebrate your milestones and accomplishments!',
      },
    },
    
    toasts: {
      success: { title: 'Lesson Complete! 🎉', message: 'You earned 15 XP! Keep up the great work.' },
      error: { title: 'Streak Lost 💔', message: 'Your streak ended. Start a new one today!' },
      warning: { title: 'Hearts Running Low ❤️', message: 'Only 2 hearts left. Be careful with mistakes!' },
      info: { title: 'Daily Reminder 🦉', message: 'Complete your daily goal to maintain your streak!' },
      bottomSuccess: { title: 'Achievement Unlocked! 🏆', message: 'You completed 7 days in a row!' },
      bottomError: { title: 'Connection Lost 📡', message: 'Check your internet connection.' },
      bottomWarning: { title: 'Practice Reminder ⏰', message: "You haven't practiced today. Keep your streak alive!" },
      bottomInfo: { title: 'New Course Available 📚', message: 'Check out the new Japanese course!' },
      timerSuccess: { title: 'Perfect Lesson! ⭐', message: 'No mistakes made! Bonus XP awarded.' },
      timerError: { title: 'Exercise Failed ❌', message: 'Review the lesson and try again.' },
      timerWarning: { title: 'Last Heart! 💖', message: "One more mistake and you'll need to wait." },
      timerInfo: { title: 'Tip of the Day 💡', message: 'Practice speaking exercises to improve pronunciation!' },
    },
    
    modals: {
      info: {
        title: 'Lesson Information',
        message: "This lesson will teach you basic greetings and common phrases. You'll earn 15 XP upon completion and unlock the next lesson in your course!",
        button: '🚀 Start Lesson!',
        emoji: '📚',
      },
      alert: {
        title: 'Hearts Warning!',
        message: "You only have 1 heart left! If you make another mistake, you'll need to wait for your hearts to refill or use gems to continue practicing.",
        button: "💪 I'll Be Careful!",
        emoji: '💖',
      },
      confirm: {
        title: 'Reset Progress?',
        message: "Are you sure you want to reset your progress in this course? You'll lose your current streak and XP, but you can always start fresh! This action cannot be undone.",
        confirmButton: '🔄 Yes, Reset!',
        cancelButton: '❌ Cancel',
        emoji: '🔄',
      },
    },
    
    dropdownTitle: '🌍 Choose Language',
    dropdownOptions: [
      { icon: '🇪🇸', label: 'Spanish' },
      { icon: '🇫🇷', label: 'French' },
      { icon: '🇩🇪', label: 'German' },
    ],
    
    quickActions: {
      title: '⚡ Quick Actions',
      subtitle: 'Manage your learning journey',
      actions: [
        { icon: '📊', label: 'View Learning Stats' },
        { icon: '⚙️', label: 'Learning Settings' },
        { icon: '📝', label: 'Course Details' },
      ],
    },
    
    notificationCard: {
      emoji: '🦉',
      title: "Duo's Daily Reminder!",
      message: "Your 7-day streak is amazing! Don't let it end today. Complete just one lesson to keep it going! 🔥",
    },
    
    stats: {
      title: '📊 Learning Progress & Stats',
      progressLabel: '🎯 Daily Goal Progress',
      progressValue: '3/5 lessons',
      items: [
        { value: '🔥 7', label: 'Day Streak', emoji: '🔥' },
        { value: '⚡ 1.2k', label: 'Total XP', emoji: '⚡' },
        { value: '🏆 15', label: 'Achievements', emoji: '🏆' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl',
    heroContainerDark: 'bg-gradient-to-r from-green-800 to-emerald-800 border border-green-700 rounded-3xl p-8 shadow-2xl',
    tabButton: 'px-6 py-3 rounded-2xl font-black text-lg transition-all transform hover:scale-105 border-2',
    tabButtonActive: 'bg-green-500 text-white shadow-lg border-b-4 border-green-600',
    primaryButton: 'bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-b-4 border-green-600',
    secondaryButton: 'border-4 border-white text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-green-600 transition-all transform hover:scale-105',
    successButton: 'bg-green-500 hover:bg-green-600 border-b-4 border-green-600 font-black transform hover:scale-105 shadow-lg text-white',
    dangerButton: 'bg-red-500 hover:bg-red-600 border-b-4 border-red-600 font-black transform hover:scale-105 shadow-lg text-white',
    warningButton: 'bg-yellow-500 hover:bg-yellow-600 border-b-4 border-yellow-600 font-black transform hover:scale-105 shadow-lg text-white',
    infoButton: 'bg-blue-500 hover:bg-blue-600 border-b-4 border-blue-600 font-black transform hover:scale-105 shadow-lg text-white',
    card: 'rounded-2xl border-4 border-green-200 shadow-xl',
    cardDark: 'rounded-2xl border border-slate-700 shadow-xl',
    modal: 'rounded-3xl p-8 border-4 shadow-2xl',
    modalDark: 'rounded-3xl p-8 border border-slate-700 shadow-2xl',
    statCard: 'p-4 rounded-2xl border-4',
  },
}

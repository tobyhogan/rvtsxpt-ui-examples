import { Theme } from './types'

export const todoistTheme: Theme = {
  name: 'Todoist-esque',
  slug: 'todoist',
  
  colors: {
    pageBackground: 'bg-gray-50',
    pageBackgroundDark: 'bg-gray-900',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-gray-800',
    cardBorder: 'border border-gray-200',
    cardBorderDark: 'border border-gray-700',
    primary: 'bg-red-600',
    primaryHover: 'hover:bg-red-700',
    primaryText: 'text-white',
    secondary: 'border border-gray-300',
    secondaryHover: 'hover:bg-gray-50',
    secondaryText: 'text-gray-700',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-600',
    textSecondaryDark: 'text-gray-300',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-blue-600',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-md',
      medium: 'rounded-lg',
      large: 'rounded-lg',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-sm',
      medium: 'shadow-sm',
      large: 'shadow-md',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-medium',
      bold: 'font-semibold',
      black: 'font-semibold',
    },
    effects: {},
  },
  
  content: {
    hero: {
      title: 'Organize your work and life',
      subtitle: "Become focused, organized, and calm with the world's #1 task manager",
      primaryButton: 'Start for free',
      secondaryButton: 'Watch demo',
    },
    
    tabs: ['overview', 'projects', 'analytics'],
    
    tabContent: {
      overview: {
        title: "Today's Overview",
        description: 'Stay on top of your tasks and projects with a clear overview of what needs to be done.',
      },
      projects: {
        title: 'Active Projects',
        description: 'Manage all your ongoing projects in one place.',
      },
      analytics: {
        title: 'Productivity Analytics',
        description: 'Track your productivity trends and insights.',
      },
    },
    
    toasts: {
      success: { title: 'Task Completed', message: "Great job! You've completed your task." },
      error: { title: 'Sync Failed', message: 'Unable to sync with server. Check connection.' },
      warning: { title: 'Deadline Approaching', message: 'Task due in 1 hour. Consider prioritizing.' },
      info: { title: 'Productivity Tip', message: 'Break large tasks into smaller subtasks.' },
      bottomSuccess: { title: 'Project Completed', message: 'All tasks in "Website Redesign" are done!' },
      bottomError: { title: 'Upload Failed', message: 'Could not attach file to task.' },
      bottomWarning: { title: 'Overdue Tasks', message: 'You have 3 overdue tasks. Review them now.' },
      bottomInfo: { title: 'Weekly Review', message: 'Time for your weekly productivity review!' },
      timerSuccess: { title: 'Focus Session Complete', message: 'You completed a 25-minute focus session!' },
      timerError: { title: 'Task Failed', message: 'Could not mark task as complete.' },
      timerWarning: { title: 'Break Reminder', message: "You've been working for 2 hours. Take a break!" },
      timerInfo: { title: 'Smart Schedule', message: 'AI suggests working on high-priority tasks now.' },
    },
    
    modals: {
      info: {
        title: 'Task Details',
        message: 'View and edit task details, set due dates, add labels, and collaborate with team members.',
        button: 'Got it',
        emoji: '📋',
      },
      alert: {
        title: 'Overdue Alert',
        message: 'This task is overdue. Consider rescheduling or marking it as complete.',
        button: 'Acknowledge',
        emoji: '⚠️',
      },
      confirm: {
        title: 'Delete Task',
        message: 'Are you sure you want to delete this task? This action cannot be undone.',
        confirmButton: 'Delete',
        cancelButton: 'Cancel',
        emoji: '🗑️',
      },
    },
    
    dropdownTitle: 'Select Project',
    dropdownOptions: [
      { icon: '🏠', label: 'Personal' },
      { icon: '💼', label: 'Work' },
      { icon: '📚', label: 'Learning' },
    ],
    
    quickActions: {
      title: 'Quick Add',
      subtitle: 'Quickly add tasks to your lists',
      actions: [
        { icon: '➕', label: 'Add Task' },
        { icon: '📁', label: 'New Project' },
        { icon: '🏷️', label: 'Add Label' },
      ],
    },
    
    notificationCard: {
      emoji: '📅',
      title: 'Today: 5 tasks',
      message: '2 high priority, 3 medium priority. Stay focused!',
    },
    
    stats: {
      title: 'Productivity Stats',
      progressLabel: 'Weekly Goal',
      progressValue: '18/25 tasks',
      items: [
        { value: '127', label: 'Completed' },
        { value: '12', label: 'Pending' },
        { value: '94%', label: 'On Time' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'rounded-lg p-8 border border-gray-200 bg-white shadow-sm',
    heroContainerDark: 'rounded-lg p-8 border border-gray-700 bg-gray-800 shadow-sm',
    tabButton: 'px-4 py-2 font-medium text-sm border-b-2 transition-colors',
    tabButtonActive: 'border-red-600 text-red-600',
    primaryButton: 'bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors',
    secondaryButton: 'border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors',
    successButton: 'bg-[#058527] hover:bg-[#047321] text-white font-medium transition-colors',
    dangerButton: 'bg-[#DB4C3F] hover:bg-[#C9392C] text-white font-medium transition-colors',
    warningButton: 'bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium transition-colors',
    infoButton: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium transition-colors',
  },
}

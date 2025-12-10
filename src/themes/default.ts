import { Theme } from './types'

export const defaultTheme: Theme = {
  name: 'Modern UI',
  slug: 'default',
  
  colors: {
    pageBackground: 'bg-gray-50',
    pageBackgroundDark: 'bg-gray-900',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-gray-800',
    cardBorder: 'border-gray-200',
    cardBorderDark: 'border-gray-700',
    primary: 'bg-blue-600',
    primaryHover: 'hover:bg-blue-700',
    primaryText: 'text-white',
    secondary: 'border-gray-300',
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
      small: 'rounded-lg',
      medium: 'rounded-xl',
      large: 'rounded-2xl',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-sm',
      medium: 'shadow-lg',
      large: 'shadow-xl',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-bold',
    },
    effects: {},
  },
  
  content: {
    hero: {
      title: 'Modern UI Components',
      subtitle: 'Explore beautiful, responsive design elements',
      primaryButton: 'Get Started',
      secondaryButton: 'Learn More',
    },
    
    tabs: ['overview', 'features', 'pricing'],
    
    tabContent: {
      overview: {
        title: 'Project Overview',
        description: 'This is a modern React application showcasing various UI components and design patterns.',
      },
      features: {
        title: 'Key Features',
        description: '• Responsive design\n• Dark mode support\n• Modern animations\n• TypeScript support',
      },
      pricing: {
        title: 'Pricing Plans',
        description: 'Choose the plan that works best for you.',
      },
    },
    
    toasts: {
      success: { title: 'Success!', message: 'Your action was completed successfully.' },
      error: { title: 'Error occurred', message: 'Something went wrong. Please try again.' },
      warning: { title: 'Warning', message: 'Please check your input before proceeding.' },
      info: { title: 'Information', message: 'Here is some useful information for you.' },
      bottomSuccess: { title: 'Task Completed', message: 'Your task has been successfully completed.' },
      bottomError: { title: 'Operation Failed', message: 'The operation could not be completed.' },
      bottomWarning: { title: 'System Warning', message: 'Please save your work before continuing.' },
      bottomInfo: { title: 'System Update', message: 'A new version is available for download.' },
      timerSuccess: { title: 'Timer Success', message: 'Watch the progress bar countdown!' },
      timerError: { title: 'Timer Error', message: 'This error will auto-dismiss with timer.' },
      timerWarning: { title: 'Timer Warning', message: 'Time-based warning notification.' },
      timerInfo: { title: 'Timer Info', message: 'Information with visual countdown.' },
    },
    
    modals: {
      info: {
        title: 'Information',
        message: 'This is an informational modal dialog. It provides additional details or context to the user.',
        button: 'Got it',
        emoji: '💡',
      },
      alert: {
        title: 'Alert',
        message: 'This is an alert dialog. It warns the user about something important that requires their attention.',
        button: 'Acknowledge',
        emoji: '⚠️',
      },
      confirm: {
        title: 'Confirm Action',
        message: 'Are you sure you want to proceed with this action? This operation cannot be undone.',
        confirmButton: 'Confirm',
        cancelButton: 'Cancel',
        emoji: '❓',
      },
    },
    
    dropdownTitle: 'Select Option',
    dropdownOptions: [
      { icon: '📋', label: 'Option 1' },
      { icon: '📝', label: 'Option 2' },
      { icon: '📊', label: 'Option 3' },
    ],
    
    quickActions: {
      title: 'Quick Actions',
      subtitle: 'Manage your account settings',
      actions: [
        { icon: '📊', label: 'View Analytics' },
        { icon: '⚙️', label: 'Settings' },
        { icon: '📝', label: 'Open Modal' },
      ],
    },
    
    notificationCard: {
      emoji: 'ℹ️',
      title: 'New Feature Available',
      message: 'Check out our latest updates and improvements.',
    },
    
    stats: {
      title: 'Progress & Stats',
      progressLabel: 'Project Progress',
      progressValue: '75%',
      items: [
        { value: '2.4k', label: 'Users' },
        { value: '1.2k', label: 'Projects' },
        { value: '99.9%', label: 'Uptime' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6',
    heroContainerDark: 'bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-6',
  },
}

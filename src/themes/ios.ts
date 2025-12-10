import { Theme } from './types'

export const iosTheme: Theme = {
  name: 'iOS-esque',
  slug: 'ios',
  
  colors: {
    pageBackground: 'bg-gray-50',
    pageBackgroundDark: 'bg-black',
    cardBackground: 'bg-white/70 backdrop-blur-md',
    cardBackgroundDark: 'bg-gray-900/80 backdrop-blur-md',
    cardBorder: 'border border-gray-200',
    cardBorderDark: 'border border-gray-700',
    primary: 'bg-blue-500',
    primaryHover: 'hover:bg-blue-600',
    primaryText: 'text-white',
    secondary: 'border border-gray-300',
    secondaryHover: 'hover:bg-gray-100',
    secondaryText: 'text-gray-700',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-600',
    textSecondaryDark: 'text-gray-300',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-orange-500',
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
      small: 'shadow-md',
      medium: 'shadow-lg',
      large: 'shadow-xl',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-medium',
      bold: 'font-semibold',
      black: 'font-semibold',
    },
    effects: {
      blur: 'backdrop-blur-md',
      transform: 'transition-all transform hover:scale-105',
    },
  },
  
  content: {
    hero: {
      title: 'Think different. 🍎',
      subtitle: 'Seamlessly connected. Beautifully simple. Incredibly powerful.',
      primaryButton: '📱 Continue on iPhone',
      secondaryButton: '⚙️ System Preferences',
      emoji: '🍎',
    },
    
    tabs: ['overview', 'devices', 'privacy'],
    
    tabContent: {
      overview: {
        title: '📱 Your Apple Ecosystem',
        description: 'Your devices work together seamlessly, keeping you connected wherever you go.',
      },
      devices: {
        title: '🔗 Connected Devices',
        description: 'All your Apple devices in one place.',
      },
      privacy: {
        title: '🔒 Privacy & Security',
        description: 'Your data belongs to you. Control what you share.',
      },
    },
    
    toasts: {
      success: { title: 'AirDrop Complete 📱', message: 'File successfully shared to MacBook Pro.' },
      error: { title: 'iCloud Sync Failed', message: 'Unable to connect to iCloud. Check your connection.' },
      warning: { title: 'Storage Almost Full ⚠️', message: 'Only 2GB left in iCloud. Consider upgrading.' },
      info: { title: 'iOS Update Available 📱', message: 'iOS 18.1 is ready to install tonight.' },
      bottomSuccess: { title: 'Backup Complete ☁️', message: 'iPhone backup finished successfully to iCloud.' },
      bottomError: { title: 'Face ID Failed 🔒', message: 'Unable to authenticate. Try again or use passcode.' },
      bottomWarning: { title: 'Battery Low 🔋', message: '10% battery remaining. Consider charging soon.' },
      bottomInfo: { title: 'Screen Time Report 📊', message: 'Your weekly screen time report is ready.' },
      timerSuccess: { title: 'Focus Mode Complete 🎯', message: 'Work focus session finished. Great job!' },
      timerError: { title: 'Sync Error ❌', message: 'Unable to sync with other Apple devices.' },
      timerWarning: { title: 'Do Not Disturb 🌙', message: 'Focus mode will start in 5 minutes.' },
      timerInfo: { title: 'Siri Suggestion 🤖', message: 'Based on your routine, would you like to set a reminder?' },
    },
    
    modals: {
      info: {
        title: 'Continuity',
        message: 'Start on one device, pick up on another. Handoff, Universal Clipboard, and AirDrop make switching between devices seamless.',
        button: 'Learn More',
        emoji: '🔄',
      },
      alert: {
        title: 'Privacy Alert',
        message: 'An app is requesting access to your location. You can change this in Settings at any time.',
        button: 'Open Settings',
        emoji: '📍',
      },
      confirm: {
        title: 'Sign Out',
        message: 'Are you sure you want to sign out of iCloud? Some data stored only in iCloud will be removed from this device.',
        confirmButton: 'Sign Out',
        cancelButton: 'Cancel',
        emoji: '🚪',
      },
    },
    
    dropdownTitle: 'AirDrop',
    dropdownOptions: [
      { icon: '📴', label: 'Receiving Off' },
      { icon: '👤', label: 'Contacts Only' },
      { icon: '👥', label: 'Everyone' },
    ],
    
    quickActions: {
      title: 'Control Center',
      subtitle: 'Quick access to settings',
      actions: [
        { icon: '📶', label: 'Wi-Fi' },
        { icon: '📱', label: 'Bluetooth' },
        { icon: '✈️', label: 'Airplane Mode' },
      ],
    },
    
    notificationCard: {
      emoji: '🍎',
      title: 'Apple ID',
      message: 'Signed in as user@icloud.com. All devices synced.',
    },
    
    stats: {
      title: 'Device Status',
      progressLabel: 'iCloud Storage',
      progressValue: '45 GB / 50 GB',
      items: [
        { value: '78%', label: 'iPhone Battery' },
        { value: '5', label: 'Devices' },
        { value: '2.4 GB', label: 'Photos' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'rounded-3xl p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl backdrop-blur-xl',
    heroContainerDark: 'rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl backdrop-blur-xl',
    tabButton: 'flex-1 py-3 px-4 rounded-xl font-medium transition-all capitalize',
    tabButtonActive: 'bg-white text-gray-900 shadow-lg',
    primaryButton: 'bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg border border-white/10',
    secondaryButton: 'border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/10 transition-all transform hover:scale-105',
    card: 'rounded-3xl bg-white/70 backdrop-blur-md shadow-xl',
    cardDark: 'rounded-3xl bg-gray-900/80 backdrop-blur-md border border-gray-700 shadow-xl',
    modal: 'rounded-3xl p-8 bg-white/90 backdrop-blur-xl shadow-2xl',
    modalDark: 'rounded-3xl p-8 bg-gray-900/90 backdrop-blur-xl border border-gray-700 shadow-2xl',
  },
}

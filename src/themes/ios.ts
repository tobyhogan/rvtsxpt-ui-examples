import { Theme } from './types'

export const iosTheme: Theme = {
  name: 'iOS-esque',
  slug: 'ios',
  
  colors: {
    pageBackground: 'bg-[#F2F2F7]',
    pageBackgroundDark: 'bg-black',
    cardBackground: 'bg-white/80 backdrop-blur-xl',
    cardBackgroundDark: 'bg-[#1C1C1E]/80 backdrop-blur-xl',
    cardBorder: 'border border-gray-200/50',
    cardBorderDark: 'border border-gray-700/50',
    primary: 'bg-[#007AFF]',
    primaryHover: 'hover:bg-[#0071E3]',
    primaryText: 'text-white',
    secondary: 'bg-[#F2F2F7]',
    secondaryHover: 'hover:bg-[#E5E5EA]',
    secondaryText: 'text-[#007AFF]',
    textPrimary: 'text-black',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-[#8E8E93]',
    textSecondaryDark: 'text-[#8E8E93]',
    success: 'bg-[#34C759]',
    error: 'bg-[#FF3B30]',
    warning: 'bg-[#FF9500]',
    info: 'bg-[#007AFF]',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-xl',
      medium: 'rounded-2xl',
      large: 'rounded-[22px]',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-sm shadow-black/5',
      medium: 'shadow-md shadow-black/8',
      large: 'shadow-lg shadow-black/10',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-semibold',
      black: 'font-bold',
    },
    effects: {
      blur: 'backdrop-blur-xl',
      transform: 'transition-all duration-150 active:scale-[0.97]',
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
    heroContainer: 'rounded-[28px] p-8 bg-gradient-to-br from-[#007AFF] via-[#5856D6] to-[#AF52DE] shadow-2xl',
    heroContainerDark: 'rounded-[28px] p-8 bg-gradient-to-br from-[#1C1C1E] via-[#2C2C2E] to-[#3A3A3C] border border-gray-700/50 shadow-2xl',
    tabButton: 'flex-1 py-2.5 px-4 rounded-lg font-medium text-[15px] transition-all',
    tabButtonActive: 'bg-white dark:bg-[#3A3A3C] text-black dark:text-white shadow-sm',
    primaryButton: 'bg-[#007AFF] text-white px-6 py-3 rounded-xl font-semibold text-[17px] hover:bg-[#0071E3] active:scale-[0.97] transition-all shadow-sm',
    secondaryButton: 'bg-[#F2F2F7] dark:bg-[#3A3A3C] text-[#007AFF] dark:text-[#0A84FF] px-6 py-3 rounded-xl font-semibold text-[17px] hover:bg-[#E5E5EA] dark:hover:bg-[#48484A] active:scale-[0.97] transition-all',
    successButton: 'bg-[#34C759] text-white rounded-xl font-semibold text-[15px] active:scale-[0.97] transition-all',
    dangerButton: 'bg-[#FF3B30] text-white rounded-xl font-semibold text-[15px] active:scale-[0.97] transition-all',
    warningButton: 'bg-[#FF9500] text-white rounded-xl font-semibold text-[15px] active:scale-[0.97] transition-all',
    infoButton: 'bg-[#007AFF] text-white rounded-xl font-semibold text-[15px] active:scale-[0.97] transition-all',
    card: 'rounded-2xl bg-white/80 backdrop-blur-xl shadow-sm shadow-black/5',
    cardDark: 'rounded-2xl bg-[#1C1C1E]/80 backdrop-blur-xl border border-gray-700/30 shadow-sm',
    modal: 'rounded-[22px] p-6 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-black/20',
    modalDark: 'rounded-[22px] p-6 bg-[#1C1C1E]/95 backdrop-blur-2xl border border-gray-700/30 shadow-2xl',
  },
}

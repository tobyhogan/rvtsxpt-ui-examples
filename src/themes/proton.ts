import { Theme } from './types'

export const protonTheme: Theme = {
  name: 'Proton-esque',
  slug: 'proton',
  
  colors: {
    pageBackground: 'bg-gray-50',
    pageBackgroundDark: 'bg-gray-900',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-gray-800',
    cardBorder: 'border border-gray-200',
    cardBorderDark: 'border border-gray-700',
    primary: 'bg-purple-600',
    primaryHover: 'hover:bg-purple-700',
    primaryText: 'text-white',
    secondary: 'border border-gray-300',
    secondaryHover: 'hover:bg-gray-100',
    secondaryText: 'text-gray-700',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-600',
    textSecondaryDark: 'text-gray-300',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-purple-600',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-lg',
      medium: 'rounded-xl',
      large: 'rounded-xl',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-md',
      medium: 'shadow-lg',
      large: 'shadow-xl',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-semibold',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-bold',
    },
    effects: {},
  },
  
  content: {
    hero: {
      title: 'ProtonVPN UI Components',
      subtitle: 'Secure VPN interface with purple branding',
      primaryButton: '🔒 Connect Now',
      secondaryButton: '🌍 Server List',
      emoji: 'P',
    },
    
    tabs: ['overview', 'servers', 'security'],
    
    tabContent: {
      overview: {
        title: '🔒 Your Privacy Dashboard',
        description: 'Monitor your connection status and security features.',
      },
      servers: {
        title: '🌍 Available Servers',
        description: 'Connect to servers in 60+ countries worldwide.',
      },
      security: {
        title: '🛡️ Security Features',
        description: 'Advanced security options to protect your privacy.',
      },
    },
    
    toasts: {
      success: { title: 'VPN Connected! 🔒', message: 'Your connection is now secure and private.' },
      error: { title: 'Connection Failed 🚫', message: 'Unable to connect to VPN server. Please try again.' },
      warning: { title: 'Server Overloaded ⚠️', message: 'Current server is at 85% capacity. Consider switching.' },
      info: { title: 'NetShield Active 🛡️', message: 'Ad-blocker is protecting your browsing experience.' },
      bottomSuccess: { title: 'Kill Switch Activated! 🛡️', message: 'Your internet is now protected if VPN drops.' },
      bottomError: { title: 'Server Maintenance 🔧', message: 'Selected server is under maintenance.' },
      bottomWarning: { title: 'Data Limit Warning 📊', message: "You've used 90% of your monthly data allowance." },
      bottomInfo: { title: 'New Server Available 🌍', message: 'Added new high-speed server in Singapore!' },
      timerSuccess: { title: 'Secure Core Active! 🔐', message: 'Your traffic is now routed through multiple secure servers.' },
      timerError: { title: 'Authentication Failed ❌', message: 'Please check your credentials and try again.' },
      timerWarning: { title: 'Connection Unstable 📶', message: 'Your connection may drop. Consider switching servers.' },
      timerInfo: { title: 'Speed Test 🚀', message: 'Your current download speed: 150 Mbps' },
    },
    
    modals: {
      info: {
        title: 'Secure Core',
        message: 'Secure Core routes your traffic through multiple servers in privacy-friendly countries before leaving our network, providing enhanced protection against network attacks.',
        button: 'Enable',
        emoji: '🔐',
      },
      alert: {
        title: 'Connection Warning',
        message: 'Your VPN connection was interrupted. Enable Kill Switch to prevent data leaks when the VPN disconnects.',
        button: 'Enable Kill Switch',
        emoji: '⚠️',
      },
      confirm: {
        title: 'Disconnect VPN',
        message: 'Are you sure you want to disconnect? Your internet traffic will no longer be encrypted.',
        confirmButton: 'Disconnect',
        cancelButton: 'Stay Connected',
        emoji: '🔓',
      },
    },
    
    dropdownTitle: 'Select Country',
    dropdownOptions: [
      { icon: '🇺🇸', label: 'United States' },
      { icon: '🇨🇭', label: 'Switzerland' },
      { icon: '🇳🇱', label: 'Netherlands' },
    ],
    
    quickActions: {
      title: 'Quick Connect',
      subtitle: 'One-tap connection to secure servers',
      actions: [
        { icon: '⚡', label: 'Fastest Server' },
        { icon: '🎲', label: 'Random Server' },
        { icon: '📍', label: 'Nearest Server' },
      ],
    },
    
    notificationCard: {
      emoji: '🛡️',
      title: 'Protection Status',
      message: 'Your connection is secure. All traffic is encrypted.',
    },
    
    stats: {
      title: 'Connection Stats',
      progressLabel: 'Session Duration',
      progressValue: '2h 34m',
      items: [
        { value: '2.4 GB', label: 'Downloaded' },
        { value: '156 MB', label: 'Uploaded' },
        { value: '45 ms', label: 'Latency' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'rounded-xl p-8 bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg',
    heroContainerDark: 'rounded-xl p-8 bg-gradient-to-br from-purple-900 to-gray-900 border border-purple-800 shadow-lg',
    tabButton: 'px-6 py-2 rounded-lg font-semibold transition-all',
    tabButtonActive: 'bg-purple-600 text-white hover:bg-purple-700',
    primaryButton: 'bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors',
    secondaryButton: 'border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors',
  },
}

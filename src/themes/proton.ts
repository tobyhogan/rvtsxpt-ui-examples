import { Theme } from './types'

export const protonTheme: Theme = {
  name: 'Proton-esque',
  slug: 'proton',
  
  colors: {
    pageBackground: 'bg-slate-50',
    pageBackgroundDark: 'bg-[#1a1a2e]',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-[#252547]',
    cardBorder: 'border border-slate-200',
    cardBorderDark: 'border border-[#3d3d6b]',
    primary: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF]',
    primaryHover: 'hover:from-[#7C5CFF] hover:to-[#9A7FFF]',
    primaryText: 'text-white',
    secondary: 'border-2 border-[#6D4AFF]',
    secondaryHover: 'hover:bg-[#6D4AFF]/10',
    secondaryText: 'text-[#6D4AFF]',
    textPrimary: 'text-slate-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-slate-500',
    textSecondaryDark: 'text-slate-400',
    success: 'bg-gradient-to-r from-[#1EA885] to-[#2BC49A]',
    error: 'bg-gradient-to-r from-[#DC3545] to-[#F4516C]',
    warning: 'bg-gradient-to-r from-[#F5A623] to-[#FFBF47]',
    info: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF]',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-lg',
      medium: 'rounded-xl',
      large: 'rounded-2xl',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-md shadow-purple-500/10',
      medium: 'shadow-lg shadow-purple-500/15',
      large: 'shadow-xl shadow-purple-500/20',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-bold',
    },
    effects: {
      transform: 'transition-all duration-200',
    },
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
    heroContainer: 'rounded-2xl p-8 bg-gradient-to-br from-[#6D4AFF] via-[#8B6DFF] to-[#B298FF] shadow-2xl shadow-purple-500/30',
    heroContainerDark: 'rounded-2xl p-8 bg-gradient-to-br from-[#1a1a2e] via-[#252547] to-[#3d3d6b] border border-[#6D4AFF]/30 shadow-2xl shadow-purple-500/20',
    tabButton: 'px-5 py-2.5 rounded-lg font-medium transition-all',
    tabButtonActive: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF] text-white shadow-md shadow-purple-500/30',
    primaryButton: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#7C5CFF] hover:to-[#9A7FFF] hover:shadow-lg hover:shadow-purple-500/30 transition-all',
    secondaryButton: 'border-2 border-[#6D4AFF] text-[#6D4AFF] dark:text-[#B298FF] dark:border-[#B298FF] px-6 py-3 rounded-lg font-semibold hover:bg-[#6D4AFF]/10 transition-all bg-transparent',
    successButton: 'bg-gradient-to-r from-[#1EA885] to-[#2BC49A] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all',
    dangerButton: 'bg-gradient-to-r from-[#DC3545] to-[#F4516C] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all',
    warningButton: 'bg-gradient-to-r from-[#F5A623] to-[#FFBF47] text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all',
    infoButton: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all',
    card: 'rounded-xl bg-white shadow-lg shadow-slate-200/50',
    cardDark: 'rounded-xl bg-[#252547] border border-[#3d3d6b] shadow-lg shadow-purple-500/10',
    progressBar: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B6DFF]',
  },
}

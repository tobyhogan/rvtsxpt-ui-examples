import { Theme } from './types'

export const glassmorphicTheme: Theme = {
  name: 'Glassmorphic',
  slug: 'glassmorphic',
  
  colors: {
    pageBackground: 'bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200',
    pageBackgroundDark: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    cardBackground: 'backdrop-blur-xl bg-white/10',
    cardBackgroundDark: 'backdrop-blur-xl bg-white/10',
    cardBorder: 'border border-white/20',
    cardBorderDark: 'border border-white/20',
    primary: 'backdrop-blur-md bg-white/20',
    primaryHover: 'hover:bg-white/30',
    primaryText: 'text-white',
    secondary: 'backdrop-blur-md bg-black/10 border-2 border-white/40',
    secondaryHover: 'hover:bg-white/20',
    secondaryText: 'text-white',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-800/80',
    textSecondaryDark: 'text-white/80',
    success: 'backdrop-blur-md bg-green-500/30',
    error: 'backdrop-blur-md bg-red-500/30',
    warning: 'backdrop-blur-md bg-yellow-500/30',
    info: 'backdrop-blur-md bg-blue-500/30',
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
      normal: 'font-light',
      medium: 'font-medium',
      semibold: 'font-medium',
      bold: 'font-semibold',
      black: 'font-semibold',
    },
    effects: {
      blur: 'backdrop-blur-xl',
      backdrop: 'bg-white/10',
      transform: 'transition-all duration-300 hover:scale-105',
    },
  },
  
  content: {
    hero: {
      title: 'Glassmorphism Design',
      subtitle: 'Experience the future of UI with transparent, frosted glass effects',
      primaryButton: '✨ Explore Glass',
      secondaryButton: '🔍 Learn More',
      emoji: '🌌',
    },
    
    tabs: ['overview', 'effects', 'properties'],
    
    tabContent: {
      overview: {
        title: '✨ Glassmorphism Overview',
        description: 'A design trend that creates a frosted glass effect with transparency, blur, and subtle shadows.',
        highlightBox: '💡 Key Feature: Creates depth through layered transparency and backdrop filters',
      },
      effects: {
        title: '🎨 Glass Effects',
        description: 'Explore different blur levels and transparency combinations.',
      },
      properties: {
        title: '⚙️ CSS Properties',
        description: 'Learn the key properties: backdrop-filter, background with alpha, and border-radius.',
      },
    },
    
    toasts: {
      success: { title: 'Glass Effect Applied', message: 'Beautiful glassmorphism design activated!' },
      error: { title: 'Transparency Error', message: 'Something went wrong with the glass effect.' },
      warning: { title: 'Blur Warning', message: 'High blur effects may impact performance.' },
      info: { title: 'Glass Design Info', message: 'Glassmorphism creates depth with transparency.' },
      bottomSuccess: { title: 'Frosted Glass Ready', message: 'Your frosted glass interface is now active!' },
      bottomError: { title: 'Backdrop Filter Failed', message: 'Browser may not support backdrop filters.' },
      bottomWarning: { title: 'Performance Notice', message: 'Multiple glass layers may slow rendering.' },
      bottomInfo: { title: 'Glass Layers', message: 'Experiment with different opacity levels!' },
      timerSuccess: { title: 'Glass Animation Complete', message: 'Smooth glass transitions finished!' },
      timerError: { title: 'Glass Render Error', message: 'Failed to render glass effects properly.' },
      timerWarning: { title: 'GPU Intensive', message: 'Glass effects are using significant GPU resources.' },
      timerInfo: { title: 'Glass Pro Tip', message: 'Use subtle shadows for better depth perception.' },
    },
    
    modals: {
      info: {
        title: 'Glass Design Principles',
        message: 'Glassmorphism works best with colorful backgrounds, subtle borders, and careful use of transparency. The key is finding the right balance.',
        button: 'Understood',
        emoji: '💎',
      },
      alert: {
        title: 'Browser Compatibility',
        message: 'Some older browsers may not support backdrop-filter. Consider providing fallbacks for broader support.',
        button: 'Got it',
        emoji: '⚠️',
      },
      confirm: {
        title: 'Apply Glass Theme',
        message: 'Would you like to apply glassmorphism styling to all components? This may affect performance on older devices.',
        confirmButton: 'Apply',
        cancelButton: 'Cancel',
        emoji: '✨',
      },
    },
    
    dropdownTitle: 'Glass Opacity',
    dropdownOptions: [
      { icon: '🔮', label: 'Light (10%)' },
      { icon: '💠', label: 'Medium (20%)' },
      { icon: '🌫️', label: 'Heavy (30%)' },
    ],
    
    quickActions: {
      title: 'Glass Controls',
      subtitle: 'Adjust your glass interface',
      actions: [
        { icon: '🔆', label: 'Adjust Blur' },
        { icon: '🎨', label: 'Change Tint' },
        { icon: '💫', label: 'Toggle Glow' },
      ],
    },
    
    notificationCard: {
      emoji: '💡',
      title: 'Design Tip',
      message: 'Use vibrant gradients behind glass elements for the best visual effect.',
    },
    
    stats: {
      title: 'Glass Metrics',
      progressLabel: 'Visual Depth',
      progressValue: '85%',
      items: [
        { value: '20%', label: 'Opacity' },
        { value: '16px', label: 'Blur' },
        { value: '1px', label: 'Border' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl',
    heroContainerDark: 'backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl',
    tabButton: 'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300',
    tabButtonActive: 'backdrop-blur-md bg-white/30 text-white shadow-lg border border-white/40',
    primaryButton: 'backdrop-blur-md bg-white/20 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:scale-105',
    secondaryButton: 'backdrop-blur-md bg-black/10 border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105',
    card: 'backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl',
    cardDark: 'backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl',
    modal: 'backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl',
    modalDark: 'backdrop-blur-xl bg-black/30 border border-white/20 rounded-3xl p-8 shadow-2xl',
  },
}

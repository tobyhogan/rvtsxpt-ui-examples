// Theme Type Definitions

export interface ThemeColors {
  // Page backgrounds
  pageBackground: string
  pageBackgroundDark: string
  
  // Card/Container backgrounds
  cardBackground: string
  cardBackgroundDark: string
  cardBorder: string
  cardBorderDark: string
  
  // Primary accent color
  primary: string
  primaryHover: string
  primaryText: string
  
  // Secondary colors
  secondary: string
  secondaryHover: string
  secondaryText: string
  
  // Text colors
  textPrimary: string
  textPrimaryDark: string
  textSecondary: string
  textSecondaryDark: string
  
  // Status colors (can be customized per theme)
  success: string
  error: string
  warning: string
  info: string
}

export interface ThemeStyles {
  // Border radius
  borderRadius: {
    small: string
    medium: string
    large: string
    full: string
  }
  
  // Shadows
  shadow: {
    small: string
    medium: string
    large: string
  }
  
  // Font weights
  fontWeight: {
    normal: string
    medium: string
    semibold: string
    bold: string
    black: string
  }
  
  // Special effects
  effects: {
    blur?: string
    backdrop?: string
    transform?: string
  }
}

export interface ThemeContent {
  // Hero section content
  hero: {
    title: string
    subtitle: string
    primaryButton: string
    secondaryButton: string
    emoji?: string
  }
  
  // Tab labels
  tabs: string[]
  
  // Tab content titles
  tabContent: {
    [key: string]: {
      title: string
      description: string
      highlightBox?: string
    }
  }
  
  // Toast messages
  toasts: {
    success: { title: string; message: string }
    error: { title: string; message: string }
    warning: { title: string; message: string }
    info: { title: string; message: string }
    bottomSuccess: { title: string; message: string }
    bottomError: { title: string; message: string }
    bottomWarning: { title: string; message: string }
    bottomInfo: { title: string; message: string }
    timerSuccess: { title: string; message: string }
    timerError: { title: string; message: string }
    timerWarning: { title: string; message: string }
    timerInfo: { title: string; message: string }
  }
  
  // Modal content
  modals: {
    info: { title: string; message: string; button: string; emoji: string }
    alert: { title: string; message: string; button: string; emoji: string }
    confirm: { title: string; message: string; confirmButton: string; cancelButton: string; emoji: string }
  }
  
  // Dropdown options
  dropdownTitle: string
  dropdownOptions: { icon: string; label: string }[]
  
  // Quick actions
  quickActions: {
    title: string
    subtitle: string
    actions: { icon: string; label: string }[]
  }
  
  // Notification card
  notificationCard: {
    emoji: string
    title: string
    message: string
  }
  
  // Stats section
  stats: {
    title: string
    progressLabel: string
    progressValue: string
    items: { value: string; label: string; emoji?: string }[]
  }
}

export interface Theme {
  name: string
  slug: string
  colors: ThemeColors
  styles: ThemeStyles
  content: ThemeContent
  
  // Custom class overrides for specific components
  customClasses?: {
    heroContainer?: string
    heroContainerDark?: string
    tabButton?: string
    tabButtonActive?: string
    primaryButton?: string
    secondaryButton?: string
    successButton?: string
    dangerButton?: string
    warningButton?: string
    infoButton?: string
    card?: string
    cardDark?: string
    modal?: string
    modalDark?: string
    progressBar?: string
    statCard?: string
  }
}

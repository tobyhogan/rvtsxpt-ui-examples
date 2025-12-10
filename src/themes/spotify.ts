import { Theme } from './types'

export const spotifyTheme: Theme = {
  name: 'Spotify-esque',
  slug: 'spotify',
  
  colors: {
    pageBackground: 'bg-neutral-100',
    pageBackgroundDark: 'bg-neutral-900',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-neutral-800',
    cardBorder: 'border border-neutral-200',
    cardBorderDark: 'border border-neutral-700',
    primary: 'bg-[#1DB954]',
    primaryHover: 'hover:bg-[#1ed760]',
    primaryText: 'text-black',
    secondary: 'border border-neutral-400',
    secondaryHover: 'hover:bg-neutral-800',
    secondaryText: 'text-white',
    textPrimary: 'text-neutral-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-neutral-500',
    textSecondaryDark: 'text-neutral-400',
    success: 'bg-[#1DB954]',
    error: 'bg-[#E91429]',
    warning: 'bg-[#FFA42B]',
    info: 'bg-[#2E77D0]',
  },
  
  styles: {
    borderRadius: {
      small: 'rounded-full',
      medium: 'rounded-lg',
      large: 'rounded-xl',
      full: 'rounded-full',
    },
    shadow: {
      small: 'shadow-md',
      medium: 'shadow-lg',
      large: 'shadow-2xl',
    },
    fontWeight: {
      normal: 'font-medium',
      medium: 'font-semibold',
      semibold: 'font-bold',
      bold: 'font-bold',
      black: 'font-black',
    },
    effects: {
      transform: 'transition-all duration-200 hover:scale-[1.02]',
    },
  },
  
  content: {
    hero: {
      title: 'Spotify UI Components',
      subtitle: 'Music streaming interface with green accents',
      primaryButton: '▶️ Play Now',
      secondaryButton: '❤️ Save to Library',
      emoji: '♪',
    },
    
    tabs: ['overview', 'playlists', 'artists'],
    
    tabContent: {
      overview: {
        title: '🎵 Your Music Dashboard',
        description: 'Discover and play your favorite music.',
      },
      playlists: {
        title: '🎶 Your Playlists',
        description: 'All your curated playlists in one place.',
      },
      artists: {
        title: '🎤 Followed Artists',
        description: 'Artists you follow and their latest releases.',
      },
    },
    
    toasts: {
      success: { title: 'Song Added! 🎵', message: 'Added to your Liked Songs playlist.' },
      error: { title: 'Playback Failed 🔇', message: 'Unable to play this song. Check your connection.' },
      warning: { title: 'Premium Feature 🎧', message: 'Upgrade to Spotify Premium for ad-free listening!' },
      info: { title: 'New Release 🆕', message: 'Your favorite artist just dropped a new album!' },
      bottomSuccess: { title: 'Playlist Created! 🎶', message: 'Your new playlist is ready to go!' },
      bottomError: { title: 'Offline Mode 📱', message: 'No internet connection detected.' },
      bottomWarning: { title: 'Storage Full 💾', message: 'Not enough space for offline downloads.' },
      bottomInfo: { title: 'Discover Weekly 📻', message: 'Your personalized playlist is ready!' },
      timerSuccess: { title: 'Perfect Mix! 🎯', message: 'Added 50 songs to your daily mix.' },
      timerError: { title: 'Sync Failed ❌', message: 'Could not sync your library.' },
      timerWarning: { title: 'Data Usage ⚠️', message: 'Streaming on mobile data.' },
      timerInfo: { title: 'Similar Artists 🎤', message: 'Discover artists similar to your favorites!' },
    },
    
    modals: {
      info: {
        title: 'About This Playlist',
        message: 'This playlist is updated weekly based on your listening habits. Enjoy personalized music recommendations!',
        button: 'Start Listening',
        emoji: '🎵',
      },
      alert: {
        title: 'Premium Required',
        message: 'This feature requires Spotify Premium. Upgrade now to unlock unlimited skips, offline mode, and more!',
        button: 'Got it',
        emoji: '⭐',
      },
      confirm: {
        title: 'Delete Playlist',
        message: 'Are you sure you want to delete this playlist? Your followers will no longer be able to access it.',
        confirmButton: 'Delete',
        cancelButton: 'Keep',
        emoji: '🗑️',
      },
    },
    
    dropdownTitle: 'Sort By',
    dropdownOptions: [
      { icon: '📅', label: 'Recently Added' },
      { icon: '🔤', label: 'Alphabetical' },
      { icon: '🎨', label: 'Custom Order' },
    ],
    
    quickActions: {
      title: 'Quick Play',
      subtitle: 'Jump right into the music',
      actions: [
        { icon: '🎧', label: 'Recently Played' },
        { icon: '💚', label: 'Liked Songs' },
        { icon: '📻', label: 'Daily Mix' },
      ],
    },
    
    notificationCard: {
      emoji: '🎧',
      title: 'Now Playing',
      message: "Nothing playing yet. Start your music journey!",
    },
    
    stats: {
      title: 'Listening Stats',
      progressLabel: 'Minutes Listened This Week',
      progressValue: '847 / 1000',
      items: [
        { value: '234', label: 'Liked Songs' },
        { value: '45', label: 'Playlists' },
        { value: '127', label: 'Artists' },
      ],
    },
  },
  
  customClasses: {
    heroContainer: 'rounded-xl p-8 bg-gradient-to-br from-[#1DB954] to-[#121212]',
    heroContainerDark: 'rounded-xl p-8 bg-gradient-to-br from-[#1a5c2e] to-[#121212] border border-neutral-800',
    tabButton: 'px-6 py-2 rounded-full font-bold tracking-wide uppercase text-xs transition-all',
    tabButtonActive: 'bg-[#1DB954] text-black hover:bg-[#1ed760]',
    primaryButton: 'bg-[#1DB954] text-black px-8 py-3 rounded-full font-bold tracking-wide uppercase text-sm hover:bg-[#1ed760] hover:scale-105 transition-all shadow-lg',
    secondaryButton: 'border border-neutral-500 text-white px-8 py-3 rounded-full font-bold tracking-wide uppercase text-sm hover:border-white hover:scale-105 transition-all bg-transparent',
    successButton: 'bg-[#1DB954] text-black rounded-full font-bold tracking-wide uppercase hover:bg-[#1ed760] hover:scale-105 transition-all',
    dangerButton: 'bg-[#E91429] text-white rounded-full font-bold tracking-wide uppercase hover:brightness-110 hover:scale-105 transition-all',
    warningButton: 'bg-[#FFA42B] text-black rounded-full font-bold tracking-wide uppercase hover:brightness-110 hover:scale-105 transition-all',
    infoButton: 'bg-[#2E77D0] text-white rounded-full font-bold tracking-wide uppercase hover:brightness-110 hover:scale-105 transition-all',
    card: 'rounded-lg bg-white hover:bg-neutral-50 transition-colors',
    cardDark: 'rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700',
  },
}

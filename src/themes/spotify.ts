import { Theme } from './types'

export const spotifyTheme: Theme = {
  name: 'Spotify-esque',
  slug: 'spotify',
  
  colors: {
    pageBackground: 'bg-gray-50',
    pageBackgroundDark: 'bg-black',
    cardBackground: 'bg-white',
    cardBackgroundDark: 'bg-gray-900',
    cardBorder: 'border border-gray-200',
    cardBorderDark: 'border border-gray-700',
    primary: 'bg-green-500',
    primaryHover: 'hover:bg-green-400',
    primaryText: 'text-black',
    secondary: 'border border-gray-300',
    secondaryHover: 'hover:bg-gray-100',
    secondaryText: 'text-gray-700',
    textPrimary: 'text-gray-900',
    textPrimaryDark: 'text-white',
    textSecondary: 'text-gray-600',
    textSecondaryDark: 'text-gray-300',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
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
    effects: {
      transform: 'transition-all',
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
    heroContainer: 'rounded-xl p-8 bg-gradient-to-br from-green-600 to-green-800',
    heroContainerDark: 'rounded-xl p-8 bg-gradient-to-br from-green-900 to-black border border-gray-800',
    tabButton: 'px-6 py-2 rounded-full font-semibold transition-all',
    tabButtonActive: 'bg-green-500 text-black hover:bg-green-400',
    primaryButton: 'bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:bg-green-400 hover:scale-105 transition-all',
    secondaryButton: 'border border-gray-400 text-white px-8 py-4 rounded-full font-semibold hover:border-white transition-all',
  },
}

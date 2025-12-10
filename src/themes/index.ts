// Theme System - Main exports
export type { Theme, ThemeColors, ThemeStyles, ThemeContent } from './types'

// Import themes
import { defaultTheme } from './default'
import { duolingoTheme } from './duolingo'
import { todoistTheme } from './todoist'
import { glassmorphicTheme } from './glassmorphic'
import { spotifyTheme } from './spotify'
import { protonTheme } from './proton'
import { iosTheme } from './ios'

// Re-export individual themes
export { defaultTheme } from './default'
export { duolingoTheme } from './duolingo'
export { todoistTheme } from './todoist'
export { glassmorphicTheme } from './glassmorphic'
export { spotifyTheme } from './spotify'
export { protonTheme } from './proton'
export { iosTheme } from './ios'

// Theme registry for easy lookup
import type { Theme } from './types'

export const themes: Record<string, Theme> = {
  default: defaultTheme,
  duolingo: duolingoTheme,
  todoist: todoistTheme,
  glassmorphic: glassmorphicTheme,
  spotify: spotifyTheme,
  proton: protonTheme,
  ios: iosTheme,
}

export const themeList = Object.values(themes)

/**
 * Application layer barrel export.
 * Re-exports all React hooks and services.
 *
 * Usage: import { useTheme, useSoundEffects, useGame } from '@/app'
 */

export * from './haptics'
export { SoundProvider, useSoundContext } from './SoundContext'
export * from './storageService'
export { ThemeProvider, useThemeContext } from './ThemeContext'
export { useGame } from './useGame'

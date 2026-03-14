/**
 * useStats — win/loss/streak tracking persisted to localStorage.
 */

import { useCallback, useState } from 'react'

import { DEFAULT_STATS } from '@/domain/constants'
import type { GameStats } from '@/domain/types'

import { load, save } from './storageService'

const STORAGE_KEY = 'rock-paper-scissors-stats'

export function useStats() {
  const [stats, setStats] = useState<GameStats>(() => load(STORAGE_KEY, DEFAULT_STATS))

  const recordWin = useCallback(() => {
    setStats((prev) => {
      const next: GameStats = {
        playerWins: prev.playerWins + 1,
        cpuWins: prev.cpuWins,
        draws: prev.draws,
        totalRounds: prev.totalRounds + 1,
      }
      save(STORAGE_KEY, next)
      return next
    })
  }, [])

  const recordLoss = useCallback(() => {
    setStats((prev) => {
      const next: GameStats = {
        playerWins: prev.playerWins,
        cpuWins: prev.cpuWins + 1,
        draws: prev.draws,
        totalRounds: prev.totalRounds + 1,
      }
      save(STORAGE_KEY, next)
      return next
    })
  }, [])

  const resetStats = useCallback(() => {
    save(STORAGE_KEY, DEFAULT_STATS)
    setStats(DEFAULT_STATS)
  }, [])

  return { stats, recordWin, recordLoss, resetStats }
}

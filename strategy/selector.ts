// strategy/selector.ts

import { MatchContext } from '@/context/matchContext'
import { StrategySelectionOptions, StrategyDecision } from './types'
import { PREMATCH_STRATEGY } from './prematch'
import { LIVE_STRATEGY } from './live'
import { POSTMATCH_STRATEGY } from './postmatch'
import { QUICK_STRATEGY } from './quick'
import { DEEP_STRATEGY } from './deep'
import { CHAT_STRATEGY } from './chat'

/**
 * Select a strategy decision based on match context and optional user-requested mode.
 * Rules:
 * - If requestedMode provided, prefer corresponding strategy (quick/deep/chat) unless match state disallows it.
 * - If match is LIVE => LIVE strategy.
 * - If match is FINISHED => POSTMATCH strategy.
 * - Else => PREMATCH strategy.
 */
export const selectStrategy = (context: MatchContext, opts?: StrategySelectionOptions): StrategyDecision => {
  const status = context.match?.status ?? 'SCHEDULED'
  const requested = opts?.requestedMode

  // If user explicitly requested chat, quick, or deep, honor it with some limits.
  if (requested === 'chat') return CHAT_STRATEGY
  if (requested === 'quick') return QUICK_STRATEGY
  if (requested === 'deep') return DEEP_STRATEGY

  // Match-state driven selection
  if (status === 'LIVE') {
    return LIVE_STRATEGY
  }

  if (status === 'FINISHED') {
    return POSTMATCH_STRATEGY
  }

  // Default prematch
  return PREMATCH_STRATEGY
}

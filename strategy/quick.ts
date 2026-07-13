// strategy/quick.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const QUICK_STRATEGY: StrategyDecision = {
  preset: 'quick',
  promptMode: 'quick',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { analysisDepth: 'shallow', responseLength: 'short' },
  personalityId: personality.id,
  prioritizedModules: ['winner', 'btts', 'overunder', 'confidence'],
  contextPriorityMap: {
    match: 'high',
    teams: 'high',
    lineups: 'medium',
    statistics: 'medium',
    recentForm: 'medium',
    timeline: 'ignore',
    playerRatings: 'ignore',
    injuries: 'medium',
    referee: 'low',
    venue: 'low',
    weather: 'low',
    analysisHistory: 'ignore'
  },
  maxWords: STRATEGY_CONSTANTS.QUICK_MAX_WORDS,
  responseFormat: 'json+text',
  includeAnalysisHistory: false,
  preservePreviousContext: false
}

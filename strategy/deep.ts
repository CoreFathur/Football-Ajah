// strategy/deep.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const DEEP_STRATEGY: StrategyDecision = {
  preset: 'deep',
  promptMode: 'deep',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { analysisDepth: 'deep', responseLength: 'long' },
  personalityId: personality.id,
  prioritizedModules: [
    'lineup',
    'tactical',
    'setpieces',
    'manager',
    'form',
    'injury',
    'referee',
    'weather',
    'momentum',
    'psychology',
    'confidence'
  ],
  contextPriorityMap: {
    match: 'high',
    competition: 'medium',
    teams: 'high',
    standings: 'high',
    recentForm: 'high',
    statistics: 'high',
    lineups: 'high',
    injuries: 'high',
    timeline: 'medium',
    playerRatings: 'medium',
    referee: 'medium',
    venue: 'medium',
    weather: 'medium',
    analysisHistory: 'high'
  },
  maxWords: STRATEGY_CONSTANTS.DEEP_NO_WORD_LIMIT,
  responseFormat: 'json+text',
  includeAnalysisHistory: true,
  preservePreviousContext: true
}

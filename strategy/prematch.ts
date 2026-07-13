// strategy/prematch.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const PREMATCH_STRATEGY: StrategyDecision = {
  preset: 'prematch',
  promptMode: 'deep',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { analysisDepth: 'deep', responseLength: 'medium' },
  personalityId: personality.id,
  prioritizedModules: [
    'lineup',
    'form',
    'manager',
    'injury',
    'standings',
    'psychology',
    'setpieces',
    'schedule',
    'tactical'
  ],
  contextPriorityMap: {
    match: 'high',
    competition: 'medium',
    teams: 'high',
    standings: 'high',
    recentForm: 'high',
    statistics: 'medium',
    lineups: 'high',
    injuries: 'high',
    timeline: 'ignore',
    playerRatings: 'ignore',
    referee: 'low',
    venue: 'medium',
    weather: 'medium',
    analysisHistory: 'medium'
  },
  maxWords: 800,
  responseFormat: 'json+text',
  includeAnalysisHistory: true,
  preservePreviousContext: false
}

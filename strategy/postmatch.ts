// strategy/postmatch.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const POSTMATCH_STRATEGY: StrategyDecision = {
  preset: 'postmatch',
  promptMode: 'postmatch',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { analysisDepth: 'deep', responseLength: 'long' },
  personalityId: personality.id,
  prioritizedModules: [
    'timeline',
    'tactical',
    'manager',
    'substitutions',
    'playerRatings',
    'injury',
    'setpieces',
    'psychology'
  ],
  contextPriorityMap: {
    match: 'high',
    competition: 'medium',
    teams: 'high',
    standings: 'medium',
    recentForm: 'medium',
    statistics: 'high',
    lineups: 'high',
    injuries: 'high',
    timeline: 'high',
    playerRatings: 'high',
    referee: 'medium',
    venue: 'medium',
    weather: 'low',
    analysisHistory: 'high'
  },
  maxWords: null,
  responseFormat: 'json+text',
  includeAnalysisHistory: true,
  preservePreviousContext: false
}

// strategy/live.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const LIVE_STRATEGY: StrategyDecision = {
  preset: 'live',
  promptMode: 'live',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { reasoningEffort: 'medium', responseLength: 'short' },
  personalityId: personality.id,
  prioritizedModules: [
    'timeline',
    'momentum',
    'tactical',
    'injury',
    'lineup',
    'referee',
    'setpieces',
    'manager',
    'weather'
  ],
  contextPriorityMap: {
    match: 'high',
    competition: 'low',
    teams: 'high',
    standings: 'low',
    recentForm: 'low',
    statistics: 'high',
    lineups: 'high',
    injuries: 'high',
    timeline: 'high',
    playerRatings: 'medium',
    referee: 'high',
    venue: 'medium',
    weather: 'medium',
    analysisHistory: 'medium'
  },
  maxWords: 300,
  responseFormat: 'json+text',
  includeAnalysisHistory: false,
  preservePreviousContext: true
}

// strategy/chat.ts

import { StrategyDecision } from './types'
import { STRATEGY_CONSTANTS } from './constants'
import { createDefaultPersonality } from '@/personality/builder'

const personality = createDefaultPersonality()

export const CHAT_STRATEGY: StrategyDecision = {
  preset: 'chat',
  promptMode: 'deep',
  promptVersion: STRATEGY_CONSTANTS.DEFAULT_PROMPT_VERSION,
  promptOptions: { analysisDepth: 'shallow', responseLength: 'short' },
  personalityId: personality.id,
  prioritizedModules: ['chat'],
  contextPriorityMap: {
    match: 'medium',
    competition: 'low',
    teams: 'medium',
    standings: 'low',
    recentForm: 'low',
    statistics: 'low',
    lineups: 'low',
    injuries: 'low',
    timeline: 'medium',
    playerRatings: 'low',
    referee: 'low',
    venue: 'low',
    weather: 'low',
    analysisHistory: 'high'
  },
  maxWords: 200,
  responseFormat: 'text',
  includeAnalysisHistory: true,
  preservePreviousContext: true
}

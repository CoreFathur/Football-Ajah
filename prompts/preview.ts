import { StrategyDecision } from '@/strategy/types'
import { MatchContext } from '@/context/matchContext'
import { PersonalityProfile } from '@/personality/builder'
import { AnalysisGuideline } from '@/football/types'
import { PromptPayload } from './builder'
import { PromptOptions } from './constants'

export type PromptDebug = {
  strategy: StrategyDecision
  selectedModuleNames: string[]
  trimmedContextKeys: string[]
  personalityId: string
  userQuestion?: string
}

export type PromptPreview = {
  finalPrompt: string
  promptLength: number
  estimatedTokens: number
  selectedModules: string[]
  strategy: { preset: string; promptMode: string; promptVersion: string }
  personality: { id: string; name: string }
  trimmedContextSummary: Record<string, any>
  debug: PromptDebug
}

// Simple token estimation heuristic: 1 token ~= 4 characters (rough)
export const estimateTokens = (text: string): number => {
  return Math.max(1, Math.ceil(text.length / 4))
}

export const buildPromptPreview = async (
  payload: PromptPayload,
  strategy: StrategyDecision,
  personality: PersonalityProfile,
  trimmedContextSummary: Record<string, any>,
  selectedModules: AnalysisGuideline[],
  userQuestion?: string
): Promise<PromptPreview> => {
  const finalPrompt = payload.prompt
  const promptLength = finalPrompt.length
  const estimatedTokens = estimateTokens(finalPrompt)

  const preview: PromptPreview = {
    finalPrompt,
    promptLength,
    estimatedTokens,
    selectedModules: selectedModules.map(m => m.name),
    strategy: { preset: strategy.preset, promptMode: strategy.promptMode, promptVersion: strategy.promptVersion },
    personality: { id: personality.id, name: personality.name },
    trimmedContextSummary,
    debug: {
      strategy,
      selectedModuleNames: selectedModules.map(m => m.name),
      trimmedContextKeys: Object.keys(trimmedContextSummary),
      personalityId: personality.id,
      userQuestion
    }
  }

  return preview
}

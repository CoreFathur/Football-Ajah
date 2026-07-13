// strategy/types.ts

import { MatchContext } from '@/context/matchContext'
import { PromptMode, PromptVersion, PromptOptions } from '@/prompts'

export type StrategyPresetName =
  | 'prematch'
  | 'live'
  | 'postmatch'
  | 'quick'
  | 'deep'
  | 'chat'
  | `custom`

export type ContextPriority = 'high' | 'medium' | 'low' | 'ignore'

export type OutputFormat = 'json' | 'text' | 'json+text'

export type StrategyDecision = {
  preset: StrategyPresetName
  promptMode: PromptMode
  promptVersion: PromptVersion
  promptOptions: Partial<PromptOptions>
  personalityId: string // id of PersonalityProfile to use
  prioritizedModules: string[] // list of football guideline module names in order
  contextPriorityMap: Record<string, ContextPriority> // MatchContext fields -> priority
  maxWords?: number | null // null means no limit
  responseFormat: OutputFormat
  includeAnalysisHistory: boolean
  preservePreviousContext: boolean // for chat mode
}

export type StrategySelectionOptions = {
  requestedMode?: 'quick' | 'deep' | 'chat' | undefined
  forceDeep?: boolean
  includeHistory?: boolean
}

export type StrategySelector = (context: MatchContext, opts?: StrategySelectionOptions) => StrategyDecision

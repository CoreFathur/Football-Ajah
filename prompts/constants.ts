// prompts/constants.ts

export type PromptMode = 'quick' | 'deep' | 'live' | 'postmatch'

export type PromptVersion = 'v1' | 'v2' | 'v3'

export type PromptOptions = {
  temperature?: number
  topP?: number
  maxTokens?: number
  reasoningEffort?: 'low' | 'medium' | 'high'
  responseLength?: 'short' | 'medium' | 'long'
  analysisDepth?: 'shallow' | 'normal' | 'deep'
}

export const DEFAULT_PROMPT_OPTIONS: PromptOptions = {
  temperature: 0.0,
  topP: 0.9,
  maxTokens: 1024,
  reasoningEffort: 'medium',
  responseLength: 'medium',
  analysisDepth: 'normal'
}

export const SUPPORTED_PROMPT_VERSIONS: PromptVersion[] = ['v1', 'v2', 'v3']

export const DEFAULT_PROMPT_VERSION: PromptVersion = 'v1'

export const SUPPORTED_PROMPT_MODES: PromptMode[] = ['quick', 'deep', 'live', 'postmatch']

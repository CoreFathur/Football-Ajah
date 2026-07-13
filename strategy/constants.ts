// strategy/constants.ts

import { PromptVersion } from '@/prompts'

export const STRATEGY_CONSTANTS = {
  QUICK_MAX_WORDS: 250,
  DEFAULT_PROMPT_VERSION: ('v1' as PromptVersion),
  DEEP_NO_WORD_LIMIT: null
} as const

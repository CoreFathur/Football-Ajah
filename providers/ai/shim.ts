import { MatchContext } from '@/context'
import { AnalysisResult } from '@/analysis/types'

export interface AIProviderOptions {
  /** If true, the provider should return a structured JSON object when possible. */
  structured?: boolean
}

export interface AIProviderShim {
  generateFromPrompt(prompt: string, context: MatchContext, options?: AIProviderOptions): Promise<AnalysisResult | unknown>
}

export * from '@/providers/ai'

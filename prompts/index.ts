// prompts/index.ts

/**
 * PromptBuilder interface (kept minimal for compatibility). The concrete implementation
 * lives in builder.ts and conforms to this contract.
 */

import { MatchContext } from '@/context/matchContext'

export interface PromptBuilder {
  buildAnalysisPrompt(context: MatchContext, options?: { includeHistory?: boolean; mode?: string; options?: unknown }): Promise<string>
  buildFollowUpPrompt(context: MatchContext, question: string): Promise<string>
}

export * from './constants'

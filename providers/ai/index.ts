import { MatchContext } from '@/context'
import { AnalysisResult } from '@/analysis/types'

export type AIResponse = {
  /** Raw provider response (string, delta stream, or structured object) */
  raw: unknown
  /** Provider identifier (e.g., 'openai', 'gemini') */
  provider: string
  /** Version / model used (e.g., 'gpt-4o') */
  model?: string
}

export interface AIProvider {
  /**
   * Given a prompt and optional context, produce an AI response. Implementations may return streamed
   * data or a final object; orchestration is handled in AnalysisEngine.
   */
  generate(prompt: string, context?: MatchContext, options?: { stream?: boolean }): Promise<AIResponse>

  /** Optional: validate provider health / quota. */
  healthCheck?(): Promise<boolean>
}

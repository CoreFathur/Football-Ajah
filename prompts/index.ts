import { MatchContext } from '@/context'

export interface PromptBuilder {
  /** Build a final prompt (string) from a MatchContext suitable for the configured AI provider. */
  buildAnalysisPrompt(context: MatchContext, options?: { includeHistory?: boolean }): Promise<string>

  /** Build follow-up question prompts for interactive chat / clarifying questions. */
  buildFollowUpPrompt(context: MatchContext, question: string): Promise<string>
}

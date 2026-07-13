import { MatchContext } from '@/context'
import { AIProvider } from '@/providers/ai'
import { FootballProvider } from '@/providers/football'
import { ContextBuilder } from '@/context'
import { PromptBuilder } from '@/prompts'
import { JSONValidator } from '@/validators/jsonValidator'
import { AnalysisResult } from '@/analysis/types'
import { CacheProvider } from '@/cache'

export interface AnalysisEngineOptions {
  /** Football provider implementation to use */
  footballProvider: FootballProvider
  /** AI provider implementation to use */
  aiProvider: AIProvider
  /** Context builder used to construct match context */
  contextBuilder: ContextBuilder
  /** Prompt builder used to build prompts for the AI */
  promptBuilder: PromptBuilder
  /** JSON validator to validate AI output */
  jsonValidator: JSONValidator
  /** Optional cache provider */
  cacheProvider?: CacheProvider
}

export interface AnalysisEngine {
  /**
   * Run a full analysis for a match id and return a validated AnalysisResult.
   * The implementation must strictly follow the orchestration flow and never allow UI to call providers directly.
   */
  analyzeMatch(matchId: string, options?: { forceRefresh?: boolean }): Promise<AnalysisResult>

  /** Optional: fetch previously computed results / history */
  getHistory(matchId: string): Promise<AnalysisResult[]>
}

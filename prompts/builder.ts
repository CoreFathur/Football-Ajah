// prompts/builder.ts

/**
 * Production-ready PromptBuilder implementation that composes modular prompt fragments
 * into final prompts that can be sent to any AI provider. This class intentionally
 * does not call any AI APIs.
 */

import type { PromptBuilder as IPromptBuilder } from './index'
import { MatchContext } from '@/context/matchContext'
import { PromptMode, PromptVersion, DEFAULT_PROMPT_OPTIONS, PromptOptions } from './constants'
import { systemPrompt } from './system'
import { analysisPromptForMode } from './analysis'
import { renderRules } from './rules'
import { renderJsonInstructions } from './json'
import { quickFragment } from './quick'
import { liveFragment } from './live'
import { postMatchFragment } from './postmatch'
import { chatSystemFragment, chatUserFragment } from './chat'

export type PromptPayload = {
  prompt: string
  options: PromptOptions
  metadata: {
    mode: PromptMode
    version: PromptVersion
  }
}

export class DefaultPromptBuilder implements IPromptBuilder {
  version: PromptVersion

  constructor(version: PromptVersion = 'v1', private defaultOptions: PromptOptions = DEFAULT_PROMPT_OPTIONS) {
    this.version = version
  }

  /**
   * Build a full analysis prompt string based on the provided MatchContext and options.
   * The method returns a string for compatibility with the existing PromptBuilder interface,
   * but consumers can call getPromptPayload to receive options and metadata.
   */
  async buildAnalysisPrompt(context: MatchContext, opts?: { includeHistory?: boolean; mode?: PromptMode; options?: PromptOptions }): Promise<string> {
    const payload = await this.getPromptPayload(context, opts)
    return payload.prompt
  }

  /**
   * Build a rich prompt payload including options and metadata.
   */
  async getPromptPayload(context: MatchContext, opts?: { includeHistory?: boolean; mode?: PromptMode; options?: PromptOptions }): Promise<PromptPayload> {
    const mode = opts?.mode ?? 'deep'
    const includeHistory = opts?.includeHistory ?? true
    const options = { ...this.defaultOptions, ...(opts?.options ?? {}) }

    const parts: string[] = []

    // 1. System prompt (role/tone)
    parts.push(systemPrompt(this.version))

    // 2. Mode-specific analysis prompt
    parts.push(analysisPromptForMode(mode))

    // 3. Additional short fragments for modes
    if (mode === 'quick') parts.push(quickFragment())
    if (mode === 'live') parts.push(liveFragment())
    if (mode === 'postmatch') parts.push(postMatchFragment())

    // 4. Rules (incl. JSON strictness)
    parts.push(renderRules(true))

    // 5. JSON output instructions
    parts.push(renderJsonInstructions())

    // 6. Inject match context as a structured block (serialized but compact)
    parts.push(this.renderContextBlock(context, includeHistory))

    // 7. Optional: user question or instruction placeholder will be appended by caller

    const prompt = parts.join('\n\n')

    return {
      prompt,
      options,
      metadata: { mode, version: this.version }
    }
  }

  /**
   * For follow-up chat-like prompts
   */
  async buildFollowUpPrompt(context: MatchContext, question: string): Promise<string> {
    const base = await this.getPromptPayload(context, { includeHistory: true, mode: 'deep' })
    const chatHeader = chatSystemFragment()
    const userQ = chatUserFragment(question)
    return [chatHeader, base.prompt, userQ].join('\n\n')
  }

  /**
   * Serialize the MatchContext into a compact, annotated block. This is intentionally
   * human-readable JSON — providers may prefer different representations but the
   * ContextBuilder / Normalizer are responsible for ensuring the context is complete.
   */
  private renderContextBlock(context: MatchContext, includeHistory = true): string {
    // Avoid extremely large payloads: pick the key fields and attach summary placeholders.
    const safeContext: Partial<MatchContext> = {
      match: context.match,
      competition: context.competition,
      teams: context.teams,
      standings: context.standings,
      recentForm: context.recentForm,
      statistics: context.statistics,
      lineups: context.lineups,
      injuries: context.injuries,
      timeline: context.timeline ? context.timeline.slice(-50) : undefined,
      playerRatings: context.playerRatings,
      referee: context.referee,
      venue: context.venue,
      weather: context.weather,
      analysisHistory: includeHistory ? context.analysisHistory : undefined
    }

    return `Match Context (JSON):\n${JSON.stringify(safeContext, null, 2)}`
  }
}

export const createDefaultPromptBuilder = (version: PromptVersion = 'v1') => new DefaultPromptBuilder(version)

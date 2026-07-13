// prompts/builder.ts

/**
 * Strategy-driven PromptBuilder
 *
 * This builder accepts a StrategyDecision and constructs a final prompt using
 * the selected football modules, personality profile, trimmed match context and
 * user question. It returns the prompt payload and a debug object for inspection.
 */

import { MatchContext } from '@/context/matchContext'
import { StrategyDecision } from '@/strategy/types'
import { PersonalityProfile } from '@/personality/builder'
import { AnalysisGuideline } from '@/football/types'
import { renderRules } from './rules'
import { renderJsonInstructions } from './json'
import { systemPrompt } from './system'
import { analysisPromptForMode } from './analysis'
import { quickFragment } from './quick'
import { liveFragment } from './live'
import { postMatchFragment } from './postmatch'
import { PromptOptions } from './constants'
import { PromptPreview, buildPromptPreview, PromptDebug } from './preview'

export type PromptPayload = {
  prompt: string
  options: PromptOptions
  metadata: { mode: string; version: string }
}

export class StrategyPromptBuilder {
  private strategy: StrategyDecision
  private context: MatchContext
  private personality: PersonalityProfile
  private footballModules: AnalysisGuideline[]
  private userQuestion?: string

  constructor(params: {
    strategy: StrategyDecision
    context: MatchContext
    personality: PersonalityProfile
    footballModules: AnalysisGuideline[]
    userQuestion?: string
  }) {
    this.strategy = params.strategy
    this.context = params.context
    this.personality = params.personality
    this.footballModules = params.footballModules
    this.userQuestion = params.userQuestion
  }

  /** Build the prompt payload and debug/preview info. */
  async build(): Promise<{ payload: PromptPayload; preview: PromptPreview; debug: PromptDebug }> {
    // 1. Select modules in strategy order
    const selectedModules = this.selectModules()

    // 2. Trim context according to strategy.contextPriorityMap
    const { trimmedContext, trimmedSummary } = this.trimContext(this.context, this.strategy.contextPriorityMap)

    // 3. Compose prompt parts
    const parts: string[] = []

    // Personality injection (compact)
    parts.push(this.renderCompactPersonality(this.personality))

    // System prompt with version
    parts.push(systemPrompt(this.strategy.promptVersion))

    // Mode-specific analysis prompt
    parts.push(analysisPromptForMode(this.strategy.promptMode))

    // Inject selected football module fragments (short bullets)
    parts.push(this.renderSelectedModuleFragments(selectedModules))

    // Rules including JSON strictness
    parts.push(renderRules(true))

    // JSON instructions if JSON is expected
    if (this.strategy.responseFormat === 'json' || this.strategy.responseFormat === 'json+text') {
      parts.push(renderJsonInstructions())
    }

    // Inject trimmed context as JSON block
    parts.push(`Match Context (trimmed):\n${JSON.stringify(trimmedContext, null, 2)}`)

    // Optional: user question
    if (this.userQuestion) {
      parts.push(`User Question: ${this.userQuestion}`)
    }

    // Response length hint
    if (this.strategy.maxWords) {
      parts.push(`Please keep the human-readable summary to no more than ${this.strategy.maxWords} words.`)
    }

    const prompt = parts.join('\n\n')

    // Map prompt options (merge defaults with strategy.promptOptions)
    const options: PromptOptions = { ...(PromptOptions as any).DEFAULT_PROMPT_OPTIONS, ...(this.strategy.promptOptions ?? {}) }

    const payload: PromptPayload = {
      prompt,
      options,
      metadata: { mode: this.strategy.promptMode, version: this.strategy.promptVersion }
    }

    const preview = await buildPromptPreview(payload, this.strategy, this.personality, trimmedSummary, selectedModules, this.userQuestion)

    const debug: PromptDebug = {
      strategy: this.strategy,
      selectedModuleNames: selectedModules.map(m => m.name),
      trimmedContextKeys: Object.keys(trimmedSummary),
      personalityId: this.personality.id,
      userQuestion: this.userQuestion
    }

    return { payload, preview, debug }
  }

  /** Select only modules declared in strategy.prioritizedModules and preserve order. */
  private selectModules(): AnalysisGuideline[] {
    const moduleMap: Record<string, AnalysisGuideline> = {}
    this.footballModules.forEach(m => (moduleMap[m.name.toLowerCase()] = m))
    const selected: AnalysisGuideline[] = []
    this.strategy.prioritizedModules.forEach(name => {
      const key = name.toLowerCase()
      const mod = moduleMap[key]
      if (mod) selected.push(mod)
    })
    return selected
  }

  /**
   * Trim the MatchContext according to a priority map. Fields with 'ignore' are removed.
   * Fields with 'low' are summarized minimally. Returns trimmed context and a summary object.
   */
  private trimContext(context: MatchContext, priorities: Record<string, string>): { trimmedContext: Partial<MatchContext>; trimmedSummary: Record<string, any> } {
    const trimmed: Partial<MatchContext> = {}
    const summary: Record<string, any> = {}

    const addField = (key: keyof MatchContext, value: any, p: string) => {
      if (p === 'ignore') return
      if (p === 'high') {
        trimmed[key] = value
        summary[key as string] = { included: true, detail: 'full' }
      } else if (p === 'medium') {
        // include but maybe summarized
        if (Array.isArray(value)) {
          trimmed[key] = value.slice(-5)
          summary[key as string] = { included: true, detail: `last ${Math.min(5, value.length)}` }
        } else if (typeof value === 'object' && value !== null) {
          // shallow copy
          trimmed[key] = value
          summary[key as string] = { included: true, detail: 'shallow' }
        } else {
          trimmed[key] = value
          summary[key as string] = { included: true, detail: 'value' }
        }
      } else if (p === 'low') {
        // include minimal
        if (Array.isArray(value)) {
          trimmed[key] = value.length ? [value[value.length - 1]] : []
          summary[key as string] = { included: true, detail: 'last 1' }
        } else if (typeof value === 'object' && value !== null) {
          trimmed[key] = { summary: Object.keys(value).slice(0, 3) }
          summary[key as string] = { included: true, detail: 'keys' }
        } else {
          trimmed[key] = value
          summary[key as string] = { included: true, detail: 'value' }
        }
      }
    }

    // Iterate known keys of MatchContext and apply priorities
    const keys: (keyof MatchContext)[] = [
      'match',
      'competition',
      'teams',
      'standings',
      'recentForm',
      'statistics',
      'lineups',
      'injuries',
      'timeline',
      'playerRatings',
      'referee',
      'venue',
      'weather',
      'analysisHistory'
    ]

    keys.forEach(k => {
      const p = priorities[k as string] ?? 'medium'
      const v = (context as any)[k]
      if (v === undefined || v === null) return
      addField(k, v, p)
    })

    return { trimmedContext: trimmed, trimmedSummary: summary }
  }

  /** Render short module fragments (bulleted) */
  private renderSelectedModuleFragments(modules: AnalysisGuideline[]): string {
    if (!modules.length) return ''
    const fragments = modules.map(m => `- ${m.name}: ${m.description}\n  Consider: ${m.factors.slice(0, 5).join('; ')}`)
    return `Relevant Analysis Modules:\n${fragments.join('\n\n')}`
  }

  /** Render a compact personality block (do not dump full examples) */
  private renderCompactPersonality(profile: PersonalityProfile): string {
    const lines: string[] = []
    lines.push(`Personality: ${profile.name} (id: ${profile.id})`)
    lines.push(`Tone: ${profile.tone.join(', ')}`)
    lines.push(`Style: ${profile.styleGuidance.split('\n')[0]}`)
    lines.push(`Confidence style: Use preferred phrases like: ${profile.confidence.preferred.slice(0, 3).join(', ')}`)
    lines.push(`Forbidden tokens: ${profile.forbidden.slice(0, 6).join(', ')}${profile.forbidden.length > 6 ? '...' : ''}`)
    return lines.join('\n')
  }
}

export const createStrategyPromptBuilder = (params: ConstructorParameters<typeof StrategyPromptBuilder>[0]) =>
  new StrategyPromptBuilder(params)

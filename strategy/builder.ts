// strategy/builder.ts

import { MatchContext } from '@/context/matchContext'
import { StrategySelectionOptions, StrategyDecision } from './types'
import { selectStrategy } from './selector'

/**
 * StrategyBuilder offers a fluent API for building or customizing strategies.
 * It uses selectStrategy as the default selector and allows overrides for
 * advanced use-cases (e.g., feature flags, experimental strategies).
 */
export class StrategyBuilder {
  private context?: MatchContext
  private options?: StrategySelectionOptions
  private overrides?: Partial<StrategyDecision>

  withContext(context: MatchContext) {
    this.context = context
    return this
  }

  withOptions(opts: StrategySelectionOptions) {
    this.options = opts
    return this
  }

  withOverrides(overrides: Partial<StrategyDecision>) {
    this.overrides = overrides
    return this
  }

  build(): StrategyDecision {
    if (!this.context) throw new Error('StrategyBuilder: context is required')
    const base = selectStrategy(this.context, this.options)
    if (!this.overrides) return base
    // Shallow merge of overrides
    const merged: StrategyDecision = { ...base, ...this.overrides }
    return merged
  }
}

export const createStrategy = (context: MatchContext, opts?: StrategySelectionOptions, overrides?: Partial<StrategyDecision>) => {
  return new StrategyBuilder().withContext(context).withOptions(opts ?? {}).withOverrides(overrides ?? {}).build()
}

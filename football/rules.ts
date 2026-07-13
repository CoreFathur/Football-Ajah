import { AnalysisGuideline } from './types'

export const RULES: string[] = [
  'Always prefer primary sources (confirmed lineups, official injury reports, match timeline) over social or speculative reports.',
  'Surface uncertainty explicitly — every conclusion must be accompanied by confidence rationale.',
  'When information is missing, ask a clarifying question and avoid inventing missing data.',
  'Keep tactical reasoning tied to observable signals (formation, substitutions, heatmaps, ball progression events).'
]

export const renderRulesBlock = (): string => {
  return RULES.map((r, i) => `${i + 1}. ${r}`).join('\n')
}

import { AnalysisGuideline } from './types'

export const confidenceGuideline: AnalysisGuideline = {
  name: 'Analysis Confidence (qualitative)',
  description:
    'Guidance on how to assess and communicate the confidence of the analysis itself (not probabilistic output). Confidence reflects the completeness and consistency of underlying data.',
  factors: [
    'Completeness of confirmed lineups',
    'Availability of recent, consistent statistics',
    'Agreement between multiple signals (form, xG, head-to-head)',
    'Absence of disruptive unknowns (last-minute injuries, manager rotation)'
  ],
  signals: [
    'Lineup confirmation status',
    'Number of independent data sources agreeing',
    'Data freshness (live stats vs overnight reports)',
    'Presence of contradictory signals'
  ],
  increasesConfidence: [
    'Confirmed lineups and official injury reports',
    'Multiple corroborating statistical signals (form + xG + shots)',
    'Stable recent trends over an adequate sample size',
    'No late breaking news expected (e.g., travel issues)'
  ],
  decreasesConfidence: [
    'Unconfirmed or conflicting lineup/injury reports',
    'Sparse or missing statistics for one or both teams',
    'Small sample sizes dominated by outliers',
    'Event-driven uncertainty (weather forecasts changing, key player fitness tests)'
  ],
  effectOnAnalysis: [
    'Determine how strongly to word conclusions (certain vs tentative).',
    'Drive whether the analysis should recommend follow-up checks or flag low confidence explicitly.',
    'Control the granularity of recommended markets and warnings about risk.'
  ],
  recommendations: [
    'Always return an "analysis confidence" paragraph explaining the main reasons for confidence level.',
    'If confidence is low, list the missing signals and suggested actions (e.g., wait for lineup confirmation).'
  ],
  typicalImpact: 'critical'
}

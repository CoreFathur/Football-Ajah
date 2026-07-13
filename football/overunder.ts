import { AnalysisGuideline } from './types'

export const overUnderGuideline: AnalysisGuideline = {
  name: 'Over/Under (e.g., 2.5 goals)',
  description:
    'Framework for assessing whether the total number of goals will fall above or below a market threshold. Looks at tempo, attacking threat, defensive resilience, set-piece danger, and match context.',
  factors: [
    'Team-level scoring rates and defensive concession rates',
    'Recent match tempo and possession statistics',
    'Set-piece effectiveness (corners, free-kicks)',
    'Goalkeeper form and defensive stability',
    'In-game tempo (expected in live context)',
    'Manager risk profile and game importance'
  ],
  signals: [
    'Average goals per match for each team (last N matches)',
    'xG per 90 and xG conceded per 90',
    'Shots per match and high-quality chances',
    'Set-piece events per match',
    'Head-to-head goal averages'
  ],
  increasesConfidence: [
    'Consistent goals trend across multiple samples',
    'High xG and shot volume for both teams',
    'Key attacking players fit and starting',
    'Low-quality defensive performance or recent individual errors'
  ],
  decreasesConfidence: [
    'Very small sample sizes or recent anomalous matches',
    'Missing starting lineup or uncertainty about key players',
    'Environmental factors suppressing scoring (heavy rain, poor pitch)',
    'Strong incentives to play defensively (important cup ties, playoff scenarios)'
  ],
  effectOnAnalysis: [
    'Shapes recommendations for over/under markets and influences summary commentary on match pace.',
    'Works with BTTS and Winner modules to form a cohesive narrative.'
  ],
  recommendations: [
    'Include separate analysis for first-half and full-match over/under when appropriate.',
    'Highlight set-piece threats or lack thereof as modifiers for over/under expectations.'
  ],
  typicalImpact: 'moderate'
}

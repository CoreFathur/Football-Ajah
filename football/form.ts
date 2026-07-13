import { AnalysisGuideline } from './types'

export const formGuideline: AnalysisGuideline = {
  name: 'Recent Form',
  description:
    'How to interpret recent results and form for both teams, including context such as opponent strength and home/away splits.',
  factors: [
    'Results over multiple horizons (last 5, 10, 20 matches)',
    'Quality of recent opponents',
    'Home vs away performance differences',
    'Fixture congestion and travel
  '],
  signals: [
    'Win/draw/loss sequences',
    'Goal differences in recent matches',
    'xG over recent periods and variance',
    'Performance against similarly ranked opponents'
  ],
  increasesConfidence: [
    'Form trends that persist across multiple sample sizes',
    'Form supported by underlying metrics (xG, shot quality)',
    'Consistent home/away patterns'
  ],
  decreasesConfidence: [
    'Short-term streaks driven by outliers',
    'Form against much weaker/stronger opponents only',
    'Squad rotation making past matches less comparable'
  ],
  effectOnAnalysis: [
    'Form influences expected match dynamics and helps explain why a team may over/underperform relative to raw ratings.',
    'Use form to contextualize recent tactical effectiveness and psychological momentum.'
  ],
  recommendations: [
    'Always present multiple time-horizon views of form (5/10/20) rather than a single lookback.',
    'Normalize form metrics by opponent strength when possible.'
  ],
  typicalImpact: 'major'
}

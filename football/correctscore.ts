import { AnalysisGuideline } from './types'

export const correctScoreGuideline: AnalysisGuideline = {
  name: 'Correct Score',
  description:
    'Guidance for forming plausible final scorelines. Focuses on attacking/defensive balance, recent scoring patterns, and the match narrative (momentum, red cards, substitutions).',
  factors: [
    'Attacking strength vs defensive strength',
    'Typical match tempo (high/low scoring environments)',
    'Historical head-to-head score distributions',
    'Impact of substitutions and bench quality',
    'In-game momentum and critical events (penalties, red cards)'
  ],
  signals: [
    'Goals scored/conceded distributions across recent matches',
    'xG distribution by minute (shows likelihood of late goals)',
    'Frequency of late goals or comebacks',
    'Fixture congestion or fatigue indicators'
  ],
  increasesConfidence: [
    'Stable scoring patterns that replicate across opponents',
    'Clear tactical instructions (e.g., team consistently concedes to counterattackers)',
    'Robust dataset for head-to-head outcomes'
  ],
  decreasesConfidence: [
    'Random high-variance matches (e.g., cup blowouts)',
    'Major in-game disruption (e.g., early red card) is unpredictable',
    'Insufficient or conflicting data about squad selection'
  ],
  effectOnAnalysis: [
    'Used to populate plausible specific scorelines section in the analysis; include the rationale for each proposed scoreline.',
    'Prefer 1-2 short explanations tying the scoreline to tactical and statistical signals.'
  ],
  recommendations: [
    'Present a small set (3-5) of plausible scorelines with brief rationales and confidence tiers.',
    'Avoid presenting precise long-tail score predictions without clear supporting signals.'
  ],
  typicalImpact: 'minor'
}

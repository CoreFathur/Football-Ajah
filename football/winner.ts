import { AnalysisGuideline } from './types'

export const winnerGuideline: AnalysisGuideline = {
  name: 'Winner',
  description:
    'Guidance for qualitative analysis of which team is most likely to win. Focuses on squad quality, tactical matchups, and match-specific signals rather than producing numeric probabilities.',
  factors: [
    'Squad quality (player talent, depth, form)',
    'Starting lineup and confirmed formations',
    'Recent form and head-to-head history',
    'Home advantage and travel fatigue',
    'Injuries and suspensions',
    'Manager tactics and recent tactical adjustments',
    'Bench depth and substitution strategy',
    'Psychological momentum and recent key events'
  ],
  signals: [
    'ELO / rating differentials, if available',
    'Confirmed lineup strength vs expected lineup',
    'Key player on/off status',
    'Recent results (last N matches)',
    'Head-to-head scorelines and tactical matchups',
    'Possession, xG, shots on target in recent fixtures'
  ],
  increasesConfidence: [
    'Both starting lineups confirmed',
    'Multiple data sources corroborate team strength differentials',
    'Stable recent form in a sufficiently large sample (eg. 5+ matches)',
    'Clear tactical mismatch (e.g., strong aerial team vs weak aerial defence)'
  ],
  decreasesConfidence: [
    'Late/unconfirmed lineup changes',
    'Conflicting reports about player availability',
    'Single-match anomalies not supported by broader trends',
    'Insufficient statistics for either team'
  ],
  effectOnAnalysis: [
    'Primary determinant of the predicted winner narrative and suggested matchplans.',
    'Drives recommended markets to investigate (outright, first-half winner).',
    'Modulates tactical advice — whether a team should press high, sit deep, or target specific matchups.'
  ],
  recommendations: [
    'Always list the top 3 reasons for preferring one side over the other and cite the signals used.',
    'If confidence is low, explicitly state missing signals and recommended follow-ups.'
  ],
  typicalImpact: 'major'
}

import { AnalysisGuideline } from './types'

export const setpiecesGuideline: AnalysisGuideline = {
  name: 'Set-Pieces',
  description:
    'Analysis of set-piece threat and vulnerability: corners, free-kicks, penalties and how teams structure defensive marking.',
  factors: [
    'Number and quality of set-piece deliveries',
    'Aerial dominance and target attackers',
    'Defensive organization on set pieces (zonal vs man)',
    'Recent set-piece goals conceded/scored'
  ],
  signals: [
    'Set-piece goals in recent matches',
    'Corner and free-kick frequency',
    'Tall/physical attackers in the lineup',
    'Goalkeeper command of area (claims, punches)'
  ],
  increasesConfidence: [
    'Consistent high frequency of set-piece goals',
    'Clear patterns of delivery and target players',
    'Video or event evidence of habitual set-play routines'
  ],
  decreasesConfidence: [
    'Sparse set-piece event data',
    'Teams that do not emphasize wide play or crossing',
    'Significant lineup changes that affect aerial threat'
  ],
  effectOnAnalysis: [
    'Set-pieces can increase expected chance of goals even in low-open-play environments.',
    'Important modifier for correct score and over/under assessments.',
    'Should be highlighted when a single delivery player or tall attacker is present.'
  ],
  recommendations: [
    'Call out set-piece specialists and any blocking or marking concerns.',
    'For live analysis, flag set-piece events as high-value moments that can shift probability.'
  ],
  typicalImpact: 'moderate'
}

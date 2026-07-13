import { AnalysisGuideline } from './types'

export const refereeGuideline: AnalysisGuideline = {
  name: 'Referee Influence',
  description:
    'How referee tendencies and style can shape the match: card frequency, penalty propensity, allowing physicality, and stoppage time characteristics.',
  factors: [
    'Card/penalty statistics for the referee',
    'Tendency to allow physical challenges vs quick fouls',
    'Stoppage time length patterns',
    'VAR intervention frequency and outcomes'
  ],
  signals: [
    'Referee historical stats (cards per game, penalties awarded)',
    'Recent controversial decisions and VAR patterns',
    'Teams with poor discipline under this referee'
  ],
  increasesConfidence: [
    'Consistent referee stats across seasons',
    'Clear referee-profile alignment with likely match dynamics',
    'VAR usage that historically suppresses/refines certain match events'
  ],
  decreasesConfidence: [
    'Little data about the referee (lower leagues or new referees)',
    'Context-dependent variations (derbies have different dynamics)',
    'Rule changes or competition-specific referee behavior'
  ],
  effectOnAnalysis: [
    'Referees who award many cards/penalties increase the chance of game-altering events (penalties, red cards).',
    'A lenient referee may allow a more physical contest, lowering fluid attacking play and potentially affecting over/under.'
  ],
  recommendations: [
    'Call out referees when their style materially changes expected risk (e.g., high-penalty referees).',
    'For live analysis, track early ref decisions as they often set the tone.'
  ],
  typicalImpact: 'minor'
}

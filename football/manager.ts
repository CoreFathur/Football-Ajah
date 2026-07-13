import { AnalysisGuideline } from './types'

export const managerGuideline: AnalysisGuideline = {
  name: 'Manager / Coach Influence',
  description:
    'Assessing managerial tendencies, tactical flexibility, and impact decisions (substitutions, formation changes) have on match outcomes.',
  factors: [
    'Preferred tactical systems and adaptability',
    'Substitution patterns and timing',
    'Historical performance in similar fixtures',
    'Motivational ability and man-management
  '],
  signals: [
    'Patterns of formation changes mid-game',
    'Probable substitution lists and bench usage',
    'Manager tenure and recent public statements',
    'In-game reaction to conceding or losing control'
  ],
  increasesConfidence: [
    'Repeated tactical patterns with measurable effects',
    'Well-documented substitution success or failure rates',
    'Strong match preparation evidence (scouting patterns)'
  ],
  decreasesConfidence: [
    'Little historical data for the manager (new appointment)',
    'Highly experimental tactical setups without precedent',
    'Manager distraction (suspensions, off-field issues)'
  ],
  effectOnAnalysis: [
    'Manager tendencies inform likely in-game adjustments and thus influence live predictions.',
    'Managerial caution or aggression alters expected risk profiles and therefore markets.'
  ],
  recommendations: [
    'When manager is pivotal to the narrative, include short historical examples of similar decisions and outcomes.',
    'For live use, maintain a substitution and tactical-change watchlist to update probabilities quickly.'
  ],
  typicalImpact: 'moderate'
}

import { AnalysisGuideline } from './types'

export const psychologyGuideline: AnalysisGuideline = {
  name: 'Psychology',
  description:
    'How psychological factors — motivation, confidence, pressure — affect performance. This module focuses on non-physical signals that influence decision-making and risk appetite.',
  factors: [
    'Motivation (title race, relegation, cup importance)',
    'Recent controversies or morale issues',
    'Manager-player relationships and public statements',
    'Historical performance under pressure (e.g., penalties, comebacks)'
  ],
  signals: [
    'Manager and player quotes',
    'Unexplained recent dips or surges in performance',
    'Disciplinary records and visible frustration (cards, confrontations)',
    'Importance of the match in season context'
  ],
  increasesConfidence: [
    'Multiple corroborating narrative signals (press, interviews, performance)',
    'Historical patterns under similar psychological pressure',
    'Consistent motivation differences (rest vs cup priorities)'
  ],
  decreasesConfidence: [
    'Speculative social media narratives without corroboration',
    'Single anecdotal quotes taken out of context',
    'Difficulty in quantifying psychological state precisely'
  ],
  effectOnAnalysis: [
    'Modifies tactical risk advice (e.g., conservative vs ambitious plans).',
    'Used to explain anomalies where raw metrics do not align with outcomes.',
    'Feeds into confidence assessment as a qualitative modifier.'
  ],
  recommendations: [
    'When citing psychology, reference concrete evidence (e.g., quote, behavior, fixture importance).',
    'Avoid strong claims based on single anecdotal inputs.'
  ],
  typicalImpact: 'minor'
}

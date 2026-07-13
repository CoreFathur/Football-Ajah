import { AnalysisGuideline } from './types'

export const scheduleGuideline: AnalysisGuideline = {
  name: 'Schedule & Fixture Context',
  description:
    'How timing, fixture congestion, travel, and match importance affect selection, fatigue, and performance.',
  factors: [
    'Days since last match and minutes played by key players',
    'Travel distance and recovery conditions',
    'Competition priority (league vs cup vs friendly)',
    'Fixture congestion (number of matches in a short window)'
  ],
  signals: [
    'Minutes played by first-team players in previous matches',
    'Rotation patterns (different XI in cup games)',
    'Public statements about squad rotation',
    'Travel itineraries if available'
  ],
  increasesConfidence: [
    'Confirmed rotation policies and public coach statements',
    'Clear fatigue indicators (loss of intensity, late fatigue goals)',
    'Reduced training load reports prior to match'
  ],
  decreasesConfidence: [
    'Lack of transparency about rotation plans',
    'Sudden fixture rescheduling',
    'Incomplete minutes-played data'
  ],
  effectOnAnalysis: [
    'Heavy schedules lower expected physical capacity and increase the value of bench depth.',
    'Fixture priority determines manager selection and risk appetite (e.g., rest players in less-prioritized matches).'
  ],
  recommendations: [
    'When schedule is tight, highlight players at risk of fatigue and recommend conservative expectations.',
    'Use minutes-played and travel data to modify stamina-related recommendations.'
  ],
  typicalImpact: 'moderate'
}

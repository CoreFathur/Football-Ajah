import { AnalysisGuideline } from './types'

export const weatherGuideline: AnalysisGuideline = {
  name: 'Weather & Pitch Conditions',
  description:
    'How weather and pitch quality affect tactical options, expected tempo, and scoring likelihood.',
  factors: [
    'Rain, wind strength/direction, and temperature',
    'Pitch quality (grass length, drainage, artificial surface)',
    'Visibility (fog) and extreme conditions',
    'Travel disruption due to weather'
  ],
  signals: [
    'Weather forecast and live weather data',
    'Historical match outcomes in similar conditions',
    'Player quotes about pitch or conditions',
    'In-game adjustments (reduced width, slower tempo)'
  ],
  increasesConfidence: [
    'Official weather data matching expected effects (e.g., heavy rain -> lower scoring)',
    'Documented team struggles in specific weather in recent history'
  ],
  decreasesConfidence: [
    'Uncertain or rapidly changing forecasts',
    'Limited historical samples for rare conditions',
    'Teams accustomed to a wide variety of conditions (less sensitivity)'
  ],
  effectOnAnalysis: [
    'Bad weather reduces expected technical play and can lower scoring expectations, impacting BTTS and over/under.',
    'Wind or wet surfaces may bias towards set-piece and aerial play, adjusting correct score expectations.'
  ],
  recommendations: [
    'If weather is expected to change during the match, present separate early/late match expectations.',
    'Flag weather as a confidence modifier and state the likely directional effect on scoring.'
  ],
  typicalImpact: 'minor'
}

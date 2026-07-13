import { AnalysisGuideline } from './types'

export const injuryGuideline: AnalysisGuideline = {
  name: 'Injury Impact',
  description:
    'Guidance on how injuries and suspensions affect team performance, tactics, and confidence. Focus on the role of missing players and depth replacement quality.',
  factors: [
    'Position(s) affected and importance of injured player(s)',
    'Availability of adequate replacements (bench quality)',
    'Timing of the injury (pre-match vs in-match)',
    'Type of injury (long-term absence vs short-term fitness concern)'
  ],
  signals: [
    'Official injury reports and medical updates',
    'Coach/manager statements about fitness',
    'Historical performance without the injured player',
    'Youth or reserve players replacing first-team regulars'
  ],
  increasesConfidence: [
    'Official confirmations from club/competition',
    'Clear historical performance delta when player is absent',
    'Strong replacement options with similar tactical fit'
  ],
  decreasesConfidence: [
    'Unverified social media reports',
    'Fitness doubts announced but without clarity on availability',
    'Ambiguous or mixed signals from the club about the player'
  ],
  effectOnAnalysis: [
    'Directly affects winner, BTTS and tactical modules (e.g., missing a key striker lowers expected goals).',
    'Changes substitution and bench strategy expectations.',
    'Should be explicitly cited as a confidence modifier.'
  ],
  recommendations: [
    'Flag any last-minute fitness tests and list alternative lineups to consider.',
    'If injury data is uncertain, recommend waiting until a confirmed squad list is available.'
  ],
  typicalImpact: 'major'
}

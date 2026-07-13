import { AnalysisGuideline } from './types'

export const momentumGuideline: AnalysisGuideline = {
  name: 'Momentum (Psychological & Match Momentum)',
  description:
    'Consider short-term psychological momentum within the match and longer-term momentum across fixtures; momentum affects risk-taking, perception and decision making in-game.',
  factors: [
    'Recent match-turning events (goals, red cards, VAR decisions)',
    'Longer-term narrative (winning streaks, survival runs)',
    'Crowd influence and home support',
    'Management stability/controversy'
  ],
  signals: [
    'Sequence of chance creation and conceded chances',
    'Timing of goals (early vs late)',
    'Pace of play and desperation indicators (increased long balls, high press attempts)',
    'Manager quotes and visible sideline behaviour'
  ],
  increasesConfidence: [
    'Clear turning points corroborated by event timelines and statistics',
    'Momentum sustained across sufficient time and reflected in multiple metrics',
    'Strong fan influence or clear managerial impetus'
  ],
  decreasesConfidence: [
    'Isolated events without follow-up changes in statistics',
    'Subjective signals without quantifiable backing',
    'Over-attribution of single events to long-term outcomes'
  ],
  effectOnAnalysis: [
    'Momentum shapes immediate tactical advice and risk tolerance in-game.',
    'Long-term momentum contributes to psychological readiness and can explain under/over-performances.'
  ],
  recommendations: [
    'Distinguish between match-level (in-game) momentum and season-level psychological momentum.',
    'Use timeline windows (e.g., last 10 minutes) to measure immediate momentum for live analysis.'
  ],
  typicalImpact: 'moderate'
}

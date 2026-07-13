import { AnalysisGuideline } from './types'

export const lineupGuideline: AnalysisGuideline = {
  name: 'Lineup Analysis',
  description:
    'Assessing confirmed starting lineups and bench composition to infer tactical intent, strengths, weaknesses, and likely in-game adjustments.',
  factors: [
    'Confirmed starters and their typical positions',
    'Formation shape and nominal roles (e.g., inverted wingbacks)',
    'Bench strength and specialist substitutes',
    'Rotation policy and recent minutes workload'
  ],
  signals: [
    'Official starting XI release',
    'Player positions relative to their club/team roles',
    'Notable absences and promoted youth players',
    'Recent usage patterns (who is commonly substituted at what time)'
  ],
  increasesConfidence: [
    'Official lineup posted by team or competition',
    'Lineup matches expected tactical approach for similar contexts',
    'Bench includes experienced substitutes for known weaknesses'
  ],
  decreasesConfidence: [
    'Late changes after kickoff or last-minute fitness uncertainty',
    'Unclear player positions (player moved into a new role without prior evidence)',
    'Experimental lineups without historical context'
  ],
  effectOnAnalysis: [
    'Directly shapes tactical recommendations and expected match tempo.',
    'Influences BTTS and over/under expectations (attack-oriented XI increases goals chances).',
    'Guides substitution impact modeling in the analysis narrative.'
  ],
  recommendations: [
    'When lineups deviate from the norm, show a short comparison between expected vs actual lineup and explain tactical implications.',
    'For low-confidence lineups, recommend re-checking at kickoff or after 15 minutes for confirmation.'
  ],
  typicalImpact: 'critical'
}

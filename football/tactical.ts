import { AnalysisGuideline } from './types'

export const tacticalGuideline: AnalysisGuideline = {
  name: 'Tactical Analysis',
  description:
    'Framework for analyzing tactical setups, formation matchups, in-game adjustments, and how space is created or closed by teams.',
  factors: [
    'Starting formation and positional roles',
    'Pressing intensity and defensive block height',
    'Width and use of fullbacks/wingers',
    'Central overloads and midfield control',
    'Transition speed (attack-to-defence and vice versa)',
    'Set-piece routines and marking schemes'
  ],
  signals: [
    'Heatmaps and average player positions (if available)',
    'Pass network shapes and progressive passes',
    'Pressing metrics (PPDA, pressures)',
    'Crosses, long ball frequency, and wide vs central attack ratios',
    'Substitution patterns and timing'
  ],
  increasesConfidence: [
    'High-quality tracking or event data (heatmaps, pass networks)',
    'Clear repetition of tactical patterns across matches',
    'Managerry consistently uses specific formations in similar match contexts'
  ],
  decreasesConfidence: [
    'Lack of positional or event data',
    'Frequent formation changes and experimentation by managers',
    'Insufficient match footage or ambiguous role descriptions'
  ],
  effectOnAnalysis: [
    'Provides actionable tactical recommendations (press higher, switch flank, sit deeper).',
    'Explains why certain players are focal points and how to exploit matchups.',
    'Helps interpret statistics in light of role (e.g., fewer shots but higher xG due to central chance creation).'
  ],
  recommendations: [
    'When recommending tactical changes, tie each recommendation to an observable signal (timeline event, substitution, or statistic).',
    'For live analysis, prioritize recent tactical events (substitutions, tactical shifts) in the last 10-20 minutes.'
  ],
  typicalImpact: 'major'
}

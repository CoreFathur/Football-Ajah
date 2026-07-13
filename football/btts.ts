import { AnalysisGuideline } from './types'

export const bttsGuideline: AnalysisGuideline = {
  name: 'BTTS (Both Teams To Score)',
  description:
    'Framework to evaluate the likelihood that both teams will score. Focus on attacking intent, defensive vulnerabilities, and match context that increases or lowers the chance of both teams scoring.',
  factors: [
    'Recent goals scored and conceded trends',
    'Clean sheets frequency',
    'Attacking quality (chance creation, xG)',
    'Defensive quality (errors, goals conceded under pressure)',
    'Playing style (possession vs counter-attacking)',
    'Starting lineups and presence/absence of key attackers/defenders',
    'Manager philosophy (risk-taking vs conservative)',
    'Weather and pitch conditions',
    'Competition importance (cups vs friendlies)'
  ],
  signals: [
    'Average goals for/against per match (last N games)',
    'Shots on target for/against',
    'xG for/against',
    'Number of clean sheets in last N matches',
    'Head-to-head goal patterns',
    'Recent substitutions that affect attacking/defensive balance'
  ],
  increasesConfidence: [
    'Consistent high-scoring trends for both teams',
    'Confirmed attacking lineups and full-strength attackers',
    'Defensive injuries or suspensions to key defenders or goalkeeper',
    'Tactical setups that encourage open play or overlap on flanks'
  ],
  decreasesConfidence: [
    'Missing or late lineup information',
    'Matches with unusual goal distributions (outliers) and small sample sizes',
    'Severe weather or pitch conditions known to reduce scoring',
    'Clear strategic incentives to avoid conceding, e.g., must-not-lose scenarios'
  ],
  effectOnAnalysis: [
    'Informs BTTS narrative and whether to prioritize both teams scoring markets.',
    'Feeds into recommended tactics — whether a defensive focus or pressing high is advisable.',
    'Interacts with winner analysis: a strong favourite with conservative tactics reduces BTTS likelihood.'
  ],
  recommendations: [
    'Compare team scoring and conceding rates over multiple horizons (5, 10, 20 games).',
    'Check availability of attacking/defensive pillars in starting lineups.'
  ],
  typicalImpact: 'moderate'
}

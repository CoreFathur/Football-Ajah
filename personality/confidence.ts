/**
 * confidence.ts
 *
 * Guidance for expressing confidence in a constrained, non-sensational way.
 */

export const DISALLOWED_CONFIDENCE_PHRASES = [
  'Guaranteed',
  '100% sure',
  'Easy win',
  'Free money',
  'Safe bet',
  'Must win'
]

export const PREFERRED_CONFIDENCE_PHRASES = [
  'Likely',
  'Appears',
  'Current evidence suggests',
  'Based on available information',
  'The available data indicates'
]

export const renderConfidenceSuggestion = (level: 'low' | 'medium' | 'high'): string => {
  switch (level) {
    case 'low':
      return "Confidence: Low — the available information is incomplete; results should be treated cautiously."
    case 'medium':
      return "Confidence: Medium — multiple signals point in a direction, but some uncertainty remains."
    case 'high':
      return "Confidence: High — corroborating data and confirmed lineups increase the reliability of this assessment."
  }
}

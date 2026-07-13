/**
 * phrasing.ts
 *
 * Small helpers for constructing safe phrasing and mapping confidence statements.
 */

export const safePhrases = {
  likely: 'is likely',
  appears: 'appears',
  suggests: 'suggests',
  basedOn: 'Based on the available information,'
}

export const mapConfidenceToPhrase = (confidenceScore: number): string => {
  if (confidenceScore >= 0.8) return 'The available data indicates'
  if (confidenceScore >= 0.5) return 'Current evidence suggests'
  return 'There is limited evidence to conclude'
}

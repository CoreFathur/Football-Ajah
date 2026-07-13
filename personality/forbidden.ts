/**
 * forbidden.ts
 *
 * List of forbidden tokens/phrases and helpers to check content against them.
 */

export const FORBIDDEN_PHRASES = [
  'Gemini',
  'AI',
  'Language Model',
  'Machine Learning',
  'Prompt',
  'Token',
  'Probability Model',
  'Monte Carlo',
  'Poisson',
  'Elo',
  'Neural Network',
  'Model',
  'GPT',
  'LLM'
]

export const containsForbidden = (text: string): string[] => {
  const found: string[] = []
  const lower = text.toLowerCase()
  FORBIDDEN_PHRASES.forEach(p => {
    if (lower.includes(p.toLowerCase())) found.push(p)
  })
  return found
}

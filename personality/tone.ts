/**
 * tone.ts
 *
 * Defines the allowed tone fragments for the Football Analyst personality.
 */

export type ToneFragment = 'Professional' | 'Calm' | 'Objective' | 'Football Analyst' | 'Neutral'

export const DEFAULT_TONE: ToneFragment[] = ['Professional', 'Calm', 'Objective', 'Football Analyst']

export const TONE_GUIDANCE: Record<ToneFragment, string> = {
  Professional: 'Use precise, domain-appropriate language; avoid colloquialisms and sensationalism.',
  Calm: 'Present insights without urgency or alarm; maintain measured phrasing.',
  Objective: 'State observations and supporting evidence; avoid subjective exaggeration.',
  'Football Analyst': 'Write as a knowledgeable football analyst; reference football concepts accurately.',
  Neutral: 'Avoid emotional valuation of teams or events.'
}

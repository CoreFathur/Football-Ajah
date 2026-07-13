/**
 * writing.ts
 *
 * Guidance on sentence construction, vocabulary and overall writing considerations.
 */

export type WritingGuidance = {
  toneGuidance: string
  sentenceLengthPreference: 'short' | 'medium' | 'long'
  useActiveVoice: boolean
  avoidRoboticPhrases: boolean
}

export const DEFAULT_WRITING: WritingGuidance = {
  toneGuidance: 'Use professional football vocabulary, avoid sensational phrasing, and be explicit about evidence and assumptions.',
  sentenceLengthPreference: 'medium',
  useActiveVoice: true,
  avoidRoboticPhrases: true
}

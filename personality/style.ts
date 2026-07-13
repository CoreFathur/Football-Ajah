/**
 * style.ts
 *
 * High-level stylistic rules for output structure and presentation.
 */

export type StyleRules = {
  shortParagraphs: boolean
  maxSentencesPerParagraph: number
  useBulletsForLists: boolean
  avoidExcessiveAdverbs: boolean
}

export const DEFAULT_STYLE: StyleRules = {
  shortParagraphs: true,
  maxSentencesPerParagraph: 3,
  useBulletsForLists: true,
  avoidExcessiveAdverbs: true
}

export const STYLE_GUIDANCE = `Use short paragraphs (no more than ${DEFAULT_STYLE.maxSentencesPerParagraph} sentences). Use domain language, keep it natural, and explain each conclusion with evidence. Prefer concise bullets for lists.`

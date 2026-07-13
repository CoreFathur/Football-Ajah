// strategy/rules.ts

/**
 * High-level selection rules used by the Strategy Engine. These are textual
 * guidelines intended for maintainers and for inclusion in the system docs.
 */

export const SELECTION_RULES: string[] = [
  'If the match is LIVE, prioritize time-sensitive modules (timeline, momentum, statistics) and use the live prompt mode.',
  'If the match is FINISHED (post-match), prioritize turning points, managerial decisions and player ratings; use postmatch mode.',
  'If the match is SCHEDULED (prematch), prioritize form, lineups, manager, injuries and standings.',
  'Quick mode overrides other depth considerations and should return concise text (max words defined by QUICK_MAX_WORDS).',
  'Deep mode requests full analysis using most modules and no strict word limit.',
  'Chat mode should only answer the user question, reuse previous context, and preserve prior analysis when possible.'
]

export const renderSelectionRules = (): string => SELECTION_RULES.map((r, i) => `${i + 1}. ${r}`).join('\n')

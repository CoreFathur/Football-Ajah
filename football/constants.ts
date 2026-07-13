export const FOOTBALL_CONSTANTS = {
  MAX_CONTEXT_TIMELINE_EVENTS: 100,
  DEFAULT_RECENT_FORM_LIMIT: 5
} as const

export type FootballConstants = typeof FOOTBALL_CONSTANTS

// prompts/analysis.ts

/**
 * Analysis prompt fragments used for different prompt modes (quick, deep, live, postmatch).
 * These fragments explain the scope and expected depth of analysis.
 */

import { PromptMode } from './constants'

export const analysisPromptForMode = (mode: PromptMode): string => {
  switch (mode) {
    case 'quick':
      return `You are asked to provide a quick analysis focusing only on the match outcome (home/draw/away), BTTS (both teams to score), and an over/under summary. Keep responses short and provide a concise confidence score.`
    case 'deep':
      return `You are asked to perform a deep analysis. Provide tactical insights, player-level assessments, formation strengths/weaknesses, how recent form and standings influenced the likely outcome, and a detailed summary. Offer structured reasoning and state any assumptions.`
    case 'live':
      return `You are analyzing a live match. Take into account the current match time, events on the timeline, substitutions, cards, and live statistics. Adapt predictions based on recent events and provide concise tactical suggestions for the coach.`
    case 'postmatch':
      return `You are performing a post-match analysis. Explain why the match ended as it did, tying key events, player performances, and tactical choices to the final outcome. Reflect on turning points and lessons.`
    default:
      return `Provide an analysis appropriate to the requested mode.`
  }
}

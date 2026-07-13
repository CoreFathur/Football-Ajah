import { MatchContext } from '@/context'

export interface Normalizer {
  /** Convert raw provider payload into canonical MatchContext pieces. */
  normalizeMatch(raw: unknown): Promise<MatchContext>

  normalizeStandings(raw: unknown): Promise<MatchContext['standings']>

  normalizeLineups(raw: unknown): Promise<MatchContext['lineups']>

  normalizeTimeline(raw: unknown): Promise<MatchContext['timeline']>
}

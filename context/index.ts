import { MatchContext } from '@/context'

export interface ContextBuilder {
  /**
   * Build a comprehensive MatchContext for the given match id. The context builder is responsible
   * for orchestrating calls to FootballProvider(s), normalizers, cache and enrichment sources.
   */
  build(matchId: string): Promise<MatchContext>
}

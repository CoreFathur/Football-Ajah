import { Match, Competition, Team } from '@/types'
import { MatchContext } from '@/context'

export interface FootballProvider {
  /** Fetch a list of matches. Accept provider-specific filters in the options. */
  fetchMatches(options?: { date?: string; competitionId?: string }): Promise<Match[]>

  /** Fetch a single match by id. */
  fetchMatchById(matchId: string): Promise<Match | null>

  /** Fetch competition metadata. */
  fetchCompetition(competitionId: string): Promise<Competition | null>

  /** Fetch team metadata. */
  fetchTeam(teamId: string): Promise<Team | null>

  /** Fetch standings for a competition. */
  fetchStandings(competitionId: string): Promise<unknown>

  /** Fetch recent form for a team (e.g., last N results). */
  fetchRecentForm(teamId: string, limit?: number): Promise<unknown>

  /** Fetch lineups for a match. */
  fetchLineups(matchId: string): Promise<unknown>

  /** Fetch injuries for a match or team. */
  fetchInjuries(matchId?: string, teamId?: string): Promise<unknown>

  /** Fetch timeline/events for a match. */
  fetchTimeline(matchId: string): Promise<unknown>

  /** Fetch player ratings (if available). */
  fetchPlayerRatings(matchId: string): Promise<unknown>

  /** Fetch referee information for a match. */
  fetchReferee(matchId: string): Promise<unknown>

  /** Fetch venue data. */
  fetchVenue(venueId: string): Promise<unknown>

  /** Fetch weather information for a match/venue. */
  fetchWeather(matchId: string): Promise<unknown>

  /** Optionally return a normalized MatchContext directly if the provider supports it. */
  fetchMatchContext?(matchId: string): Promise<MatchContext | null>
}

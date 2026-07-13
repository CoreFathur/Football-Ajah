import { getJson } from './FootballParser'
import { FootballCache } from './FootballCache'
import { FootballNotFoundError, FootballProviderError } from './FootballError'

const cache = new FootballCache()

export class FootballDataProvider {
  private cache = cache

  async getMatches(): Promise<any[] | null> {
    const key = 'matches:all'
    const cached = this.cache.get<any[]>(key)
    if (cached) return cached
    const data = await getJson('/matches')
    if (!data) return null
    this.cache.set(key, data.matches ?? data)
    return data.matches ?? data
  }

  async getMatch(matchId: string): Promise<any | null> {
    const key = `match:${matchId}`
    const cached = this.cache.get<any>(key)
    if (cached) return cached
    const data = await getJson(`/matches/${matchId}`)
    if (!data) return null
    // football-data returns { match: {...} }
    const match = data.match ?? data
    this.cache.set(key, match)
    return match
  }

  async getCompetition(id: string): Promise<any | null> {
    const key = `competition:${id}`
    const cached = this.cache.get<any>(key)
    if (cached) return cached
    const data = await getJson(`/competitions/${id}`)
    if (!data) return null
    this.cache.set(key, data)
    return data
  }

  async getTeam(id: string): Promise<any | null> {
    const key = `team:${id}`
    const cached = this.cache.get<any>(key)
    if (cached) return cached
    const data = await getJson(`/teams/${id}`)
    if (!data) return null
    this.cache.set(key, data)
    return data
  }

  async getStandings(competitionId: string): Promise<any | null> {
    const key = `standings:${competitionId}`
    const cached = this.cache.get<any>(key)
    if (cached) return cached
    const data = await getJson(`/competitions/${competitionId}/standings`)
    if (!data) return null
    this.cache.set(key, data)
    return data
  }

  // Simple health check
  async healthCheck() {
    try {
      const resp = await getJson('/competitions')
      if (!resp) return { status: 'degraded' }
      return { status: 'healthy' }
    } catch (err) {
      return { status: 'offline', error: String(err) }
    }
  }
}

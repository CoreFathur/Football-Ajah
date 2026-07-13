import { Match, Competition, Team } from '@/types'
import { AnalysisResult } from '@/analysis/types'

export type Standing = {
  position: number
  teamId: string
  teamName?: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}

export type RecentFormItem = {
  date: string
  opponent: string
  score: string
  result: 'W' | 'D' | 'L'
}

export type PlayerRating = {
  playerId: string
  name?: string
  rating?: number // e.g., 0-10 scale
  metrics?: Record<string, number>
}

export type Injury = {
  playerId: string
  name?: string
  type?: string
  status?: string
}

export type TimelineEvent = {
  minute?: number
  type: string
  teamId?: string
  playerId?: string
  description?: string
}

export type Referee = {
  id?: string
  name?: string
  nationality?: string
  statistics?: Record<string, unknown>
}

export type Venue = {
  id?: string
  name?: string
  city?: string
  capacity?: number
}

export type Weather = {
  type?: string
  temperatureC?: number
  windKph?: number
  conditions?: string
}

export type AnalysisHistoryItem = AnalysisResult

export interface MatchContext {
  match: Match
  competition?: Competition
  teams: {
    home: Team
    away: Team
  }
  standings?: {
    competitionId: string
    table: Standing[]
  }
  recentForm?: {
    home: RecentFormItem[]
    away: RecentFormItem[]
  }
  statistics?: Record<string, unknown>
  lineups?: Record<string, unknown>
  injuries?: {
    home?: Injury[]
    away?: Injury[]
  }
  timeline?: TimelineEvent[]
  playerRatings?: PlayerRating[]
  referee?: Referee
  venue?: Venue
  weather?: Weather
  analysisHistory?: AnalysisHistoryItem[]
}

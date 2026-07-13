export interface AnalysisResult {
  // Probabilities (0..1) when available
  homeWin?: { probability?: number; commentary?: string }
  draw?: { probability?: number; commentary?: string }
  awayWin?: { probability?: number; commentary?: string }

  btts?: { probability?: number; commentary?: string }
  overUnder?: { market?: string; probability?: number; commentary?: string }
  correctScore?: { predictions?: string[]; commentary?: string }

  confidence?: number // 0..1
  summary?: string
  strengths?: string[]
  weaknesses?: string[]
  risks?: string[]

  recommendedMarkets?: string[]
  questionsToAsk?: string[]

  // metadata
  version?: string
  provider?: string
  analysisTimestamp: string // ISO string
}

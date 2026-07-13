export type Impact = 'minor' | 'moderate' | 'major' | 'critical'

export interface AnalysisGuideline {
  /** Short name */
  name: string
  /** One-paragraph description of the factor/module purpose */
  description: string
  /** Concrete factors to consider (bullet list) */
  factors: string[]
  /** Observable football signals / data points to inspect */
  signals: string[]
  /** What evidence increases the analyst's confidence in conclusions */
  increasesConfidence: string[]
  /** What evidence decreases the analyst's confidence in conclusions */
  decreasesConfidence: string[]
  /** How this area should affect the final analysis (qualitative guidance) */
  effectOnAnalysis: string[]
  /** Practical recommendations for prompts / follow-up checks */
  recommendations?: string[]
  /** Typical impact level on match outcome analysis */
  typicalImpact?: Impact
}

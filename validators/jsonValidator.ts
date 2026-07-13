import { MatchContext } from '@/context'
import { AnalysisResult } from '@/analysis/types'

export interface JSONValidator {
  /**
   * Validate an arbitrary JS object against the expected AnalysisResult structure.
   * Returns a strongly-typed AnalysisResult on success or throws/returns errors on failure.
   */
  validateAnalysisResult(raw: unknown): Promise<{ valid: true; value: AnalysisResult } | { valid: false; errors: string[] }>

  /** Generic JSON schema validation helper (optional). */
  validate<T>(raw: unknown, schema?: unknown): Promise<{ valid: true; value: T } | { valid: false; errors: string[] }>
}

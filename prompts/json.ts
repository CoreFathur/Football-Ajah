// prompts/json.ts

/**
 * JSON output specification and helper generator. The PromptBuilder will include
 * the JSON instructions in the final prompt so the LLM is instructed to emit a
 * strictly-typed JSON object.
 */

import { AnalysisResult } from '@/analysis/types'

export const ANALYSIS_JSON_SCHEMA = {
  type: 'object',
  required: ['analysisTimestamp'],
  properties: {
    prediction: {
      type: 'object',
      properties: {
        homeWin: { type: 'number' },
        draw: { type: 'number' },
        awayWin: { type: 'number' }
      }
    },
    confidence: { type: 'number' },
    summary: { type: 'string' },
    strengths: { type: 'array', items: { type: 'string' } },
    weaknesses: { type: 'array', items: { type: 'string' } },
    risks: { type: 'array', items: { type: 'string' } },
    recommendedMarkets: { type: 'array', items: { type: 'string' } },
    questionsToAsk: { type: 'array', items: { type: 'string' } },
    analysisTimestamp: { type: 'string', format: 'date-time' },
    metadata: {
      type: 'object',
      properties: {
        provider: { type: 'string' },
        version: { type: 'string' }
      }
    }
  }
} as const

export const renderJsonInstructions = (): string => {
  return `You MUST output a single JSON object that conforms to the schema below. Do not output any plain text or explanation outside the JSON. The keys should be exactly as specified. If you cannot produce a value, use null for the field.\n\nSchema: ${JSON.stringify(ANALYSIS_JSON_SCHEMA, null, 2)}`
}

export type AnalysisJsonShape = AnalysisResult

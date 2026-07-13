// prompts/rules.ts

/**
 * Modular prompt rules. Each rule fragment is kept small and composable so the
 * PromptBuilder can include or exclude them depending on mode and version.
 */

export const RULES = {
  noHallucination: `Do not invent facts. If a requested piece of information is not available in the provided context, state that it's unavailable.`,
  explainReasoning: `When asked for reasoning, provide clear step-by-step logic and cite the context fields you used (e.g., statistics, recent_form, timeline).`,
  shortAnswersWhenRequested: `If a short response is requested, keep explanations concise and provide bullet points where appropriate.`,
  avoidGamblingLanguage: `Do not use gambling, betting, or odds language. This product is for analysis and insights only.`,
  jsonStrictness: `Respond strictly in the JSON format described below. Do not include extra prose before or after the JSON object. If you cannot produce valid JSON, return an error object matching the schema's error structure.`
}

export const renderRules = (includeJsonStrictness = true): string => {
  const base = [RULES.noHallucination, RULES.explainReasoning, RULES.avoidGamblingLanguage]
  if (includeJsonStrictness) base.push(RULES.jsonStrictness)
  return base.join('\n')
}

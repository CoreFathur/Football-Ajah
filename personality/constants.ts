export const DEFAULT_LANGUAGE = 'en'

export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de'

export const SUPPORTED_LANGUAGES: Language[] = ['en']

export const PERSONALITY_CONSTANTS = {
  toneDefault: ['Professional', 'Calm', 'Objective', 'Football Analyst'] as const,
  forbiddenExamplesToAvoid: [
    'Gemini',
    'AI',
    'Language Model',
    'Machine Learning',
    'Prompt',
    'Token',
    'Probability Model',
    'Monte Carlo',
    'Poisson',
    'Elo',
    'Neural Network'
  ] as const
}

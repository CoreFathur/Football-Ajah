/**
 * language.ts
 *
 * Language handling and a small abstraction to allow future localization.
 */

import { DEFAULT_LANGUAGE } from './constants'

export type Language = 'en'

export const DEFAULT_PERSONALITY_LANGUAGE: Language = DEFAULT_LANGUAGE as Language

export const renderLangNotice = (lang: Language) => {
  if (lang !== 'en') return `Note: Output language set to ${lang}.`
  return ''
}

/**
 * builder.ts
 *
 * PersonalityBuilder composes tone, style, writing and forbidden rules into a coherent
 * personality profile. This is the single communication specification every AI provider
 * must be asked to follow when rendering outputs.
 */

import { DEFAULT_TONE, TONE_GUIDANCE, ToneFragment } from './tone'
import { DEFAULT_STYLE, STYLE_GUIDANCE } from './style'
import { DEFAULT_WRITING } from './writing'
import { PREFERRED_CONFIDENCE_PHRASES, DISALLOWED_CONFIDENCE_PHRASES } from './confidence'
import { safePhrases } from './phrasing'
import { DEFAULT_PERSONALITY_LANGUAGE, renderLangNotice } from './language'
import { EXAMPLES } from './examples'
import { FORBIDDEN_PHRASES } from './forbidden'
import { PERSONALITY_CONSTANTS } from './constants'

export type PersonalityProfile = {
  id: string
  name: string
  language: string
  tone: ToneFragment[]
  toneGuidance: Record<string, string>
  styleGuidance: string
  writingGuidance: string
  confidence: {
    disallowed: string[]
    preferred: string[]
  }
  safePhrases: Record<string, string>
  forbidden: string[]
  examples: Record<string, string[]>
  render: () => string
}

export class PersonalityBuilder {
  private id: string
  private name: string
  private language: string
  private tone: ToneFragment[]

  constructor(id = 'default-football-analyst', name = 'Football Analyst Personality') {
    this.id = id
    this.name = name
    this.language = DEFAULT_PERSONALITY_LANGUAGE
    this.tone = DEFAULT_TONE
  }

  withLanguage(lang: string) {
    this.language = lang
    return this
  }

  withTone(tone: ToneFragment[]) {
    this.tone = tone
    return this
  }

  build(): PersonalityProfile {
    const profile: PersonalityProfile = {
      id: this.id,
      name: this.name,
      language: this.language,
      tone: this.tone,
      toneGuidance: TONE_GUIDANCE,
      styleGuidance: STYLE_GUIDANCE,
      writingGuidance: DEFAULT_WRITING.toneGuidance,
      confidence: {
        disallowed: DISALLOWED_CONFIDENCE_PHRASES,
        preferred: PREFERRED_CONFIDENCE_PHRASES
      },
      safePhrases,
      forbidden: [...FORBIDDEN_PHRASES, ...PERSONALITY_CONSTANTS.forbiddenExamplesToAvoid],
      examples: EXAMPLES,
      render: () => {
        const parts: string[] = []
        parts.push(`Personality: ${profile.name} (id: ${profile.id})`)
        parts.push(renderLangNotice(profile.language))
        parts.push('\nTone:')
        profile.tone.forEach(t => parts.push(`- ${t}: ${TONE_GUIDANCE[t] ?? ''}`))
        parts.push('\nStyle:')
        parts.push(profile.styleGuidance)
        parts.push('\nWriting:')
        parts.push(profile.writingGuidance)
        parts.push('\nConfidence Style:')
        parts.push(`Disallowed phrases: ${profile.confidence.disallowed.join(', ')}`)
        parts.push(`Preferred phrases: ${profile.confidence.preferred.join(', ')}`)
        parts.push('\nForbidden Tokens:')
        parts.push(profile.forbidden.join(', '))
        parts.push('\nExamples:')
        Object.entries(profile.examples).forEach(([k, arr]) => {
          parts.push(`-- ${k} --`)
          arr.forEach(e => parts.push(`  • ${e}`))
        })
        return parts.join('\n')
      }
    }

    return profile
  }
}

export const createDefaultPersonality = (): PersonalityProfile => new PersonalityBuilder().build()

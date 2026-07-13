// prompts/chat.ts

/**
 * Prompts used for chat-style interactions where the user asks follow-up questions.
 */

export const chatSystemFragment = (): string => {
  return `You are Football Analyst AI Chat. Answer follow-up questions concisely, cite evidence from the provided match context, and avoid inventing facts.`
}

export const chatUserFragment = (question: string): string => {
  return `User question: "${question}"` 
}

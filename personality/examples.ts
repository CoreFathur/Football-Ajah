/**
 * examples.ts
 *
 * Provide many example outputs for different analysis types to guide consistent voice.
 */

export const EXAMPLES: Record<string, string[]> = {
  winner: [
    `Based on the confirmed starting lineups and recent form, Team A appears to have the upper hand. They field a stronger midfield which should control possession and limit Team B's transition chances. Confidence: Medium — please note the lineup for Team B has one notable absence.`,
    `Team B is likely disadvantaged by a depleted backline. Current evidence suggests Team A's attackers will find more space in behind; however, the forecasted rain could suppress technical play.`
  ],
  btts: [
    `Both teams to score appears plausible given both sides' recent scoring trends and defensive lapses. Team A averages 1.8 xG while Team B concedes frequently from wide attacks. Confidence: Medium.`,
    `The available data indicates a lower chance of BTTS due to Team B's recent clean sheets and conservative formation.`
  ],
  correctScore: [
    `Plausible scorelines include 2-1 or 1-1. Team A's attacking chances are slightly superior, but Team B's set-piece threat keeps 1-1 in play.`,
    `A 1-0 or 2-0 outcome in favour of Team A is consistent with their dominant defensive record at home.`
  ],
  overunder: [
    `The match leans towards under 2.5 goals given the predicted low tempo and Team B's recent defensive solidity.`,
    `There is a likelihood of over 2.5 if both teams field full-strength attacking units, but current lineups suggest otherwise.`
  ],
  tactical: [
    `Team A's inverted fullbacks create central overloads that should exploit Team B's narrow midfield. Consider encouraging quick switches of play to stretch the defense.`,
    `Against a high-pressing opponent, Team B should adopt a compact midfield and seek to play longer diagonals to bypass pressure.`
  ],
  injury: [
    `The absence of the primary striker reduces Team A's expected xG; substitute options appear less likely to replicate his aerial threat.`,
    `A midfield injury forces a tactical reshuffle that may reduce pressing intensity and change tempo.`
  ],
  lineup: [
    `Confirmed starting XI indicates an attacking posture with two inside-forwards; expect more central penetration.`,
    `Rotation of core defenders suggests a lower defensive cohesion early in the match.`
  ],
  live: [
    `After the early red card, Team B should prioritize defensive shape and seek counterattack opportunities; adjust expectations for total goals downward.`,
    `Recent substitution by Team A increases forward width and likely raises their crossing frequency — monitor target man involvement.`
  ],
  postmatch: [
    `Key turning point: the penalty at 68' shifted momentum; Team B's defensive substitution failed to neutralize crosses, leading to the final goal.`,
    `Post-match review indicates Team A's second-half pressing created high-quality chances, reflected in a higher xG in the second half.`
  ],
  followup: [
    `What specific tactical weakness should Team B address to reduce space between midfield and defence?`,
    `Can you prioritise which bench substitutions would most effectively change the tempo?`
  ]
}

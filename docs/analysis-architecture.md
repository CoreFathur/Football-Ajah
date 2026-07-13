/**
 * Analysis Engine Architecture
 *
 * This document describes the new AI-first analysis architecture and the orchestration flow. The codebase
 * now contains strictly-typed interfaces for every layer of the pipeline. No providers are implemented here —
 * only interfaces. This ensures the UI cannot call providers directly and that any provider can be
 * swapped without touching UI code.
 *
 * Orchestration flow (single analysis request):
 *
 * UI (client) --> Server API Route --> AnalysisEngine
 *    AnalysisEngine (orchestrator):
 *      1. Use ContextBuilder to construct MatchContext (football provider calls + normalizers + cache)
 *      2. Use PromptBuilder to create a prompt from MatchContext
 *      3. Call AIProvider.generate(prompt, context)
 *      4. Use JSONValidator to validate the provider output into AnalysisResult
 *      5. Cache/persist the AnalysisResult and return to API route
 *
 * Layers and responsibilities
 * - providers/football: Adapter interfaces for football data sources (fetch matches, lineups, standings etc.)
 * - context: MatchContext shape and ContextBuilder interface that assembles everything required by the AI
 * - prompts: PromptBuilder interface responsible for converting MatchContext into LLM prompts
 * - providers/ai: AIProvider interface (generate) that encapsulates model calls (Gemini, OpenAI, Claude)
 * - validators: JSONValidator to ensure AI returns valid, typed JSON
 * - analysis: AnalysisEngine interface that orchestrates all pieces
 * - cache: CacheProvider interface used for caching heavy payloads and results
 * - normalizers: Normalizer interface to convert provider-specific payloads into canonical shapes
 *
 * Future-proofing
 * - All provider code lives behind interfaces; to support new providers implement the corresponding interface
 *   and register it with the AnalysisEngine.
 * - The UI only calls server API routes and never interacts directly with any provider.
 * - PromptBuilder and ContextBuilder are separate concerns so you can change prompt engineering without touching
 *   football provider code.
 *
 * Next steps (suggested):
 * - Implement a minimal in-memory CacheProvider for local development.
 * - Implement a FootballProvider adapter for your chosen data source and a Normalizer to map its payloads.
 * - Implement a lightweight AIProvider that returns mocked AnalysisResult to exercise the pipeline.
 * - Implement server API route (app/api/analyze/route.ts) that constructs an AnalysisEngine instance and calls analyzeMatch.
 */

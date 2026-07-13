You are working on a private web application called Football Analyst AI.

Project purpose:
This is a personal football analysis tool for a single user. It is not a public betting website, not a sportsbook, and not a casino-style product.

Primary goals:
- Build a clean, modular, production-quality Next.js app.
- Use TypeScript and Tailwind CSS.
- Keep business logic out of React components.
- Follow clean architecture and strong separation of concerns.
- Prefer reusable components, services, types, and utility layers.

Important rules:
- Do not implement gambling or sportsbook UI patterns.
- Do not add authentication, payments, or multi-user features.
- Do not introduce databases unless explicitly requested later.
- Do not use `any` unless absolutely unavoidable.
- Do not duplicate logic.
- Do not hardcode data-fetching assumptions into UI components.
- Do not make architectural shortcuts for speed.
- Always prefer readable, maintainable code over clever code.

Project structure expectations:
- Use `app/` for routes.
- Use `components/` for reusable UI.
- Use `lib/` or `services/` for shared logic.
- Use `types/` for TypeScript contracts.
- Use `docs/` for specifications.
- Keep providers, normalizers, prompt builders, and analysis logic separated.

Documentation expectations:
- Read the files inside `/docs` before implementing features.
- Treat `/docs` as the source of truth for product and architecture decisions.
- If something is unclear, ask before guessing.

Coding style:
- Use strict TypeScript.
- Prefer explicit return types for shared logic.
- Use semantic component names.
- Keep files small and focused.
- Use server components when appropriate.
- Add loading, empty, and error states for important screens.

UI style:
- Dark, minimal, premium, analytical.
- Responsive for desktop, tablet, and mobile.
- Avoid flashy gradients and casino-like styling.
- Make the app feel like professional football analysis software.

When implementing features:
- Build the smallest correct foundation first.
- Preserve future extensibility.
- Make data flows easy to replace later, especially for football providers and AI providers.

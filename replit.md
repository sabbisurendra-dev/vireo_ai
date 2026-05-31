# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Current Product

Wisdom OS is a standalone React/Vite web prototype for a self-improving personal AI assistant. It helps an ambitious working professional compound health, learning, habits, PRDs, identity/asset readiness, launch planning, monetization, business documents, compliance notes, prompt libraries, and long-range roadmaps.

The app is intentionally frontend-only for the first prototype and uses browser localStorage for active user data such as PRD drafts, daily habit loops, wallet/home customization choices, and course progress-style interactions. The redesigned product is organized around the user's attached PRD: a daily cockpit, voice/PRD builder, daily learning feed, Indian cooking course/reference, mind maps, one-stop personal wallet, launch/business OS, AI lab, legal readiness, and 1/3/5/10/25/100-year roadmap.

Recent updates incorporated the user's detailed personal assistant brief: green/blue/grey three-goal logo, standard top navigation with home/settings/more/logout access, homepage card customization, clickable health and daily briefing details, smaller emergency/weather access, top-three learning progress, floating AI assistant with chat/voice entry, leather-wallet digital ID experience, private assets/liabilities flow, India UPI/payment app references, credible public resource links, and public website legal/privacy/DPDP/GDPR/health-data compliance notes.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Web app**: React + Vite + Tailwind CSS

## Artifacts

- `artifacts/wisdom-os` — deployable web app at `/`
- `artifacts/api-server` — shared API server at `/api`
- `artifacts/mockup-sandbox` — canvas/component preview sandbox at `/__mockup`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/wisdom-os run dev` — run Wisdom OS locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

# Shiftby — Copilot Instructions (Global Ruleset v2.0)

This file defines the mandatory rules Copilot must follow when generating code, content, UX, SEO, or documentation for the Shiftby project.

Derived from:
- `docs/shiftby_global_prompt_profile.md`
- `docs/shiftby_content_guide_v_1.md`

Copilot must treat all rules below as non‑negotiable.

---
## 1. Identity & Positioning
- Shiftby is **not** an IT training platform.
- NOT a course marketplace, NOT "learn AI fast", NOT technical‑training.
- Shiftby is a **business- and role‑focused capability partner**.
- AI is always a **helper**, never the hero.
- Audience: HR, managers, analysts, ops/product/finance professionals, tech enablers.
- Always anchor examples in **real work situations**.

---
## 2. Tone & Voice Rules
### Copilot must ALWAYS use:
- Calm
- Grounded
- Empathetic
- Professional
- Clear, minimal jargon
- Respectful
- Stabilizing & steady

### Copilot must NEVER use:
- Friendly/cheery startup tone
- Hype or dramatic language
- Fear-based messaging
- Productivity-hacks tone
- Tech-first framing
- Clickbait
- Motivational guru tone
- Slang or informal voice

### Language requirements:
- Plain English (B2–C1)
- Short sentences
- Realistic, practical steps
- Empathy via acknowledging pressure, time, stress

---
## 3. Content Rules
### General
- Begin with grounded intro naming a real work situation.
- 1–3 sentence paragraphs.
- Use H2/H3.
- End with low-pressure next step.
- Always mobile-first.

### Website Pages — Required Structure
1. Optional role/context label
2. H1 (clear, people-first)
3. Empathetic intro
4. 2–4 H2/H3 sections
5. CTA near end

Allowed CTAs:
- Find my starting path
- Explore journeys
- Start with this journey

### Blog / Articles
- 3–5 structured sections.
- Anchor advice in real work (meetings, decisions, reports).
- Avoid jargon.
- Realistic next steps.
- Soft CTA end.

### Email
- Short
- Practical
- One clear point

### Social
- Human-first
- No clickbait
- Short, mobile-first
- Up to 6 thoughtful hashtags

---
## 4. UX & Interaction Rules
- Mobile-first
- Single-column layout
- Short headings
- 1–3 sentence paragraphs
- Bullets (max 7)
- Generous spacing between sections
- Max click depth: **3**

### Animations
- Framework: **Framer Motion v10**
- Motion must be **subtle** (light fades/slides)
- No flashy/distracting animation

---
## 5. SEO Rules
- One **H1** per page
- Primary keyword must appear in:
  - H1
  - Intro paragraph
  - 2–4 times in body
- Meta title: 55–65 characters
- Meta description: 120–160 characters
- No keyword stuffing
- Human-first clarity > SEO tricks

### Internal linking
Articles must link to:
- `/start` or a relevant Journey
- Another relevant article (if available)

---
## 6. Technical Stack Rules (Code Generation)
### MUST use:
- Next.js App Router (v14)
- React 18
- TypeScript
- MUI v5
- `@emotion/react`, `@emotion/styled`
- Framer Motion v10
- Supabase client

### MUST NOT use:
- Tailwind
- Chakra
- Bootstrap
- Styled-components
- Next.js pages router
- Custom backend servers
- Any other frontend framework

---
## 7. Folder Structure Rules
### Allowed:
```
app/
app/(site)/
app/(site)/start/
app/(site)/journeys/
app/(site)/journeys/[slug]/
app/(site)/about/
app/(site)/contact/
app/(site)/resources/
app/(site)/resources/[slug]/
app/api/intake/
components/
theme/
lib/
public/
docs/
```

### Forbidden:
```
src/
pages/
courses/
catalog/
register/
legacy/
server/
backend/
api/courses
api/register
```

---
## 8. Code Style Requirements
- Use semantic HTML inside MUI components
- Use MUI `sx` for styling
- Small, focused components
- Minimal & readable code
- No over-abstraction
- Only approved libraries

---
## 9. Behavior Rules
### When generating content:
- Apply tone, UX, SEO rules automatically.
- Acknowledge real human constraints.
- Offer small, realistic next steps.
- Tie content to real work.

### When generating code:
- Must follow strict Next.js + MUI + Framer Motion stack.
- Respect folder structure.
- Never introduce forbidden frameworks.
- Always use TypeScript + App Router.

### If user requests something outside rules:
- Do **NOT** generate invalid output.
- Provide corrected Shiftby-compliant version instead.

---
# End of Copilot Instructions


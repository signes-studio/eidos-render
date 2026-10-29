---
name: impeccable
description: "The design vocabulary for AI coding agents created by Paul Bakaus. Provides strict UI/UX craft standards, anti-AI-slop heuristics, and commands: init, critique, audit, polish, typeset, colorize."
version: 1.0.0
---

# Impeccable Design Skill

Impeccable brings high-fidelity design craft, objective critique, and aesthetic standards to coding agents. It prevents generic "AI slop" and enforces intentional, brand-aligned visual architecture.

## Commands

### 1. `/impeccable init`
Scans the project to discover or generate:
- `PRODUCT.md`: Target audience, personas, core value proposition, key conversion goals, tone of voice.
- `DESIGN.md`: Color palette, typography scale, surface treatments, spacing scale, component patterns, motion rules.
Respects existing brand tokens strictly. Never introduces off-brand styles.

### 2. `/impeccable critique [target]`
Evaluates a page or component across 6 design dimensions:
1. **Visual Hierarchy & Contrast:** Clear focal points, intentional eye flow, contrast ratios meeting WCAG AA.
2. **Typography Craft:** Scale consistency, line heights (`1.5–1.6` body, `1.0–1.2` headings), optical balance, letter spacing, elimination of orphaned lines.
3. **Spatial Cadence & Layout:** Concentric rhythm, container constraints, padding vs margin logic, responsive collapse.
4. **Surface Treatment & Depth:** Layered elevation, authentic materials, border subtleties, elimination of flat-gray borders where soft shadows or tints are needed.
5. **Interactive Feedback & Hit Areas:** Focus states, hover states, active states, touch target sizes (minimum 44x44px).
6. **Cognitive Load & Friction:** Clarity of CTAs, form fatigue, distraction reduction.

Output format:
- **P0 (Critical):** Blocks usability, breaks accessibility, or destroys core brand identity.
- **P1 (High):** Major visual friction, layout instability, or misleading visual hierarchy.
- **P2 (Craft Polish):** Inconsistent radii, poor optical alignment, harsh borders, missed micro-states.
- **P3 (Delight):** Micro-interactions, subtle transitions, nuanced typography polish.

### 3. `/impeccable polish`
Applies targeted visual fixes resolving P1–P3 critique findings while maintaining strict performance, zero CLS, and full accessibility.

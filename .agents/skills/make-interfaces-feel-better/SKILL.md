---
name: make-interfaces-feel-better
description: "Design-engineering craft principles created by Jakub Krehel to elevate interfaces from functional to polished: concentric border radius, layered shadows, optical alignment, scale-on-press, and touch areas."
version: 1.0.0
---

# Make Interfaces Feel Better

Guidelines for front-end craft and micro-details that make web interfaces feel tangible, responsive, and thoughtfully engineered.

## Core Principles

### 1. Concentric Border Radius
Never use the same border radius on nested containers.
- Formula: `R_outer = R_inner + Padding`
- If an inner element has `border-radius: 6px` and padding is `12px`, the outer wrapper must have `border-radius: 18px`.
- When radius is 0 (brutalist/architectural), maintain strict razor-sharp alignment throughout the component tree.

### 2. Multi-Layered Shadows over Harsh Flat Borders
Avoid single harsh `border: 1px solid #ddd` without depth.
- Use multi-layer ambient + directional shadows:
  ```css
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.04);
  ```
- Pair with subtle translucent borders: `border: 1px solid rgba(27, 25, 24, 0.08)`.

### 3. Optical Alignment vs Geometric Centering
- Icons paired with text often look bottom-heavy if centered strictly mathematically; adjust by `translateY(-0.5px)` or `translateY(-1px)`.
- Play buttons, arrows, and chevron triangles need optical padding towards their point.

### 4. Interactive Feedback & Micro-Interactions
- **Hover:** Gentle lift or tonal shift with cubic-bezier timing (`transform: translateY(-2px);` or background tint change).
- **Active / Press:** Immediate tactile response using `transform: scale(0.97);` on `:active` with transition `transform 0.1s ease-out`.
- **Focus-Visible:** Distinct, high-contrast focus rings for keyboard navigation (`outline: 2px solid var(--granate); outline-offset: 3px;`).
- **Touch Targets:** Minimum `44x44px` (ideal `48x48px`) touch surface on all interactive controls on mobile devices.

### 5. Typography Rendering & Surfaces
- Always enable antialiased font smoothing on dark surfaces:
  ```css
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  ```
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for introductory lead paragraphs to eliminate orphans.
- Tabular figures (`font-variant-numeric: tabular-nums;`) for metrics, prices, and numbers.

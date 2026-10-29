---
name: transitions-dev
description: "Production-ready CSS motion library and micro-interaction patterns created by Jakub Antalik. Standardizes easing tokens, accordion grid transitions, card lifts, dropdowns, and prefers-reduced-motion compliance."
version: 1.0.0
---

# Transitions.dev

Curated library of hardware-accelerated, CSS-first transitions for micro-interactions. Replaces heavy JavaScript animation libraries with pure CSS tokens.

## Timing Tokens (`:root`)

```css
:root {
  --t-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --t-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --t-duration-instant: 120ms;
  --t-duration-fast: 200ms;
  --t-duration-base: 300ms;
  --t-duration-slow: 450ms;
}
```

## Core Patterns

### 1. Zero-JS Accordion Transition (CSS Grid Height Animation)
Animate height smoothly without measuring pixel heights in JavaScript:
```css
.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--t-duration-base) var(--t-ease-out);
}

.faq-item.is-open .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
}
```

### 2. Origin-Aware Dropdown / Popover Reveal
```css
.dropdown-menu {
  opacity: 0;
  transform: scale(0.96) translateY(-6px);
  transform-origin: top center;
  transition: opacity var(--t-duration-fast) var(--t-ease-out),
              transform var(--t-duration-fast) var(--t-ease-out);
  pointer-events: none;
}

.dropdown.is-active .dropdown-menu {
  opacity: 1;
  transform: scale(1) translateY(0);
  pointer-events: auto;
}
```

### 3. Tactile Card Hover & Elevation Bloom
```css
.card-interactive {
  transition: transform var(--t-duration-fast) var(--t-ease-out),
              box-shadow var(--t-duration-fast) var(--t-ease-out),
              border-color var(--t-duration-fast) var(--t-ease-out);
  will-change: transform;
}

.card-interactive:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.card-interactive:active {
  transform: translateY(-1px) scale(0.99);
}
```

### 4. Accessibility Guard (`prefers-reduced-motion`)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

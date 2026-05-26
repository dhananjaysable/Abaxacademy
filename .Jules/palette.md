## 2024-05-26 - Icon Button Accessibility Pattern
**Learning:** This app's components (like `Header.jsx`) frequently have interactive styles (hover effects, padding, rounded corners) applied to `<div>` wrappers instead of semantic `<button>` elements containing icon-only content, which breaks keyboard accessibility and lacks ARIA labels for screen readers.
**Action:** Always verify icon-only interactive elements. When refactoring, remove wrapper `<div>`s, move the interactive styles directly to the semantic `<button>`, add `focus-visible` ring styles, and include descriptive `aria-label`s.

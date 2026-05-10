## 2024-05-23 - Interactive Element Refactoring
**Learning:** In this application's UI components, icon-only buttons frequently lack `aria-label`s and have interactive styles (e.g., hover effects) applied to non-interactive parent `<div>` wrappers rather than the semantic `<button>` elements.
**Action:** To maintain keyboard navigation and accessibility, always refactor these by moving interactive styles directly to the `<button>`, adding `focus-visible` ring styles, and including descriptive `aria-label`s.

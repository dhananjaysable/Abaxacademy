## 2024-06-10 - Fix Interactive Wrappers

**Learning:** It's common in this app's components to see `aria-label`s missing from icon-only buttons, and interactive styles (like `hover`) applied to non-interactive parent `<div>` wrappers rather than the semantic `<button>` elements.

**Action:** To maintain keyboard navigation and accessibility, always refactor these by moving interactive styles directly to the `<button>`, adding `focus-visible` ring styles, and including descriptive `aria-label`s.

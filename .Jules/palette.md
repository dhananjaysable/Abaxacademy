## 2025-03-09 - Accessible Icon-Only Buttons
**Learning:** In this application, icon-only social buttons frequently have their interactive styles (hover effects, padding) applied to non-interactive parent `<div>` elements rather than the semantic `<button>` elements, breaking keyboard accessibility and missing essential `aria-label`s.
**Action:** Always move interactive styles directly to the `<button>`, add `focus-visible` ring styles, and include descriptive `aria-label`s to ensure full accessibility for screen readers and keyboard users.

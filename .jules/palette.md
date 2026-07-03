## 2025-03-01 - Interactive Styles on Non-Interactive Elements

**Learning:** In this application, interactive styles (like `hover:`, `cursor-pointer`, `transition`) on icon-only buttons are frequently applied to parent `<div>` wrappers instead of the semantic `<button>` elements. Furthermore, these buttons lack descriptive `aria-label`s and visible focus states, which breaks keyboard navigation and screen reader accessibility.

**Action:** Always refactor these structures by moving the interactive styles directly to the `<button>`, removing unnecessary `<div>` wrappers, adding explicit `focus-visible` ring styles, and ensuring descriptive `aria-label`s are present to maintain keyboard navigation and accessibility.

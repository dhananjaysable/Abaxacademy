## 2024-05-18 - [Header Navigation Accessibility]
**Learning:** Found a specific pattern in this app's Header where interactive hover/padding classes were applied to `<div>` wrappers instead of the child `<button>` elements, effectively breaking keyboard focus ring visibility and increasing DOM complexity.
**Action:** Always refactor icon-only components in this project to place interactive styling (and `aria-label`s) directly on the `<button>` element itself, using `focus-visible:ring` to maintain visual keyboard accessibility.

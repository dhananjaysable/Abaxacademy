## 2024-05-12 - Icon-only buttons anti-pattern
**Learning:** Found a specific anti-pattern where icon-only buttons lack `aria-label`s and have their interactive styles (hover effects, etc.) applied to non-interactive parent `<div>` wrappers instead of the semantic `<button>` elements.
**Action:** Always check icon-only buttons to ensure they have descriptive `aria-label`s, focus visible styles, and that interactive classes are applied directly to the `<button>` element itself.

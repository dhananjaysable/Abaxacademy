## 2024-05-15 - Refactored interactive divs to buttons for accessibility
**Learning:** The project's icon-only buttons frequently have interactive styles (like hover) on parent divs instead of the semantic button tags.
**Action:** Always move interactive styles directly to the <button>, add focus-visible styles, and include aria-labels.

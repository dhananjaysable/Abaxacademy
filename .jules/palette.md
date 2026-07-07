## 2024-07-07 - Refactored social media buttons for accessibility
**Learning:** Found a pattern where interactive styles and hover states were applied to a non-interactive parent `div` instead of the semantic `<button>` for icon-only components. In addition, these buttons lacked `aria-label` and visual focus states.
**Action:** When finding social icon or icon-only buttons grouped in a div, move interaction classes to the `button` element, add an explicit `aria-label`, and add `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none` for keyboard accessibility.

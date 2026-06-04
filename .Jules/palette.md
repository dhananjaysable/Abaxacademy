## 2024-06-04 - Semantic Buttons for Icon-Only Actions
**Learning:** This application pattern often applies interactive styles (hover states, padding) to parent `<div>` wrappers instead of semantic `<button>` elements for icon-only buttons, making them harder to target via keyboard and assistive tech.
**Action:** When finding icon-only buttons inside styling divs, move the interactive and spacing styles directly to the `<button>`, ensure an `aria-label` is present, and add `focus-visible` ring styles to guarantee keyboard accessibility.

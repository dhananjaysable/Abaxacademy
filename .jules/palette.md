## 2024-07-24 - Add accessible focus states and ARIA labels to carousel controls
**Learning:** Custom interactive UI elements like carousels frequently lack `aria-label`s and use `focus:outline-none`, hiding focus rings from keyboard users.
**Action:** Replace `focus:outline-none` with explicit focus styles like `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none` and provide semantic `aria-label`s to maintain keyboard accessibility.

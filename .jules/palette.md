## 2024-02-20 - Adding ARIA Labels and Focus Rings to Custom Interactive Elements
**Learning:** Custom interactive elements like carousels in this app were frequently lacking ARIA labels for icon-only/pagination buttons and improperly used `focus:outline-none`, making them inaccessible to keyboard users and screen readers.
**Action:** Always ensure custom interactive elements have descriptive `aria-label`s and replace `focus:outline-none` with explicit focus styles like `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none` to maintain keyboard accessibility.

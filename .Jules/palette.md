## 2024-05-18 - [Input Accessibility & Focus Indicators]
**Learning:** Found a recurring UX/a11y pattern where forms relied solely on placeholders without explicit `<label>` elements and lacked visible focus states, making keyboard navigation and screen reader usage difficult.
**Action:** When adding new form inputs, always include explicit `aria-label` attributes if standard labels aren't used, ensure visible focus styles (e.g., `focus:ring-2 focus:outline-none`) are present, and prevent default form submissions to avoid disruptive page reloads.

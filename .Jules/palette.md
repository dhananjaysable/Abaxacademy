## 2026-04-23 - Form Accessibility & Data Leakage Prevention
**Learning:** The project relies heavily on placeholders without `aria-labels` or visible `<label>` elements, creating a significant accessibility barrier. Additionally, forms lack `e.preventDefault()` on their `onSubmit` handlers, which can inadvertently leak PII in URL parameters during default GET submissions.
**Action:** Ensure all form fields have explicit `aria-label` attributes when visible labels are missing. Always bind `onSubmit={(e) => e.preventDefault()}` to forms to prevent unintended data transmission and page reloads.

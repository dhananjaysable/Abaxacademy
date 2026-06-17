## 2025-06-17 - Prevent PII Leakage via Form GET Submissions
**Vulnerability:** React forms lacking explicit `e.preventDefault()` on their `onSubmit` handlers default to GET submissions, exposing Personal Identifiable Information (PII) such as names, emails, and phone numbers in URL parameters during page reload.
**Learning:** This codebase frequently defines simple UI forms without immediate submission logic, leading to omitted event handlers and unintentional reliance on native form behavior which compromises user data security.
**Prevention:** Always attach `onSubmit={(e) => e.preventDefault()}` to all `<form>` elements when defining them, even if the final submission handling logic is yet to be implemented.

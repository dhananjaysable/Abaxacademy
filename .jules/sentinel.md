## 2024-04-24 - [PII Leakage via Default Form Submission]
**Vulnerability:** Forms lacking an explicit `onSubmit` handler with `e.preventDefault()` will default to a GET request submission, appending input values to the URL parameters. In `DirectionsRegistration.jsx`, this could leak sensitive Personally Identifiable Information (PII) like names, emails, and phone numbers in browser history or server logs.
**Learning:** React applications must explicitly intercept form submissions to prevent default browser behavior that could inadvertently leak data.
**Prevention:** Always add `onSubmit={(e) => e.preventDefault()}` (or handle submission programmatically without default behavior) to all `<form>` elements, especially those collecting PII.

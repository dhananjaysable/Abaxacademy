
## 2024-05-24 - Prevent PII Leak via React Form GET Submission
**Vulnerability:** React `<form>` without `e.preventDefault()` falls back to default HTML form submission behavior (GET request), exposing submitted PII in the URL parameters.
**Learning:** In a single-page application (SPA), forms frequently lack explicit `action` and `method` attributes. Submitting these unhandled forms triggers a page reload with input values in the URL, risking logging and exposure of sensitive data like names, emails, and phone numbers.
**Prevention:** Always add an `onSubmit` handler to React `<form>` elements that calls `e.preventDefault()`, even if form handling logic is not fully implemented yet, to ensure PII isn't unintentionally leaked via URL parameters.

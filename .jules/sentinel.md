## 2026-05-21 - [PII Leakage in Form Submission]
**Vulnerability:** Forms lacking `onSubmit` handlers default to GET requests on submission, potentially leaking user Personally Identifiable Information (PII) (e.g., name, email, mobile number) in the URL parameters.
**Learning:** Default HTML form behavior in React without `e.preventDefault()` can inadvertently expose sensitive data in browser history or server logs.
**Prevention:** Always attach an `onSubmit` handler to `<form>` elements and immediately call `e.preventDefault()` before handling the submission logic.

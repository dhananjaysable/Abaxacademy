## 2025-04-23 - Prevent PII Leaks from Default Form Submissions
**Vulnerability:** React forms without an explicit `onSubmit` handler calling `e.preventDefault()` will default to a GET request upon submission, appending all form input values as URL parameters.
**Learning:** This behavior inadvertently leaks sensitive Personally Identifiable Information (PII) such as names, emails, and mobile numbers into the browser history and server logs.
**Prevention:** Always ensure React forms include an `onSubmit` handler with `e.preventDefault()` to manage data securely and prevent default GET submissions.

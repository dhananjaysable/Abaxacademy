## 2025-06-29 - [Fix PII Leak in Form Submission]
**Vulnerability:** Registration form without an `onSubmit` handler allowed default GET submissions.
**Learning:** Default form submissions in React without `e.preventDefault()` can append form data (like names, emails, mobile numbers) to the URL query string, inadvertently leaking PII in server logs or browser history.
**Prevention:** Always add an `onSubmit` handler with `e.preventDefault()` to forms, especially those collecting sensitive user data, to ensure submissions are handled securely via JavaScript (e.g., POST requests) rather than relying on default browser behavior.

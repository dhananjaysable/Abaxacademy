## 2024-07-12 - Prevent PII leakage in form submissions
**Vulnerability:** React forms default to GET submissions if `e.preventDefault()` isn't called on the `onSubmit` handler, potentially leaking Personally Identifiable Information (PII) like names, emails, and phone numbers in URL parameters.
**Learning:** Default form behavior in React can inadvertently expose sensitive user data in the URL if not explicitly prevented.
**Prevention:** Always add `onSubmit={(e) => e.preventDefault()}` to `<form>` tags in React components to prevent default GET submissions, especially for forms handling PII.
## 2025-03-08 - [PII Leakage via React Form GET Submission]
**Vulnerability:** A React form component lacked an `onSubmit` handler to prevent default behavior, causing form data (including PII like name, email, and mobile numbers) to be submitted via a GET request, appending sensitive data to the URL parameters.
**Learning:** Default HTML form behavior in a single-page React application can inadvertently leak sensitive user data if not properly overridden.
**Prevention:** Always include `onSubmit={(e) => e.preventDefault()}` on React forms to prevent default GET submissions and ensure data is handled securely via appropriate API calls or state management.

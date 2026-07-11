## 2026-07-11 - Prevent PII Leakage in Form URLs
**Vulnerability:** Registration form lacks `onSubmit` handler to prevent default behavior, which submits form fields as GET parameters in the URL, exposing PII (Name, Email, Mobile No).
**Learning:** Default form submissions in React without `e.preventDefault()` can inadvertently leak sensitive user data into browser history and server logs.
**Prevention:** Always use `onSubmit={(e) => e.preventDefault()}` on React forms unless intentionally implementing standard form posts.

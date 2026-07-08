## 2025-02-27 - [Prevent PII Leak in Form Submission]
**Vulnerability:** React `<form>` elements without an `onSubmit` handler will perform a default GET request when submitted, appending form field values (like Name, Email, Mobile No) to the URL query string.
**Learning:** This exposes sensitive PII (Personally Identifiable Information) in the browser history, server logs, and potentially referrer headers. This codebase's registration form lacked this handler.
**Prevention:** Always include an explicit `onSubmit={(e) => e.preventDefault()}` on `<form>` elements, or rely on a proper form handling library that intercepts the default action.

## 2024-03-24 - PII Leakage via Form GET Submissions
**Vulnerability:** Forms lacking `onSubmit` handlers default to GET submissions, leaking PII (Personally Identifiable Information) in URL parameters.
**Learning:** Default HTML behavior in React applications without explicit `preventDefault` on forms leads to sensitive data exposure in server logs, browser history, and referrer headers.
**Prevention:** Always include `onSubmit={(e) => e.preventDefault()}` on all `<form>` elements to prevent default GET submission behavior.
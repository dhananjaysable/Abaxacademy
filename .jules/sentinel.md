## 2024-05-07 - [Insecure Form Submission]
**Vulnerability:** A missing `onSubmit={(e) => e.preventDefault()}` on a form risks leaking Personally Identifiable Information (PII) like name, email, and mobile number in URL parameters via default GET submission.
**Learning:** This exists likely due to defaulting to straightforward implementations without considering edge-cases like form submission defaults. Form submissions require explicit suppression when handled via APIs or React state to prevent unintended data exposure in URLs.
**Prevention:** Always add `e.preventDefault()` to forms in React unless default HTML submission is specifically required.

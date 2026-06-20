## 2024-05-24 - Default Form Submission PII Leak
**Vulnerability:** React forms without an `onSubmit` handler will trigger the browser's default behavior, making a GET request with all form inputs appended to the URL.
**Learning:** This codebase had a registration form that lacked an `onSubmit` handler. Submitting the form could expose sensitive user information (PII) like name, email, and mobile number in the URL parameters or logs.
**Prevention:** Always add `onSubmit={(e) => e.preventDefault()}` to forms or handle the submission via a controlled function that explicitly prevents the default action, ensuring form data is not inadvertently leaked in URLs.

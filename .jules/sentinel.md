## 2024-05-24 - [Unprevented Form Submissions Leaking PII]
**Vulnerability:** React form in `DirectionsRegistration.jsx` lacked `e.preventDefault()` on `onSubmit`, causing default GET submission.
**Learning:** Default form submissions in React without prevention will append input data to the URL as query parameters, potentially logging sensitive user information (PII like email and phone numbers) in browser history, proxy logs, and server logs.
**Prevention:** Always add an `onSubmit` handler with `e.preventDefault()` on all forms to handle data via JavaScript securely rather than relying on default browser behavior.

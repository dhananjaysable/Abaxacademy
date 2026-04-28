## 2024-05-15 - PII Leakage in Default Form Submissions
**Vulnerability:** React forms without an explicit `e.preventDefault()` on their `onSubmit` handler default to a GET request. If the form contains input fields without `name` attributes, it might not directly leak them, but if they have names, the browser submits them as URL parameters (e.g., `?name=John+Doe&email=johndoe@example.com`). This can inadvertently leak PII in URL parameters, server logs, or analytics tools.
**Learning:** React does not prevent default form submission automatically.
**Prevention:** Always use `e.preventDefault()` on form submission handlers unless the default behavior (a full page reload with GET/POST based on action/method) is explicitly intended.

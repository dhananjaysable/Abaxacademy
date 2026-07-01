## 2025-03-09 - [HIGH] Prevent PII Leakage via React Form GET Submission
**Vulnerability:** React forms without an explicit `onSubmit` handler default to submitting data via a GET request when a submit button is clicked. This can inadvertently expose Personally Identifiable Information (PII) such as names, emails, and phone numbers in the URL query parameters.
**Learning:** This exposes sensitive user data directly in the URL, which can be logged by servers, proxies, or stored in browser history, posing a high security and privacy risk.
**Prevention:** Always include `e.preventDefault()` within an explicit `onSubmit` handler for any React form containing sensitive inputs. If the form does not use a controlled state submission, this handler ensures the default GET request is blocked.

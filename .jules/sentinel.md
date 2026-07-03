## 2025-03-05 - Fix PII Leakage in Registration Form
**Vulnerability:** Registration form submitted using default GET behavior, potentially exposing Personal Identifiable Information (PII) as URL parameters.
**Learning:** React forms by default trigger an HTTP GET action unless explicitly intercepted with `e.preventDefault()`, which is a risky default that often goes unnoticed in single-page applications.
**Prevention:** Always attach an `onSubmit` handler to explicitly call `e.preventDefault()` on all forms to prevent unwanted default HTTP GET/POST behavior, and prioritize controlled components or explicit state management for forms rather than relying on browser defaults.

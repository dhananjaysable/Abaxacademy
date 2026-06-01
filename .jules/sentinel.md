
## 2024-06-01 - Prevent Default Form Submissions to Protect PII
**Vulnerability:** Forms in React applications that lack an `onSubmit` handler, or have one that doesn't explicitly call `e.preventDefault()`, will default to standard HTML form behavior. In GET requests, this can inadvertently leak Personally Identifiable Information (PII) from input fields into URL parameters when the submit button is clicked.
**Learning:** The application's `DirectionsRegistration` component contained a form without submission handling, posing a risk of user data exposure in the URL structure.
**Prevention:** Always implement an explicit `onSubmit={(e) => e.preventDefault()}` on React forms unless full HTML form submission behaviour is desired and properly handled over secure POST.

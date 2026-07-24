## 2026-07-24 - [Missing input validation on forms]
**Vulnerability:** Registration form fields were missing basic HTML5 validation like `required`, and the phone number input was configured as `type="text"` lacking pattern restrictions, potentially allowing malformed input or spam submissions.
**Learning:** Basic client-side validation using standard HTML attributes is essential as a first line of defense against malformed data.
**Prevention:** Always use standard HTML5 form validation attributes (`required`, `type="email"`, `type="tel"`, `pattern`, etc.) on form inputs to enforce data formatting directly in the browser and reduce invalid payload delivery.

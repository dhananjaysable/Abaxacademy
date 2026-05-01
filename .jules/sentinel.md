## 2024-05-18 - [Form Default GET Submission PII Leak]
**Vulnerability:** React forms without a prevented default submission handler can leak Personal Identifiable Information (PII) by inadvertently submitting data as URL parameters via GET request.
**Learning:** React does not prevent default form submissions natively.
**Prevention:** Always add `onSubmit={(e) => e.preventDefault()}` to `<form>` tags, especially when client-side routing and data fetching are heavily utilized, preventing unintended GET requests.

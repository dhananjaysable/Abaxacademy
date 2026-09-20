## 2023-10-24 - Missing Input Validation on DirectionsRegistration Name Field
 **Vulnerability:** Unvalidated input field allowed arbitrary length strings, which could lead to buffer overflows, database truncation errors, or application crashes when processing very large inputs.
 **Learning:** Added `required` and `maxLength={50}` attributes to the Name input field to enforce basic data validation at the client side and prevent oversized inputs from being submitted.
 **Prevention:** Implement HTML5 validation attributes (`required`, `maxLength`, `pattern`) on all form inputs and ensure server-side validation complements client-side checks to handle potentially malicious payloads securely.

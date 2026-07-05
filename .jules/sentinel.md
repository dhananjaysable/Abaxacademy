## 2025-02-18 - Prevent PII Leakage via Default Form Submission
**Vulnerability:** A registration `<form>` element lacked an `onSubmit` handler. Default browser behavior for form submission is a GET request, which reloads the page and appends input values to the URL.
**Learning:** In a React application, forms without `onSubmit={(e) => e.preventDefault()}` can inadvertently leak Personally Identifiable Information (PII) like names, emails, and phone numbers into browser histories, server logs, and Referer headers.
**Prevention:** Always attach an `onSubmit` event handler to `<form>` elements that calls `e.preventDefault()` before handling the data via JavaScript/API calls.

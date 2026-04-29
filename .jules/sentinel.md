## 2024-05-24 - [PII Leak via Unhandled Form Submit]
**Vulnerability:** A React form component did not implement an `onSubmit` handler with `e.preventDefault()`. By default, browsers submit forms using GET requests, appending form fields to the URL.
**Learning:** If a form requests sensitive personal information (PII) such as Name, Email, or Phone Number without handling the submit event, this data will be leaked in the URL parameters and subsequently exposed in browser histories, server logs, or referrer headers.
**Prevention:** Always attach an `onSubmit` handler to React forms calling `e.preventDefault()` to stop the default browser behavior, even if the form isn't currently wired to an API, to ensure data isn't accidentally submitted via GET.

## 2024-05-24 - [Third-Party Embed Over-Privilege]
**Vulnerability:** A Google Maps `iframe` was embedded without a `sandbox` attribute.
**Learning:** Third-party iframes left unrestricted can execute malicious scripts, initiate unwanted downloads, or navigate the parent window if compromised.
**Prevention:** Apply the principle of least privilege using the `sandbox` attribute. For embeds like Google Maps, `sandbox="allow-scripts allow-same-origin"` provides necessary functionality while significantly restricting potential attack vectors.
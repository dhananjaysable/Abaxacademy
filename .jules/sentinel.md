## 2024-05-18 - [Security] Harden Google Maps iframe & Prevent form GET submission

**Vulnerability:** Google Maps `iframe` was missing the `sandbox` attribute, leaving it fully trusted, and the registration form lacked `e.preventDefault()` on submission which could leak PII in URL parameters through default GET behavior.
**Learning:** External embeds should always use the `sandbox` attribute to enforce least privilege. Forms in React, especially those dealing with PII, must explicitly prevent the default submission behavior to avoid inadvertent data leakage.
**Prevention:** Standardize the inclusion of `sandbox="allow-scripts allow-same-origin allow-popups"` for all third-party embeds (balancing functionality with security) and ensure all `<form>` elements have `onSubmit={(e) => e.preventDefault()}`.

## 2025-03-09 - Prevent PII leak in form submission and sandbox map embed
**Vulnerability:** A contact/registration form lacked an `onSubmit` handler, defaulting to a GET request that leaks PII via URL parameters. Additionally, a Google Maps embed lacked sandbox restrictions.
**Learning:** Default HTML form behavior combined with uncontrolled third-party map embeds exposes applications to both direct data leakage (PII in URLs logging) and elevated attack surface from unrestricted iframes.
**Prevention:** Always use `onSubmit={(e) => e.preventDefault()}` on React forms handling PII, and consistently apply `sandbox="allow-scripts allow-same-origin allow-popups"` on all external map iframes to enforce the principle of least privilege.

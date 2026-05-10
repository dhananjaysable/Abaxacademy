## 2024-05-10 - [Fix PII leakage and secure iframe embed]
**Vulnerability:** Forms lacking `e.preventDefault()` on submission inadvertently leak user PII via GET requests (URL parameters). Additionally, Google Maps iframe embed lacks proper sandboxing which poses security risks from third-party scripts.
**Learning:** Default HTML form behavior combined with state-driven React components can lead to unintended GET requests leaking sensitive data. Unsandboxed iframes implicitly trust third-party content.
**Prevention:** Always add `e.preventDefault()` to form `onSubmit` handlers unless intentionally leveraging default form submission, and always specify appropriate `sandbox` attributes on third-party `<iframe>` embeds to enforce the principle of least privilege.

## 2024-05-18 - Prevent PII Leakage and External Maps Isolation
**Vulnerability:** Registration form submitted with a default GET action leaked PII in the URL. External embedded maps lacked sandbox isolation. Additionally, project lint rules allowed `target="_blank"` without noopener/noreferrer, risking reverse tabnabbing.
**Learning:** Default form behavior and permissive third-party iframes pose significant risks in static/simple React forms. Permissive linting config increases risk of cross-site vulnerabilities.
**Prevention:** Always add `onSubmit={(e) => e.preventDefault()}` to static forms, apply `sandbox="allow-scripts allow-same-origin allow-popups"` to third-party maps, and enforce `'react/jsx-no-target-blank': 'error'` in ESLint config.

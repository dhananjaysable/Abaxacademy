## 2026-04-30 - [A11y forms]
**Learning:** React form inputs without labels relying solely on placeholders need 'aria-label' and explicit keyboard focus indicators (e.g. `focus:ring`) to be fully accessible to screen readers and keyboard users, additionally `e.preventDefault()` on form submit is critical to prevent unintended navigation or PII leaks in URL parameters in SPA React apps.
**Action:** Always ensure placeholder-only inputs have an `aria-label` and apply explicit `focus:ring-2 focus:ring-[color]` styles.

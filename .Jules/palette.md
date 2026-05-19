## 2024-05-19 - Header Social Buttons Refactor
**Learning:** Icon-only buttons in the `Header` component used `<div>` wrappers for interactive hover styles while nested `<button>`s were unstyled and lacked `aria-label`s. This pattern breaks standard keyboard navigation focus states and provides no accessible name for screen readers.
**Action:** Always move interactive styles directly to the semantic `<button>` tag, ensure a visible focus state (`focus-visible:ring-2`), and explicitly set `aria-label`s corresponding to the icon's purpose.

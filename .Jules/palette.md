## 2025-04-24 - Accessibility for Placeholder-only Designs

**Learning:** When this app's UI components use placeholder-only designs without visible `<label>` elements (such as the registration form in `DirectionsRegistration.jsx`), adding explicit `aria-label` attributes to the input fields is necessary for screen reader accessibility while maintaining the intended visual pattern.

**Action:** Whenever implementing or reviewing forms in this app, check for the absence of visible `<label>` elements and ensure `aria-label` attributes are consistently applied to provide semantic context for assistive technologies.

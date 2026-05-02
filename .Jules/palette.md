## 2024-05-18 - [Form Input Accessibility]
**Learning:** React components in this project frequently use placeholders instead of visible `<label>` elements for forms (e.g., in `DirectionsRegistration.jsx`). Without visible labels, screen readers lack context and keyboard users miss focus states.
**Action:** When working on form inputs without explicit labels, always add `aria-label` attributes to match the placeholder text and include focus ring utility classes (`focus:ring-2 focus:ring-blue-500 focus:outline-none`) to ensure keyboard accessibility.

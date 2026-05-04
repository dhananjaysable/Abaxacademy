## 2025-03-22 - Form Input Accessibility (DirectionsRegistration)
**Learning:** React components using pure placeholders instead of visible labels (like in DirectionsRegistration) are inaccessible to screen readers and often lack visible focus states for keyboard users.
**Action:** Always add explicit `aria-label` attributes and visible focus states (e.g., `focus:ring-2 focus:outline-none`) when explicit `<label>` elements are omitted from the design.

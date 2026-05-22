## 2024-05-22 - Static Arrays Inside React Components
**Learning:** Defining static arrays inside frequently re-rendering components (especially those driven by `setInterval`, like carousels) creates unnecessary garbage collection overhead because the arrays are re-created on every render cycle.
**Action:** Always extract static configurations, arrays, and objects outside the React component body and use uppercase variable naming (e.g., `CAROUSEL_ITEMS`) to optimize performance and prevent memory churn.

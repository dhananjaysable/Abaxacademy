## 2025-06-02 - Move static arrays out of React components
**Learning:** Defining static arrays inside a React component scope creates unnecessary garbage collection overhead on each render.
**Action:** Always move static arrays or constant objects outside the component definition using uppercase naming conventions.

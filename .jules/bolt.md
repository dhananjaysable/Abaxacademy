## 2024-05-10 - Extracted Static Arrays Outside React Components
**Learning:** Instantiating static arrays or configuration objects inside React components, particularly those with periodic state updates (like `setInterval` in `WhatWeDo.jsx`), creates continuous garbage collection overhead on every re-render.
**Action:** Always define static arrays and constant objects outside the component definition to prevent unnecessary memory allocations and re-creations during component renders.

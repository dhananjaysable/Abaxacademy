## 2026-05-02 - Hoisting Static Arrays to Module Scope
**Learning:** In React components, especially those with periodic state updates (like `setInterval` in `WhatWeDo.jsx`), static arrays and configuration objects defined within the component are recreated on every re-render. This causes unnecessary garbage collection overhead and potential performance degradation over time.
**Action:** Always hoist static arrays and configuration objects outside the component definition to the module scope to prevent continuous recreation, improving memory stability and rendering performance.

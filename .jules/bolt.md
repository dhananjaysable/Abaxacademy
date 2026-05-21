## 2025-05-18 - Prevent GC Overhead in Periodic Re-renders
**Learning:** In React components with `setInterval` that trigger periodic re-renders (like `WhatWeDo.jsx`), declaring static arrays or objects inside the component causes continuous memory reallocation and garbage collection overhead.
**Action:** Always move static arrays and configuration objects outside the component definition, especially in components that re-render frequently due to timers or animations. Use UPPER_SNAKE_CASE to denote these static constants.

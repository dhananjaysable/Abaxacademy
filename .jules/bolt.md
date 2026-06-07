## 2025-06-07 - Avoid Garbage Collection Overhead with Static Arrays and setInterval

**Learning:** In components with periodic state updates (e.g., using `setInterval` every 5 seconds like in `WhatWeDo.jsx`), defining static arrays (like carousel configurations) inside the component causes them to be re-allocated on every re-render. This leads to continuous and unnecessary garbage collection overhead.
**Action:** Always extract static arrays and configuration objects outside of the React component definition (using uppercase naming like `CAROUSEL_ITEMS`) to ensure they are allocated only once.

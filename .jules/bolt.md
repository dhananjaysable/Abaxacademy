## 2024-05-01 - Hoisting Static Arrays in Periodic Components
**Learning:** In components with periodic state updates (e.g., `setInterval` triggering frequent re-renders like in `WhatWeDo.jsx`), defining static configuration arrays inline causes continuous reallocation and garbage collection overhead.
**Action:** Always hoist static configuration arrays and objects to the module scope (using uppercase naming convention) outside the component definition to prevent unnecessary garbage collection overhead during frequent re-renders.

## 2024-05-20 - [Avoid Inner-Component Static Arrays]
 **Learning:** Defining static arrays inside React components (like WhatWeDo.jsx) that have periodic state updates (like setInterval) causes continuous array recreation and garbage collection overhead.
 **Action:** Move static constants and configuration arrays outside the component definition using uppercase naming convention.

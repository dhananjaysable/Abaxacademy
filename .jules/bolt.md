## 2025-05-23 - Prevent Garbage Collection Overhead in Periodic Renders
**Learning:** Components using periodic state updates (like `WhatWeDo.jsx` with `setInterval` every 5 seconds) cause continuous garbage collection overhead when static reference types (like arrays of objects or strings) are defined inside the render loop.
**Action:** Always extract static data arrays and configuration objects outside of the component definition to ensure they are allocated only once.

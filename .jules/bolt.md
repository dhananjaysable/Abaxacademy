## 2026-05-05 - Component Rerender Optimization
**Learning:** Static arrays initialized inside React components cause unnecessary continuous garbage collection overhead, particularly critical in components like WhatWeDo.jsx which have regular re-renders (e.g., from `setInterval`).
**Action:** Always define static arrays and configuration objects outside functional components as uppercase constants to prevent recreation on every render, preserving memory and CPU.

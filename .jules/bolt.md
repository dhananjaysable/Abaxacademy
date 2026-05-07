## 2024-05-07 - Optimize React Component Memory Allocations with Static Arrays

**Learning:** Static arrays or objects defined inside a React component's render function (like `carouselItems` in `WhatWeDo.jsx`) are re-allocated on every single render. This is particularly harmful to performance when components re-render frequently (e.g., via a `setInterval` hook updating state every few seconds), leading to continuous overhead and potential garbage collection stutter.

**Action:** Always move static arrays, configuration objects, and constants outside the component definition if they don't depend on component props or state.

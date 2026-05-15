## 2024-05-20 - [Performance Optimization in `WhatWeDo.jsx`]
**Learning:** `WhatWeDo.jsx` runs a `setInterval` that triggers state updates every 5 seconds. Because `carouselItems` was defined inside the component render body, it was continually re-allocated in memory and subjected to garbage collection on every 5-second interval tick.
**Action:** Always extract static configuration objects and arrays out of components that undergo frequent re-renders (like interval-driven carousels) to reduce garbage collection overhead and memory churn.

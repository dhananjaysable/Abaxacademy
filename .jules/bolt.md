## 2023-10-27 - Inline Static Configuration Arrays with `setInterval` Hooks

**Learning:** The application codebase relies heavily on components utilizing `setInterval` hooks for dynamic behaviors like carousels (e.g., `WhatWeDo.jsx`). Combining this high-frequency render pattern (updates every 5s) with large, inline static arrays (e.g., `carouselItems`, `benefits`) forces continuous reallocation and garbage collection overhead during every render cycle.

**Action:** Always extract static configuration arrays and constant objects outside of the component definition, especially when the component contains frequent state updates. Use uppercase naming conventions (e.g., `CAROUSEL_ITEMS`) to denote these statically bound structures.

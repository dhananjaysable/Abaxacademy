## 2026-05-17 - Component State Intervals and Static Arrays
**Learning:** Components in this codebase like WhatWeDo.jsx use setIntervals (e.g. 5000ms) to create automated carousels. Defining large static data arrays (e.g. array of 8 objects with images and text) inside these components causes unnecessary memory allocation on every tick, leading to garbage collection overhead.
**Action:** Always move static configuration arrays and objects outside of the component body, especially in components that re-render frequently due to timers or animations.

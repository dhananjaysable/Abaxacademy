## 2026-04-30 - [Static Arrays in Periodic Components]
**Learning:** Defining static configuration arrays (like carousel items) inside a React component that uses `setInterval` for state updates causes continuous memory allocation and garbage collection overhead, as the array is re-created every few seconds on re-render.
**Action:** Always lift static arrays and configuration objects outside the component to the module scope, especially in components with periodic state updates or animations.

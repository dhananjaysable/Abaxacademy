## 2024-05-29 - Static Arrays and Re-renders in Periodic Components
**Learning:** Defining static arrays inside React components that have periodic state updates (like `setInterval` in a carousel) causes unnecessary re-allocations on every render, leading to continuous garbage collection overhead.
**Action:** Always move static arrays and configuration objects to the module scope (outside the component function) when they do not depend on component state or props.

## 2024-06-12 - Prevent Continuous Garbage Collection Overhead
**Learning:** In components with periodic state updates (like those using `setInterval`), defining static arrays inside the component causes them to be re-created on every render, leading to continuous garbage collection overhead.
**Action:** Always extract static arrays and configuration objects outside the component definition if they don't depend on component state or props.

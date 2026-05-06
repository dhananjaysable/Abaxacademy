## 2024-05-18 - [Optimize periodic state updates]
**Learning:** In components with periodic state updates (like `setInterval` driving a carousel), static configurations and arrays (like `carouselItems`) declared inside the component are needlessly recreated on every render cycle, leading to continuous garbage collection overhead.
**Action:** Always move static arrays and objects outside of the component definition if they don't depend on component state or props, especially in components with frequent state updates.

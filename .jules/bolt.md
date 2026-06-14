## 2024-06-14 - Move static arrays outside interval-based components
**Learning:** In React components with periodic state updates (like `setInterval` inside a `useEffect`), defining static arrays inside the component causes continuous garbage collection overhead on every render, as the array is recreated.
**Action:** Move static arrays outside the component definition to prevent unnecessary recreation on every render, and remove them (or their `.length` properties) from `useEffect` dependency arrays to avoid ESLint 'react-hooks/exhaustive-deps' warnings.

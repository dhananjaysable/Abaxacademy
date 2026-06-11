## 2026-06-11 - Static Arrays in Interval Components
 **Learning:** In components with periodic state updates like setInterval, static configuration arrays defined inside the component cause continuous memory allocation and garbage collection overhead due to re-renders.
 **Action:** Always define static arrays and constant objects outside the component definition using uppercase naming convention, and ensure their properties are not included in useEffect dependency arrays to avoid exhaustive-deps warnings.

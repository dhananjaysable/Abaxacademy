## 2024-05-14 - [Static Arrays in Intervals]
**Learning:** React components containing `setInterval` state updates (like `WhatWeDo` carousel) are constantly re-rendering. If they define static arrays or config objects internally, those objects are continuously reallocated, causing GC overhead.
**Action:** Always move static arrays out of functional components when periodic re-renders are triggered.

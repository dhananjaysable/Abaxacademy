## 2024-04-22 - Massive Unoptimized Images
**Learning:** The `src/assets` folder contains massive, unoptimized images (some over 12MB). This is a codebase-specific anti-pattern that drastically increases the initial page load payload.
**Action:** Implemented lazy loading for images in components below the fold (`Welcome`, `CertificateSection`, `WhatWeDo`, `CourseSection`). In the future, we should consider compressing these images and serving them in modern formats (like WebP).

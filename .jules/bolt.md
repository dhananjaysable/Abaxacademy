## 2024-05-24 - Unoptimized Asset Bottleneck and Lazy Loading Solution

**Learning:** The project relies heavily on multiple large, unoptimized images (some up to 13MB like `memory_carous.jpg`). While ideally these should be resized/compressed during a build step, adding native lazy loading (`loading="lazy"`) to image components below the fold or inside carousels drastically reduces initial payload size and avoids blocking the main thread during hydration, as the browser automatically handles the deferral until the images enter the viewport.

**Action:** Whenever introducing images below the fold or inside interactive carousels with large potential file sizes, default to adding `loading="lazy"`. Long-term, advocate for an automated image optimization pipeline (e.g., using WebP, resizing) in the build process.

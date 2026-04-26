## 2024-04-26 - Lazy Loading Large Carousel Images
**Learning:** Hidden carousel components that map over large unoptimized assets (e.g. 13MB and 9MB images) can severely block initial page load because the browser attempts to fetch them all immediately.
**Action:** Always add `loading="lazy"` to images inside carousels, lists, and below-the-fold content when working with unoptimized or heavy assets to defer their loading and improve initial performance metrics.

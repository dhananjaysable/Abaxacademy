## 2024-05-15 - Replaced `focus:outline-none` with `focus-visible` in Carousel

**Learning:** An accessibility issue pattern specific to this app's components is the use of `focus:outline-none` on interactive elements like carousel controls, which hides the focus outline entirely. This creates significant usability issues for keyboard navigation users, as they cannot see which element currently has focus.

**Action:** Whenever replacing or addressing `focus:outline-none` styling in this design system, replace it with `focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2` (using appropiate ring colors for contrast) to ensure that the element maintains a hidden focus indicator for mouse users (preserving visual design), while revealing a highly visible focus indicator for keyboard users.

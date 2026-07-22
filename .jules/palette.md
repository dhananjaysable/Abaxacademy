## 2025-02-27 - Replace focus:outline-none with focus-visible for interactive elements
**Learning:** Custom interactive UI elements in this application, such as carousels (WhatWeDo) and mobile menus (MainNavbar), frequently lack `aria-label` attributes and improperly use `focus:outline-none`, breaking keyboard accessibility.
**Action:** Replace `focus:outline-none` with explicit focus styles like `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none` and provide semantic `aria-label`s on all custom icon-only and interactive controls.

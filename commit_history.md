# Git Calculator - Commit History

**Repository:** [spmaniusa-hub/calculator](https://github.com/spmaniusa-hub/calculator)  
**Branch:** `main`  
**Generated:** October 2026  

---

## 1. Executive Summary

This document provides a comprehensive chronological record of all commits made to the `calculator` repository, tracing its evolution from the initial basic prototype to an advanced, feature-rich web application with memory registers, advanced mathematical operations, and an interactive calculation history side panel.

---

## 2. Commit Log Summary Table

| # | Commit SHA | Date | Author | Commit Message | Category |
| :---: | :---: | :---: | :---: | :--- | :---: |
| 12 | `7971712` | 2026-10-17 | spmaniusa-hub | `docs: add updated screenshots and new features documentation to README` | Documentation |
| 11 | `bdd4dd3` | 2026-10-17 | spmaniusa-hub | `feat: implement interactive history side panel` | Feature |
| 10 | `5885403` | 2026-10-17 | spmaniusa-hub | `feat: add square root and percentage calculation logic` | Feature |
| 9 | `51c6ee0` | 2026-10-17 | spmaniusa-hub | `feat: implement standard memory registers for advanced users` | Feature |
| 8 | `0951c94` | 2026-10-15 | spmaniusa-hub | `Merge pull request #2 from spmaniusa-hub/feature/calculator-ui` | Merge |
| 7 | `01c695a` | 2026-10-15 | spmaniusa-hub | `Improved the calcuator User Interface` | UI/UX |
| 6 | `950e6c5` | 2026-10-15 | spmaniusa-hub | `Merge pull request #1 from spmaniusa-hub/feature/dark-mode` | Merge |
| 5 | `a820b78` | 2026-10-14 | spmaniusa-hub | `Add dark mode to calculator` | Feature |
| 4 | `891c4b7` | 2026-10-14 | spmaniusa-hub | `script.js` | Refactor |
| 3 | `f15d26a6` | 2026-10-14 | spmaniusa-hub | `Added keyboard support to calculator` | Feature |
| 2 | `5630a12` | 2026-10-14 | spmaniusa-hub | `added readme.md file, and improved calculator design` | Docs / UI |
| 1 | `f6261a2` | 2026-10-13 | spmaniusa-hub | `Create a Basic Calculator` | Initial |

---

## 3. Detailed Commit History

### Commit 12: Documentation & Screenshots
- **Commit SHA:** `797171277d278b170150213e716a2cfd8e4403c3`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Sat Oct 17 16:24:49 2026 -0700
- **Message:** `docs: add updated screenshots and new features documentation to README`
- **Files Modified:**
  - `README.md` (+12, -4)
  - `screenshot_light.png` (Added binary image)
  - `screenshot_dark.png` (Added binary image)
- **Description:** Added comprehensive feature documentation to the README and embedded rendered screenshots showing the calculator in both Light Mode and Dark Mode with active memory registers and the calculation history panel.

---

### Commit 11: Interactive History Side Panel
- **Commit SHA:** `bdd4dd3bf87d3d7aff33300b3bac242a91eaf4bf`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Sat Oct 17 16:21:40 2026 -0700
- **Message:** `feat: implement interactive history side panel`
- **Files Modified:**
  - `README.md` (+4, -0)
  - `index.html` (+34, -10)
  - `script.js` (+106, -1)
  - `style.css` (+189, -1)
- **Description:** 
  - Implemented `.calculator-wrapper` for side-by-side desktop layout and stacked mobile layout.
  - Added header action button (`🕒 History`) with drawer toggle animation.
  - Built real-time calculation logger recording expressions, results, and timestamps.
  - Added clickable history items allowing users to immediately reload past results into the main display.
  - Added "Clear History" button and full dark mode styling.

---

### Commit 10: Square Root & Percentage Logic
- **Commit SHA:** `588540367ccaaaf41e6aaeff14074ebd971dff1d`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Sat Oct 17 16:19:18 2026 -0700
- **Message:** `feat: add square root and percentage calculation logic`
- **Files Modified:**
  - `README.md` (+4, -0)
  - `index.html` (+6, -0)
  - `script.js` (+45, -0)
  - `style.css` (+27, -0)
- **Description:**
  - Added `calculateSquareRoot()` with negative number protection (`Error`).
  - Added `calculatePercentage()` with keyboard shortcut mapping (`%`).
  - Added `toggleSign()` (`±`) for positive/negative toggling and decimal point button (`.`).
  - Added styled `.adv-func` buttons in both light and dark modes.

---

### Commit 9: Standard Memory Registers
- **Commit SHA:** `51c6ee09b1a76238b1c98238a7446ad5d5fc64e5`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Sat Oct 17 16:18:00 2026 -0700
- **Message:** `feat: implement standard memory registers for advanced users`
- **Files Modified:**
  - `README.md` (+5, -0)
  - `index.html` (+12, -1)
  - `script.js` (+64, -0)
  - `style.css` (+69, -1)
- **Description:**
  - Implemented standard hardware calculator memory registers:
    - **MC (Memory Clear)**: Resets stored memory value to `0`.
    - **MR (Memory Recall)**: Recalls stored value into main display.
    - **M+ (Memory Add)**: Adds current display value to memory register.
    - **M- (Memory Subtract)**: Subtracts current display value from memory register.
  - Added precision floating point handling (`toFixed(10)`).
  - Added visual memory indicator badge (`M`) in display header when `memoryValue !== 0`.

---

### Commit 8: Merge Pull Request #2 (UI Redesign)
- **Commit SHA:** `0951c94a5a66bfdb4332ea4edb478d405295cd73`
- **Author:** `spmaniusa-hub <67622913+spmaniusa-hub@users.noreply.github.com>`
- **Date:** Thu Oct 15 11:56:50 2026 -0700
- **Message:** `Merge pull request #2 from spmaniusa-hub/feature/calculator-ui`
- **Description:** Merged enhanced calculator user interface into `main`.

---

### Commit 7: Modern Calculator UI Overhaul
- **Commit SHA:** `01c695ae4786fdaca1545d4dc8705a5ddab430ce`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Thu Oct 15 11:40:44 2026 -0700
- **Message:** `Improved the calcuator User Interface`
- **Files Modified:**
  - `index.html` (+59, -70)
  - `style.css` (+283, -70)
- **Description:** Redesigned calculator layout using CSS Grid, custom CSS variables, cards with soft shadows, modern typography, and updated button styles.

---

### Commit 6: Merge Pull Request #1 (Dark Mode)
- **Commit SHA:** `950e6c574b9b94ed9ee5c394190755ed1d3486f3`
- **Author:** `spmaniusa-hub <67622913+spmaniusa-hub@users.noreply.github.com>`
- **Date:** Thu Oct 15 09:38:46 2026 -0700
- **Message:** `Merge pull request #1 from spmaniusa-hub/feature/dark-mode`
- **Description:** Merged dark and light theme toggle functionality into `main`.

---

### Commit 5: Dark Mode Implementation
- **Commit SHA:** `a820b78f61590f4e0e0a0912becf810fd668a58e`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Wed Oct 14 11:50:20 2026 -0700
- **Message:** `Add dark mode to calculator`
- **Files Modified:**
  - `index.html` (+3, -0)
  - `script.js` (+13, -1)
  - `style.css` (+22, -0)
- **Description:** Added theme toggle button and `.dark-mode` CSS styles for comfortable nighttime viewing.

---

### Commit 4: Script Refactoring
- **Commit SHA:** `891c4b794097c7c6aa9079b0e94fbc5b17791d26`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Wed Oct 14 11:33:59 2026 -0700
- **Message:** `script.js`
- **Files Modified:**
  - `script.js` (+1, -2)
- **Description:** Minor code cleanup in calculation script.

---

### Commit 3: Physical Keyboard Support
- **Commit SHA:** `f15d26a6c44ebb1e59a9761516909879a97095fd`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Wed Oct 14 10:59:15 2026 -0700
- **Message:** `Added keyboard support to calculator`
- **Files Modified:**
  - `script.js` (+17, -1)
- **Description:** Implemented `keydown` event listener supporting numeric keypad, standard operators (`+`, `-`, `*`, `/`), Enter (`=`), Escape (`AC`), and Backspace.

---

### Commit 2: README & Visual Refinements
- **Commit SHA:** `5630a126a48c91ac0cff36a679ef908ae628b306`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Wed Oct 14 09:48:52 2026 -0700
- **Message:** `added readme.md file, and improved calculator design`
- **Files Modified:**
  - `README.md` (+21, -0)
  - `style.css` (+8, -2)
- **Description:** Created initial documentation and polished styling parameters.

---

### Commit 1: Project Initialization
- **Commit SHA:** `f6261a22cd20f1f2fca367c81274e585c15c2767`
- **Author:** `spmaniusa-hub <spmaniusa@gmail.com>`
- **Date:** Tue Oct 13 10:24:32 2026 -0700
- **Message:** `Create a Basic Calculator`
- **Files Added:**
  - `.DS_Store`
  - `index.html` (+43)
  - `script.js` (+23)
  - `style.css` (+66)
- **Description:** Initial project commit containing base calculator HTML markup, arithmetic logic functions, and fundamental stylesheet.

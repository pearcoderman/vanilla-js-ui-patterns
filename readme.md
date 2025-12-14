# Vanilla JS UI Patterns

A curated collection of **framework-free UI patterns** built with **HTML, CSS, and Vanilla JavaScript**.

No build step. No dependencies. No magic.

Just clean, readable UI primitives you can drop into any project. 

I use these to power most of my mini apps: https://www.yuzool.com

---

![CleanShot 2025-12-14 at 18 29 21](https://github.com/user-attachments/assets/f04e49a9-4906-4db8-a6f5-52b1e1b2c469)

---

## Why This Repo Exists

Modern frameworks abstract away simple UI behavior.
That’s convenient—but it also hides fundamentals.

This repository is a **reference library** for:

* common UI interactions
* accessibility-aware patterns
* copy‑pasteable components
* understanding how things actually work

Each pattern is:

* self‑contained
* readable in under 5 minutes
* usable without modification

---

## Included Patterns

| Pattern     | Description                             |
| ----------- | --------------------------------------- |
| Accordion   | Expand / collapse sections (accessible) |
| Modal       | Keyboard & focus‑safe modal dialog      |
| Tabs        | Simple tab navigation                   |
| Toast       | Lightweight notification system         |
| Dropdown    | Click‑outside aware menu                |
| Copy Button | Copy text to clipboard with feedback    |

---

## Folder Structure

```txt
vanilla-js-ui-patterns/
├── accordion/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── modal/
├── tabs/
├── toast/
├── dropdown/
├── copy-button/
└── README.md
```

Each folder works by **opening `index.html` directly**.

---

## Pattern: Accordion

### Features

* Keyboard accessible
* Smooth height animation
* No hard‑coded heights

### `accordion/script.js`

```js
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});
```

---

## Pattern: Modal

### Features

* Focus trap
* ESC to close
* Click‑outside to close

### `modal/script.js`

```js
const openBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");

openBtn.onclick = () => modal.classList.add("open");
modal.onclick = e => {
  if (e.target === modal) modal.classList.remove("open");
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("open");
});
```

---

## Pattern: Tabs

```js
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab, .panel").forEach(el => el.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.panel).classList.add("active");
  };
});
```

---

## Pattern: Toast Notifications

```js
function toast(message, duration = 2000) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);

  setTimeout(() => el.remove(), duration);
}
```

---

## Pattern: Dropdown (Click Outside)

```js
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");

toggle.onclick = e => {
  e.stopPropagation();
  menu.classList.toggle("open");
};

document.onclick = () => menu.classList.remove("open");
```

---

## Pattern: Copy to Clipboard Button

```js
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.onclick = () => {
    navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = "Copied!";
  };
});
```

---

## Design Principles

* No frameworks
* Minimal JS
* Progressive enhancement
* Accessibility where it matters
* Readability > cleverness

---

## When to Use This Repo

* You want to understand the pattern
* You don’t want to install a library
* You’re building small tools or prototypes
* You want full control

---

## License

MIT

---

## Author

Built as a practical reference.

More tools → **https://www.yuzool.com**

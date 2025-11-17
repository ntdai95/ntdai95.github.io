// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// Highlight active nav link based on file name
(function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const path = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (!href) return;

    const hrefFile = href.split("/").pop();
    if (path === hrefFile) {
      link.classList.add("active");
    }
  });
})();

// Theme toggle (dark / light)
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // ignore storage issues
  }
  if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
  }
}

(function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    stored = null;
  }

  if (stored === "light" || stored === "dark") {
    setTheme(stored);
  } else {
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

// === Scroll reveal: smooth fade/slide-in on scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const revealSelectors = [
    ".hero-text",
    ".hero-photo-wrapper",
    ".section-inner > h2",
    ".section-inner > p",
    ".highlight-grid > *",
    ".cards-grid > .card",
    ".project-card",
    ".activity-header",
    ".tag-list",
    ".footer-inner"
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(","));

  if (revealElements.length === 0) return;

  // Fallback if IntersectionObserver is not supported
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  // Add reveal + stagger classes
  let idx = 0;
  revealElements.forEach((el) => {
    el.classList.add("reveal");
    const delayClass = `reveal-delay-${(idx % 3) + 1}`;
    el.classList.add(delayClass);
    idx += 1;
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});

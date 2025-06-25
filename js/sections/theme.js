document.addEventListener("DOMContentLoaded", () => {
  // Dark / Light Theme Toggle
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-icon");
  const label = toggle.querySelector(".theme-label");
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load from localStorage
  const currentTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    icon.textContent = "☀️";
    label.textContent = "Light";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");

    icon.textContent = isLight ? "☀️" : "🌙";
    label.textContent = isLight ? "Light" : "Dark";

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Mobile nav
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
        navLinks.classList.remove("open");
      }
    });
  });
});

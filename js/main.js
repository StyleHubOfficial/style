document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // 💡 Animation Setup on Scroll
  // ================================
  const observerOptions = {
    threshold: 0.1,
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, observerOptions);

  const animatedEls = document.querySelectorAll(".image-card");
  animatedEls.forEach(el => observer.observe(el));

  // ================================
  // 🌊 Smooth scrolling for nav links
  // ================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Close mobile nav if open
        if (navLinks && navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
        }
      }
    });
  });

  // ================================
  // 🎨 Section Theme Colors + Underlines
  // ================================
  const sectionThemes = {
    logos: "#00ffee",
    thumbnails: "#ff4dde",
    posters: "#ffe600",
    flyers: "#00e676",
    animations: "#ff9800",
    editing: "#40c4ff",
  };

  Object.entries(sectionThemes).forEach(([section, color]) => {
    const title = document.querySelector(`#${section}-section .section-title`);
    if (title) {
      const underline = document.createElement("div");
      underline.classList.add("animated-underline");
      underline.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;

      title.style.position = "relative";
      title.appendChild(underline);
    }
  });
});

// ================================
// 🎯 View More / View Less Toggle
// ================================
const itemsPerLoad = 6;
const imageCache = {}; // to store all loaded image elements

function loadImages(section, max) {
  const container = document.getElementById(`${section}-container`);
  if (!container) return;
  container.innerHTML = "";

  const allImages = imageCache[section] || [];

  allImages.slice(0, max).forEach((imgEl) => {
    container.appendChild(imgEl);
  });

  // toggle buttons (if needed)
}

function loadMore(section) {
  const currentCount = document.querySelectorAll(
    `#${section}-container .image-card`
  ).length;
  const newCount = currentCount + itemsPerLoad;
  loadImages(section, newCount);
}

function viewLess(section) {
  loadImages(section, itemsPerLoad);
}


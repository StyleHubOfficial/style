// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 Style Hub JS Loaded");

  // === GSAP Reveal Animation on Sections === //
  const sections = document.querySelectorAll(".design-section");

  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 80,
      duration: 1,
      delay: index * 0.15,
      ease: "power4.out"
    });
  });

  // === Header Scroll Shrink === //
  const header = document.getElementById("main-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 100) {
      header.classList.add("hide-header");
    } else {
      header.classList.remove("hide-header");
    }
    lastScrollY = currentY;
  });

  // === Style AI Button Animation === //
  const aiButton = document.getElementById("style-ai-button");
  if (aiButton) {
    aiButton.addEventListener("mouseenter", () => {
      gsap.to(aiButton, { scale: 1.2, duration: 0.3, ease: "power1.out" });
    });
    aiButton.addEventListener("mouseleave", () => {
      gsap.to(aiButton, { scale: 1.0, duration: 0.3, ease: "power1.out" });
    });
  }

  // === Default Scroll Reveal for Other Items (icons, etc) === //
  const revealItems = document.querySelectorAll(".reveal-on-scroll");
  revealItems.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});

// === Optional: Smooth Scroll Polyfill === //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

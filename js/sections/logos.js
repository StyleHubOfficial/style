// logos.js

const logosData = [
  // Replace with actual Cloudinary URLs or local paths
  "assets/images/logos/img1.jpeg",
  "assets/images/logos/img2.jpeg",
  "assets/images/logos/img3.jpeg",
  "assets/images/logos/img4.jpeg",
  "assets/images/logos/img5.jpeg",
  "assets/images/logos/img6.jpeg",
  "assets/images/logos/img7.jpeg",
  "assets/images/logos/img8.jpeg",
  "assets/images/logos/img9.jpeg",
  "assets/images/logos/img10.jpeg"
];

let logosVisible = 6;

function renderLogos() {
  const container = document.getElementById("logos-container");
  container.innerHTML = "";

  for (let i = 0; i < logosVisible && i < logosData.length; i++) {
    const src = logosData[i];
    const card = document.createElement("div");
    card.className = "template-card reveal-card diagonal-flow";
    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${src}" alt="Logo ${i + 1}" />
        <div class="hover-overlay">
          <button class="btn edit">Edit</button>
          <button class="btn order">Order</button>
        </div>
        <div class="static-buttons">
          <button class="btn like">❤</button>
          <button class="btn download">⬇</button>
          <button class="btn share">🔗</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  }

  updateButtons();
  initScrollReveal();
}

function loadMore(category) {
  if (category === "logos") {
    logosVisible = logosData.length;
    renderLogos();
  }
}

function viewLess(category) {
  if (category === "logos") {
    logosVisible = 6;
    renderLogos();
  }
}

// === Scroll Reveal Animation ===
function initScrollReveal() {
  const revealCards = document.querySelectorAll(".reveal-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealCards.forEach(card => {
    observer.observe(card);
  });
}

// Run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderLogos);
} else {
  renderLogos();
}

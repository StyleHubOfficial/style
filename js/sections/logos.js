// logos.js

const logoGrid = document.getElementById("logo-grid");
console.log("Appending to:", logoGrid.id);

// Dummy logo thumbnails (hosted on Cloudinary or assets/images)
const logoData = [
  { src: "assets/images/logos/img1.jpeg", alt: "Logo 1" },
  { src: "assets/images/logos/img2.jpeg", alt: "Logo 2" },
  { src: "assets/images/logos/img3.jpeg", alt: "Logo 3" },
  { src: "assets/images/logos/img4.jpeg", alt: "Logo 4" },
  { src: "assets/images/logos/img5.jpeg", alt: "Logo 5" },
  { src: "assets/images/logos/img6.jpeg", alt: "Logo 6" },
  { src: "assets/images/logos/img7.jpeg", alt: "Logo 7" },
  { src: "assets/images/logos/img8.jpeg", alt: "Logo 8" },
  { src: "assets/images/logos/img9.jpeg", alt: "Logo 9" },
  { src: "assets/images/logos/img10.jpeg", alt: "Logo 10" }
];

// Track load count
let logosLoaded = 0;
const logosPerLoad = 6;

function loadMoreLogos() {
  const container = document.getElementById("logo-grid");
  if (!container) return;

  const start = logosLoaded;
  const end = start + logosPerLoad;

  const nextSet = logoData.slice(start, end);

  nextSet.forEach((logo, i) => {
    const variant = `variant-${(Math.floor(Math.random() * 5) + 1)}`;
    const card = document.createElement("div");
    card.className = `design-item ${variant} swipe-bottom`;

    card.innerHTML = `
      <img src="${logo.src}" alt="${logo.alt}" />
      <div class="overlay-icons">
        <button onclick="likeImage('${logo.src}')">❤️</button>
        <button onclick="downloadImage('${logo.src}')">⬇️</button>
        <button onclick="shareImage('${logo.src}')">🔗</button>
        <button onclick="orderImage('${logo.alt}')">🛒</button>
        <button onclick="editImage('${logo.src}')">✏️</button>
      </div>
    `;

    container.appendChild(card);
  });

  logosLoaded += logosPerLoad;

  if (logosLoaded >= logoData.length) {
    const btn = container.nextElementSibling;
    if (btn && btn.classList.contains("view-more")) {
      btn.style.display = "none";
    }
  }
}

// Initial load
// document.addEventListener("DOMContentLoaded", () => {
//   loadMoreLogos();
// });

// === Action Hooks (To Be Connected in Part 16) === //
function likeImage(src) {
  alert("❤️ Liked: " + src);
}

function downloadImage(src) {
  const a = document.createElement("a");
  a.href = src;
  a.download = src.split("/").pop();
  a.click();
}

function shareImage(src) {
  navigator.clipboard.writeText(src).then(() => {
    alert("🔗 Copied to clipboard: " + src);
  });
}

function orderImage(name) {
  alert("🛒 Order request for: " + name);
}

function editImage(src) {
  alert("✏️ Edit mode coming soon for: " + src);
}
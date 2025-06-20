// loader.js

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2200);
});

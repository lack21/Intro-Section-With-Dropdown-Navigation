// lear
// Intro Section With Dropdown Navigation

window.addEventListener("DOMContentLoaded", () => {
  const featureBtn = document.querySelector(".feature");
  const companyBtn = document.querySelector(".company");
  const linksBtn = document.querySelector(".links-btn");
  const container = document.querySelector(".container");

  featureBtn.addEventListener("click", () => {
    featureBtn.classList.toggle("active");
    companyBtn.classList.remove("active");
  });

  companyBtn.addEventListener("click", () => {
    companyBtn.classList.toggle("active");
    featureBtn.classList.remove("active");
  });

  linksBtn.addEventListener("click", () => {
    container.classList.toggle("active");
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 10, linksBtn.src.length - 4) ===
      "n-menu"
        ? "images/icon-close-menu.svg"
        : "images/icon-menu.svg";
  });
});

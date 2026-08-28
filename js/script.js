const mobileMenu = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector("#mobile-navigation");

function setMenu(open) {
  if (!mobileMenu || !menuButton || !mobileNavigation) return;

  mobileMenu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNavigation.hidden = !open;
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileNavigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (mobileMenu && !mobileMenu.contains(event.target)) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) setMenu(false);
});

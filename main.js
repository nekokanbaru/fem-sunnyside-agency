const nav = document.querySelector(".nav-list");
const button = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  nav.toggleAttribute("nav-list-on");
  body.toggleAttribute("scroll-lock");
});

const open = document.querySelector("#menu-open");
const nav = document.querySelector("#menu-modal");
const close = document.querySelector("#menu-close");

open.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});

close.addEventListener("click", () => {
  nav.classList.remove("header__nav--active");
});

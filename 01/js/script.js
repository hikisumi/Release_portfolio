// メニュー開閉
const open = document.querySelector("#menu-open");
const nav = document.querySelector("#menu-modal");
const close = document.querySelector("#menu-close");

open.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});

close.addEventListener("click", () => {
  nav.classList.remove("header__nav--active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("header__nav--active");
});

// ボタンクリックでテキストコピー

const button = document.getElementsByClassName("button--copy");
const buttons = Array.from(button);

buttons.forEach((target) => {
  target.addEventListener("click", () => {
    navigator.clipboard.writeText("06hkcsmk");
    target.innerHTML = "copied!";
  });

  target.addEventListener("click", () => {
    navigator.clipboard.writeText("06hkcsmk");
    target.innerHTML = "copied!";
  });
});

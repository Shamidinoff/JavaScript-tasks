const flexContainer = document.querySelector(".flex-container");
const navMenu = document.querySelector(".modal-flex");
const xCloseIcon = document.querySelector(".close-icon");
const burgerMenu = document.querySelector(".burger-menu");
const descrFlex = document.querySelector(".descr-flex");
const list = document.querySelector(".list");

burgerMenu.addEventListener("click", toggleBurgerMenu);

xCloseIcon.addEventListener("click", closeBurgerMenu);

function toggleBurgerMenu() {
  navMenu.classList.toggle("modal-flex-active");
  list.classList.toggle("list");
}

function closeBurgerMenu() {
  navMenu.classList.remove("modal-flex-active");
  list.classList.remove("list");
}

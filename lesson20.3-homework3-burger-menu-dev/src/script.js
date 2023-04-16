const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav2-container");

burgerMenu.addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  burgerMenu.classList.toggle("close-menu");
  navMenu.classList.toggle("nav2-container-active");
}

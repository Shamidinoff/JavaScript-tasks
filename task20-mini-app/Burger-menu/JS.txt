const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");

burgerIcon.addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  burgerMenu.classList.toggle("active");
  burgerIcon.classList.toggle("active-icon");
}

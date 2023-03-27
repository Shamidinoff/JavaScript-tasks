const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const button = document.querySelector("#modal-btn");
const blackout = document.querySelector(".blackout");
const modalClose = document.querySelector(".modal__close");

//Кнопка click me
button.addEventListener("click", openModel);

//Кнопка X
modalClose.addEventListener("click", closeModal);

//При нажатий на затемненную область
blackout.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("active");
  blackout.style.opacity = 0;
  blackout.style.zIndex = -1;
  document.body.style.overflow = "auto";
}

function openModel() {
  modal.classList.add("active");
  blackout.style.opacity = 1;
  blackout.style.zIndex = 0;
  document.body.style.overflow = "hidden";
}

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    closeModal();
  }
});

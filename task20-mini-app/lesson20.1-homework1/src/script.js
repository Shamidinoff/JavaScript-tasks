const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const button = document.querySelector(".btn");
const blackout = document.querySelector(".modal-blackout");
const modalClose = document.querySelector(".modal-close-icon");

button.addEventListener("click", openModal);

blackout.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("active");
  blackout.style.opacity = 0;
  blackout.style.zIndex = -1;
  document.body.style.overflow = "auto";
}

function openModal() {
  modal.classList.add("active");
  blackout.style.opacity = 1;
  blackout.style.zIndex = 0;
  document.body.style.overflow = "hidden";
}

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "escape") {
    closeModal();
  }
});

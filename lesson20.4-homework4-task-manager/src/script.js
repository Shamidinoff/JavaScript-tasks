// Получаем необходимые элементы со страницы
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function getAllTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage[key];
    addTask(value);
  }
}

getAllTasks();

// Создаем функцию для добавления новой задачи в список
function addTask(text) {
  // Создаем элементы li, checkbox и button
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const button = document.createElement("button");

  // Устанавливаем атрибуты элемента checkbox
  checkbox.type = "checkbox";

  // Устанавливаем текст для элемента button и добавляем ему обработчик клика
  button.textContent = "Удалить";
  button.addEventListener("click", () => {
    li.remove();
    localStorage.clear();
  });

  // Добавляем элементы checkbox, text и button внутрь li
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(text));
  li.appendChild(button);

  // Добавляем li в конец списка ul
  ul.appendChild(li);
}

// Обработчик события submit формы
form.addEventListener("submit", (event) => {
  // Отменяем стандартное поведение формы (перезагрузка страницы)
  event.preventDefault();

  // Получаем текст из поля ввода
  const text = input.value.trim();

  // Если поле ввода пустое, ничего не делаем
  if (!text) return;

  //localstorage
  const randomID = Math.floor(Math.random() * 100000000);
  localStorage.setItem(`task${randomID}`, text);

  // Вызываем функцию для добавления новой задачи в список
  addTask(text);

  // Очищаем поле ввода
  input.value = "";
});

// Обработчик события change checkbox
ul.addEventListener("change", (event) => {
  // Если событие не произошло на элементе checkbox, ничего не делаем
  if (event.target.tagName !== "INPUT" || event.target.type !== "checkbox")
    return;

  // Получаем родительский элемент li
  const li = event.target.parentNode;

  // Если checkbox отмечен, добавляем стиль перечеркивания текста
  // и перемещаем задачу вниз списка
  if (event.target.checked) {
    li.style.textDecoration = "line-through";
    ul.appendChild(li);
  } else {
    // Иначе убираем стиль перечеркивания и перемещаем задачу в начало списка
    li.style.textDecoration = "";
    ul.prepend(li);
  }
});

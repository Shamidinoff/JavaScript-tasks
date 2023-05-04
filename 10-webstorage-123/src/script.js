// ЗАДАНИЕ № 2

// 2-1) - Задать объект с полем name. Задать переменную, которая будет хранить JSON упомянутого объекта. Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

const obj = { name: 'John' };

const jsonString = JSON.stringify(obj);

const parsedObj = JSON.parse(jsonString);

// 2-2) - Создать переменную user, в которой хранится объект. Записать переменную в localStorage. Создать переменную newUser, в которой будет храниться JS объект из localStorage.

const user = { name: 'Alice', age: 25 };

localStorage.setItem('user', JSON.stringify(user));

const newUser = JSON.parse(localStorage.getItem('user'));

// ЗАДАНИЕ № 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const text = input.value.trim();
    if (text !== '') {
      const ul = document.querySelector('ul');
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
      input.value = '';
    }
  });
  
  // ЗАДАНИЕ № 4

  // Калькулятор. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

  // Решение с помощью if:

  const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const num1 = Number(event.target.num1.value);
  const num2 = Number(event.target.num2.value);
  const operator = event.target.operator.value;
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }

  resultDiv.textContent = result;
});

// Решение с помощью eval:

const form2 = document.querySelector('form');
const resultDiv2 = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const num1 = event.target.num1.value;
  const num2 = event.target.num2.value;
  const operator = event.target.operator.value;
  const expression = `${num1} ${operator} ${num2}`;

  const result = eval(expression);

  resultDiv2.textContent = result;
});

// ЗАДАНИЕ № 5

const button = document.getElementById("myButton");

button.addEventListener("mouseenter", function () {
  button.classList.remove("rotate");
});

button.addEventListener("mouseleave", function () {
  button.classList.add("rotate");
});

// ЗАДАНИЕ № 1


// Slozhno i neponyatno


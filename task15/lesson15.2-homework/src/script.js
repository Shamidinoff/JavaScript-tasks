// ЗАДАНИЕ 2 -  Есть объект с именами и заработными платами инженеров:

/* const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000}
Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
Заработная плата ххх составляет ххх рублей. */

/* const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
    }

    for (property in engineers) {
        console.log("Заработная плата " + property + " составляет " + engineers[property] + " рублей");
    } */
    
    // ЗАДАНИЕ 3 - Создать массив из 5 элементов. Используя цикл for, вывести каждый второй элемент массива в консоль.

    /* const Array = [1, 2, 3, 4, 5];

    for (let i = 0; i < Array.length; i += 2) {
        console.log(Array[i]);
    } */

    // ЗАДАНИЕ 4

    /* let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    } */

    // ЗАДАНИЕ 5

    /* let questions = [{
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    }, {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }];
    
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].usersAnswer = null);
    }
 */

   

    // ЗАДАНИЕ 6

    /* let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]; */

// 1) Посчитать и вывести в консоль сумму элементов в массиве.

/* let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Сумма элементов в массиве: " + sum); */

// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.

/* let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}
console.log("Сумма четных элементов в массиве: " + evenSum); */

// 3) Найти и вывести в консоль максимальное число массива.

/* let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Максимальное число в массиве: " + max); */

// 4) Определить и вывести в консоль индекс максимального числа массива.

/* let maxIndex = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
        maxIndex.push(i);
    }
}
console.log("Индексы максимального числа в массиве: " + maxIndex); */

// ЗАДАНИЕ 7

/* let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);  */


// ЗАДАНИЕ 8

/* function filterArray(array, num) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= num) {
        result.push(array[i]);
      }
    }
  
    return result;
  }
  
  
  let arr = [5, 4, 3, 2, 1];
  let filteredArr = filterArray(arr, 3);
  console.log(filteredArr); */


// ЗАДАНИЕ 9

/* const users = [
{name: 'Vasya', age: 23}, 
{name: 'Olya', age: 12}, 
{name: 'Anna', age: 22}, 
{name: 'Alex', age: 18}, 
{name: 'Valery', age: 8}];

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 15) {
        console.log("Имена всех пользователей, возраст которых больше 15: " + users[i].name);
    }
} */

// ЗАДАНИЕ 10

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let wordArray = [];

for (let i = 0; i < vegetables.length; i++) {
  let obj = {
    word: vegetables[i],
    length: vegetables[i].length
  };
  wordArray.push(obj);
}

console.log(wordArray);

for (let i = 0; i < wordArray.length; i++) {
  console.log(`${wordArray[i].word} - ${wordArray[i].length}`);
}
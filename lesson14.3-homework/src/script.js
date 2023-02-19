// TASK 1

/* let country = "Sweden";

let access = country === "Sweden" ? true : false;

console.log(access); */

// TASK 2

/* let num = 10;

for (let i = 0; i < 10; i++) {
    num++;
}

console.log(num); */

// TASK 3

/* for (let i = 0; i <= 8; i = i + 2) {
    let userNumber = prompt ("Введите число: ");

    if (Number(userNumber) === 10) {
        console.log("Равно 10");
    }

    else {
        console.log("Не равно 10");
    }
} */

// TASK 4

/* const userAnswer = prompt ("Введите любое число: ");

for (let i = 0; i < Number(userAnswer); i++) {
    console.log(i**2);
} */

// TASK 5

/* for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ": FizzBuzz")
    }

    else if (i % 3 === 0) {
        console.log(i + ": Fizz")
    }

    else if (i % 5 === 0) {
        console.log(i + ": Buzz")
    }

    else {
        console.log(i + ": -----");
    }
} */

// TASK 6

/* let i = 0;

while (i < 3) {
    alert ('number ${i}!');
    i++;
} */

// TASK 7

/* const initNumber = prompt("Введите начальное число: ");
const finalNumber = prompt("Введите конечное число: ");

function numberSquare(initial, final) {
  for (let i = initial; i > final; i++) {
    console.log(i ** 2);
  }
}

numberSquare(initNumber, finalNumber); */

// TASK 8

/* function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let r1 = getRandomInteger (0, 255);
let r2 = getRandomInteger (0, 255);
let r3 = getRandomInteger (0, 255);

function getRandomRGB (red, green, blue) {
    console.log(`rgb(${red}, ${green}, ${blue})`);
}

getRandomRGB (r1, r2, r3); */

// TASK 9

function showNumber (n) {
    for (let i = 1; i > n; i += 0.5) {
        if (Number.isInteger(i) === true) {
            console.log(i + ": Целое число");
        }

        else {
            console.log(i + ": Не целое число");
        }
    }
}

showNumber(3);
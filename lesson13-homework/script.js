// Work 2

/* const username = prompt("Напишите свое имя: ");
alert("Привет, " + username + "!"); */


// Work 3

/* const number = prompt("Введите число: ");
const degree = prompt("Введите степень для этой цифры: ");

console.log("Вывод: " + number ** degree); */


// Work 5

/* let text = "hidden";

if(text === "hidden"){
    text = "visible";
}
else{
    text = "hidden";
}
    
console.log("Значение после условии: " + text); */


// Work 6

/* let number = 7;
console.log("Изначальное значение: " + number);

if (number === 0){
    number = 1;
}
else if (number < 0) {
    number = "less then zero";
}
else if (number > 0) {
    number *= 10;
}

console.log("Значение после: " + number); */


// Work 7

/* const userNumber = prompt("Введите любое число: ");

let result;

if (Number(userNumber) < 5) {
    result = 0;
}

else {
    result = 1;
}

console.log(result); */



// Work 8

/* const userNumber1 = prompt("Введите первое число: ");
const userNumber2 = prompt("Введите второе число: ");

if (userNumber1 === userNumber2) {
    console.log("Цифры равны");
} else if (userNumber1 > userNumber2) {
    console.log("Большее число: " + userNumber1);
} else {
    console.log("Большее число: " + userNumber2);
} */


// Work 9

/* const num1 = prompt("Введите первое число: ");
const num2 = prompt("Введите второе число: ");

if (num1 % num2 === 0) {
    console.log("Число " +  num1 + " кратное числу " +  num2);
}

else {
    console.log("Число " +  num1 + "не кратное числу" +  num2);
} */


// Work 10

/* const userAnswer = prompt ("Введите ваш средний балл в 10 бальной школе: ");

if (userAnswer >= 1 && userAnswer <= 4) {
    console.log("Ты двоечник");
}

else if (userAnswer >= 5 && userAnswer <= 8) {
    console.log("Ты ударник");
}

else if (userAnswer >= 9 && userAnswer <= 10) {
    console.log("Ты отличник");
}

else {
    console.log("Ты вундеркинд");
} */



// Work 11

const grade = prompt ("Введите ваш средний балл (от 0 до 100): ");
const project = prompt ("Введите кол-во выполненных проектов (от 0 до 10): ");

let finalGrade = 0;

if (grade > 90 || project > 10) {
    finalGrade = 100;
}
else if (grade > 75 && project > 5) {
    finalGrade = 90;
}
else if (grade > 50 && project > 2) {
    finalGrade = 75;
}
else {
    finalGrade = 0;
}

console.log("Ваш выпускной балл: " + finalGrade);
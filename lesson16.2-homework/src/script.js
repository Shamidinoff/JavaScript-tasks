// TASK 1

/* function sum(a, b) {
    
    if (arguments.length < 2) {
        console.log('введите два параметра');
        return;
      }
    else if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('введенные данные не являются числами');
      return;
    }
    
    else {
        return a + b;
    }
    
  };

  console.log(sum(2, 3)); */

  // TASK 2

 /*  function square(a) {
    if (typeof a === 'undefined') {
        console.log("Uncaught Error: Функция 'square' не может быть вызвана без аргумента");
    }
    else if (arguments.length === NaN) {
        console.log("NaN");
    }
    else {
        console.log(a * a);
    }
  }

  console.log(square(5)); */

    // TASK 3

   /*  const guessNumber = (number) => {
        if (number < 1 || number > 10) {
          return 'Введите число от 1 до 10';
        }
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if (number === randomNumber) {
          return 'Вы выиграли';
        } else {
          return `Вы не угадали, ваше число - ${number}, а выпало число ${randomNumber}`;
        }
      };

      console.log(guessNumber(1)); */

      // TASK 4

     /*  let arr = [5, 4, 3, 8, 0];

      const filterFor = (arr, a) => {
        return arr.filter((item) => item >= a);
      };

      console.log(filterFor(arr, 3.11)); */

       // TASK 5

      /*  let arr = [1, 2, 3];
       let copy = copyArr(arr);

       function copyArr(arr) {
        return arr.slice();
      };
       
       
       console.log(arr);
       console.log(copy); */

       // TASK 6

       const objectWithNumbers = {
        a: 10,
        b: 20,
        c: 'string',
        d: 12,
      };

      function sumObjectValues(obj) {
        let sum = 0;
        for (let prop in obj) {
          if (typeof obj[prop] === 'number') {
            sum += obj[prop];
          }
        }
        return sum;
      };

      const sum = sumObjectValues(objectWithNumbers);
        console.log(sum);


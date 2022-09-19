// const factorial = number => {
//     let result = 1;
//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }
//     return result;
//   };
//   const print = factorial(5);
//   console.log(`Esse é o fatorial ${print}`);

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
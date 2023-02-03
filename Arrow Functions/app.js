// array.map(function (x) {
//    return x * 2;
// });

// //Function DECLARATION:
// function greet() {
//    console.log('greetings');
// }

// //Function EXPRESSION:
// const add = function (x, y) {
//    return x + y;
// };

//ARROW Notation
// const add = (x, y) => {
//    return x + y;
// };

// //EXAMPLE
// [1, 2, 3].forEach(function (n, idx) {
//    console.log(n, idx);
// });

// // is the same as
// [1, 2, 3].forEach((n, idx) => {
//    console.log(n, idx);
// });

// [2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
//    return Math.max(max, currNum);
// });

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
   return Math.max(max, currNum);
});

// ********************************
// *** ARROW FUNCTION SHORTCUTS ***
// ********************************

[1, 2, 3, 4, 5].forEach((n) => {
   console.log(n * 10);
});

// ***** With just one parameter, we can skip the parentheses around it. I don't see the need.

// ************** with zero OR more than one parameter, you still need parentheses

const greet = () => {
   console.log('hello');
};

// ***** some arrow functions have an IMPLICIT RETURN if you leave out curly braces

let nums = [1, 2, 3];
let arrSquared = nums.map((n) => n ** 2);
// No curly braces OR return keyword! How cool!

[1, 2, 3, 4, 5, 6].filter(function (num) {
   return num % 2 === 0;
});

//again with the arrows and implicit notations!
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

//and again
const double = (n) => n * 2;

//This one does not get an implicit return. Because it has multiple returns or expressions or w/e. Also it is on multiple lines
[1, 5, 7, 9, 10, 12, 13, 15].map((n) => {
   if (n % 2 === 0) {
      return 'even';
   }
   return 'odd';
});

//rewritten with ternary operator.
[1, 5, 7, 9, 10, 12, 13, 15].map((n) => (n % 2 === 0 ? 'even' : 'odd'));

//
const dailyRainTotals = [
   [1.2, 0.35, 2.2],
   [1.7, 0.6, 0.1],
   [2.5, 0.9, 1.5],
];

// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//        return sum + inchesOfRain;
//     });
//  });

dailyRainTotals.map((hourlyRainTotals) =>
   hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);
//We can use implicit return on something like a nested function, as above. we arent using 'if.' We will often see parentheses around the arrow functions.

//***********************
//ARROW FUNCTION "GOTCHAS"
//***********************

//If you want to (implicitly) return an OBJECT, make sure it is wrapped in () or on more than one line!

// const makeMath = (num) => {
//    return {
//       square: num * num,
//       double: num * 2,
//    };
// };

//implicit return version that doesn't work:
// const makeMath = (num) =>
//  {
//        square: num * num,
//        double: num * 2,
//    };

//Kinda makes sense because of the two differing uses of the curly braces

//implicit return version that DOES work

const makeMath = (num) => ({
   square: num * num,
   double: num * 2,
});

//KEYWORD OF THIS
//Arrow functions do not have their own "this" keyword

// const cat = {
//    name: 'Bubs',
//    meow: function () {
//       return `${this.name} says MEOW!!!`;
//    },
// };

//note the different behavior of 'this'
const cat = {
   name: 'Bubs',
   eat: function () {
      console.log(this);
      return `${this.name} chows down`;
   },
   meow: () => {
      console.log(this);
      return `${this.name} says MEOW!!!`;
   },
};

//BABEL
//turns modern functions into reverse compatible code

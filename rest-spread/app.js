// **********************************
// ******** REST & SPREAD ***********
// **********************************

// Two different operations will the same characters
// "..."

// We start with 'rest'

// Sometimes we don't know how many 'arguments' we will need to add.
//function max(a, b,c,d,e,f,g,h, ... etc){}

// function arguments() {
//    console.log(arguments);
// }

//"arguments" is an object inside a function. It will contain all the parameters passed into the function.

// -arguments object is not an array. It is an 'array-like-object'
// -it has a length property and can be accessed at a specific index but does not have built in array methods like map, filter, etc

//the following function wants to work but it doesn't, because arguments is only 'array-like':
// function sum() {
//    arguments.reduce((sum, val) => {
//       return sum + val;
//    });
// }

//in the past, we would return this array-like-object into a real array:
function doubleArgs() {
   let arrayFromArguments = [].slice.call(arguments);
   // or use Array.from(arguments)
   //then we can run our function on that array
   return arrayFromArguments.map(function (arg) {
      return arg * 2;
   });
}

//Lets try again
function sum() {
   const args = Array.from(arguments);
   return args.reduce((sum, val) => {
      return sum + val;
   });
}

// const max = () => {
//    console.log(arguments);
// };

// 'arguments' object is not defined inside arrow functions!

const max = function () {
   const args = Array.from(arguments);
   return args.reduce((max, currVal) => {
      return currVal > max ? currVal : max;
   });
};

// *** OK NOW FOR REST AND SPREAD ***
// *** ... ***
// *** when '...' is part of the function definition (specifically a parameter) it is the 'rest' operator
// The rest operator is the last parameter defined in a function and will evaluate to an array of all the additional arguments passed in
// We give it a name.

function displayArguments(...restOfArgs) {
   console.log('The first argument is', restOfArgs[0]);
   return `You passed in ${restOfArgs.length} arguments!`;
}

function sumUsingRest(...nums) {
   return nums.reduce((sum, n) => sum + n);
}

//Works with Arrow Notation
const sumAllUsingRest = (...values) => {
   if (!values.length) return undefined;
   return values.reduce((sum, n) => sum + n);
};

// *** We can also specify several named parameters and then use "rest" for, well, the rest

//makeFamily will create an object with parent1, parent2, and optionally an array of any number of children
function makeFamily(parent1, parent2, ...kids) {
   return {
      parents: [parent1, parent2],
      children: kids.length ? kids : 0,
   };
}

// A filter by type function. First parameter is the filter type, the rest are the items to be filtered
// filterByType('number', 1,2,3,'a',true)
// >[1,2,3]
// or
// filterByType('boolean', 1,2,3,'a',true)
// >[true]

// const filterByType = (type, ...vals) => {
//    return vals.filter((v) => typeof v === type);
// };

// *** Don't try to use 'rest' when it's not the last parameter *** //

//-----------------------------

// *** SPREAD ***
// max(...something)
// [...something]
// {...asd}

// SPREAD - 'spreads' out an iterable into different function arguments

// example -- spreads out the array into the separate arguments

function takesFour(one, two, three, four) {
   console.log(one);
   console.log(two);
   console.log(three);
   console.log(four);
}

const names = ['Mary', 'Colt', 'Angela', 'Abe'];

// takesFour(...names);

//Mary
//Colt
//Angela
//Abe

const nums = [4, 5, 88, 123, 0.92, 34];

// Math.max(nums);
// This is bad, because the argument will not be the values, but the entire array.
// We'd have to say
// Math.max(4, 5, 88, 123, etc etc etc)

// Instead we can use SPREAD to send each value in as an argument
// Math.max(...nums);

// *** ANOTHER EXAMPLE *** //
// back to our filter by type function:
const filterByType = (type, ...vals) => {
   return vals.filter((v) => typeof v === type);
};
const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];

filterByType('string', things);
//doesn't work because we are now using an array.
//Instead, let's spread 'em

filterByType('string', ...things);

// Other iterables that work with spread and rest are STRINGS

// Array literals - When you create a new array
// We can 'SPREAD' into a new array

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// Create a copy without SPREAD.
// const paletteCopy = palette;
// It starts out looking good, but they point to the same array. It's not a real copy.

// We can do this
// const paletteCopy = palette.slice();

//or with 'SPREAD.' We can add elements before and after!
const paletteCopy = ['sky blue', ...palette, 'grass green'];

// More! Combining arrays!
const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatamala red cat', 'snow leopard blend'];

// A new array with all teas!
const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];

const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'earl grey'];

// Spread a string into an array
const vowels = 'aeiou';
const vowelArray = [...vowels];

// *** Spread with Object Literals ***
const tea = {
   type: 'oolong',
   name: 'winter sprout',
   origin: 'taiwan',
};

const teaData = {
   steepTime: '30s',
   brewTemp: 175,
};
// Objects are not iterable. We cannot simply 'SPREAD' an object. But I bet we're going to learn how now.

// Copy pieces of an object into a new object.

const tea2 = { ...tea };

const teaTin = { ...tea, price: 22.99 };

// Order will matter when we have conflicting properties. The last value updates.

const newTea = { ...tea, name: 'golden frost' };
const fullTea = { ...tea, ...teaData };

//

// *** Nested Data Structures *** //
// Spread does not perform a deep copy.

const shoppingCart = [
   {
      name: 'honey orchid',
      quantity: 2,
      price: 13.5,
   },
   {
      name: 'african solstice',
      quantity: 4,
      price: 25.99,
   },
];

// The copy of this array refers to the SAME OBJECT. NOT A COPY
const cartCopy = [...shoppingCart];

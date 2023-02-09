/************************************************
 **************OBJECT ENHANCEMENTS****************
 ************************************************/

// Object shorthand //

/*
function makePerson(first, last, age) {
   return {
      first: first,
      last: last,
      age: age,
      isAlive: true,
   };
}
*/

//new shorthand! Don't duplicate!
function makePerson(first, last, age) {
   return {
      first,
      last,
      age,
      isAlive: true,
   };
}
/*



*/

// Object METHODS

/*
const mathStuff = {
   x: 200,
   add: function (a, b) {
      return a + b;
   },
   square: function (a) {
      return a * a;
   },
};
*/
//shorthand : remove the colon and 'function'..don't use arrow functions!!

const mathStuff = {
   x: 200,
   add(a, b) {
      return a + b;
   },
   square(a) {
      return a * a;
   },
};

// Computed Property names

//allows us to create a key-value pair where the key name is a variable

// 'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'

// const color = {
//    periwinkle: '9c88ff',
//    '9c88ff': 'periwinkle',
// };

/* OLD WAY

function makeColor(name, hex) {
   const color = {};
   color[name] = hex;
   color[hex] = name;
   return color;
}
*/

function makeColor(name, hex) {
   return {
      [name]: hex,
      [hex]: name,
   };
}

//Can do simple functions or math or w/e inside the brackets!

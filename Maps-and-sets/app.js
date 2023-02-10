// *********************
// ***     MAPS      ***
// *********************

// Maps are like objects except we can use OTHER variable types as KEYS
// In an object all keys are converted into strings.

// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// // to access data use the "get" keyword.
// // myMap.get(7);

// // to use an array or object, store it in a variable first.
// const empty = [];
// myMap.set(empty, 'empty array!');
// myMap.set(true, 'TRUEEE!');

// ****************************
// ***     MAP METHODS      ***
// ****************************

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

// What if we wanted to count how often we call our different functions?
const funcCalls = new Map();
funcCalls.set(add, 1);
funcCalls.set(mult, 9);
// funcCalls.get(add) - 1
//funcCalls.get(mult) - 9

// SYNTAX FOR  STARTING A MAP THAT ISN'T EMPTY

// We start out with an array of a bunch of  sub arrays. Each sub array is a Key and a Value

const bandData = [
   [3, '3 Doors Down'],
   ['three', 'Three Dog Night'],
   ['four', 'The Four Seasons'],
   ['nine', 'nine inch nails'],
   [41, 'Sum 41'],
];

const bandMap = new Map(bandData);

//We can "...SPREAD" the map back into an array
//chain "set" statements together
bandMap.set('twenty', 'Matchbox Twenty').set(182, 'Blink-182');

// method bandMap.has('three')
// method bandMap.delete('twenty')
// method bandMap.clear //empties entire map

// values and keys give collections of above. In a format called MapIterator; we can spread to a real array.

// Iterate over a map using forEach
// Also, Maps are in a set order (unlike objects)
// Also, Maps have a "size" (again, unlike objects)

// *** TWO WAYS TO ITERATE

// For each or for of
// bandMap.forEach((val, key) => {
//    console.log(key + '=>' + val);
// });

for (let [key, value] of bandMap) {
   console.log(key, '=', value);
}

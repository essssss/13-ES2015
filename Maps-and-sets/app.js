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

// for (let [key, value] of bandMap) {
//    console.log(key, '=', value);
// }

// *********************
// ***     SETS      ***
// *********************

// Sets are like arrays, however each value is unique
// (You cannot have, say, two 7s)
// Any type of value
// Common in other languages
// Create using 'NEW' keyword

// Faster than arrays.
// 'nofilter', 'justsaying', 'winning', 'yolo';

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

// When creating a set, it only takes ONE (1) iterable (array or string or what have you). A string counts as an iterable
// eg: new Set('hello');
// gives a set with 'h', 'e', 'l', 'o'
// Note that there is only one 'l'

// add item to a set with ".add"
// you can chain ".add"s

bannedHashTags.add('bestlife').add('selfie');

// To check if a value is in the Set, use ".has"
// returns a boolean

// .delete deletes a value
// .clear clears the set

function filterHashTags(tags) {
   const bannedHashTags = new Set([
      'nofilter',
      'justsaying',
      'winning',
      'yolo',
   ]);
   return tags.filter((tag) => bannedHashTags.has(tag));
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];

// Main reason to use a set is because it is MUCH more efficient than an array for something like checking for an element, or adding a new element.

// Also very easy to eliminate any duplicates from an array.

const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
const agesNoDupes = [...new Set(ages)];

/* ******** When to use SETS ********
 * to remove duplicate values
 * Uniqueness is required
 * Efficiently checking if an item is in a collection (much better than an array) */

// tangent on 0 and -0.
// -0 is different than 0 in JavaScript.
// Most browsers make them equal in a set though. So you only get one

// Also
// NaN is never equal to NaN
// But it's considered the same in terms of Sets

/* ******** When to use MAPS ********
 * Finding the size is easy. no more loops or Object.keys()
 * Keys can be ANY data type!!
 */

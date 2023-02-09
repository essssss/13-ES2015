/*

*/

const teaOrder = {
   variety: 'oolong',
   teaName: 'winter sprout',
   origin: 'taiwan',
   price: 12.99,
   hasCaffeine: true,
   quantity: 3,
   brewTemp: 180,
};

//It's annoying to have to keep typing "teaOrder."

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

const { price, quantity, ...others } = teaOrder;

//We use the brackets to tell JavaScript that we look in the "teaOrder" obj for the keys of "price", "quantity", and "teaName" and it saves them into new variables.

///We can use the '...rest' operator. It will put the rest into another variable.

// We can set default values

const options = {
   refreshTime: 200,
};
const { refreshTime = 750, waitTime = 1000 } = options;
// refreshTime - 200 (initialized in 'options')
// waitTime - 1000 (fallback to default)

const { brewTemp: temp = 175 } = teaOrder;

//Also give variables a new name! This will set the variable's name as "tea" instead of "teaName"
const { teaName: tea } = teaOrder;

// Use Destructuring in a function!
function checkout(tea) {
   const { quantity, price } = tea;
   return quantity * price;
}
/*


**************** Also with Arrays *************

*/

// Uses square brackets
// names have no bearing on the actual values.. It's the position that counts.

const students = [
   { name: 'Drake', gpa: 4.6 },
   { name: 'Henrietta', gpa: 4.4 },
   { name: 'Tung', gpa: 4.0 },
   { name: 'Harry', gpa: 3.8 },
   { name: 'Ant', gpa: 3.2 },
];

// const [topStudent, secondBest, , fourth] = students;
// Note how we can skip an element by just doing a comma
const [first, ...losers] = students;
//also use '...rest'

// ************ FUNCTIONS AND DESTRUCTURING ***********

// We can destructure dierectly in the parameters list.

const teaOrder2 = {
   variety: 'green',
   teaName: 'silver needle',
   origin: 'taiwan',
   price: 12.99,
   hasCaffeine: true,

   brewTemp: 180,
};

// When we call getTotal(teaOrder2) it will destructure for us! maybe add a default! maybe rename a variable!

function getTotal({ quantity: qty = 1, price }) {
   return qty * price;
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]) {
   return {
      gold,
      silver,
      bronze,
   };
}

// Destructuring Nested objects
// Nest your destructuring!

// const { rated: { rating, advisory } } = movie;

// that does NOT create a 'rated' variable but it does create the rating and advisory varaiables.

// destructure an object nested inside an array inside an object
//const {} = movie              // the full object
//const { Ratings } = movie     // the Ratings array inside the movie object
//const { Ratings: [ { } ] }    // the nested square and curly braces

//const { Ratings: [ { Value: imdbRating }, {Value: rottenTomatoesRating}, { Value: metacriticRating} ] }      // The values of each rating object (imdb, rotten tomatoes, and metacritic). They are renamed

// ****************
// DESTRUCTURE SWAP
// ****************

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// A swap would involve a temporary placeholder variable
// eg:
// let temporary = delicious;
// delicious = disgusting;
// disgusting = temporary;

// Swapping can be pretty common in stuff like sorting. So maybe we can destructure

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;
//That swaps them.

//Fancy destructuring syntax!!! :::

//doesn't use a new variable or new array or w/e
[disgusting, delicious] = [delicious, disgusting];

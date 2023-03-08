'use strict';

// Destructuring Arrays
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (firstIndex, secondIndex) {
    return [this.startMenu[firstIndex], this.mainMenu[secondIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining
console.log(restaurant.openingHours.tue?.open);

// Destructurring array in modern JS
const [, first, , second] = restaurant.categories;
console.log(first, second);

const [bruschetta, pizza] = restaurant.order(1, 0);
console.log(bruschetta, pizza);

// Destructurring objects in modern JS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want to get different names we still need to reference to real keys in the object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = ['default menu'], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Spread Operator (...)
const arr = [7, 8, 9];
const incorrectNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(incorrectNewArr);

const correctNewArr = [1, 2, ...arr];
console.log(correctNewArr);

// if we can print all the elements of an array indibidually we also can use the spread operator
console.log(...correctNewArr);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const newMenu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(newMenu);

// Iterables are arrays, strings, maps, sets. NOT objects
const myName = 'Ruslan';
const letters = [...myName, '', 'Mr.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects ES6 spread operator even work with Objects despite Objects are not iterable
const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

/**
 * REST Pattern and Parameters (pack variables into Array)
 */

// SPREAD, because on RIGHT side of =
const arr1 = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [i, o, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(others);

const [pizza1, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
console.log(otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const result = [4, 5, 7, 48, 43, 98, 34, 12, 7];
console.log(add(...result));

const rest1 = {
  name: 'Carpi',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giowanni Rossi',
};

rest1.numGuests ??= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 6
const printGoals = function (...players) {
  for (let i of players) {
    console.log(i);
  }
};
printGoals(game.scored);
//7
team1 < team2 && console.log('Team 1 id more likely to win');

const specialMenu = [...restaurant.mainMenu, ...restaurant.startMenu];
for (let course of specialMenu) {
  console.log(course);
}
// for of loop with indexes
for (let [i, item] of specialMenu.entries()) {
  console.log(`${i + 1}: ${item}`);
}

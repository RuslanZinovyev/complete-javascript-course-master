'use-strict';

console.log('--- OR ---');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Ruslan');
console.log('' || 'Ruslan'); // '' is falsy
console.log(true || 0);
console.log(undefined || null); // undefined is falsy
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' because this is the first operand which is not falsy

const restaurant = {
  name: 'Tropicana',
  orderPizza: function (...pizzas) {
    for (let i = 0; i < pizzas.length; i++) {
      console.log(pizzas[i]);
    }
  },
  numGuests: 0,
};

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guest2 = restaurant.numGuests || 10;
console.log(guest1);
console.log(guest2);

console.log('--- AND ---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Ruslan'); // result is NULL since it's a first falsy value and it should be returned

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'olives'); // it prints mushrooms and olives

console.log('--- NULLISH COALESCING ---');
// Nullish: null and undefined (not 0 or '')
const guests = restaurant.numGuests ?? 10; // it returns 0 because numGuests = 0, which is not case when we use ||, because it considers 0 as falsy value
console.log(guests);

console.log('--- LOGICAL ASSIGNMENTS OPERATORS ---');

const rest1 = {
  name: 'Carpi',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giowanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

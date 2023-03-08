'use strict';

const ruslan = {
  name: 'Ruslan',
  year: 1984,
};

const victor = {
  name: 'Victor',
  year: 1975,
  family: ['Diana', 'Ruslan', 'Stanislav'],
};

let x = true;
let y = 455.34;

console.log(typeof x);

const diana = ruslan;
diana.year = 1983;

console.log(`Ruslan dob is ${ruslan.year}!`);
console.log(`Diana dob is ${diana.year}!`);

const copyVictor = Object.assign({}, victor);
copyVictor.year = 1990;
copyVictor.family.push('Elina');

console.log(victor);
console.log(copyVictor);

console.log(victor.year);
console.log(copyVictor.year);

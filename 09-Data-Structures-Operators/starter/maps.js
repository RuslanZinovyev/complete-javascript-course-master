'use-strict';

const rest = new Map()
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Maps iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

const openingHours = {
  open: '9:00',
  close: '22:00',
};

// Convert objeect to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// for loop
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(3);
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);

'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //    ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5, 200);

// Primitive types vs Reference types
const flight = 'LH234';
const ruslan = {
  name: 'Ruslan Zinovyev',
  passport: 74820377493,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  //   if (passenger.passport === 74820377493) {
  //     alert('Checki in');
  //   } else {
  //     alert('Wrond passport!');
  //   }
};

checkIn(flight, ruslan);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ruslan');
// it oworks because of closure mechanism in JS
greet('Hi')('Diana');

// the same implementation using the arrow functions
const greetArrow = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greetArrow('Good evening')('Ruslan');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} fligt ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Ruslan Zinovyev');
lufthansa.book(635, 'Jonas Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work sine this is undefined
// book(23, 'Sarah Williams');

// method call() specify THIS as a first argument, and we can call this method on function because function is an Object in JS
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Maty Cooper');

// apply method actually do the same, but it gets THIS as first argument and array as second one (array of arguments) It's not used anymore in modern JS
const flightData = [83, 'George Cooper'];
book.apply(lufthansa, flightData);
book.call(lufthansa, ...flightData);

// Bind method returns function that bind argument as THIS keyword
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxArrow = rate => value => {
  return value + value * rate;
};

console.log(addTaxArrow(0.1)(200));
const addVat = addTaxArrow(0.23);
console.log(addVat(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    (Write option number)`);
    if (Number(answer) <= 3 && Number(answer) >= 0 && !isNaN(answer)) {
      this.answers[answer]++;
    } else {
      alert('Please enter number from 0 to 3');
    }
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (typeof type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus section
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

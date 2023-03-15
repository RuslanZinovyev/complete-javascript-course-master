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

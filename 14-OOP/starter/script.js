'use strict';

const Person = function (firstName, birthYear) {
  // Instance propeties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
matilda.calcAge();
jack.calcAge();

console.log(jack instanceof Person);

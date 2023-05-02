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

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
matilda.calcAge();
jack.calcAge();

console.log(jack instanceof Person);

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

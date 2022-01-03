'use strict';

const ruslan = {
  firstName: 'Ruslan',
  birthYear: 1984,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  greet: function () {
    console.log(`Hey, my name is ${this.firstName}`);

    // Solution 1
    // const that = this;

    // const isCorrectName = function () {
    //   console.log(that.firstName === 'Ruslan');
    // };

    // Solution 2
    const isCorrectName = () => {
      console.log(this.firstName === 'Ruslan');
    };

    isCorrectName();
  },
};

ruslan.greet();

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(2, 5);

let addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// We can't do this with arrow function (it should contain exactly 2 arguments)
// addArrow(2, 5, 6, 8);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// It is not going to work since we just copy a reference, not a value, the lastname output will be the same
console.log(
  `Jessica lastName is ${jessica.lastName}, MarrieJessica lastName is ${marriedJessica.lastName}`
);

// What if we really want to copy an Object, what should we do in this scenario?
const maria = {
  firstName: 'Maria',
  lastName: 'Stevens',
  age: 30,
  family: ['Alice', 'Bob', 'Jimmy'],
};

// To copy an Object (shallow copy, not the deep one) we are using the static method assign()
const kate = Object.assign({}, maria);
kate.firstName = 'Kate';
kate.lastName = 'Blanshett';

console.log(
  `Kate lastname is ${kate.lastName}, Maria lastname is ${maria.lastName}`
);

console.log('Maria object:', maria);
console.log('Kate object:', kate);

// Let's try to change family members of Kate object
kate.family[0] = 'Ruslan';

console.log('Maria object:', maria);
console.log('Kate object:', kate);

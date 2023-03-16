'use-strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Main takeaway: A function has access to the variable environment (VE) of the execution context in which it was created, even if this execution context is gone
/*
A closure is the closed-over VARIABLE ENVIRONMENT of the execution context in which a function was created, even after that execution context is gone.
A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves th scope chain throughout time.
A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.
*/
console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();

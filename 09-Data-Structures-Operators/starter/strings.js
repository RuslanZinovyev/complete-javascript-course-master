'use-strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4)); // Java substring analogue
console.log(airline.slice(4, 7)); // end value is not included, the length equals end - start, that is 3 in our example

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' '))); // Portugal

console.log(airline.slice(-2)); // al, it starts counting from the end since the index is negative
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  return s === 'B' || s === 'E' ? true : false;
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// replacing
const priceGB = '288,97';
const priceUS = priceGB.replace(',', '.');
console.log(priceUS);

// booleans
const planeAirbus = 'Airbus A320neo';
console.log(planeAirbus.includes('A320'));
console.log(planeAirbus.includes('Something'));
console.log(planeAirbus.startsWith('Air'));

const name = 'ruslan';

const reverseName = name => {
  let arr = name.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  return arr;
};
console.log(reverseName('race condition'));

// join method
const nameArray = ['Mr', 'Ruslan', 'Zinovyev'];
const fullName = nameArray.join(' ');
console.log(fullName);

// padding method
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4358489756871245));
console.log(maskCreditCard('4456789751231137'));

// repeat method
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'PLANE '.repeat(n)}`);
};

planesInLine(10);

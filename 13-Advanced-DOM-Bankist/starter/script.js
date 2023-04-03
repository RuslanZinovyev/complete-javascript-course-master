'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (event) {
  event.preventDefault;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling implementation
btnScrollTo.addEventListener('click', event => {
  const s1coords = section1.getBoundingClientRect();
  // OldSchool way to scroll to particular section
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // Modern way for the same operation
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// document.querySelectorAll('.nav__link').forEach(element => {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    // Matching strategy
    if (event.target.classList.contains('nav__link')) {
      event.preventDefault();
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

////////////////////////////////////////////////
///////////// Experimental code ///////////////
///////////////////////////////////////////////

// Selecting elements
const header = document.querySelector('header');
console.log(header);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allSections = document.querySelectorAll('section');
console.log(allSections);
const buttons = document.getElementsByTagName('button');
console.log(buttons);

// Creating and Inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We are using cookies on our web site';
message.innerHTML =
  'We are using cookies on our web site. <button class="btn btn--close-cookie">Got it!</button>';
// prepend add message element as a first child to header element
// header.prepend(message);
// append add message element as a last child to header element
// header.append(message);
// add elements as siblings
// header.before(message);
// header.after(message);
// const messageBtn = document.querySelector('.btn--close-cookie');
// messageBtn.addEventListener('click', () => {
//   message.remove(messageBtn);
// });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// Attributes
const logo = document.querySelector('.nav__logo');
logo.setAttribute('company', 'Bankist');
// absolute url path
console.log(logo.src);
const url = logo.getAttribute('src');
console.log(url);
// Classes, you can change it to real class name
// logo.classList.add('c');
// logo.classList.remove('c', 'f');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// const alertH1 = event => {
//   alert('addEventListener: Great! You are reding the heading =)');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', alertH1);

// it's obsolete approach
// h1.onmouseenter = () => {
//   alert('it works');
// };

// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', event.target, event.currentTarget);

//     // we also can stop propogation, but usually it's not a good idea to stop the propogation explicitly
//     // event.stopPropagation();
//   });

document.querySelector('.nav').addEventListener('click', function (event) {});

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
header.prepend(message);
// append add message element as a last child to header element
header.append(message);
// add elements as siblings
// header.before(message);
// header.after(message);
const messageBtn = document.querySelector('.btn--close-cookie');
messageBtn.addEventListener('click', () => {
  message.remove(messageBtn);
});

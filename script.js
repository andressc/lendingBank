'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalWindow.length; i++)
  btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});


/////////////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector('.header'));
const sect = document.querySelectorAll('.section');

console.log(sect);

console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('img'));
console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = "Мы используем на этом сайте куки для улучшения функциональности"
message.innerHTML = 'Мы используем на этом сайте куки для улучшения функциональности <button class="btn btn--close-cookie">OK</button>';
const header = document.querySelector('.header');
header.append(message);
//header.before(message)
//header.append(message.cloneNode(true))

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

//Стили
message.style.backgroundColor = '#076785';
message.style.width = '100%';
console.log(getComputedStyle(message).width);
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
document.documentElement.style.setProperty('--color-first', 'red');

//Атрибуты
const logo = document.querySelector('.nav__logo');
console.log((logo.alt));
console.log((logo.src));
console.log((logo.className));

//Добавление атрибутов
logo.alt = 'Лого прекрасного банка';
logo.setAttribute('Master', 'ihhhhaaa');

//Нестандартный атрибут
console.log(logo.getAttribute('developer'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href, link.textContent);
console.log(link.getAttribute('href'));

//data Атрибуты
console.log(logo.dataset.versionNumber);

//Классы

logo.classList.add('a', 'b'); //добавить
logo.classList.remove('a', 'b'); //удалить
logo.classList.toggle('a'); //заменить
console.log(logo.classList.contains('c')); //содержит

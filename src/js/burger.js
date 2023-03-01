const burgerBtn = document.querySelector('.burger');
const restPage = document.querySelector('.burger__background');
const navLink = document.querySelector('.navigation__link');


burgerBtn.addEventListener('click', toggleMenu);
navLink.addEventListener('click', toggleMenu);
restPage.addEventListener('click', toggleMenu);



function toggleMenu() {
  const navigation = document.querySelector('.navigation__list');
  const logo = document.querySelector('.header__logo');
  const body = document.querySelector('.body');
  
  navigation.classList.toggle('navigation__list_active');
  burgerBtn.classList.toggle('burger_active');
  logo.classList.toggle('header__logo_active');
  body.classList.toggle('body_overflow');
  restPage.classList.toggle('burger__background_active');
}
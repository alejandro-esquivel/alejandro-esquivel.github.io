const navlinks = document.querySelector('.navlinks');
const burger = document.querySelector('.burger');
const fullWrapper = document.querySelector('.full');

burger.addEventListener('click', () => {
  navlinks.classList.toggle('active');
  burger.classList.toggle('active');
  fullWrapper.classList.toggle('active');
  document.body.classList.toggle('noscroll');
});

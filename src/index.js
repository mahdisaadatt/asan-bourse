import { tippy } from './tooltip'

const $ = document;

// Navbar animation
const hamburgerMenu = $.querySelector('.hamburgerMenu');
const navWrapper = $.querySelector('.wrapper');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('isActive');
  if (window.innerWidth < '992') {
    navWrapper.classList.toggle('navShower');
  }
});
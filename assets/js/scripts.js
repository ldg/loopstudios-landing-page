//mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const mobileTrigger = document.getElementById('hamburger');
const closeButton = document.getElementById('close-button');

function openMenu() {
    mobileMenu.classList.toggle('open');
    // mobileMenu.style.marginLeft = '0vw';
}
mobileTrigger.addEventListener('click', openMenu);

function closeMenu() {
    mobileMenu.classList.toggle('open');
    // mobileMenu.style.marginLeft = '100vw';
}
closeButton.addEventListener('click', closeMenu);
//mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const mobileTrigger = document.getElementById('hamburger');
const closeButton = document.getElementById('close-button');

function openMenu() {
    mobileMenu.classList.toggle('open');
}
mobileTrigger.addEventListener('click', openMenu);

function closeMenu() {
    mobileMenu.classList.toggle('open');
}
closeButton.addEventListener('click', closeMenu);
const toggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobile');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('scrollDown');
})
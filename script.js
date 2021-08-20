// MOBILE NAV TOGGLE FUNCTIONALITY

const toggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobile');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('displayNav');
})

// NAVBAR - HEIGHT CHANGES WHEN USER SCROLLS DOWN 

const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 && window.innerWidth > 1150) {
        navBar.classList.add('scrollDown');
    } else if (window.scrollY === 0 && window.innerWidth > 1150) {
        navBar.classList.remove('scrollDown');
    }
})

// SIDE BAR WITH OTHER BOOKS 
const linkOpen = document.getElementById('sideBarOpen')
const closeSideBar = document.getElementById('closeSideBar');
const sideBar = document.querySelector('.sideBarBox')

linkOpen.addEventListener('click', () => {
    sideBar.classList.add('active');
})
closeSideBar.addEventListener('click', () => {
    sideBar.classList.remove('active');
})
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
    sideBar.scrollIntoView({ behavior: "smooth" })
})
closeSideBar.addEventListener('click', () => {
    sideBar.classList.remove('active');
})

//MODAL INFO 
const messages = ["The Greatest Book in the ebook format is currently out of stock! We're waiting for a delivery.", "Are you sure you want to buy this book? It may significiantly change your life. Sleep it over. Come back tomorrow, please.", "The author is waiting for ink delivery, we're sorry!"]
const buyBtns = document.querySelectorAll('.buyBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const information = document.getElementById('messageToUser');
const modalBoxMobile = document.getElementById('modalMobile');
buyBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        disableScroll();
        information.innerHTML = `${messages[idx]}`;
        modal.classList.add('active');
        if (window.innerWidth < 1150) {
            modalBoxMobile.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
        }
    })
})
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    enableScroll();
})


function disableScroll() {
    document.body.classList.add('disableScroll');
}

function enableScroll() {
    document.body.classList.remove('disableScroll');
}
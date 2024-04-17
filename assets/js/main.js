//show menu 
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//hide menu
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


//change shadow header
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50
        ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);


//slider
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
});


//scrollup 
const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 250 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);


//active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


//animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home__data, favorites__container, .footer__container`);
sr.reveal(`.home__circle`, { delay: 400, scale: 0.3 });
sr.reveal(`.home__subcircle`, { delay: 500, scale: 0.2 });
sr.reveal(`.home__img`, { delay: 600, scale: 0.1 });
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, { delay: 1000, interval: 100 });
sr.reveal(`.home__leaf`, { delay: 1200 });
sr.reveal(`.home__tomato-1`, { delay: 1500 });
sr.reveal(`.home__tomato-2`, { delay: 1700 });
sr.reveal(`.care__img, .contact__img`, { origin: 'left' });
sr.reveal(`.care__list, .contact__data`, { origin: 'right' });
sr.reveal(`.banner__item, .products__card`, { interval: 100 });













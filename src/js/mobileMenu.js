export const mobileMenu = () => {
    const menuBtn = document.querySelector(".header-btn--menu");
    const slideNav = document.querySelector(".sidenav");
    const body = document.querySelector("body");
    const menuBodyChanger = document.querySelector(".menuBodyChanger");

    const clickOutsideMenu = (e) => {
        if (menuBtn.contains(e.target)) return;//Prevents from changing classes twice 
        if (!slideNav.contains(e.target)) {
            slideNav.classList.remove('sidenav--open');
            menuBtn.classList.remove('header-btn--menu--open');
            menuBodyChanger.classList.remove('menuBodyChanger--open');
            body.classList.remove('bodynoscrolling');
        }
    };
    window.addEventListener('click', clickOutsideMenu, true);


    menuBtn.addEventListener('click', () => {
        slideNav.classList.toggle('sidenav--open');
        menuBtn.classList.toggle('header-btn--menu--open');
        menuBodyChanger.classList.toggle('menuBodyChanger--open');
        body.classList.toggle('bodynoscrolling');
    });
}



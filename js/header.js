const openMenu = document.querySelector(".navbar__burger-menu");
const closeMenu = document.querySelector(".burger-menu-screen__buttons__close__icon");
const menu = document.querySelector(".burger-menu-screen");
const cover = document.querySelector(".black-cover");
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar")
const image = document.querySelector(".navbar__logo__img")

const x = window.matchMedia("(min-width: 480px) and (max-width: 767px)")

openMenu.addEventListener("click", () => {
    menu.classList.add("active-menu-screen");
    cover.classList.add("active-black-cover");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active-menu-screen");
    cover.classList.remove("active-black-cover");
});

document.onclick = function (e) {
    if (!menu.contains(e.target) && !openMenu.contains(e.target)) {
        menu.classList.remove("active-menu-screen");
        cover.classList.remove("active-black-cover");
    }
}

window.addEventListener("scroll", (e) => {
    const scroll = this.scrollY;
    if (scroll > 80) {
        header.classList.add("active-header");
        image.classList.add("active-logo");
    } else {
        header.classList.remove("active-header");
        image.classList.remove("active-logo");
    }
})
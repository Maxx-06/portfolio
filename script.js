const menuIcon = document.querySelector(".menu__icon");
const navBar = document.querySelector(".nav__icon");
const header = document.querySelector(".navbar");

//--------------------------------------------------------
// MenuIcon Navbar

menuIcon.addEventListener("click", () => {
  if (!navBar.classList.contains("show__icon")) {
    navBar.classList.add("show__icon");
  } else {
    navBar.classList.remove("show__icon");
  }
});
//--------------------------------------------------------

//--------------------------------------------------------
//Adding box shadow to navbar on scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("navbar__scroll");
  } else {
    header.classList.remove("navbar__scroll");
  }
});
//--------------------------------------------------------



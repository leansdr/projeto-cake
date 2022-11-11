let openMenu = document.querySelector("header #menu");
let closeMenu = document.querySelector("header #menu-mobile #close ");

openMenu.addEventListener("click", () => {
  let menuMobile = document.querySelector("header #menu-mobile");
  menuMobile.classList.add("menu-opened");
});

closeMenu.addEventListener("click", () => {
  let menuMobile = document.querySelector("header #menu-mobile");
  menuMobile.classList.remove("menu-opened");
});

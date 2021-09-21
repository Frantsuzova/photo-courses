// картинка мобильного меню
const mobileMenu = document.querySelector(".header__mobile");
// картинка закрытия мобильного меню
const closeMobileMenu = document.querySelector('.header__close');

const menuBtn = document.querySelector(".header__icon-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile_active");
  menuBtn.classList.remove("header__icon-menu");
  menuBtn.classList.toggle("header__icon-menu_latent");
});

closeMobileMenu.addEventListener('click', function () {
  mobileMenu.classList.remove("header__mobile_active");
  menuBtn.classList.toggle("header__icon-menu");
  menuBtn.classList.remove("header__icon-menu_latent");
});

let subButton = document.getElementById("email-submit");
subButton.addEventListener("click", (event) => {
  subButton.value = "Спасибо";
  event.preventDefault();
});


// картинка мобильного меню
const mobileMenu = document.querySelector(".header__mobile");
// картинка закрытия мобильного меню
const closeMobileMenu = document.querySelector('.header__close');

const menuBtn = document.querySelector(".header__icon-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile_active");
});

closeMobileMenu.addEventListener('click', function () {
  mobileMenu.classList.remove("header__mobile_active");
});

const subButton = document.getElementById("email-submit");
subButton.addEventListener("click", () => {
  subButton.value = "Спасибо";
});

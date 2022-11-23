const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");

navToggle.classList.add("navigation__toggle--v");
nav.classList.add("navigation--closed");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("navigation--closed");
});
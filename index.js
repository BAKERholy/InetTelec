const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");

navToggle.classList.add("navigation__toggle--v");
nav.classList.add("navigation--closed");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("navigation--closed");
});


document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion-item--active')) {
      parent.classList.remove('accordion-item--active');
    } else {
      document
        .querySelectorAll('.accordion-item')
        .forEach((child) => child.classList.remove('accordion-item--active'))

      parent.classList.add('accordion-item--active');
    }
  })
)
// const heroBtn = document.querySelector(".hero-btn");
// const backDrop = document.querySelector(".back-drop");
// const closeBtn = document.querySelector(".modal-menu-close-btn");

// heroBtn.addEventListener("click", handleClick)



// closeBtn.addEventListener("click", handleClick)

// function handleClick(){
//   backDrop.classList.toggle("is-open")
// }

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    perPage: 3 // Початкове значення для десктопу
  }).mount();

  function updateSlider() {
    const width = window.innerWidth;
    let newPerPage;

    if (width < 768) {
      newPerPage = 1; // Mobile
    } else if (width > 767) {
      newPerPage = 2; // Tablet
    }

    splide.options = { perPage: newPerPage };
    splide.refresh();
  }

  updateSlider(); // Виклик функції при завантаженні сторінки

  window.addEventListener('resize', function () {
    updateSlider(); // Виклик функції при зміні розміру вікна
  });
});







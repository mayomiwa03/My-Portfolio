// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// close the menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});

// slider
// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const slider = document.querySelector(".slider");
// let autoSlideInterval;

// function startAutoSlide() {
//   autoSlideInterval = setInterval(() => {
//     goToNextSlide();
//   }, 3000);
// }

// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
// }

// function goToNextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateSliderPosition();
// }

// function goToPrevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateSliderPosition();
// }

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// startAutoSlide();

// let touchStartX = 0;
// let touchEndX = 0;

// slider.addEventListener("touchstart", function (e) {
//   touchStartX = e.changedTouches[0].screenX;
// });

// slider.addEventListener("touchmove", function (e) {
//   touchEndX = e.changedTouches[0].screenX;
// });

// slider.addEventListener("touchend", function () {
//   handleSwipe();
// });

// function handleSwipe() {
//   const swipeThreshold = 50;
//   if (touchStartX - touchEndX > swipeThreshold) {
//     stopAutoSlide();
//     goToNextSlide();
//     startAutoSlide();
//   }

//   if (touchEndX - touchStartX > swipeThreshold) {
//     stopAutoSlide();
//     goToPrevSlide();
//     startAutoSlide();
//   }
// }

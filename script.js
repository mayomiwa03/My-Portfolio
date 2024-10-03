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
// const textElements = [
// "Web Developer",
// "Web Designer",
// "Problem Solver",
// "Programmer",
// ];
// let index = 0;

// setInterval(() => {
//   document.getElementById("changing-text").innerHTML = textElements[index];
//   index = (index + 1) % textElements.length;
// }, 2000); // 2 seconds

const texts = ["Web Developer", "Web Designer", "Problem Solver", "Programmer"];
const typingSpeed = 100; // ms
const deletingSpeed = 100; // ms
const pauseDuration = 2000; // ms

let index = 0;
let textIndex = 0;
let typing = true;

function animate() {
  const textElement = document.getElementById("typing-animation");

  if (typing) {
    textElement.textContent = texts[index].slice(0, textIndex + 1);
    textIndex++;

    if (textIndex === texts[index].length) {
      typing = false;
      setTimeout(() => {
        textIndex = 0;
        typing = true;
        index = (index + 1) % texts.length;
      }, pauseDuration);
    }
  } else {
    textElement.textContent = texts[index].slice(0, textIndex);
    textIndex--;

    if (textIndex === -1) {
      typing = true;
    }
  }

  setTimeout(animate, typing ? typingSpeed : deletingSpeed);
}

animate();

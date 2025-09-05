// Hamburger menu toggle
"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list li"); // Select all list items

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Close nav when clicking outside list items
document.addEventListener("click", (event) => {
  const isClickOnHamburger = hamburger.contains(event.target);
  const isClickOnNavItem = Array.from(navItems).some((item) =>
    item.contains(event.target)
  );

  if (!isClickOnHamburger && !isClickOnNavItem) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

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
    // Typing logic
    textElement.textContent = texts[index].slice(0, textIndex + 1);
    textIndex++;

    if (textIndex === texts[index].length) {
      typing = false; // Switch to deleting after typing is complete
      setTimeout(() => {
        typing = false;
      }, pauseDuration);
    }
  } else {
    // Deleting logic
    textElement.textContent = texts[index].slice(0, textIndex - 1);
    textIndex--;

    if (textIndex === 0) {
      typing = true; // Switch back to typing for the next word
      index = (index + 1) % texts.length; // Move to the next text
    }
  }

  setTimeout(animate, typing ? typingSpeed : deletingSpeed);
}

// Start the animation
animate();

const cursor = document.getElementById("cursor");

// // Update the position of the circle based on mouse movement
// document.addEventListener("mousemove", (event) => {
//   const { clientX, clientY } = event;

//   // Move the cursor circle to the mouse position
//   cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
// });

// //

// const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image paths
// let index = 0;
// const slider = document.getElementById("slider");

// function changeBackground() {
//   slider.style.backgroundImage = `url(${images[index]})`; // Set background image
//   index = (index + 1) % images.length; // Move to the next image, reset to 0 after the last image
// }

// setInterval(changeBackground, 4000); // Change background every 4 seconds
// changeBackground(); // Set the initial background

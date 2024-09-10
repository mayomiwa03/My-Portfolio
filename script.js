// Function to highlight the active section in navigation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section"); // All sections on the page
  const navLinks = document.querySelectorAll(".nav-link"); // All navigation links

  let currentSection = "";

  // Loop through each section to see which one is currently in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Remove the 'active' class from all links, then add it to the current one
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// close the menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener(click, function () {
    headerEl.classList.toggle("nav-open");
  });
});

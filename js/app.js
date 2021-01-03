// ----------- SWIPER ----------
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// DESCRIPTION APPEARANCE
function appear() {
  var aboutText = document.querySelector(".about-txt");
  var textPosition = aboutText.getBoundingClientRect().top;
  var projects = document.querySelector(".projects-work");
  var projectPosition = projects.getBoundingClientRect().top;
  var contact = document.querySelector(".contact-accounts");
  var contactPosition = contact.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (textPosition < screenPosition) {
    aboutText.classList.add("appear");
  }
  if (projectPosition < screenPosition) {
    projects.classList.add("appear");
  }
  if (contactPosition < screenPosition) {
    contact.classList.add("appear");
  }
}
window.addEventListener("scroll", appear);

// MAIN PAGE
var left = document.querySelector("#left");
var right = document.querySelector("#right");

const tl = new TimelineMax();

tl.fromTo(left, 3, { opacity: 0 }, { opacity: 0.9 }).fromTo(
  right,
  3,
  { opacity: 0 },
  { opacity: 0.9 },
  "-=3"
);

// // CHANGING LAYOUTS
// const header = document.querySelector(".header");
// const about = document.querySelector(".about");
// const projects = document.querySelector(".projects");
// const contact = document.querySelector(".contact");

// const headerName = document.querySelector(".name");
// const aboutText = document.querySelector(".about-txt");
// const projectsSwiper = document.querySelector(".projects-work");
// const contactText = document.querySelector(".contact-accounts");

// const options = document.querySelectorAll(".header-options p");
// const menu = document.querySelectorAll(".menu p");
// console.log(menu[1]);

// headerName.addEventListener("click", function () {
//   about.classList.add("none");
//   projects.classList.add("none");
//   contact.classList.add("none");
//   header.classList.remove("none");
// });

// for (var i = 0; i < menu.length; i++) {
//   switch (i) {
//     case 0:
//       options[0].addEventListener("click", function () {
//         header.classList.add("none");
//         projects.classList.add("none");
//         contact.classList.add("none");
//         aboutText.classList.add("appear");
//       });
//       menu[0].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.remove("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       menu[2].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.remove("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       menu[4].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.remove("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       break;
//     case 1:
//       options[1].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.add("none");
//         contact.classList.add("none");
//         projectsSwiper.classList.add("appear");
//       });
//       menu[1].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.add("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       menu[3].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.add("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       menu[5].addEventListener("click", function () {
//         header.classList.add("none");
//         about.classList.add("none");
//         projects.classList.remove("none");
//         projectsSwiper.classList.add("appear");
//       });
//       break;
//     case 2:
//       options[2].addEventListener("click", function () {
//         header.classList.add("none");
//         projects.classList.add("none");
//         about.classList.add("none");
//         contactText.classList.add("appear");
//       });
//       break;
//     // case 3:
//     //   options[3].addEventListener("click", function () {
//     //     header.classList.add("none");
//     //     projects.classList.add("none");
//     //     about.classList.add("none");
//     //     contactText.classList.add("appear");
//     //   });
//     //   break;
//     // case 4:
//     //   options[4].addEventListener("click", function () {
//     //     header.classList.add("none");
//     //     projects.classList.add("none");
//     //     about.classList.add("none");
//     //     contactText.classList.add("appear");
//     //   });
//     //   break;
//     // case 5:
//     //   options[5].addEventListener("click", function () {
//     //     header.classList.add("none");
//     //     projects.classList.add("none");
//     //     about.classList.add("none");
//     //     contactText.classList.add("appear");
//     //   });
//     //   break;
//   }
// }

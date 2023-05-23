"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const header = document.querySelector("header");
const message = document.createElement("div");
const linksContainer = document.querySelector(".nav__links");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  // e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Navigation
linksContainer.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

// const ulEls = document.getElementsByTagName("li");
///////////////////////////////////////
// Cookie message
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality & analytics. <button class="btn btn--close-cookie">Got it!</button>`;
message.style.backgroundColor = "#37383d";

header.before(message);
message.style.height = `${parseFloat(getComputedStyle(message).height) + 25}px`;

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.parentNode.removeChild(message));

// const myEl = document.querySelector(".hello");

btnScrollTo.addEventListener("click", (e) => {
  e.preventDefault();
  const { x, y } = section1.getBoundingClientRect();
  window.scrollTo({
    top: y + window.scrollY,
    left: x + window.scrollX,
    behavior: "smooth",
  });
  // section1.scrollIntoView({ behavior: "smooth" });
});

// const demo = document.querySelector("#demo");

// section1.addEventListener("click", () => console.log("hello"));
// section1.addEventListener("click", () => console.log("heya"));
// section1.onclick = () => console.log("hello!");
// section1.onclick = () => console.log("heya!");

// const random = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   const hexDigits = "1234567890abcdef";
//   let colorCode = "#";

//   let i = 1;
//   while (i <= 6) {
//     colorCode += hexDigits[random(0, 15)];
//     i += 1;
//   }

//   return colorCode;
// };

// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`---Navigation---`);
//     console.log(`Target -->`, e.target);
//     console.log(`Current Target -->`, e.currentTarget);
//     console.log(`---End Nav---`);
//   },
//   true
// );

// document.querySelector(".nav__links").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`---Unordered List---`);
//     console.log(`Target -->`, e.target);
//     console.log(`Current Target -->`, e.currentTarget);
//     console.log(`---End Ul---`);
//   },
//   true
// );

// document.querySelector(".nav__link").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     this.style.backgroundColor = randomColor();
//     console.log(`---Link---`);
//     console.log(`Target -->`, e.target);
//     console.log(`Current Target -->`, e.currentTarget);
//     console.log(`---End Link---`);
//     // e.stopPropagation();
//   },
//   true
// );

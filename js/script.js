/* jshint esversion:6 */

const bigTitleTag = document.querySelector(".big-title");
const fixedNavTag = document.querySelector(".fixed");
const hiddenTextTag = document.querySelector(".hidden-text");
const navTag = document.querySelector("nav");


const slideInHeader = function() {
  $(bigTitleTag).animate({
    "top": "50%"
  });
};

const slideInNav = function() {
  $(navTag).animate({
    "bottom": "40%"
  });
};

window.onload = slideInHeader();
window.onload = slideInNav();

document.addEventListener("scroll", function() {

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);
  if (distanceFromTop > 3000) {
    bigTitleTag.style.opacity = "0";
    navTag.style.opacity = "0";
    hiddenTextTag.style.bottom = "35%";
  } else {
    bigTitleTag.style.opacity = "1";
    navTag.style.opacity = "1";
    hiddenTextTag.style.bottom = "-1000px";
  }


});
//
// /*jshint esversion: 6 */

// we need to listen for scroll events on the page
// when the scroll bar reaches a certain distance
// we want to change the background colour of the body

// step1. deceide which tags we want to use and save them as contsants at the top of the page
const bodyTag = document.querySelector("body");

// step 2 decide which user events ie, click, scroll etc, we want to trigger our code on. here we want to listen out for scroll events on our page
document.addEventListener("scroll", function() {
  console.log("Page has been scrolled");

  //Step 3. find out and store how far from the top of the page the scroll bar is
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // if the distance from top is greater than 1000px, do something

  if (distanceFromTop > 980) {
    // console.log("passed 980px");
    // bodyTag.style.backgroundColor = "purple";
    bodyTag.classList.add("brogue-active");
  } else {
    bodyTag.classList.remove("brogue-active");
    // console.log("less than 980px");
    // bodyTag.style.backgroundColor = "#f5f5f5";
  }

  if (distanceFromTop > 4200) {
    bodyTag.classList.add("stationary-active");

  } else {
    bodyTag.classList.remove("stationary-active");
  }

});
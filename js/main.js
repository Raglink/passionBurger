console.log("it works");

// Responsive menu
const header = document.querySelector("header");
const nav = document.querySelector(".mobile-nav");
const toggleNav = () => header.classList.toggle("open");
nav.addEventListener("click", toggleNav);

// Close free shipping panel
const close = document.querySelector(".close");
const freeShipping = document.querySelector(".free-shipping");
const removeShipping = () => freeShipping.classList.add("free-shipping-close");
close.addEventListener("click", removeShipping);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

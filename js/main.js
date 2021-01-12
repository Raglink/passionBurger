// Display responsive nav
const responsiveNavButton = document.getElementById("mobile-nav-button")
const nav= document.getElementById("nav")
const displayResponsiveNav =()=>{
  if(nav.className === "responsive-nav"){
    nav.className = "nav"
  }else {
    nav.className = "responsive-nav"
  }
}
responsiveNavButton.addEventListener("click", displayResponsiveNav)

// Close free shipping panel
const freeShippingCross = document.getElementById("free-shipping-cross");
const freeShippingBlock = document.getElementById("free-shipping");
const removeShipping = () => freeShippingBlock.style.display="none";
freeShippingCross.addEventListener("click", removeShipping);

// When the user scrolls the page, execute myFunction
const scrollProgres = ()=> {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener("scroll", scrollProgres)


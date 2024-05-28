window.onscroll = function() {stickNavbar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
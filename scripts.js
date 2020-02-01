
const elNavContainer = document.getElementById("nav-container");
const elLeftMenu = document.getElementById("left-menu");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => { //using event listener instead of .onscroll as if use .onscroll again will override it
  elNavContainer.style.top = prevScrollPos > window.pageYOffset ? "0" : "-70px";
  prevScrollPos = window.pageYOffset;
}); 

const burgerClick = (x) => x.classList.toggle('change');

//function burgerAnimate(x) {
  
//  x.classList.toggle("change");

  //const navBox = document.getElementById('nav-toggle');
  //let navChecked = navBox.checked ? navBox.checked = false : navBox.checked = true;
//}
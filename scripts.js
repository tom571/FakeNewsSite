
const elNavContainer = document.getElementById("nav-container");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => { //using event listener instead of .onscroll as if use .onscroll again will override it
  elNavContainer.style.display = prevScrollPos > window.pageYOffset ? "block" : "none";
  prevScrollPos = window.pageYOffset;
}); 

const burgerClick = (x) => x.classList.toggle('change');

//function burgerAnimate(x) {
  
//  x.classList.toggle("change");

  //const navBox = document.getElementById('nav-toggle');
  //let navChecked = navBox.checked ? navBox.checked = false : navBox.checked = true;
//}
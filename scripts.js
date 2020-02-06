const elNavContainer = document.getElementById("nav-container");
const elLeftMenu = document.getElementById("left-menu");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => { //using event listener instead of .onscroll as if use .onscroll again will override it
  elNavContainer.style.top = prevScrollPos > window.pageYOffset ? "0" : "-70px";
  prevScrollPos = window.pageYOffset;
});

const burgerClick = (x) => x.classList.toggle('change');

function showQuiz() {
  let hero = document.getElementsByClassName("hero-text");
  Array.from(hero).forEach(e =>e.style.display = "none");

  let quiz = document.getElementsByClassName("quizContainer");
  Array.from(quiz).forEach(e =>e.style.display = "block");
  
  onLoad();
}

function closeQuiz()
{
  let quiz = document.getElementsByClassName("quizContainer");
  Array.from(quiz).forEach(e => e.style.display = "none");

  let hero = document.getElementsByClassName("hero-text");
  Array.from(hero).forEach(e =>e.style.display = "block");
}
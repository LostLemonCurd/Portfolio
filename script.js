// Better visibility for the return to the top arrow by changing its color.

let arrowUp = document.querySelector("#arrow-up");
console.log(arrowUp);
let footer = document.querySelector("#footer");
console.log(footer);
function toggleArrowColor() {
  if (window.scrollY + window.innerHeight > footer.offsetTop) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
}
window.addEventListener("scroll", toggleArrowColor);

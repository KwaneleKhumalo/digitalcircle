let openNav = document.querySelector(".open-nav")
let closeNav = document.querySelector(".close-nav")
let aboutNav = document.querySelector(".about-nav")
const copyright = document.querySelector(".copyright-text")

copyright.textContent = `\u00A9${new Date().getFullYear()}`

openNav.addEventListener("click", () => {
  openNav.style.display = "none"
  closeNav.style.display = "inline-block"
  aboutNav.classList.remove("d-none")
  aboutNav.classList.add("d-flex")
})

closeNav.addEventListener("click", () => {
  openNav.style.display = "inline-block"
  aboutNav.classList.remove("d-flex")
  aboutNav.classList.add("d-none")
  closeNav.style.display = "none"
})

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
})

// Type Effect
let typed = new Typed(".auto-type", {
  strings: ["Web Design", "Graphic Design", "Digital Marketing"],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true
})

// Initiating Materialize
$(document).ready(function () {
  $("input#input_text, textarea#textarea2").characterCounter()
})

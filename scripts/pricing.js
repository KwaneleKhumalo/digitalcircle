document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
});

// Type Effect
let typed = new Typed(".auto-type", {
  strings: ["Let Us", "Discuss Your", "Next Project"],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true
})
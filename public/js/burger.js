console.log('hamburger')
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav .nav-links");
const links = document.querySelectorAll("nav .nav-links li");
const content = document.querySelector('.burger');
const row = document.querySelector('.row');
const rowss = document.querySelector('.rowss');
console.log(row)

hamburger.addEventListener("click", () => {
  console.log('hamburger')
  content.classList.toggle('empty');
    navLinks.classList.toggle("open");
    row.classList.toggle("burger-full")
    if(rowss){
    rowss.classList.toggle("rowss")
    }
  
  links.forEach(link => {
      // link.classList.toggle("fade");
  });
});

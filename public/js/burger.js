const navlinks = document.querySelectorAll('.navbar-links li a');
const burger = document.querySelector('.menu-btn');
const navigatelinks = document.querySelector('.navbar-links');
const menuBurger = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn'); 
const linkAppear = document.querySelectorAll('.navbar-links a');
let menuOpen = false;

burger.addEventListener('click', ()=> {
  if(!menuOpen) {
    menuBtn.classList.add('open-nav');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open-nav');
    menuOpen = false;
  }
  console.log('click')
  navigatelinks.classList.toggle('links');
  menuBurger.classList.toggle('menu-btn-small');
  menuBtn.classList.toggle('menu-small-btn')

  linkAppear.forEach(link => {
   link.classList.toggle('appear');
  })  
})

navlinks.forEach(nav => {
  nav.addEventListener('click', ()=> {
    setTimeout(()=>{
      let d  = nav.getAttribute('href');
      window.location.href = d;
    },700)
   
  })
})






// console.log('hamburger')
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector("nav .nav-links");
// const links = document.querySelectorAll("nav .nav-links li");
// const content = document.querySelector('.burger');
// const row = document.querySelector('.row');
// const rowss = document.querySelector('.rowss');
// console.log(row)

// burger.addEventListener("click", () => {
//   .classList.toggle('empty');
//     navLinks.classList.toggle("open");
//     row.classList.toggle("burger-full")
//     if(rowss){
//     rowss.classList.toggle("rowss")
//     }
  
//   links.forEach(link => {
//       // link.classList.toggle("fade");
//   });
// });

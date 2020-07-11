
const Appear = document.querySelectorAll('.appear');
const cover = document.querySelector('.cover');
const activelink = document.querySelectorAll('.nav li a');
let menuOpen = false;




activelink.forEach(nav => {
  nav.addEventListener('click', ()=> {
    setTimeout(()=>{
      let d  = nav.getAttribute('href');
      window.location.href = d;
    },700)
   
  })
})



  console.log(window.location.href);
  console.log(activelink[0].href)

  activelink.forEach((link, i) => {
    console.log(link, i)
 if (window.location.href == activelink[i].href ) {
                link.classList.add('currentLink');
            }
            else {
                link.classList.remove('currentLink');

            }
  })
           
  


function onClickMenu(){
if(document.querySelector('.footer-area')){
  document.querySelector('.footer-area').classList.toggle('footer-lost');
  document.querySelector('.cover').classList.toggle("static");

}

if(document.querySelector('.stop')){
  document.querySelector('.stop').classList.toggle("stop-scroll");
}
 
	document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
	console.log(document.getElementById("menu-bg"));
	document.getElementById("menu-bg").classList.toggle("change-bg");
};

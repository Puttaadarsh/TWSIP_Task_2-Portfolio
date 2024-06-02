const navE1=document.querySelector(".nav");
const hamburgerE1=document.querySelector(".hamburger");
//Actual folder...


hamburgerE1.addEventListener("click" ,() => {
    navE1.classList.toggle("nav--open");
    hamburgerE1.classList.toggle('hamburger--open');
});

// navE1.addEventListener('click', ()=>{
//     navE1.classList.remove("nav--open");
//     hamburgerE1.classList.remove("hamburger--open");
// });

window.onscroll=() =>{
    const header1=document.querySelector(".header");
    header1.classList.toggle('sticky',window.screenY>0);
    navE1.classList.remove("nav--open");
    hamburgerE1.classList.remove("hamburger--open");
}
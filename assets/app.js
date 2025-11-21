"use strict"; 

// BackToTop
const backToTop = document.querySelector(".backToTop");
const target = document.getElementById("top");

if(backToTop && target){
window.addEventListener("scroll", showBackToTop);
backToTop.addEventListener("click", smoothScroll);
}
// console.log(window.innerHeight);
function showBackToTop(){
    const currentScroll = window.scrollY;
    if(currentScroll > window.innerHeight/4){
        backToTop.classList.add("backToTop--show");
        // console.log(currentScroll);
    }
    else{
        backToTop.classList.remove("backToTop--show");
    }
}

function smoothScroll(event){
    console.log("smooth")
    event.preventDefault();
    target.scrollIntoView({behavior: "smooth"});
}



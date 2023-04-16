///set date//
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();

//close links//
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click",function(){
    linksContainer.classList.toggle("show-links")
    const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
   }else{
    linksContainer.style.height = 0
   }
})


const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")
///fixed navbar//
window.addEventListener("scroll",function(){
    const scrollHeigth = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeigth > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeigth > 500){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }
})

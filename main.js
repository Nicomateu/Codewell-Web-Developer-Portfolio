<<<<<<< HEAD
const body = document.querySelector("body")
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".menu")


navToggle.addEventListener("click", () =>{
    
    navMenu.classList.toggle("nav-menu_visible")


    if(navMenu.classList.contains("nav-menu_visible")){
        body.classList.add("disabledScroll");
    }else{
        body.classList.remove("disabledScroll");
    }
});


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click",function(){
        navMenu.classList.remove("nav-menu_visible");
        document.getElementsByClassName('nav-toggle')[0].firstElementChild.innerHTML = 'menu';
        body.classList.remove("disabledScroll");
   
    })
})



=======
const body = document.querySelector("body")
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".menu")


navToggle.addEventListener("click", () =>{
    
    navMenu.classList.toggle("nav-menu_visible")


    if(navMenu.classList.contains("nav-menu_visible")){
        body.classList.add("disabledScroll");
    }else{
        body.classList.remove("disabledScroll");
    }
});


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click",function(){
        navMenu.classList.remove("nav-menu_visible");
        document.getElementsByClassName('nav-toggle')[0].firstElementChild.innerHTML = 'menu';
        body.classList.remove("disabledScroll");
   
    })
})



>>>>>>> 1c5f7111b9ea0e92ce5db4cddb8452d463e1dfb3

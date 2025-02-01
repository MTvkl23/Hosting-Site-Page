let $ = document;
let menuIcon = $.querySelector(".header-menu__icon");
let menuIconBtn = $.querySelector(".header-menu__icon i");
let menu = $.querySelector(".menu");

menuIcon.addEventListener("click", function(){
    if(menuIconBtn.classList.contains("fa-bars")){
        menu.style.left = "0";
        menuIconBtn.classList = "fa fa-times";
    }else{
        menu.style.left = "-256px";
        menuIconBtn.classList = "fa fa-bars";
    }
})
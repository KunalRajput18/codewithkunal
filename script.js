let burger = document.querySelector(".navicon");
let naviagtion = document.querySelector(".navigation");
let list = document.querySelector(".visible1");

burger.addEventListener("click", () => {
    naviagtion.classList.toggle("h-nav");
    list.classList.toggle("visible");
})
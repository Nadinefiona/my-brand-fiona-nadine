let burger = document.querySelector('.burger');
let ulLink = document.querySelector('.nav-links');


burger.addEventListener("click" ,() => {
    ulLink.classList.toggle("active");
    console.log(ulLink);
})
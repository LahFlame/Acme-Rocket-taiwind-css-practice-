
const initApp = () => {

const date = new Date();
const year =  date.getFullYear();
const yearel = document.getElementById("year");
yearel.innerHTML = year;

const openMenu = document.getElementById("menu-open");
const menuBtn = document.getElementById("hamburger-button");

const toggleDisplay = () => {
    openMenu.classList.toggle("hidden");
    openMenu.classList.toggle("flex");
    menuBtn.classList.toggle('toggle-btn')
}
menuBtn.addEventListener("click",toggleDisplay);
openMenu.addEventListener("click",toggleDisplay);

}
document.addEventListener("DOMContentLoaded",initApp);
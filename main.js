const barra = document.querySelector(".barraN");
const navMenu = document.querySelector(".nav-menu");

barra.addEventListener("click", () => {
    barra.classList.toggle("active");
    navMenu.classList.toggle("active");
})
let botonMenu;

botonMenu = document.getElementById("boton");
console.log(botonMenu);

function monstrarMenu() {
    let navMenu = document.getElementById("navegacion")
    if(navMenu.style.display === "block") {
        navMenu.style.display = "none";

    } else {
        navMenu.style.display = "block";
    }
}
botonMenu.addEventListener("click", monstrarMenu)
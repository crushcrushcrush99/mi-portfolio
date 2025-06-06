let menuVisible = false;
// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    if(menuVisible){
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculta el menú una vez que selecciono una opción
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK EN EL DOM (Clases) ------------------------------------ */
/* -------------------------------------------------------------------------------- */
const navega = document.querySelectorAll(".ocul-navbar");
const ocultaConClick = function (evento) {    
    document.getElementById("navbarSupportedContent").classList.toggle('show');
}
// navega es un arreglo así que lo recorremos
navega.forEach(nav => {
    //Agregar listener
    nav.addEventListener("click", ocultaConClick);
});

/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK EN EL DOM (Identificadores) --------------------------- */
/* -------------------------------------------------------------------------------- */
hacerClicDash = document.getElementById("contenedor");
hacerClicDash.addEventListener('click', function (event) {
    id = event.target.getAttribute("id");
    if (id === "btn-menu-lateral") {
        btnMenuLateral();
    }
});
// Ocultar Panel Lateral
function btnMenuLateral() {
    document.getElementById("panel-lateral").classList.toggle('activar-panel');
    document.getElementById("config").classList.toggle('activar-panel');
    document.getElementById("modulos").classList.toggle('activar-panel');
    document.getElementById("area_principal").classList.toggle('ampliar-principal');
}
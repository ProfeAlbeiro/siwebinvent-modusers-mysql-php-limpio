/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK EN EL DOM --------------------------------------------- */
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
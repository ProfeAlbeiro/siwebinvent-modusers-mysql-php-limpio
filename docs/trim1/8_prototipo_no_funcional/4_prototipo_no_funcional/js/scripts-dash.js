/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK EN EL DOM (Clases) ------------------------------------ */
/* -------------------------------------------------------------------------------- */
const navega = document.querySelectorAll(".ocul-navbar");
const panel = document.querySelectorAll(".ocul-panel");

// Recorre
navega.forEach(nav => {    
    nav.addEventListener("click", ocultaNav);    
});
panel.forEach(aside => {
    aside.addEventListener("click", ocultaPanel);
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

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
// Ocultar Barra de Navegación
function ocultaNav() {
    var item = document.getElementById("panel-lateral");
    var panelActivo = item.classList.contains('activar-panel');    
    document.getElementById("navbarSupportedContent").classList.toggle('show');
    if (screen.width < 992 && !panelActivo) {
        btnMenuLateral();
    } 
}

// Ocultar Panel Lateral
function btnMenuLateral() {    
    document.getElementById("panel-lateral").classList.toggle('activar-panel');
    document.getElementById("config-img").classList.toggle('ocultar-aside');
    document.getElementById("config-text").classList.toggle('ocultar-aside');
    document.getElementById("config").classList.toggle('activar-panel');
    document.getElementById("modulos").classList.toggle('activar-panel');
    document.getElementById("area_principal").classList.toggle('ampliar-principal');
}

// Ocultar Panel Lateral: Celular
function ocultaPanel() {
    if (screen.width < 992) {
        btnMenuLateral();
    }
}

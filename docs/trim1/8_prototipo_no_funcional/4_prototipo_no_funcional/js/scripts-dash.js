
/* -------------------------------------------------------------------------------- */
/* DATATABLES: FILTROS EN TABLA --------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
$(document).ready(function () {
    var table = $('#data-tables').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy',
            'csv',
            'excel',
            'pdf',
            {
                extend: 'print',
                text: 'Imprimir Todo',
                exportOptions: {
                    modifier: {
                        selected: null
                    }
                }
            }
        ],
        select: true,
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true,
        language: {
            search: 'Buscar',
            zeroRecords: 'No hay registros para mostrar.',
            emptyTable: 'La tabla está vacia.',
            info: "Mostrando _START_ de _END_ de _TOTAL_ Registros.",
            infoFiltered: "(Filtrados de _MAX_ Registros.)",
            paginate: {
                first: 'Primero',
                previous: 'Anterior',
                next: 'Siguiente',
                last: 'Último'
            }
        }
    });
});


/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE ID Y CLICK EN EL DOM (Clases) ------------------------------- */
/* -------------------------------------------------------------------------------- */
const navega = document.querySelectorAll(".ocul-navbar");
const panel = document.querySelectorAll(".ocul-panel");
const capturaId = document.querySelectorAll(".captura-id");
const eliminaUser = document.querySelectorAll(".tabla-delete");

// Oculta Barra Navegación
navega.forEach(nav => {    
    nav.addEventListener("click", ocultaNav);    
});
// Oculta Panel de Control
panel.forEach(aside => {
    aside.addEventListener("click", ocultaPanel);    
});
// Eliminar Usuario
eliminaUser.forEach(elimina => {
    elimina.addEventListener("click", deleteUser);
});
// Captura el Id
capturaId.forEach(captura => {
    captura.addEventListener("click", capturaIdMet);
});

function capturaIdMet() {
    id = event.target.getAttribute("id");     
    if (id === "btn-menu-lateral") {
        btnMenuLateral();
    } else if (id === "submit-user-create") {
        event.preventDefault();
        swal({
            title: "Usuario Creado correctamente!",
            text: "Le llegará al Usuario un Correo Electrónico para validar el Registro",
            icon: "success",
            button: "Aceptar",
        })
            .then((value) => {            
            // document.formUserCreate.submit();            
            window.location = '../1_users/user_read.html';
        });
    } else if (id === "submit-user-update") {
        event.preventDefault();
        swal({
            title: "Usuario Actualizado correctamente!",
            text: "Verifique el registro con los datos actualizados",
            icon: "success",
            button: "Aceptar",
        })
            .then((value) => {
            // document.formUserCreate.submit();            
            window.location = '../1_users/user_read.html';
        });
    }
}

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// Ocultar Barra de Navegación
function ocultaNav() {
    var item1 = document.getElementById("panel-lateral");
    var panelActivo = item1.classList.contains('activar-panel');    
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
    var item2 = document.getElementById("navbarSupportedContent");
    var navActivo = item2.classList.contains('show');     
    if (screen.width < 992) {
        btnMenuLateral(); 
        if (navActivo) {
            document.getElementById("navbarSupportedContent").classList.toggle('show');
        }
    }
}

// Mensaje de Eliminación del Usuario
function deleteUser() {
    swal({
        title: "Está seguro de eliminar el registro",
        text: "Si elimina el registro, ya no podrá ser recuperado de la memoria!",
        icon: "warning",
        buttons: [true, "Aceptar"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("El registro ha sido eliminado!", {
                    icon: "success",
                });
                tabla.deleteRow(i);
            } else {
                swal("El registro se ha convervado");
            }
        });
}


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
const capturaEnfoque = document.querySelectorAll(".class-perfil");

// Oculta Barra Navegación
navega.forEach(nav => {    
    nav.addEventListener("click", ocultaNav);    
});
// Oculta Panel de Control
panel.forEach(aside => {
    aside.addEventListener("click", ocultaPanel);    
});
// Captura el Id
capturaId.forEach(captura => {    
    captura.addEventListener("click", capturaIdMet);
});
// Prueba Enfoque
capturaEnfoque.forEach(captura1 => {
    captura1.addEventListener("change", perfilar);
});

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// Llama las demás funciones
function capturaIdMet() {
    id = event.target.getAttribute("id");
    if (id === "btn-menu-lateral") {
        btnMenuLateral();
    } else if (id === "submit-user-create") {
        validarUserCreate();        
    } else if (id === "submit-user-create-cancel") {
        event.preventDefault();
        swal({
            title: "Se canceló el Registro de Usuario!",
            text: "No se ha guardado ningún dato",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                // document.formRegister.reset();
                window.location = 'user_read.html';
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
    } else if (id === "submit-user-update-cancel") {
        event.preventDefault();
        swal({
            title: "Se canceló la Actualización del Usuario!",
            text: "No se ha guardado ningún dato",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                // document.formRegister.reset();
                window.location = 'user_read.html';
            });
    }    
}
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

function validarUserCreate() {
    // Captura de Datos
    nombres = document.getElementById('nombres').value;
    alert(nombres);
    event.preventDefault();
    /*
    apellidos = document.getElementById('apellidos-reg').value;
    correo = document.getElementById('correo-reg').value;
    pass = document.getElementById('pass-reg').value;
    confirm = document.getElementById('conf-pass-reg').value;
    
    
    // Expresión Regular de correo electrónico
    let patron_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Expresión Regular de Texto
    let patron_texto = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    // Validación de nombres
    if (nombres === "") {
        event.preventDefault();
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres NO pueden estar vacíos",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('nombres-reg').focus();
            });
    }
    else if (!patron_texto.test(nombres)) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres NO pueden contener números o caracteres especiales",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('nombres-reg').focus();
            });
    }
    else if (nombres.length < 2 || nombres.length > 50) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres deben contener entre 2 y 50 caracteres",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('nombres-reg').focus();
            });
    }
    // Validación de Apellidos
    else if (apellidos === "") {
        event.preventDefault();
        swal({
            title: "Verifique el campo Apellidos",
            text: "Los Apellidos NO pueden estar vacíos",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('apellidos-reg').focus();
            });
    }
    else if (!patron_texto.test(apellidos)) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Apellidos",
            text: "Los Apellidos NO pueden contener números o caracteres especiales",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('apellidos-reg').focus();
            });
    }
    else if (apellidos.length < 2 || apellidos.length > 50) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Apellidos",
            text: "Los Apelllidos deben contener entre 2 y 50 caracteres",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('apellidos-reg').focus();
            });
    }
    // Validación de Correo
    else if (correo === "") {
        event.preventDefault();
        swal({
            title: "Verifique el campo Correo",
            text: "El Correo NO puede estar vacío",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('correo-reg').focus();
            });
    }
    else if (!patron_correo.test(correo)) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Correo",
            text: "El Correo NO es un correo electrónico válido",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('correo-reg').focus();
            });
    }
    // Validación de contraseña
    else if (pass === "") {
        event.preventDefault();
        swal({
            title: "Verifique el campo Contraseña",
            text: "La Contraseña NO puede estar vacía",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('pass-reg').focus();
            });
    }
    else if (pass.length < 5 || pass.length > 8) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Contraseña",
            text: "La Contraseña debe tener entre 5 y 8 caracteres",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('pass-reg').focus();
            });
    }
    // Validación de confirmación
    else if (confirm === "") {
        event.preventDefault();
        swal({
            title: "Verifique el campo Confirmación Contraseña",
            text: "La Confirmación de Contraseña NO puede estar vacía",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('conf-pass-reg').focus();
            });
    }
    else if (confirm.length < 5 || confirm.length > 8) {
        event.preventDefault();
        swal({
            title: "Verifique el campo Confirmación Contraseña",
            text: "La Confirmañción de Contraseña debe tener entre 5 y 8 caracteres",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('conf-pass-reg').focus();
            });
    }
    // Comprobación de igualdad entre contraseñas
    else if (pass !== confirm) {
        event.preventDefault();
        swal({
            title: "Verifique los campos Contraseña y Confirmación",
            text: "La Contraseña y la Confirmación debe ser iguales",
            icon: "error",
            button: "Aceptar",
        })
            .then((value) => {
                document.getElementById('pass-reg').value = "";
                document.getElementById('conf-pass-reg').value = "";
                document.getElementById('pass-reg').focus();
            });
    }
    // Se crea el Usuario
    else {
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
    }
    */
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
        title: "Está seguro de eliminar el Usuario",
        text: "Si elimina el Usuario, ya no podrá ser recuperado de la memoria!",
        icon: "warning",
        buttons: [true, "Aceptar"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("El Usuario ha sido eliminado!", {
                    icon: "success",
                });
                tabla.deleteRow(i);
            } else {
                swal("El Usuario se ha convervado");
            }
        });
}

// Crear Usuario: Controles según perfil
function perfilar() {    
    let select = document.getElementById('perfil');
    let user = this.options[select.selectedIndex];    
    
    if (user.text === "usuario") {
        document.getElementById("foto_group").classList.add('ocultar-control');
        document.getElementById("doc_identidad_group").classList.add('ocultar-control');
        document.getElementById("contrasena_us_group").classList.add('ocultar-control');
        document.getElementById("confirmacion_group").classList.add('ocultar-control');
        document.getElementById("fechaNac_group").classList.add('ocultar-control');
        document.getElementById("estado_group").classList.add('ocultar-control');
        document.getElementById("salario_group").classList.add('ocultar-control');
    } else if (user.text === "cliente") {
        document.getElementById("foto_group").classList.remove('ocultar-control');
        document.getElementById("doc_identidad_group").classList.remove('ocultar-control');
        document.getElementById("contrasena_us_group").classList.remove('ocultar-control');
        document.getElementById("confirmacion_group").classList.remove('ocultar-control');
        document.getElementById("fechaNac_group").classList.remove('ocultar-control');
        document.getElementById("estado_group").classList.remove('ocultar-control');
        document.getElementById("salario_group").classList.add('ocultar-control');
    } else if (user.text === "empleado" || user.text === "administrador") {
        document.getElementById("foto_group").classList.remove('ocultar-control');
        document.getElementById("doc_identidad_group").classList.remove('ocultar-control');
        document.getElementById("contrasena_us_group").classList.remove('ocultar-control');
        document.getElementById("confirmacion_group").classList.remove('ocultar-control');
        document.getElementById("fechaNac_group").classList.add('ocultar-control');
        document.getElementById("estado_group").classList.remove('ocultar-control');
        document.getElementById("salario_group").classList.remove('ocultar-control');
    }    
}
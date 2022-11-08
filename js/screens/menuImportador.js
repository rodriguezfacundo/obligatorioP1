function mountMenuImportador() {
    changeVisibility('#menuImportador','block');
    welcomeMsg(userImportadorLogged.nombre);
    const btnIrSolicitudCarga = document.querySelector('#btnIrSolicitudCarga');
    btnIrSolicitudCarga.addEventListener('click', onIrSolicitudCarga);

    const btnIrVerPendientes = document.querySelector('#btnIrVerPendientes');
    btnIrVerPendientes.addEventListener('click', onIrPendientes);

    const btnIrCancelar = document.querySelector('#btnIrCancelar');
    btnIrCancelar.addEventListener('click', onIrCancelar);
    
    const btnIrEstadisticas = document.querySelector('#btnIrEstadisticas');
    btnIrEstadisticas.addEventListener('click', onIrEstadisticas);

    const btnIrInicioImportador = document.querySelector('#btnIrInicioImportador');
    btnIrInicioImportador.addEventListener('click', irInicio)
}

function onIrSolicitudCarga() {
    ocultarMenuImportador()
    mountCrearSolicitudCarga();
}

function onIrPendientes() {
    ocultarMenuImportador()
    mountSolicitudesPendientes();   
}

function onIrCancelar(){
    ocultarMenuImportador()
    mountCancelarSolicitud();
}

function onIrEstadisticas() {
    mountEstadisticas();
    ocultarMenuImportador()
}

function ocultarMenuImportador(){
    changeVisibility('#menuImportador', 'none');
}
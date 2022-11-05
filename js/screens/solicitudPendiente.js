function mountSolicitudesPendientes(){
    changeVisibility('#solicitudCreada', 'block');
    buildTablePendientes();

    const btnBuscar = document.querySelector('#btnBuscar');
    btnBuscar.addEventListener('click', onBuscar);

    const btnVolver = document.querySelector('#btnVolverPendientes');
    btnVolver.addEventListener('click', onVolverPendientes);
}

function buildTablePendientes(){
    const tablaPendientes = document.querySelector('#tablaPendientes');
    tablaPendientes.innerHTML = '';

    solicitudes.forEach(function (solicitud) {
        if (solicitud.estado === 'PENDIENTE') {
            tablaPendientes.innerHTML += `
            <tr>
            <th scope="row">${solicitud.id}</th>
                <td>${solicitud.estado}</td>
                <td>${solicitud.descripcion.toUpperCase()}</td>
            </tr>
            `;
        }
    });
}

function onBuscar(e){
    e.preventDefault();
    const containerForm = document.querySelector('#solicitudCreada');

    const txtBuscar = document.querySelector('#inputBuscarSolicitud').value.toLowerCase();
    const pError = document.querySelector('#pErrorBuscar');

    solicitudes.forEach(function(solicitud){
        if (solicitud.descripcion === txtBuscar){
            mostrarSolicitudPendiente();
            containerForm.reset();
        }
        else{
            pError.innerHTML = 'No existe esa solicitud'
        }
    });
}

function mostrarSolicitudPendiente(selector){
    const pSolicitudCreada = document.querySelector('#pSolicitudCreada');
    solicitudes.forEach(function(solicitud){
        pSolicitudCreada.innerHTML += `
        <b>Contenido de su solicitud de carga:</b> ${solicitud.descripcion.toUpperCase()} <br>
        <b>Origen:</b> ${solicitud.origen} <br>
        <b>Cantidad de contenedores:</b> ${solicitud.cantidadContenedores} <br>
        `
    });
}

function onMountPendientes(){
    changeVisibility('#solicitudCreada', 'none');
}

function onVolverPendientes(e){
    e.preventDefault();
    
    onMountPendientes();
    mountMenuImportador();
}

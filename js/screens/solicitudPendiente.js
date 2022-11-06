function mountSolicitudesPendientes(){
    changeVisibility('#solicitudCreada', 'block');
    buildTablePendientes();

    const btnBuscar = document.querySelector('#btnBuscar');
    btnBuscar.addEventListener('click', onBuscar);

    const btnVolver = document.querySelector('#btnVolverPendientes');
    btnVolver.addEventListener('click', onVolverPendientes);
}


//Funcion que me dibuja las solicitudes pendientes que se encuentren
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

//Funcion que busca una solicitud creada no importa su estado.
function onBuscar(e){
    e.preventDefault();

    const textoIngresado = document.querySelector('#inputBuscarSolicitud');
    const solicitudEncontrada = document.querySelector('#pSolicitudEncontrada');

    solicitudEncontrada.innerHTML = '';
    const texto = textoIngresado.value.toLowerCase();

    solicitudes.forEach(function(solicitud){
        let nombre = solicitud.descripcion.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            solicitudEncontrada.innerHTML += `
            <li>${solicitud.descripcion} - Estado: ${solicitud.estado}</li>
            `
        }
    });

    if (solicitudEncontrada.innerHTML === ''){
        solicitudEncontrada.innerHTML = 'Solicitud no encontrada :(';
    }

}


function onMountPendientes(){
    changeVisibility('#solicitudCreada', 'none');
}

function onVolverPendientes(e){
    e.preventDefault();
    
    onMountPendientes();
    mountMenuImportador();
}

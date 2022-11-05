function mountCancelarSolicitud(){
    changeVisibility('#formCancelarSolicitud', 'block');
    buildTable();

    const btnVolver = document.querySelector('#btnVolverCancelar');
    btnVolver.addEventListener('click', onVolverCancelar)
}


function buildTable() {
    const cancelarTable = document.querySelector('#tablaCancelar');
    cancelarTable.innerHTML = '';

    solicitudes.forEach(function (solicitud) {
        if (solicitud.estado === 'PENDIENTE') {
            cancelarTable.innerHTML += `
            <tr>
            <th scope="row">${solicitud.id}</th>
                <td>${solicitud.descripcion.toUpperCase()}</td>
                <td>
                    <button class="btnCancelar btnQuintoEstilo" data-id="${solicitud.id}">Cancelar</button>
                </td>
            </tr>
            `;
        }
    });

    const btns = document.querySelectorAll('.btnCancelar');
    btns.forEach(function (btn){
        btn.addEventListener('click', onCancelarClick)
    });
}

let cantidadVeces = 0;
function onCancelarClick(){
    cantidadVeces++
    if(cantidadVeces >= 3){
        userImportadorLogged.enabled = false;
    }
    const id = Number(this.getAttribute('data-id'));
    onChangeState(id);
    buildTable();
}

function onChangeState(id){
    solicitudes.forEach(function (solicitud){
        if (solicitud.id === id){
            solicitud.estado = 'CANCELADA';
        }
    });


}

function cambiarEstadoImportador(){
    solicitudes.forEach(function (solicitud){
        console.log(solicitud.idImportador)
    })
}


function onMountCancelar(){
    changeVisibility('#formCancelarSolicitud', 'none')
}

function onVolverCancelar(){
    mountMenuImportador();
    onMountCancelar();
}

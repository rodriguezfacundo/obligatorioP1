function mountSolicitudesRechazar(){
    changeVisibility('#formRechazarSolicitud', 'block')
    buildTableRechazar();

    const btnBackRechazar = document.querySelector('#btnVolverRechazar');
    btnBackRechazar.addEventListener('click', onBackRechazar);
}


function buildTableRechazar(){
    const tablaRechazar = document.querySelector('#tablaRechazar');
    tablaRechazar.innerHTML = '';

    solicitudes.forEach(function (solicitud) {
        if (solicitud.estado === 'PENDIENTE') {
            tablaRechazar.innerHTML += `
            <tr>
            <th>${solicitud.id}</th>
                <td>${solicitud.descripcion.toUpperCase()}</td>
                <td>
                    <button class="btnRechazar btnQuintoEstilo" data-id="${solicitud.id}">Rechazar</button>
                </td>
            </tr>
            `;
        }
    });

    const btns = document.querySelectorAll('.btnRechazar');
    btns.forEach(function (btn){
        btn.addEventListener('click', onRechazarClick)
    });
}

function onRechazarClick(){
    const id = Number(this.getAttribute('data-id'));
    onChangeStateRechazada(id);
    buildTableRechazar();
}

function onChangeStateRechazada(id){
    solicitudes.forEach(function (solicitud){
        if (solicitud.id === id){
            solicitud.estado = 'RECHAZADA';
        }
    });
}

function onBackRechazar(){
    mountMenuEmpresa();
    onMountRechazar();
}

function onMountRechazar(){
    changeVisibility('#formRechazarSolicitud', 'none')
}
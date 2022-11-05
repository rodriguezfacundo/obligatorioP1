function mountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'block');
    mostrarSolicitudAsignar();
    mostrarViajeCreado();

    const btnAsignarBuque = document.querySelector('#btnAsignarViaje');
    btnAsignarBuque.addEventListener('click', onAsignarBuque);

    const btnBack = document.querySelector('#btnBackAsignarBuque');
    btnBack.addEventListener('click', onBackAsignarBuque);
}

function mostrarSolicitudAsignar(){
    const selectSolicitud = document.querySelector('#selectSolicitudCarga')
    solicitudes.forEach(function (solicitud){
        if (solicitud.estado === 'PENDIENTE'){
            selectSolicitud.innerHTML +=`
            <option value="${solicitud.id}">${solicitud.descripcion}</option>
            `
        }
    })
}

function mostrarViajeCreado(){
    const selectViaje = document.querySelector('#selectViaje')
    for (let i = 0; i < empresas.length; i++){
        empresas[i].viajes.forEach(function (viaje){
            if (viaje){
                selectViaje.innerHTML +=`
                <option value="${viaje.id}">${viaje.nro}</option>
                `
            }
        })
    }
    
}

function onBackAsignarBuque(){
    onMountAsignarBuque();
    mountMenuEmpresa();
}

function onAsignarBuque(){
    changeVisibility('#formAsignarBuque', 'none')
    mountMenuEmpresa();
}

function onMountAsignarBuque(){
    changeVisibility('#formAsignarBuque', 'none')
}

function mountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'block');
    mostrarSolicitudAsignar();

    const btnAsignarBuque = document.querySelector('#btnAsignarViaje');
    btnAsignarBuque.addEventListener('click', onAsignarBuque);

    const btnBack = document.querySelector('#btnBackAsignarBuque');
    btnBack.addEventListener('click', onBackAsignarBuque);
}

function onAsignarBuque(){
    alert('viaje asignado');
}

function mostrarSolicitudAsignar(){
    const selectSolicitud = document.querySelector('#selectSolicitudCarga');

    const selectViaje = document.querySelector('#selectViaje');
    
    for (let i = 0; i < solicitudes.length; i++){
        if (solicitudes[i].estado === 'PENDIENTE'){
            selectSolicitud.innerHTML += `
            <option value="${solicitudes[i].cantidadContenedores}">${solicitudes[i].descripcion}</option>
            `
        }
        for (let b = 0; b < empresas.length ; b++){
            empresas[b].viajes.forEach(function (viaje){

            });
        }
    }
    /*const selectSolicitud = document.querySelector('#selectSolicitudCarga')
    selectSolicitud.innerHTML = '';
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
    selectViaje.innerHTML = '';
    for (let i = 0; i < empresas.length; i++){
        empresas[i].viajes.forEach(function (viaje){
            if (viaje){
                selectViaje.innerHTML +=`
                <option value="${viaje.id}">${viaje.nro}</option>
                `
            }
        });
    }*/
}


function onBackAsignarBuque(){
    onMountAsignarBuque();
    mountMenuEmpresa();
}

function onMountAsignarBuque(){
    changeVisibility('#formAsignarBuque', 'none')
}

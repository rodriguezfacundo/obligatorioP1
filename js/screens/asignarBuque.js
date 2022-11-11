function mountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'block');
    mostrarSelects();

    const btnAsignarBuque = document.querySelector('#btnAsignarViaje');
    btnAsignarBuque.addEventListener('click', onAsignarBuque);

    const btnBack = document.querySelector('#btnBackAsignarBuque');
    btnBack.addEventListener('click', onBackAsignarBuque);
}

function onAsignarBuque(){
    const selectViaje = Number(document.querySelector('#selectViaje').value)
    const selectSolicitud = Number(document.querySelector('#selectSolicitudCarga').value);
    let esPermitido = 'EXCEDE EL PERMITIDO';

        for (let b = 0; b < empresas.length; b++){
            empresas[b].viajes.forEach(function (viaje){
                for (let i = 0; i < solicitudes.length; i++){
                    if(solicitudes[i].id === selectSolicitud){
                        if (viaje.cantidadMaxima > solicitudes[i].cantidadContenedores){
                            //Le asigno el id del viaje a la solicitud 
                            solicitudIdViaje = solicitudes[i];
                            solicitudIdViaje.setIdViaje(selectViaje);
                            //Le asigno el id de la empresa que trata con esa solicitud
                            solicitudIdEmpresa = solicitudes[i];
                            solicitudIdEmpresa.setidEmpresa(userLogged.id)
                            //Le resto la cantidad maxima al viaje que se eligio
                            viaje.cantidadMaxima -= solicitudes[i].cantidadContenedores;
                            //Cambio el estado de solicitud a CONFIRMADA
                            solicitudes[i].estado = 'CONFIRMADA'
                            esPermitido = 'VIAJE ASIGNADO';
                        } 
                    }
                }     
            });
        }
        alert (esPermitido)
}


function mostrarSelects(){
    const selectViaje = document.querySelector('#selectViaje')
    const selectSolicitud = document.querySelector('#selectSolicitudCarga')
    
    selectSolicitud.innerHTML = `
                                    <option value="" selected>Elegir Solicitud</option>
                                `
    selectViaje.innerHTML = `
                                <option value="" selected>Elegir Buque</option>
                            `

    solicitudes.forEach(function (solicitud){
        if (solicitud.estado === 'PENDIENTE'){
            selectSolicitud.innerHTML +=`
            <option value="${solicitud.id}">${solicitud.descripcion}</option>
            `
        }
    });
    
    for (let i = 0; i < empresas.length; i++){
        if(empresas[i].id === userLogged.id){
            empresas[i].viajes.forEach(function (viaje){
                if (viaje.empresa === empresas[i].nombre){
                    selectViaje.innerHTML +=`
                    <option value="${viaje.id}">${viaje.nombreBuque}</option>
                    `
                }
            });
        }
    
    }
}


function onBackAsignarBuque(){
   onMountAsignarBuque();
   mountMenuEmpresa();
}

function onMountAsignarBuque(){
    changeVisibility('#formAsignarBuque', 'none')
}

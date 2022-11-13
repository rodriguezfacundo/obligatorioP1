function mountRollover(){
    changeVisibility('#formRollover', 'block')
    mostrarSelectsRollover();

     const btnRollover = document.querySelector('#btnClickRollover');
     btnRollover.addEventListener('click', onRollover);

    const btnBackRollover = document.querySelector('#btnBackRollover');
    btnBackRollover.addEventListener('click', onBackRollover);
}

function onRollover(){
    const selectSolicitudRollover = Number(document.querySelector('#selectSolicitudRollover').value);
    const selectViajeRollover = Number(document.querySelector('#selectViajeRollover').value);
    let rolloverPermitido = 'EXCEDE LA CANTIDAD DISPONIBLE';
    let yaAsignaste = '';

    const viaje = getViajeByID(userLogged.viajes, selectViajeRollover);
    const solicitud = getSolicitudByID(selectSolicitudRollover);
    
    if (viaje !== null && solicitud !== null){
        if (solicitud.idViaje !== selectViajeRollover){
            if (selectSolicitudRollover === solicitud.id &&
                selectViajeRollover === viaje.id &&
                viaje.cantidadMaxima >= solicitud.cantidadContenedores){
                    //Le asigno el id del viaje a la solicitud 
                    solicitudIdViaje = solicitud;
                    solicitudIdViaje.setIdViaje(selectViajeRollover);
                    //Le resto la cantidad maxima al viaje que se eligio
                    cantidadRestante = viaje.cantidadMaxima - solicitud.cantidadContenedores;
                    rolloverPermitido = 'CAMBIADO CON EXITO';
                    onBackRollover();
                }
        } else{
            yaAsignaste = 'YA ASIGNASTE ANTERIORMENTE'
        }
    } else{
        alert ('ERROR');
    }

    
    if(yaAsignaste === 'YA ASIGNASTE ANTERIORMENTE'){
        alert (yaAsignaste);
    } else if (rolloverPermitido === 'CAMBIADO CON EXITO'){
        alert (rolloverPermitido);
    } else if (rolloverPermitido === 'EXCEDE LA CANTIDAD DISPONIBLE'){
        alert (rolloverPermitido);
    }

}


function mostrarSelectsRollover(){
    const selectSolicitudRollover = document.querySelector('#selectSolicitudRollover')
    const selectViajeRollover = document.querySelector('#selectViajeRollover')

    
    selectSolicitudRollover.innerHTML = `
                                    <option value="" selected>Elegir Solicitud</option>
                                `
    selectViajeRollover.innerHTML = `
                                <option value="" selected>Elegir Buque</option>
                            `

    solicitudes.forEach(function (solicitud){
        if (solicitud.estado === 'CONFIRMADA'){
            selectSolicitudRollover.innerHTML +=`
            <option value="${solicitud.id}">${solicitud.descripcion}</option>
            `
        }
    });
    
    for (let i = 0; i < empresas.length; i++){
        if(empresas[i].id === userLogged.id){
            empresas[i].viajes.forEach(function (viaje){
                if (viaje.empresa === empresas[i].nombre && viaje.fechaLlegada > fechaActual){
                    selectViajeRollover.innerHTML +=`
                    <option value="${viaje.id}">${viaje.nombreBuque}</option>
                    `
                }
            });
        }
    
    }
}

function onBackRollover(){
    changeVisibility('#formRollover', 'none');
    mountMenuEmpresa();
}
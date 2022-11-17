function mountRollover(){
    changeVisibility('#formRollover', 'block')
    mostrarSelectsRollover();

     const btnRollover = document.querySelector('#btnClickRollover');
     btnRollover.addEventListener('click', onRollover);

    const btnBackRollover = document.querySelector('#btnBackRollover');
    btnBackRollover.addEventListener('click', onBackRollover);
}

//Funcion que me cambia del viaje de esa solicitud a otro viaje
function onRollover(){
    const errorRollover = document.querySelector('#errorRollover');
    const selectSolicitudRollover = Number(document.querySelector('#selectSolicitudRollover').value);
    const selectViajeRollover = Number(document.querySelector('#selectViajeRollover').value);
    let rolloverPermitido = 'EXCEDE LA CANTIDAD DISPONIBLE';
    let yaAsignaste = '';

    const viaje = getViajeByID(userLogged.viajes, selectViajeRollover);
    const solicitud = getSolicitudByID(selectSolicitudRollover);
    
    //Verifico que esa solicitud y ese viaje existan
    if (viaje !== null && solicitud !== null){
        //Verifico que el viaje de esa solicitud no sea el viaje nuevo que va a seleccionar
        if (solicitud.idViaje !== selectViajeRollover){
            /*Verifico que haya cantidad disponible, que el viaje que selecciono sea igual al id del viaje
            y que la solicitud que selecciono sea igual al id de la solicitud.
            */
            if (selectSolicitudRollover === solicitud.id &&
                selectViajeRollover === viaje.id &&
                viaje.cantidadRestante >= solicitud.cantidadContenedores){
                    //Le asigno el id del viaje a la solicitud 
                    solicitud.setIdViaje(selectViajeRollover);
                    //Le asigno la fecha de su llegada de esa solicitud
                    solicitud.setFechaLlegada(viaje.fechaLlegada);
                    //Le resto la cantidad restante al viaje que se eligio
                    viaje.cantidadRestante -= solicitud.cantidadContenedores;
                    rolloverPermitido = 'CAMBIADO CON EXITO';
                    onBackRollover();
                }
        } else{
            yaAsignaste = 'YA ASIGNASTE ANTERIORMENTE'
        }
    } else{
        alert ('ERROR');
    }

    //Condicionales que depende el estado en el que se encuentren, mostrara en pantalla su contenido
    if(yaAsignaste === 'YA ASIGNASTE ANTERIORMENTE'){
        errorRollover.innerHTML = yaAsignaste;
    } else if (rolloverPermitido === 'CAMBIADO CON EXITO'){
        alert(rolloverPermitido);
    } else if (rolloverPermitido === 'EXCEDE LA CANTIDAD DISPONIBLE'){
        errorRollover.innerHTML = rolloverPermitido;
    }

}


//Funcion que construye los select a mostrar
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
        //Si esa solicitud ya se encuentra confirmada, me la muestra
        if (solicitud.estado === 'CONFIRMADA'){
            selectSolicitudRollover.innerHTML +=`
            <option value="${solicitud.id}">${solicitud.descripcion}</option>
            `
        }
    });
    
    /* 
    Si el id de esa empresa es el mismo que el de la empresa loggeada , recorro los viajes
    */
    for (let i = 0; i < empresas.length; i++){
        if(empresas[i].id === userLogged.id){
            empresas[i].viajes.forEach(function (viaje){
                /*Si el nombre de la empresa de ese viaje es el mismo al de la empresa 
                y su llegda es mayor a la fecha actual, me agrega el option
                */
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
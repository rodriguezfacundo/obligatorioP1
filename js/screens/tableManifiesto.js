function mountManifiesto(){
    changeVisibility('#containerTablaManifiesto', 'block');
    buildSelectManifiesto();

    const btnManifiesto = document.querySelector('#btnManifiesto');
    btnManifiesto.addEventListener('click', onManifiesto);

    const btnBack = document.querySelector('#btnBackManifiesto');
    btnBack.addEventListener('click', onBackManifiesto);
}

function onManifiesto(){
    const selectBuque = Number(document.querySelector('#selectListadoManifiesto').value);
    const tableManifiesto = document.querySelector('#tablaManifiesto');
    tableManifiesto.innerHTML = '';
    let viajes = userLogged.viajes; 
    let solicitud = null;
    let importador = null;
    let viaje = null;

    for (let i = 0; i < viajes.length; i++){
        viaje = viajes[i];
        for (let b = 0; b < solicitudes.length; b++){
            solicitud = solicitudes[b];
            for (let c = 0; c < importadores.length; c++){
                importador = importadores[c];
                if (selectBuque === viaje.id &&
                    solicitud.estado === 'CONFIRMADA' &&
                    userLogged.id === solicitud.idEmpresa &&
                    solicitud.idImportador === importador.id
                    ){
                        tableManifiesto.innerHTML += `
                        <tr>
                            <th>${solicitud.origen}</th>
                            <td>${solicitud.cantidadContenedores}</td>
                            <td>${importador.nombre}</td>
                            <td>${solicitud.descripcion}</td>
                            <td>${solicitud.tipoMercaderia}</td>
                        </tr>
                        `
                    }
            }
        }
    }
  
}

function buildSelectManifiesto(){
    const selectBuque = document.querySelector('#selectListadoManifiesto');
    selectBuque.innerHTML = `<option value="" selected>Seleccionar Buque</option>`
    const viajes = userLogged.viajes;
    let viaje = null;

    if (viajes !== null){
        for (let i = 0; i < viajes.length; i++){
            viaje = viajes[i];
            if (userLogged.nombre === viaje.empresa){
                selectBuque.innerHTML += `<option value = "${viaje.id}">${viaje.nombreBuque}</option>`
            }
        }
    } else {
        selectBuque.innerHTML = `<option value="" selected>Debes crear un viaje</option>`
    }
    
}


function onBackManifiesto(){
    onMountManifiesto();
    mountMenuEmpresa();
}

function onMountManifiesto(){
    changeVisibility('#containerTablaManifiesto', 'none');
}
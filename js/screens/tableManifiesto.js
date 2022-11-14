function mountManifiesto(){
    changeVisibility('#containerTablaManifiesto', 'block');
    buildSelectManifiesto();

    const btnManifiesto = document.querySelector('#btnManifiesto');
    btnManifiesto.addEventListener('click', onManifiesto);

    const btnBack = document.querySelector('#btnBackManifiesto');
    btnBack.addEventListener('click', onBackManifiesto);
}

//ACCIONES QUE SE HARAN EN EL MOMENTO DE HACER CLICK AL BOTON DEL MANIFIESTO
function onManifiesto(){
    changeVisibility('#containerTable', 'block')
    const selectBuque = document.querySelector('#selectListadoManifiesto').value;
    const tableManifiesto = document.querySelector('#tablaManifiesto');
    const listaPeligrosa = document.querySelector('#listaPeligrosa');
    tableManifiesto.innerHTML = '';
    listaPeligrosa.innerHTML = '';
    let viajes = userLogged.viajes; 
    let solicitud = null;
    let importador = null;
    let viaje = null;

    //Verifico que se haya elegido un viaje sino se alertara
    if (selectBuque !== ''){
        for (let i = 0; i < viajes.length; i++){
            viaje = viajes[i];
            for (let b = 0; b < solicitudes.length; b++){
                solicitud = solicitudes[b];
                for (let c = 0; c < importadores.length; c++){
                    importador = importadores[c];
                    /*Si el nombre del buque es igual al nombre del buque de ese viaje, su estado es 
                    confirmada, el id del importador de esa solicitud es el mismo que el id de ese importador
                    y el id del viaje es el mismo que el id del viaje de esa solicitud, me lo muestra */
                    if (selectBuque === viaje.nombreBuque && 
                        solicitud.estado === 'CONFIRMADA' &&
                        solicitud.idImportador === importador.id &&
                        viaje.id === solicitud.idViaje 
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
                            //Si su carga es peligrosa, me lo pinta en color rojo para alertar
                            if(solicitud.tipoMercaderia === 'CARGA_PELIGROSA'){
                                changeVisibility('#containerTablePeligrosa', 'block')
                                changeVisibility('#titleListaPeligrosa', 'block')
                                listaPeligrosa.innerHTML += `
                                <tr>
                                    <th style = "color:red">${solicitud.origen}</th>
                                    <td style = "color:red">${solicitud.cantidadContenedores}</td>
                                    <td style = "color:red">${importador.nombre}</td>
                                    <td style = "color:red">${solicitud.descripcion}</td>
                                    <td style = "color:red">${solicitud.tipoMercaderia}</td>
                                </tr>
                                `
                            }
                    }
                }
            }
        }
    } else{
        alert ('DEBES ELEGIR UN VIAJE')
    }
  
}

//Funcion que me construye el select para despues mostrar la tabla
function buildSelectManifiesto(){
    const selectBuque = document.querySelector('#selectListadoManifiesto');
    selectBuque.innerHTML = `<option value="" selected>Seleccionar Buque</option>`
    const viajes = userLogged.viajes;
    let viaje = null;

    //Verifico que la empresa loggeada tenga viajes
    if (viajes !== null){
        for (let i = 0; i < viajes.length; i++){
            viaje = viajes[i];
            //Si el nombre de la empresa loggeada es igual al nombre de la empresa de ese viaje, me lo pinta
            if (userLogged.nombre === viaje.empresa){
                selectBuque.innerHTML += `<option value = "${viaje.nombreBuque}">${viaje.nombreBuque}</option>`
            }
        }
    } else {
        selectBuque.innerHTML = `<option value="" selected>Debes crear un viaje</option>`
        changeVisibility('#containerTable', 'none')
        changeVisibility('#containerTablePeligrosa', 'none')
    }
    
}


function onBackManifiesto(){
    onMountManifiesto();
    mountMenuEmpresa();
}

function onMountManifiesto(){
    changeVisibility('#containerTablaManifiesto', 'none');
}
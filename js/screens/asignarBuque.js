function mountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'block');
    mostrarSelects();

    const btnAsignarBuque = document.querySelector('#btnAsignarViaje');
    btnAsignarBuque.addEventListener('click', onAsignarBuque);

    const btnBack = document.querySelector('#btnBackAsignarBuque');
    btnBack.addEventListener('click', onBackAsignarBuque);
}

  
  function onAsignarBuque() {
    const pErrAsignar = document.querySelector('#pErrAsignar');
    const selectViaje = Number(document.querySelector('#selectViaje').value);
    const selectSolicitud = Number(document.querySelector('#selectSolicitudCarga').value);
    let esPermitido = 'EXCEDE LA CANTIDAD DISPONIBLE';
  
    const viaje = getViajeByID(userLogged.viajes, selectViaje);
    const solicitud = getSolicitudByID(selectSolicitud);
  
    //Verifico que ese viaje exista y esa solicitud exista
    if (viaje !== null && solicitud !== null) {
      //Verifico que haya disponibilidad
      if (viaje.cantidadRestante >= solicitud.cantidadContenedores) {
        //Cambio el estado de esa solicitud a CONFIRMADA
        solicitud.estado = 'CONFIRMADA';
        //Le asigno el id del viaje a esa solicitud
        solicitud.setIdViaje(selectViaje);
        //Le asigno el id de la empresa que trata con esa solicitud
        solicitud.setIdEmpresa(userLogged.id);
        //Le asigno la fecha de su llegada de esa solicitud
        solicitud.setFechaLlegada(viaje.fechaLlegada);
        //Le resto la cantidad restante al viaje que se eligio
        viaje.cantidadRestante -= solicitud.cantidadContenedores;
        esPermitido = 'VIAJE ASIGNADO';
        onBackAsignarBuque();
        //Recorro importadores para luego comparar y sumarle 1 a la variable cantConfirmadas de ese importador
        for (let p = 0; p < importadores.length; p++){
          if(importadores[p].id === solicitud.idImportador &&
            selectSolicitud === solicitud.id ){
              importadores[p].addConfirmada(1);
            }
        }
      }
    } else {
      pErrAsignar.innerHTML = 'Algo salió mal'
    }
    pErrAsignar.innerHTML = esPermitido;
  }
  
  //Funcion que muestra los select para posteriormente asignar viajes
  function mostrarSelects() {
    const selectViaje = document.querySelector('#selectViaje');
    const selectSolicitud = document.querySelector('#selectSolicitudCarga');
  
    selectSolicitud.innerHTML = `<option value="" selected>Elegir Solicitud</option>`;
    selectViaje.innerHTML = `<option value="" selected>Elegir Buque</option>`;
  
    //Si la solicitud en la que me encuentro su estado es pendiente, me la agrega en el options
    solicitudes.forEach(function (solicitud) {
      if (solicitud.estado === 'PENDIENTE') {
        selectSolicitud.innerHTML += `
              <option value="${solicitud.id}">${solicitud.descripcion}</option>
              `;
      }
    });
  
    /*
    Si el nombre de la empresa loggeada es igual al nombre de la empresa del viaje en el que me encuentro, y
    la fecha de llegada de ese viaje es mayor a la fecha actual me agrega ese viaje en el options.
    */
    for (let i = 0; i < empresas.length; i++) {
      if (empresas[i].id === userLogged.id) {
        userLogged.viajes.forEach(function (viaje) {
          if (
            viaje.empresa === userLogged.nombre &&
            viaje.fechaLlegada > fechaActual
          ) {
            selectViaje.innerHTML += `
                      <option value="${viaje.id}">${viaje.nombreBuque}</option>
                      `;
          }
        });
      }
    }
  }
  
  function onBackAsignarBuque() {
    onMountAsignarBuque();
    mountMenuEmpresa();
  }
  
  function onMountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'none');
  }

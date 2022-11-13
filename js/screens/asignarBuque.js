function mountAsignarBuque() {
    changeVisibility('#formAsignarBuque', 'block');
    mostrarSelects();

    const btnAsignarBuque = document.querySelector('#btnAsignarViaje');
    btnAsignarBuque.addEventListener('click', onAsignarBuque);

    const btnBack = document.querySelector('#btnBackAsignarBuque');
    btnBack.addEventListener('click', onBackAsignarBuque);
}

/**
 * Obtiene la empresa a partir de su id
 * @param {number} id
 * @returns object|null
 */
 function getEmpresaByID(id) {
    let empresa = null;
    for (let i = 0; i < empresas.length; i++) {
      if (empresas[i].id == id) {
        empresa = empresas[i];
      }
    }
    return empresa;
  }
  /**
   * Obtiene un viaje a partir de su id y una lista de viajes
   * @param {number} idViaje
   * @returns object|null
   */
  function getViajeByID(viajes, idViaje) {
    let viaje = null;
    for (let i = 0; i < viajes.length; i++) {
      if (viajes[i].id == idViaje) {
        viaje = viajes[i];
      }
    }
    return viaje;
  }
  /**
   * Obtiene una solicitud a partir de su id
   * @param {number} idSolicitud
   * @returns object|null
   */
  function getSolicitudByID(idSolicitud) {
    let solicitud = null;
    for (let i = 0; i < solicitudes.length; i++) {
      if (solicitudes[i].id == idSolicitud) {
        solicitud = solicitudes[i];
      }
    }
    return solicitud;
  }
  
  function onAsignarBuque() {
    const selectViaje = Number(document.querySelector('#selectViaje').value);
    const selectSolicitud = Number(
      document.querySelector('#selectSolicitudCarga').value
    );
    let esPermitido = 'EXCEDE LA CANTIDAD DISPONIBLE';
  
    const viaje = getViajeByID(userLogged.viajes, selectViaje);
    const solicitud = getSolicitudByID(selectSolicitud);
  
    if (viaje !== null && solicitud !== null) {
      if (viaje.cantidadMaxima >= solicitud.cantidadContenedores) {
        //Cambio el estado de solicitud a CONFIRMADA
        solicitud.estado = 'CONFIRMADA';
        //Le asigno el id del viaje a la solicitud
        solicitud.setIdViaje(selectViaje);
        //Le asigno el id de la empresa que trata con esa solicitud
        solicitud.setIdEmpresa(userLogged.id);
        //Le resto la cantidad maxima al viaje que se eligio
        cantidadRestante = viaje.cantidadMaxima - solicitud.cantidadContenedores;
        esPermitido = 'VIAJE ASIGNADO';
        onBackAsignarBuque();
      }
    } else {
      alert('Algo salió mal');
    }
    alert(esPermitido);
  }
  
  function mostrarSelects() {
    const selectViaje = document.querySelector('#selectViaje');
    const selectSolicitud = document.querySelector('#selectSolicitudCarga');
  
    selectSolicitud.innerHTML = `
                                      <option value="" selected>Elegir Solicitud</option>
                                  `;
    selectViaje.innerHTML = `
                                  <option value="" selected>Elegir Buque</option>
                              `;
  
    solicitudes.forEach(function (solicitud) {
      if (solicitud.estado === 'PENDIENTE') {
        selectSolicitud.innerHTML += `
              <option value="${solicitud.id}">${solicitud.descripcion}</option>
              `;
      }
    });
  
    for (let i = 0; i < empresas.length; i++) {
      if (empresas[i].id === userLogged.id) {
        empresas[i].viajes.forEach(function (viaje) {
          if (
            viaje.empresa === empresas[i].nombre &&
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

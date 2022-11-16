//Variables globales
let userImportadorLogged = null;
let userLogged = null;
let userRegistered = null;
let solicitudCreada = null;
let newID = null;
let solicitudIdEmpresa = null;
let solicitudIdViaje = null;
let cantidadRestante = null;


//FECHA ACTUAL
let f = new Date();
let dia = f.getDate().toString();
let mes = (f.getMonth() + 1).toString();
let fechaActual = f.getFullYear() + '-' + mes + '-' + dia;

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

  function getEmpresaNameById(idEmpresa){
    let nameEmpresa = null;
    for (let i = 0; i < empresas.length; i++){
      if (idEmpresa === empresas[i].id){
        nameEmpresa = empresas[i].nombre;
      }
      
    }
    return nameEmpresa;
  }
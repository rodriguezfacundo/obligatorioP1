function mountEstadisticas(){
    buildEstadisticas();

    const btnVolverEstadisticas = document.querySelector('#btnVolverEstadisticas');
    btnVolverEstadisticas.addEventListener('click', onVolverEstadisticas);
}

//Construye las estadisticas y las muestra
function buildEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'block');
    const pPtjeCancelaciones = document.querySelector('#pPorcentajeCanceladas');
    const pFechaLlegada = document.querySelector('#pFechaLlegada');
    const pEmpresaPtje = document.querySelector('#pEmpresaPtje');
    //Muestro el porcentaje de cancelaciones contra el total de cargas
    buildPtjeCancelaciones(pPtjeCancelaciones);
    //Muestro las fechas por orden de llegada
    fechasLlegadas(pFechaLlegada);
    //Muestro el porcentaje de empresas
    mountPorcentajeEmpresa(pEmpresaPtje);

}


//Funcion que realiza la operacion para el porcentaje final de cancelaciones contra la cantidad de solicitudes creadas.
let estadosTotal = 0;
let pjteFinal = 0;
function buildPtjeCancelaciones(selector){
    importadores.forEach(function(importador){
        if (importador.id === userImportadorLogged.id){
            estadosTotal = 
                userImportadorLogged.cantCanceladas + 
                userImportadorLogged.cantConfirmadas + 
                userImportadorLogged.cantIgnoradas + 
                userImportadorLogged.cantPendientes; 
        }
        pjteFinal = estadosTotal / userImportadorLogged.cantSolicitudes
    });
    selector.innerHTML = `El total es: ${pjteFinal}%`;
}

//Funcion que me ordena las fechas de llegadas de las solicitudes confirmadas de ese importador
function fechasLlegadas(selector){
    selector.innerHTML = '';

    let solicitudesOrdenadas = [];

    //Pusheo al array solicitudesOrdenadas las solicitudes que cumplan los campos
    for(let k = 0; k < solicitudes.length; k++){
        if(solicitudes[k].idImportador === userImportadorLogged.id &&
            solicitudes[k].estado === 'CONFIRMADA'){
            solicitudesOrdenadas.push(solicitudes[k]);
        }
    }

    //Ordeno por fecha de llegada
    solicitudesOrdenadas.sort(function (a, b) {
        if (a.fechaLlegada > b.fechaLlegada) {
          return 1;
        }
        if (a.fechaLlegada < b.fechaLlegada) {
          return -1;
        }
        return 0;
      });

      //Pinto las fechas de llegada
    for(let i = 0; i < solicitudesOrdenadas.length; i++){
        if(solicitudesOrdenadas[i].idImportador === userImportadorLogged.id &&
            solicitudesOrdenadas[i].estado === 'CONFIRMADA'){
                selector.innerHTML += `<li>${solicitudesOrdenadas[i].fechaLlegada}</li>`
            }
    }
}


//Funcion que me crea los porcentajes de las empresas asignadas
function mountPorcentajeEmpresa(selector){
    selector.innerHTML = '';
    const empresasPorcentaje = [];
    let totalSolicitudes = 0;
    for (i = 0; i < solicitudes.length; i++){
        solicitud = solicitudes[i];
        if(userImportadorLogged.id === solicitud.idImportador && solicitud.estado == "CONFIRMADA"){
            let empresaEncontrada = null;
            totalSolicitudes++;
            empresasPorcentaje.forEach(function(ep) {
                if(ep.idEmpresa == solicitud.idEmpresa) {
                    empresaEncontrada = ep;
                }
            })

            if(empresaEncontrada == null) {
                empresasPorcentaje.push({idEmpresa: solicitud.idEmpresa, totalSolicitudes: 1})
            } else {
                empresaEncontrada.totalSolicitudes +=1;
            }
        }
    }
    empresasPorcentaje.forEach(function(ep) {
        ep.porcentaje =   (ep.totalSolicitudes* 100 / totalSolicitudes).toFixed(2);
        ep.nombre = getEmpresaNameById(ep.idEmpresa);
        selector.innerHTML += `
        <li>Nombre empresa: ${ep.nombre} 
        <br>
        Porcentaje: ${ep.porcentaje}%</li>
        `
    })
}

function onVolverEstadisticas(){
    onMountEstadisticas();
    mountMenuImportador();
}

function onMountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'none');
}
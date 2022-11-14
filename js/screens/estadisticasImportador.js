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
    buildPtjeCancelaciones(pPtjeCancelaciones);
    fechasLlegadas(pFechaLlegada);

}


//Funcion que realiza la operacion para el porcentaje final de cancelaciones contra la cantidad de solicitudes creadas.
let estadosTotal = 0;
let pjteFinal = 0;
function buildPtjeCancelaciones(selector){
    importadores.forEach(function(importador){
        if (importador.id === userImportadorLogged.id){
            estadosTotal = 
                userImportadorLogged.cantCanceladas + userImportadorLogged.cantConfirmadas + userImportadorLogged.cantIgnoradas + userImportadorLogged.cantPendientes; 
        }
        pjteFinal = estadosTotal / userImportadorLogged.cantSolicitudes
    });
    selector.innerHTML = `El total es: ${pjteFinal}%`;
}

//Funcion que me ordena las fechas de llegadas de las solicitudes confirmadas de ese importador
function fechasLlegadas(selector){
    for(let i = 0; i < solicitudes.length; i++){
        if(solicitudes[i].idImportador === userImportadorLogged.id &&
            solicitudes[i].estado === 'CONFIRMADA'){
                selector.innerHTML += `<li>${solicitudes[i].fechaLlegada}</li>`
            }
    }
}

function onVolverEstadisticas(){
    onMountEstadisticas();
    mountMenuImportador();
}

function onMountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'none');
}
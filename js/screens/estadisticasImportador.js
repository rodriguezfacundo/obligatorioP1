function mountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'block')

    const btnVolverEstadisticas = document.querySelector('#btnVolverEstadisticas');
    btnVolverEstadisticas.addEventListener('click', onVolverEstadisticas);
}

function onVolverEstadisticas(){
    onMountEstadisticas();
    mountMenuImportador();
}

function onMountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'none');
}
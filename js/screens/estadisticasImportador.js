function mountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'block');
    changeVisibility('#containerHeader', 'block');

    const btnInicio = document.querySelector('#btnInicio');
    btnInicio.addEventListener('click', onInicioImportador);
}

function onInicioImportador(){
    changeVisibility('#containerHeader', 'none');
    changeVisibility('#btnsPrincipal', 'block');
    onMountEstadisticas();
}

function onMountEstadisticas(){
    changeVisibility('#dashboardEstadisticas', 'none');
}
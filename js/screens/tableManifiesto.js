function mountManifiesto(){
    changeVisibility('#tablaManifiesto', 'block');
    changeVisibility('#containerHeader', 'block');

    const btnBack = document.querySelector('#btnBackManifiesto');
    btnBack.addEventListener('click', onBackManifiesto);

    const btnInicio = document.querySelector('#btnInicio');
    btnInicio.addEventListener('click', onInicio);
}

function onBackManifiesto(){
    onMountManifiesto();
    mountMenuEmpresa();
    changeVisibility('#containerHeader', 'none')
}

function onInicio(){
    changeVisibility('#btnsPrincipal', 'block');
    onMountManifiesto();
    changeVisibility('#containerHeader', 'none')
}

function onMountManifiesto(){
    changeVisibility('#tablaManifiesto', 'none');
}
function mountManifiesto(){
    changeVisibility('#tablaManifiesto', 'block');

    const btnBack = document.querySelector('#btnBackManifiesto');
    btnBack.addEventListener('click', onBackManifiesto);
}

function onBackManifiesto(){
    onMountManifiesto();
    mountMenuEmpresa();
}

function onMountManifiesto(){
    changeVisibility('#tablaManifiesto', 'none');
}
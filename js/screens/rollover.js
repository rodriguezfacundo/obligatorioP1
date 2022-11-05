function mountRollover(){
    changeVisibility('#formRollover', 'block')

    const btnBackRollover = document.querySelector('#btnBackRollover');
    btnBackRollover.addEventListener('click', onBackRollover);
}

function onBackRollover(){
    changeVisibility('#formRollover', 'none');
    mountMenuEmpresa();
}
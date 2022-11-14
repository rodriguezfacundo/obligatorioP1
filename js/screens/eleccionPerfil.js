//Funcion que será la declarada en el index.js, para poder dar comienzo a la aplición
function elegirPerfil(){
    changeVisibility('#btnsPrincipal', 'block');

    const btnImportador = document.querySelector('#btnImportador');
    btnImportador.addEventListener('click', onMostrarRegistro);

    const btnEmpresa = document.querySelector('#btnEmpresa');
    btnEmpresa.addEventListener('click', onMostrarLogin);
}

function ocultarElegirPerfil(){
    changeVisibility('#btnsPrincipal', 'none')
}
/**
 * 
 * @param {string} selector recibe un id
 * @param {string} display recibe none o block depende si quiere mostrar u ocultar
 */
function changeVisibility(selector, display){
    document.querySelector(selector).style.display = display;
}

//Funcion que recibe como parametro a ese usuario para imprimir su nombre en pantalla
function welcomeMsg(user){
    document.querySelector('#pBienvenida').innerHTML = user;
}

//Funcion que muestra mensaje de datos incorrectos
function errDatosIncorrectos(){
    document.querySelector('#pError').innerHTML = 'Datos incorrectos';
}

//Funcion que nos lleva al inicio nuevamente
function irInicio(){
    elegirPerfil();
    userLogged = null;
    userImportadorLogged = null;
    ocultarMenuImportador();
    onMountMenuEmpresa();
}

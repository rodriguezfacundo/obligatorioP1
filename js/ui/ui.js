function changeVisibility(selector, display){
    document.querySelector(selector).style.display = display;
}

function welcomeMsg(user){
    document.querySelector('#pBienvenida').innerHTML = `Bienvenido ${user}`;
}

// function bienvenidoImportador(){
//     document.querySelector('#bienvenidaImportador').innerHTML = userImportadorLogged.nombre.toUpperCase();
// }




function errDatosIncorrectos(){
    document.querySelector('#pError').innerHTML = 'Datos incorrectos';
}
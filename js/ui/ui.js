function changeVisibility(selector, display){
    document.querySelector(selector).style.display = display;
}

function welcomeMsg(user){
    document.querySelector('#pBienvenida').innerHTML = user;
}

function errDatosIncorrectos(){
    document.querySelector('#pError').innerHTML = 'Datos incorrectos';
}
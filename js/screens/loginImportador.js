function mountLoginImportador(){
    changeVisibility('#formLogin', 'block')

    //Evento click al boton de iniciar sesion
    const btnLoginImportador = document.querySelector('#btnLogin');
    btnLoginImportador.addEventListener('click', onLoggedImportador);
}

function onLoggedImportador(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formLogin');

    const usernameImportador = document.querySelector('#inputUser').value.toLowerCase();
    const passImportador = document.querySelector('#inputPass').value;
    const failedValidationLoginImportador = formValidator(loginFormValidations);

    //Verifico que se hayan completado todos los campos, sino se alertara
    if(!failedValidationLoginImportador){
        //El importador loggeado sera si se encuentra un importador registrado con esos mismos datos
        userImportadorLogged = findUserLoggedImportador(usernameImportador, passImportador)
        //Valido que se haya verificado
        if(userImportadorLogged){
            mountMenuImportador();
            onMountLogin()
            containerForm.reset()
        } else {
            errDatosIncorrectos();
        }
    } else{
        document.querySelector('#pError').innerHTML = failedValidationLoginImportador.errMsg;
    }

}
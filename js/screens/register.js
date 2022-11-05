const registerFormValidations = [
    {
        id: '#registName',
        errMsg: 'Por favor ingrese su nombre',
        fnValidate: isNotEmpty,
    },
    {
        id: '#usernameRegist',
        errMsg: 'Ingresa un usuario valido',
        fnValidate: isValidImportador,
    },
    {
        id: '#registPass',
        errMsg: 'Ingrese una password',
        fnValidate: isValidPass,
    },
]


function mountRegistro(){
    const btnImportador = document.querySelector('#btnImportador');
    btnImportador.addEventListener('click', onMostrarRegistro);
}

function onMostrarRegistro(){
    changeVisibility('#btnsPrincipal', 'none');
    changeVisibility('#formRegistro', 'block');
    
    //Evento click al boton de registrar
    const btnRegistrarse = document.querySelector('#btnRegistrar');
    btnRegistrarse.addEventListener('click', onRegistrar)

    //Evento click al boton de Ya tengo cuenta
    const btnTengoCuenta = document.querySelector('#btnTengoCuenta');
    btnTengoCuenta.addEventListener('click', onTengoCuenta)
}

function onTengoCuenta(e){
    e.preventDefault();

    onMountRegister();
    mountLoginImportador();
}

function onRegistrar(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formRegistro');

    const registName = document.querySelector ('#registName').value;
    const registUsername = document.querySelector ('#usernameRegist').value;
    const registPass = document.querySelector ('#registPass').value;
    const msgErrorRegistro = document.querySelector('#pErrorRegist');

    const failedValidationRegist = formValidator(registerFormValidations);

    if (!failedValidationRegist){
        newID = generateAutoIncrementID(importadores);
        userRegistered = new Importador(newID, registName, registUsername, true, registPass);
        importadores.push(userRegistered);
        if (userRegistered){
            onMountRegister();
            mountLoginImportador();
            containerForm.reset();
        } 
    } else {
        msgErrorRegistro.innerHTML = failedValidationRegist.errMsg;
    }
}


//Funcion para ocultar el formulario de registro.
function onMountRegister(){
    changeVisibility('#formRegistro', 'none');
}




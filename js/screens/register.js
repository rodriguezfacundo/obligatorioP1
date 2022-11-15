//ARRAY DE VALIDACIONES
const registerFormValidations = [
    {
        id: '#registName',
        errMsg: 'Por favor ingrese su nombre',
        fnValidate: isNotEmpty,
    },
    {
        id: '#usernameRegist',
        errMsg: 'Ingresa un usuario',
        fnValidate: isNotEmpty,
    },
    {
        id: '#usernameRegist',
        errMsg: 'Usuario ya registrado',
        fnValidate: isValidImportador,
    },
    {
        id: '#registPass',
        errMsg: 'Ingrese una password',
        fnValidate: isValidPass,
    },
]

function onMostrarRegistro(){
    ocultarElegirPerfil();
    changeVisibility('#formRegistro', 'block');
    
    //Evento click al boton de registrar
    const btnRegistrarse = document.querySelector('#btnRegistrar');
    btnRegistrarse.addEventListener('click', onRegistrar)

    //Evento click al boton de Ya tengo cuenta
    const btnTengoCuenta = document.querySelector('#btnTengoCuenta');
    btnTengoCuenta.addEventListener('click', onTengoCuenta)
}

//Si se elige el boton de tengo cuenta, me dirige al loggin del importador
function onTengoCuenta(e){
    e.preventDefault();

    onMountRegister();
    mountLoginImportador();
}

//Funcion que me registra a un nuevo importador
function onRegistrar(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formRegistro');

    const registName = document.querySelector ('#registName').value;
    const registUsername = document.querySelector ('#usernameRegist').value;
    const registPass = document.querySelector ('#registPass').value;
    const msgErrorRegistro = document.querySelector('#pErrorRegist');

    const failedValidationRegist = formValidator(registerFormValidations);

    //Verifico que se hayan completado todos los campos, sino se alertara
    if(!document.querySelector('input[name="imagenes"]:checked')){
        msgErrorRegistro.innerHTML = 'Debes seleccionar una imagen'
    } else if (!failedValidationRegist && document.querySelector('input[name ="imagenes"]:checked')){
        //Genero un nuevo id para ese importador registrado
        newID = generateAutoIncrementID(importadores);
        //Creo un nuevo importador
        userRegistered = new Importador(newID, registName, registUsername, true, registPass);
        importadores.push(userRegistered);
        //Verifico que si ya se registró, me cambia de pantalla.
        if (userRegistered){
            onMountRegister();
            mountLoginImportador();
            containerForm.reset();
        } 
    } else {
        msgErrorRegistro.innerHTML = failedValidationRegist.errMsg;
    }
}


function onMountRegister(){
    changeVisibility('#formRegistro', 'none');
}




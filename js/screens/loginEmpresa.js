//ARRAY DE VERIFICACIONES
const loginFormValidations = [
    {
        id: '#inputUser',
        errMsg: 'Por favor ingrese el usuario',
        fnValidate: isNotEmpty,
    },
    {
        id: '#inputPass',
        errMsg: 'Por favor ingrese la password',
        fnValidate: isValidPass,
    },
];

function onMostrarLogin(){
    ocultarElegirPerfil();
    changeVisibility('#formLogin', 'block');
    
    const btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', onLoggedEmpresa);
}

//Evento click para loggearme
function onLoggedEmpresa(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formLogin');

    const inputUsername = document.querySelector('#inputUser').value.toLowerCase();
    const inputPass = document.querySelector('#inputPass').value;

    const failedValidationLoginEmpresa = formValidator(loginFormValidations);

    //Verifico que se hayan completado todos los campos, sino se alertara
    if (!failedValidationLoginEmpresa) {
        //El usuario loggeado sera buscado en las precargas de empresas
        userLogged = findUserLoggedEmpresa(inputUsername, inputPass);
        //Verifico que esa empresa exista
        if (userLogged) {
        onMountLogin();
        mountMenuEmpresa();
        containerForm.reset();
        } else {
            errDatosIncorrectos();
        }
    } else {
        document.querySelector('#pError').innerHTML = failedValidationLoginEmpresa.errMsg;
    }
}

function onMountLogin(){
    changeVisibility('#formLogin', 'none');
}





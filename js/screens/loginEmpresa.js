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

function mountLogin(){
    const btnEmpresa = document.querySelector('#btnEmpresa');
    btnEmpresa.addEventListener('click', onMostrarLogin);
}

function onMostrarLogin(){
    changeVisibility('#btnsPrincipal', 'none');
    changeVisibility('#formLogin', 'block');
    
    const btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', onLoggedEmpresa);
}

function onLoggedEmpresa(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formLogin');

    const inputUsername = document.querySelector('#inputUser').value.toLowerCase();
    const inputPass = document.querySelector('#inputPass').value;

    const failedValidationLoginEmpresa = formValidator(loginFormValidations);

    if (!failedValidationLoginEmpresa) {
        userLogged = findUserLoggedEmpresa(inputUsername, inputPass);
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





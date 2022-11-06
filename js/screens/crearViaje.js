const viajeFormValidations = [
    {
        id: '#inputNombreBuque',
        errMsg: 'Ingrese nombre del buque',
        fnValidate: isNotEmpty,
    },
    {
        id: '#inputCantidadContenedores',
        errMsg: 'Ingrese cantidad de contenedores',
        fnValidate: isValidNumber,
    },
    {
        id: '#inputNombreEmpresa',
        errMsg: 'Ingresar empresa loggeada',
        fnValidate: isValidNameEmpresa,
    },
    {
        id: '#inputFechaLlegada',
        errMsg: 'Ingrese fecha de llegada',
        fnValidate: isNotEmpty,
    },
    {
        id: '#inputNumeroReferencia',
        errMsg: 'Ingrese un numero de viaje',
        fnValidate: isValidNumber,
    },
]

function mountCrearViaje(){
    changeVisibility('#formCrearViaje','block');

    const btnCrearViaje = document.querySelector('#btnCrearNuevoViaje');
    btnCrearViaje.addEventListener('click', onCrearViaje);

    const btnBack = document.querySelector('#btnBackCrearViaje');
    btnBack.addEventListener('click', onBackCrearViaje);
}

function onBackCrearViaje(e){
    e.preventDefault();

    onMountCrearViaje();
    mountMenuEmpresa();
}

function onCrearViaje(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formCrearViaje');

    const nombreBuque = document.querySelector('#inputNombreBuque').value;
    const cantMax = Number(document.querySelector('#inputCantidadContenedores').value);
    const selectEmpresa = document.querySelector('#inputNombreEmpresa').value;
    const fechaLlegada = document.querySelector('#inputFechaLlegada').value;
    const nro = Number(document.querySelector('#inputNumeroReferencia').value);
    const pErrorViaje = document.querySelector('#pErrorViaje');


    const failedValidationViaje = formValidator(viajeFormValidations);

    if(!failedValidationViaje){
        userLogged.addViaje(nombreBuque, cantMax, selectEmpresa, fechaLlegada, nro)
        onMountCrearViaje();
        mountMenuEmpresa();
        containerForm.reset();
    } else{
        pErrorViaje.innerHTML = failedValidationViaje.errMsg;
    }

}

function onMountCrearViaje(){
    changeVisibility('#formCrearViaje', 'none');
}




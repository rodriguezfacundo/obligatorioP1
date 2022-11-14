//ARRAY DE VERIFICACIONES
const viajeFormValidations = [
    {
        id: '#inputNombreBuque',
        errMsg: 'Ingrese nombre del buque',
        fnValidate: isNotEmpty,
    },
    {
        id: '#inputCantidadContenedores',
        errMsg: 'Ingrese un valor numerico',
        fnValidate: isValidNumber,
    },
    {
        id: '#inputCantidadContenedores',
        errMsg: 'Ingrese cantidad de contenedores',
        fnValidate: isNotEmpty,
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
    {
        id: '#inputNumeroReferencia',
        errMsg: 'Ingrese un valor numerico',
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

//Al esuchar el evento click, se ejecutaran los siguientes pasos para la creacion de un viaje
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
    let newIdViaje = null; 

    //Recorro todos los viajes para generar un nuevo id distintos a los ya creados
    for(i = 0; i < empresas.length; i++){
        newIdViaje = generateAutoIncrementID(empresas[i].viajes);
    }

    //Verifico que se hayan completado todos los campos, sino se alertara 
    if(!failedValidationViaje){
        //Creo un nuevo viaje donde se almacenará en el array de viajes del usuario loggeado
        userLogged.addViaje(newIdViaje, nombreBuque, cantMax, selectEmpresa, fechaLlegada, nro)
        onMountCrearViaje();
        mountMenuEmpresa();
        containerForm.reset();
    } else{
        pErrorViaje.innerHTML = failedValidationViaje.errMsg;
    }

}

function onBackCrearViaje(e){
    e.preventDefault();

    onMountCrearViaje();
    mountMenuEmpresa();
}

function onMountCrearViaje(){
    changeVisibility('#formCrearViaje', 'none');
}




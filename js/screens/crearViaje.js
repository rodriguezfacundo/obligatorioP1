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

//Creo temporalmente un array de objetos para que me incremente el id luego
const viajesTemp = [
    new Viaje(1, 'Buque Amanacer', 10, 'Amanecer', '2022-12-31', 001),
    new Viaje(2, 'Buque Raidel', 15, 'Raidel', '2022-11-25', 002),
    new Viaje(3, 'Buque Furium', 5, 'Furium', '2022-10-11', 003),
    new Viaje (4, 'Buque Enred', 50, 'Enred', '2024-12-31', 004),
]

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


    let newIdViajeBuque = generateAutoIncrementID(viajesTemp);
    const failedValidationViaje = formValidator(viajeFormValidations);
   
    //Verifico que se hayan completado todos los campos, sino se alertara 
    if(!failedValidationViaje){
        //Pusheo el nuevo viajeTemporal;
        newViaje = new Viaje(newIdViajeBuque, nombreBuque, cantMax, selectEmpresa, fechaLlegada, nro)
        viajesTemp.push(newViaje);
        //Creo un nuevo viaje donde se almacenará en el array de viajes del usuario loggeado
        userLogged.addViaje(newIdViajeBuque, nombreBuque, cantMax, selectEmpresa, fechaLlegada, nro)
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




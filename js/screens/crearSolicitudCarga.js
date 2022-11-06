const solicitudFormValidations = [
    {
        id: '#tipoMercaderia',
        errMsg: 'Elije el tipo de mercaderia',
        fnValidate: isNotEmpty,
    },
    {
        id: '#descripMercaderia',
        errMsg: 'Describe brevemente',
        fnValidate: isNotEmpty,
    },
    {
        id: '#inputOrigen',
        errMsg: 'Ingresa un pais de origen',
        fnValidate: isNotEmpty,
    },
    {
        id: '#cantidadContenedores',
        errMsg: 'Ingresar cantidad de contenedores',
        fnValidate: isValidNumber,
    },
]

function mountCrearSolicitudCarga(){
    changeVisibility('#formSolicitudCarga', 'block');

    const btnEnviarSolicitud = document.querySelector('#btnSolicitarCarga');
    btnEnviarSolicitud.addEventListener('click', onEnviarSolicitud);

    const btnVolverSolicitud = document.querySelector('#btnVolverSolicitud');
    btnVolverSolicitud.addEventListener('click', onVolverSolicitud)
}

function onEnviarSolicitud(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formSolicitudCarga');

    const tipoMercaderia = document.querySelector('#tipoMercaderia').value;
    const descripcion = document.querySelector('#descripMercaderia').value;
    const origen = document.querySelector('#inputOrigen').value;
    const cantidadContenedores = Number(document.querySelector('#cantidadContenedores').value);
    const msgErrorSolcitudCarga = document.querySelector('#errMsgSolcitudCarga');

    const failedValidationSolicitud = formValidator(solicitudFormValidations);
    if(userImportadorLogged.enabled){
        if(!failedValidationSolicitud){
            newID = generateAutoIncrementID(solicitudes);
            solicitudCreada = new Solicitud(newID, tipoMercaderia, descripcion, origen, cantidadContenedores);
            solicitudes.push(solicitudCreada);
            if(solicitudCreada){
                mountMenuImportador();
                onMountFormSolicitud();
                containerForm.reset();
            }
        } else{
            msgErrorSolcitudCarga.innerHTML = failedValidationSolicitud.errMsg;
        }
    } else{
        alert ('NO PUEDES, TE ENCUENTRAS DESHABILITADO')
    }
}


function onVolverSolicitud(e){
    e.preventDefault();
    onMountFormSolicitud();
    mountMenuImportador();
}

function onMountFormSolicitud (){
    changeVisibility('#formSolicitudCarga', 'none')
};
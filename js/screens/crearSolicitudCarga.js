//ARRAY DE VALIDACIONES
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
        errMsg: 'Ingresa el pais de origen',
        fnValidate: isNotEmpty,
    },
    {
        id: '#cantidadContenedores',
        errMsg: 'La cantidad debe ser numerica',
        fnValidate: isValidNumber,
    },
    {
        id: '#cantidadContenedores',
        errMsg: 'Ingresar cantidad de contenedores',
        fnValidate: isNotEmpty,
    },
]

function mountCrearSolicitudCarga(){
    changeVisibility('#formSolicitudCarga', 'block');

    const btnEnviarSolicitud = document.querySelector('#btnSolicitarCarga');
    btnEnviarSolicitud.addEventListener('click', onEnviarSolicitud);

    const btnVolverSolicitud = document.querySelector('#btnVolverSolicitud');
    btnVolverSolicitud.addEventListener('click', onVolverSolicitud)
}

//Al escuchar el evento click, se ejecutaran las siguientes acciones
function onEnviarSolicitud(e){
    e.preventDefault();
    const containerForm = document.querySelector('#formSolicitudCarga');

    const tipoMercaderia = document.querySelector('#tipoMercaderia').value;
    const descripcion = document.querySelector('#descripMercaderia').value;
    const origen = document.querySelector('#inputOrigen').value;
    const cantidadContenedores = Number(document.querySelector('#cantidadContenedores').value);
    const msgErrorSolcitudCarga = document.querySelector('#errMsgSolcitudCarga');

    const failedValidationSolicitud = formValidator(solicitudFormValidations);
    
    //Primero verifico que ese importador se encuentre habilitado
    if(userImportadorLogged.enabled){
        //Luego verifico que se hayan completado todos los campos solicitados, de lo contrario se alertara
        if(!failedValidationSolicitud){
            //Genero un nuevo id para la solicitud creada
            newID = generateAutoIncrementID(solicitudes);
            //Creo una nueva solicitud
            solicitudCreada = new Solicitud
            (newID, tipoMercaderia, descripcion, origen, cantidadContenedores, userImportadorLogged.id, 'PENDIENTE');
            solicitudes.push(solicitudCreada);
            /*Si se creo la solicitud, le agrego 1 a cantPendientes de ese importador, y le sumo 1 a cantidad
            de solicitudes a ese importador*/
            if(solicitudCreada){
                userImportadorLogged.addCantSolicitud(1);
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
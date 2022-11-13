let userImportadorLogged = null;
let userLogged = null;
let userRegistered = null;
let solicitudCreada = null;
let newID = null;
let solicitudIdEmpresa = null;
let solicitudIdViaje = null;
let cantidadRestante = null;


//FECHA ACTUAL
let f = new Date();
let dia = f.getDate().toString();
let mes = (f.getMonth() + 1).toString();
let fechaActual = f.getFullYear() + '-' + mes + '-' + dia;
console.log('La fecha actual es ' + fechaActual)

function solicitudElegida(arr){
    let miId = null;
    solicitudes.forEach(function(solicitud){
        miId = solicitud.id;
    })
    return miId;
}
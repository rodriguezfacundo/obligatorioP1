let userImportadorLogged = null;
let userLogged = null;
let userRegistered = null;
let solicitudCreada = null;
let newID = null;

function solicitudElegida(arr){
    let miId = null;
    solicitudes.forEach(function(solicitud){
        miId = solicitud.id;
    })
    return miId;
}
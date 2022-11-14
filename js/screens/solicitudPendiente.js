function mountSolicitudesPendientes(){
    changeVisibility('#solicitudCreada', 'block');
    buildTablePendientes();

    const btnBuscar = document.querySelector('#btnBuscar');
    btnBuscar.addEventListener('click', onBuscar);

    const btnVolver = document.querySelector('#btnVolverPendientes');
    btnVolver.addEventListener('click', onVolverPendientes);
}


//Funcion que me dibuja las solicitudes pendientes que se encuentren
function buildTablePendientes(){
    const tablaPendientes = document.querySelector('#tablaPendientes');
    tablaPendientes.innerHTML = '';
    
    solicitudes.forEach(function (solicitud) {
        //Si el estado de esa solicitud es pendiente, y el id del importador loggeado coincide con el
        //del importador que estoy recorriendo, me crea la tabla
        if (solicitud.estado === 'PENDIENTE' && userImportadorLogged.id === solicitud.idImportador) {
            tablaPendientes.innerHTML += `
                                        <tr>
                                            <th>${solicitud.id}</th>
                                                <td>${solicitud.estado}</td>
                                                <td>${solicitud.descripcion.toUpperCase()}</td>
                                        </tr>
                                    `;
        }
              
    });
}

//Funcion que busca una solicitud creada no importa su estado.
function onBuscar(e){
    e.preventDefault();

    const textoIngresado = document.querySelector('#inputBuscarSolicitud');
    const solicitudEncontrada = document.querySelector('#pSolicitudEncontrada');

    solicitudEncontrada.innerHTML = '';
    //Paso a minusculas el texto ingresado para luego comparar y que no hayan diferencias
    const texto = textoIngresado.value.toLowerCase();

    solicitudes.forEach(function(solicitud){
        //Paso a minusculas la descripcion de la solicitud
        let nombre = solicitud.descripcion.toLowerCase();
        //Si el id del importador loggeado es el mismo que el id del importador de esa solicitud, me lo pinta
        if (userImportadorLogged.id === solicitud.idImportador){
            //Si parte del texto ingresado coinicide con la descripcion de esa solicitud creada, me la muestra
            if (nombre.indexOf(texto) !== -1) {
                solicitudEncontrada.innerHTML += `
                <li>${solicitud.descripcion} - Estado: ${solicitud.estado}</li>
                `
            }
        }
    });

    //Si no coincide me dice que no se encuentra
    if (solicitudEncontrada.innerHTML === ''){
        solicitudEncontrada.innerHTML = 'Solicitud no encontrada :(';
    }

}


function onMountPendientes(){
    changeVisibility('#solicitudCreada', 'none');
}

function onVolverPendientes(e){
    e.preventDefault();
    
    onMountPendientes();
    mountMenuImportador();
}

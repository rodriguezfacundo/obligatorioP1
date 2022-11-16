function mountCancelarSolicitud(){
    changeVisibility('#formCancelarSolicitud', 'block');
    buildTable();

    const btnVolver = document.querySelector('#btnVolverCancelar');
    btnVolver.addEventListener('click', onVolverCancelar)
}

//Funcion que me construye la tabla
function buildTable() {
    const cancelarTable = document.querySelector('#tablaCancelar');
    cancelarTable.innerHTML = '';

    /*Si esa solicitud esta pendiente y si el id del importador loggeado es igual al id de importador de esa
    solicitud, me crea la tabla*/
    solicitudes.forEach(function (solicitud) {
        if (solicitud.estado === 'PENDIENTE' &&
            userImportadorLogged.id === solicitud.idImportador) {
            cancelarTable.innerHTML += `
            <tr>
            <th scope="row">${solicitud.id}</th>
                <td>${solicitud.descripcion.toUpperCase()}</td>
                <td>
                    <button class="btnCancelar btnQuintoEstilo" data-id="${solicitud.id}">Cancelar</button>
                </td>
            </tr>
            `;
        }
    });

    //Recorro esos botones y a cada uno le agrego el evento click
    const btns = document.querySelectorAll('.btnCancelar');
    btns.forEach(function (btn){
        btn.addEventListener('click', onCancelarClick)
    });
}

let cantidadVeces = 0;
function onCancelarClick(){
    //Si cancelo mas de tres veces queda el importador deshabilitado
    cantidadVeces++
    if(cantidadVeces >= 3){
        userImportadorLogged.enabled = false;
    }
    
    //Mediante el atributo 'this.getAttribute', solamente para esa funcion que se canceló, va a pasar a cancelada
    const id = Number(this.getAttribute('data-id'));
    onChangeState(id);
    for (let i = 0; i < importadores.length; i++){
        if(importadores[i] === userImportadorLogged){
            importadores[i].addCancelada(1);
        }
    }
    buildTable();
}

/**
 * Funcion que recibe un id de parametro y me cambia esa solicitud a cancelada
 * @param {number} id 
 */
function onChangeState(id){
    solicitudes.forEach(function (solicitud){
        if (solicitud.id === id){
            solicitud.estado = 'CANCELADA';
        }
    });


}


function onMountCancelar(){
    changeVisibility('#formCancelarSolicitud', 'none')
}

function onVolverCancelar(){
    mountMenuImportador();
    onMountCancelar();
}

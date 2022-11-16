function mountSolicitudesRechazar(){
    changeVisibility('#formRechazarSolicitud', 'block')
    buildTableRechazar();

    const btnBackRechazar = document.querySelector('#btnVolverRechazar');
    btnBackRechazar.addEventListener('click', onBackRechazar);
}

//Funcion que me construye la tabla de rechazar solicitudes pendientes
function buildTableRechazar(){
    const tablaRechazar = document.querySelector('#tablaRechazar');
    tablaRechazar.innerHTML = '';

    solicitudes.forEach(function (solicitud) {
        //Si esa funcion se encuentra pendiente aun, me la agregara a la tabla
        if (solicitud.estado === 'PENDIENTE') {
            tablaRechazar.innerHTML += `
            <tr>
            <th>${solicitud.id}</th>
                <td>${solicitud.descripcion.toUpperCase()}</td>
                <td>
                    <button class="btnRechazar btnQuintoEstilo" data-id="${solicitud.id}">Rechazar</button>
                </td>
            </tr>
            `;
        }
    });

    //Funcion que me dispara el evento click, de cualquier boton 
    const btns = document.querySelectorAll('.btnRechazar');
    btns.forEach(function (btn){
        btn.addEventListener('click', onRechazarClick)
    });
}

//Funcion que rechaza la solicitud que elija
function onRechazarClick(){
    //Mediante el this.getAttribute que le pasamos el data id, me rechaza unicamente esa solicitud elegida
    const id = Number(this.getAttribute('data-id'));
    //Cambiamos el estado a rechazada, de la solicitud clickeada
    onChangeStateRechazada(id);
    buildTableRechazar();
}

//Me cambia el estado de la solicitud que se rechaza
function onChangeStateRechazada(id){
    solicitudes.forEach(function (solicitud){
        if (solicitud.id === id){
            solicitud.estado = 'RECHAZADA';
        }
    });
}

function onBackRechazar(){
    mountMenuEmpresa();
    onMountRechazar();
}

function onMountRechazar(){
    changeVisibility('#formRechazarSolicitud', 'none')
}
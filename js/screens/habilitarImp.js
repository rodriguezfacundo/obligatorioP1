function mountHabilitarImp(){
    changeVisibility('#containerTablaHabilitar', 'block');
    buildTableHabilitar();

    const btnVolverHabilitar = document.querySelector('#btnVolverHabilitar');
    btnVolverHabilitar.addEventListener('click', onBackHabilitar);
}


function buildTableHabilitar(){
    const habilitarTable = document.querySelector('#tablaHabilitar');
    habilitarTable.innerHTML = '';

    importadores.forEach(function (importador) {
        if (importador.enabled === false) {
            habilitarTable.innerHTML += `
            <tr>
            <th scope="row">${importador.id}</th>
                <td>${importador.nombre}</td>
                <td>
                    <button class="btnHabilitar btnQuintoEstilo" data-id="${importador.id}">Habilitar</button>
                </td>
            </tr>
            `;
        }
    });

    const btns = document.querySelectorAll('.btnHabilitar');
    btns.forEach(function (btn){
        btn.addEventListener('click', onHabilitarClick)
    });
}


//Funcion que me cambia el estado del importador a habilitado, y sus solicitudes canceladas a ignoradas.
function onHabilitarClick(){
    const id = Number(this.getAttribute('data-id'));
    for (i = 0; i < solicitudes.length; i++){
        for (k = 0; k < importadores.length; k++){
            if (solicitudes[i].idImportador === importadores[k].id){
                if(solicitudes[i].estado === 'CANCELADA'){
                    solicitudes[i].estado = 'IGNORADA'
                    onChangeDeshabilitado(id);
                    buildTableHabilitar();
                }
            }
        }
    }
    onChangeDeshabilitado(id);
    buildTableHabilitar();
}

function onChangeDeshabilitado(id){
    importadores.forEach(function (importador){
        if (importador.id === id){
            importador.enabled = true;
        }
    });
}

function onBackHabilitar(){
    onMountHabilitarImp();
    mountMenuEmpresa();
}

function onMountHabilitarImp(){
    changeVisibility('#containerTablaHabilitar', 'none');
}
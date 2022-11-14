function mountHabilitarImp(){
    changeVisibility('#containerTablaHabilitar', 'block');
    buildTableHabilitar();

    const btnVolverHabilitar = document.querySelector('#btnVolverHabilitar');
    btnVolverHabilitar.addEventListener('click', onBackHabilitar);
}

//Funcion que me construye la tabla para habilitar importadores
function buildTableHabilitar(){
    const habilitarTable = document.querySelector('#tablaHabilitar');
    habilitarTable.innerHTML = '';

    importadores.forEach(function (importador) {
        //Verifico que si el importador se encuentra deshabilitado, lo agrego a la tabla
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

    //Funcion para todos los botones
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
            /*Verifico que ya esa solicitud se encuentre ignorada, tambien que ese importador se igual al 
            value de ese boton, y que el id de importador de esa solicitud sea el mismo que el id de ese 
            importador.
            */ 
            if(importadores[k].id === id &&
                solicitudes[i].idImportador === importadores[k].id &&
                solicitudes[i].estado === 'IGNORADA'){
                    //Le sumo 1 a la cantidad de solicitudes ignoradas de ese importador
                    importadores[k].addIgnorada(1);
                    //Le resto las solicitudes que estaban canceladas de ese importador
                    importadores[k].cantCanceladas = importadores[k].cantIgnoradas - importadores[k].cantIgnoradas;
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
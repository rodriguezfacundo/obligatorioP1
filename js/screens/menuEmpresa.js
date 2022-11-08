function mountMenuEmpresa() {
    changeVisibility('#menuEmpresa','block');
    welcomeMsg(userLogged.nombre);

    const btnIrCrearViaje = document.querySelector('#btnIrCrearViaje');
    btnIrCrearViaje.addEventListener('click', onIrCrearViaje);

    const btnIrAsignarBuque = document.querySelector('#btnIrAsignarBuque');
    btnIrAsignarBuque.addEventListener('click', onIrAsignarBuque);

    const btnIrRollover = document.querySelector('#btnIrRollover');
    btnIrRollover.addEventListener('click', onIrRollover);
    
    const btnIrHabilitarImp = document.querySelector('#btnIrHabilitarImp');
    btnIrHabilitarImp.addEventListener('click', onIrHabilitarImp);
    
    const btnIrManifiesto = document.querySelector('#btnIrManifiesto');
    btnIrManifiesto.addEventListener('click', onIrManifiestoCarga);

    const btnIrRechazar = document.querySelector('#btnIrVerPendientesEmpresa');
    btnIrRechazar.addEventListener('click', onIrRechazar)

    const btnIrInicioEmpresa = document.querySelector('#btnIrInicioEmpresa');
    btnIrInicioEmpresa.addEventListener('click', irInicio)
}

function onIrCrearViaje() {
    onMountMenuEmpresa()
    mountCrearViaje();
}

function onIrAsignarBuque() {
    onMountMenuEmpresa()
    mountAsignarBuque();   
}

function onIrRollover(){
    onMountMenuEmpresa()
    mountRollover();
}

function onIrHabilitarImp() {
    mountHabilitarImp();
    onMountMenuEmpresa();
}

function onIrManifiestoCarga() {
    mountManifiesto();
    onMountMenuEmpresa();
}

function onIrRechazar(){
    mountSolicitudesRechazar();
    onMountMenuEmpresa();
}

function onMountMenuEmpresa(){
    changeVisibility('#menuEmpresa', 'none');
}

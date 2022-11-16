//DECLARAMOS LAS EMPRESAS Y LES AGREGAMOS SUS RESPECTIVOS VIAJES PRE CARGADOS
const amanecer = new Empresa(1, 'Amanecer', 'amanecer.empresa', 'Amanecer.1')
amanecer.addViaje(1, 'Buque Amanacer', 10, 'Amanecer', '2022-12-31', 001);

const raidel = new Empresa(2, 'Raidel', 'raidel.empresa', 'Raidel.1')
raidel.addViaje(2, 'Buque Raidel', 15, 'Raidel', '2022-11-25', 002);

const furium = new Empresa(3, 'Furium', 'furium.empresa', 'Furium.1')
furium.addViaje(3, 'Buque Furium', 5, 'Furium', '2022-10-11', 003);

const enred = new Empresa(4, 'Enred', 'enred.empresa', 'Enred.1')
enred.addViaje(4, 'Buque Enred', 50, 'Enred', '2024-12-31', 004);

//AGREGAMOS LAS EMPRESAS AL ARRAY DE OBJETOS DE EMPRESAS
const empresas = [amanecer, raidel, furium, enred,];

//DECLARAMOS LOS IMPORTADORES Y SEGUN EL ESTADO DE SUS VIAJES PRE CARGADOS, LE SUMAMOS 1 A ESE ESTADO
const importadorSebastian = new Importador(1, 'Sebastian Rodriguez', 'sebastian.importador', true, 'Sebastian.1');
importadorSebastian.addConfirmada(1);
importadorSebastian.addCantSolicitud(2);

const importadorMarcelo = new Importador(2, 'Marcelo Perez', 'marcelo.importador', true, 'Marcelo.1');
importadorMarcelo.addPendiente(1);
importadorMarcelo.addCantSolicitud(1);

const importadorBrian = new Importador(3, 'Brian Lozano', 'brian.importador', true, 'Brian.1');
importadorBrian.addCancelada(1);
importadorBrian.addCantSolicitud(1);

const importadorPablo = new Importador(4, 'Pablo Lopez', 'pablo.importador', true, 'Pablo.1');
importadorPablo.addIgnorada(1);
importadorPablo.addCantSolicitud(1);

const importadorWalter = new Importador(5, 'Walter Gutierrez', 'walter.importador', true, 'Walter.1');
importadorWalter.addCantSolicitud(1);

//AGREGAMOS LOS IMPORTADORES A SU RESPECTIVO ARRAY DE IMPORTADORES
const importadores = [importadorSebastian, importadorMarcelo, importadorBrian, importadorPablo, importadorWalter,];

/*DECLARAMOS SOLO A ESTA SOLICITUD AFUERA YA QUE ES LA QUE TIENE ESTADO CONFIRMADA, Y DEBE TENER ID DE EMPRESA
Y VIAJE PRECARGADO*/
const solicitudJuguetes = new Solicitud(1, 'CARGA_GENERAL', 'Juguetes', 'Inglaterra', 10, 1, 'CONFIRMADA');
solicitudJuguetes.setIdEmpresa(1);
solicitudJuguetes.setIdViaje(1);
solicitudJuguetes.setFechaLlegada('2022-12-02')

const solicitudHielo = new Solicitud(1, 'CARGA_GENERAL', 'Hielo', 'Inglaterra', 10, 1, 'CONFIRMADA');
solicitudHielo.setIdEmpresa(1);
solicitudHielo.setIdViaje(1);
solicitudHielo.setFechaLlegada('2022-11-16')

//ARRAY DE OBJETOS DE SOLICITUDES
const solicitudes = [
    solicitudJuguetes,
    new Solicitud(2, 'CARGA_PELIGROSA', 'Explosivos', 'Estados Unidos', 5, 2, 'PENDIENTE'),
    new Solicitud(3, 'CARGA_PELIGROSA', 'Acido', 'Chile', 15, 3, 'CANCELADA'),
    new Solicitud(4, 'REFRIGERADO', 'Hielo', 'Escocia', 5, 4, 'IGNORADA'),
    solicitudHielo,
    new Solicitud(5, 'REFRIGERADO', 'Helado', 'China', 50, 1, 'RECHAZADA'),
];


//FUNCION QUE ME INCREMENTA EL ID
function generateAutoIncrementID(arr) {
    let maxId = 0;
    arr.forEach(function (item) {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    return maxId + 1;
}
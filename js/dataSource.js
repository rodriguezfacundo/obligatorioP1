const amanecer = new Empresa(1, 'Amanecer', 'amanecer.empresa', 'Amanecer.1')
amanecer.addViaje(1, 'Buque Amanacer', 10, 'Amanecer', '2022-12-31', 001);

const raidel = new Empresa(2, 'Raidel', 'raidel.empresa', 'Raidel.1')
raidel.addViaje(2, 'Buque Raidel', 15, 'Raidel', '2022-11-25', 002);

const furium = new Empresa(3, 'Furium', 'furium.empresa', 'Furium.1')
furium.addViaje(3, 'Buque Furium', 5, 'Furium', '2022-10-11', 003);

const enred = new Empresa(4, 'Enred', 'enred.empresa', 'Enred.1')
enred.addViaje(4, 'Buque Enred', 50, 'Enred', '2024-12-31', 004);

const empresas = [amanecer, raidel, furium, enred,];


const importadores = [
    new Importador(1, 'Sebastian Rodriguez', 'sebastian.importador', true, 'Sebastian.1'),
    new Importador(2, 'Marcelo Perez', 'marcelo.importador', true, 'Marcelo.1'),
    new Importador(3, 'Brian Lozano', 'brian.importador', true, 'Brian.1'),
    new Importador(4, 'Pablo Lopez', 'pablo.importador', true, 'Pablo.1'),
    new Importador(5, 'Walter Gutierrez', 'walter.importador', true, 'Walter.1'),
];

const solicitudJuguetes = new Solicitud(1, 'CARGA_GENERAL', 'Juguetes', 'Inglaterra', 10, 1, 'CONFIRMADA');
solicitudJuguetes.setIdEmpresa(1);
solicitudJuguetes.setIdViaje(1);

const solicitudes = [
    solicitudJuguetes,
    new Solicitud(2, 'CARGA_PELIGROSA', 'Explosivos', 'Estados Unidos', 5, 2, 'PENDIENTE'),
    new Solicitud(3, 'CARGA_PELIGROSA', 'Acido', 'Chile', 15, 3, 'CANCELADA'),
    new Solicitud(4, 'REFRIGERADO', 'Hielo', 'Escocia', 5, 4, 'IGNORADA'),
    new Solicitud(5, 'REFRIGERADO', 'Helado', 'China', 50, 5, 'RECHAZADA'),
];


function generateAutoIncrementID(arr) {
    let maxId = 0;
    arr.forEach(function (item) {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    return maxId + 1;
}
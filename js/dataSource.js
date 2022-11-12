const empresas = [
    new Empresa(1, 'Amanecer', 'amanecer.empresa', 'Amanecer.1'),
    new Empresa(2, 'Raidel', 'raidel.empresa', 'Raidel.1'),
    new Empresa(3, 'Furium', 'furium.empresa', 'Furium.1'),
    new Empresa(4, 'Enred', 'enred.empresa', 'Enred.1'),
];

const importadores = [
    new Importador(1, 'Sebastian Rodriguez', 'sebastian.importador', true, 'Sebastian.1'),
    new Importador(2, 'Marcelo Perez', 'marcelo.importador', true, 'Marcelo.1'),
    new Importador(3, 'Brian Lozano', 'brian.importador', true, 'Brian.1'),
    new Importador(4, 'Pablo Lopez', 'pablo.importador', true, 'Pablo.1'),
    new Importador(5, 'Walter Gutierrez', 'walter.importador', true, 'Walter.1'),
];

const solicitudes = [
    new Solicitud(1, 'CARGA_GENERAL', 'Juguetes', 'Inglaterra', 10, 1),
    new Solicitud(2, 'CARGA_PELIGROSA', 'Explosivos', 'Estados Unidos', 5, 2),
    new Solicitud(3, 'CARGA_PELIGROSA', 'Acido', 'Chile', 15, 3),
    new Solicitud(4, 'REFRIGERADO', 'Hielo', 'Escocia', 5, 4),
    new Solicitud(5, 'REFRIGERADO', 'Helado', 'China', 50, 5),
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
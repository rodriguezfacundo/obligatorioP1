class Empresa {
    constructor(id, nombre, nombreUsuario, pass){
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.pass = pass;
        this.viajes = [
            new Viaje(1, 'Buque Amanecer', 10, 'Amanecer', '2022-12-15', 123),
            new Viaje(2, 'Buque Raidel', 20, 'Raidel', '2022-10-04', 231),
            new Viaje(3, 'Buque Furium', 80, 'Furium', '2022-12-13', 421),
            new Viaje(4, 'Buque Enred', 5, 'Enred', '2023-05-19', 32),
        ];
    }
    
    addViaje(nombreBuque, cantMax, empresa, fechaLlegada, nro) {
        const idViaje = generateAutoIncrementID(this.viajes)
        const viaje = new Viaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro);
        this.viajes.push(viaje);
    }
}
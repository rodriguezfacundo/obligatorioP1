class Empresa {
    constructor(id, nombre, nombreUsuario, pass){
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.pass = pass;
        this.viajes = [];
    }
    
    addViaje(nombreBuque, cantMax, empresa, fechaLlegada, nro) {
        const idViaje = generateAutoIncrementID(this.viajes)
        const viaje = new Viaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro);
        this.viajes.push(viaje);
    }
}
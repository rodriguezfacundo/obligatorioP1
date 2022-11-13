class Empresa {
    constructor(id, nombre, nombreUsuario, pass){
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.pass = pass;
        this.viajes = [];
    }
    
    addViaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro) {
        const viaje = new Viaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro);
        this.viajes.push(viaje);
    }
}
//Creamos la clase Empresa
class Empresa {
    constructor(id, nombre, nombreUsuario, pass){
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.pass = pass;
        this.viajes = [];
    }
    
    //Metodo que me crea un nuevo viaje
    addViaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro) {
        const viaje = new Viaje(idViaje, nombreBuque, cantMax, empresa, fechaLlegada, nro);
        this.viajes.push(viaje);
    }
}
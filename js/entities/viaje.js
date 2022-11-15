//Declaramos la clase viaje
class Viaje {
    constructor(id, nombreBuque, cantidadMaxima, empresa, fechaLlegada, nro){
        this.id = id;
        this.nombreBuque = nombreBuque;
        this.cantidadMaxima = cantidadMaxima;
        this.empresa = empresa;
        this.fechaLlegada = fechaLlegada;
        this.nro = nro;
        this.cantidadRestante = cantidadMaxima;
    }
}
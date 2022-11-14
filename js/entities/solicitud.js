//Declaramos la clase Solicitud
class Solicitud{
    constructor(id, tipoMercaderia, descripcion, origen, cantidadContenedores, idImportador, estado){
        this.id = id;
        this.tipoMercaderia = tipoMercaderia;
        this.descripcion = descripcion;
        this.origen = origen;
        this.cantidadContenedores = cantidadContenedores;
        this.estado = estado;
        this.idImportador = idImportador;
        this.idEmpresa = null;
        this.idViaje = null;
        this.fechaLlegada = null;
    }

    //Metodo que me agrega el id de la empresa con la que trata esa solicitud
    setIdEmpresa(id){
        this.idEmpresa = id;
    }

    //Metodo que me agrega el id del viaje con la que trata esa solicitud
    setIdViaje(id) {
        this.idViaje = id;
    }

    //Metodo que me agrega la fecha de llegada de esa solicitud confirmada
    setFechaLlegada(fecha){
        this.fechaLlegada = fecha;
    }
}
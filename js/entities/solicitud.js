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
    }

    setIdEmpresa(id){
        this.idEmpresa = id;
    }

    setIdViaje(id) {
        this.idViaje = id;
    }
}
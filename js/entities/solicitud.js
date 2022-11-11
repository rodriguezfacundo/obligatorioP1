class Solicitud{
    constructor(id, tipoMercaderia, descripcion, origen, cantidadContenedores, idImportador){
        this.id = id;
        this.tipoMercaderia = tipoMercaderia;
        this.descripcion = descripcion;
        this.origen = origen;
        this.cantidadContenedores = cantidadContenedores;
        this.estado = 'PENDIENTE';
        this.idImportador = idImportador;
        this.idEmpresa = null;
        this.idViaje = null;
    }

    setidEmpresa(id){
        this.idEmpresa = id;
    }

    setIdViaje(id) {
        this.idViaje = id;
    }
}
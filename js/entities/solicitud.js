class Solicitud{
    constructor(id, tipoMercaderia, descripcion, origen, cantidadContenedores ){
        this.id = id;
        this.tipoMercaderia = tipoMercaderia;
        this.descripcion = descripcion;
        this.origen = origen;
        this.cantidadContenedores = cantidadContenedores;
        this.estado = 'PENDIENTE';
        this.idImportador = userImportadorLogged.id;
        this.idEmpresa = null;
        this.idViaje = null;
    }
}
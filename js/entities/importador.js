//Creamos la clase Importador
class Importador {
    constructor(id, nombre, nombreUsuario, elegirFoto, pass){
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.elegirFoto = elegirFoto;
        this.pass = pass;
        this.enabled = true;
        this.cantSolicitudes = 0;
        this.cantCanceladas = 0;
    }

    //Metodo que me suma de a 1 a la cantidad de solicitudes creadas
    addCantSolicitud(number){
        this.cantSolicitudes += number;
    }

    //Metodo que me suma de a 1 a la cantidad de solicitudes canceladas
    addCancelada(number){
        this.cantCanceladas += number;
    }
}

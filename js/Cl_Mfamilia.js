export default class Cl_Mfamilia {
    //Clase menor
    constructor({nombreFamilia, cantPersonas, dia, hora, montoEntrada}){
        this.nombreFamilia = nombreFamilia;
        this.cantPersonas = cantPersonas;
        this.dia = dia;
        this.horaFuncion = hora;
        this.montoEntrada = montoEntrada;
    }
    
    set nombreFamilia(nombreF) {
        this._nombreFamilia = +nombreF;
    }
    get nombreFamilia() {
        return this._nombreFamilia;
    }

    set cantPersonas(cantP) {
        this._cantPersonas = +cantP;
    }
    get cantPersonas() {
        return this._cantPersonas;
    }
    set dia(dia) {
        this._dia = +dia;
    }
    get dia() {
        return this._dia;
    }

    set horaFuncion (hora) {
        this._horaFuncion = +hora
    }
    get horaFuncion() {
        return this._horaFuncion;
    }

    set montoEntrada(montoE) {
        this._montoEntrada = +montoE;
    }
    get montoEntrada() {
        return this._montoEntrada;

    }


}



// --> comentarios de una sola linea de cod
/* comentarios de mas de una linea*/
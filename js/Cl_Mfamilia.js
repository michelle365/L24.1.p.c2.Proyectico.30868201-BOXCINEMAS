export default class Cl_Mfamilia{
    //Clase menor
    constructor({nombrefamilia, cantPersonas, dia, montoEntrada}){
        this.nombrefamilia = nombrefamilia;
        this.cantPersonas = cantPersonas;
        this.dia = dia;
        this.montoEntrada = montoEntrada;
    }
    //
    montoEntrada = 0;
    //
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

    set montoEntrada(montoE) {
        this._montoEntrada = +montoE;
    }
    get montoEntrada() {
        return this._montoEntrada;

    }

    }



// --> comentarios de una sola linea de cod
/* comentarios de mas de una linea*/
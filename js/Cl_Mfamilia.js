export default class Cl_Mfamilia {
    //Clase menor
    constructor({nombreFamilia, cantPersonas, dia }){
        this.nombreFamilia = nombreFamilia;
        this.cantPersonas = cantPersonas;
        this.dia = dia;
    }
    
    set nombreFamilia(nombreF) {
        this._nombreFamilia = nombreF;
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


}



// --> comentarios de una sola linea de cod
/* comentarios de mas de una linea*/
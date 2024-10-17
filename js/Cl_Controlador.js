//clase controlador
import Cl_Mfamilia from "./Cl_Mfamilia.js";
import Cl_Vfamilia from "./Cl_Vfamilia.js";
import Cl_Mcine from "./Cl_Mcine.js";
import Cl_Vcine from "./Cl_Vcine.js";

export default class Cl_Controlador { 

  constructor() {
    
    //this.mFamilia = new Cl_familia();
    this.vFamilia = new Cl_Vfamilia(this);
    this.mCine = new Cl_Mcine()
    this.vCine = new Cl_Vcine(this);
    this.mostrarvistaCine()

  }

  mostrarvistaCine(){
    this.vCine.mostrar();
  }

  ocultarvistaCine(){
    this.vCine.ocultar();
  }

  mostrarvistaFamilia(){
    this.vFamilia.mostrar();
  }

  ocultarVistaFamilia(){
    this.vFamilia.ocultar();
  }

  agregarFamilia({ nombreFamilia, cantPersonas, dia }) {
   // this.montoE = 1
    let familia = new Cl_Mfamilia({ nombreFamilia, cantPersonas, dia });
    this.mCine.procesarFamilia(familia);
    this.vCine.reportarFamilia({
      nombreFamilia: familia.nombreFamilia,
      cantPersonas: familia.cantPersonas,
      dia: familia.dia,
      nuevoDineroCaja:this.mCine.cajaDeDinero(this.vFamilia.enviarDinero()),
      montoAPagarF: this.mCine.montoAPagarF,
      mayorPago: this.mCine.familiaquepagoMas(),
      acumpromedio: this.mCine.acumPromedio,
      totalGanancias: this.mCine.totalGanancias()


    });
    this.mostrarvistaCine();
  }
}
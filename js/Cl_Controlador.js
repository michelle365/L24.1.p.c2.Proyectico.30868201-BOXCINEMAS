//clase controlador
import Cl_familia from "./Cl_Mfamilia.js";
import Cl_cine from "./Cl_Mcine.js";
import Cl_Vfamilia from "./Cl_Vfamilia.js";
import Cl_Vcine from "./Cl_Vcine.js";

export default class Cl_Controlador { 

  constructor() {
    
    //this.mFamilia = new Cl_familia();
    this.vFamilia = new Cl_Vfamilia(this);
    this.mCine = new Cl_cine();
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
}
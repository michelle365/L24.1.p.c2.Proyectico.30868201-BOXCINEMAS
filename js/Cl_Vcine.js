import Cl_Mcine from "./Cl_Mcine.js"
import  Cl_Vfamilia from "./Cl_Vfamilia.js"

export default class Cl_Vcine {
    constructor(controlador) {
      this.vista = document.getElementById("cineForm");
      this.tablaSalida = document.getElementById("tableSalida");
      this.nuevoDineroCaja= document.getElementById("cine_lblAcumDineroCaja");
      this.mayorPago = document.getElementById("cine_lblMayorPago");
      this.promLunes = document.getElementById("cine_lblPromedioLunes");
      this.totalGanancias = document.getElementById("cine_lblTotalGanancias");

 

      this.vFam = new Cl_Vfamilia(controlador) 
      this.dineroC =  this.vFam.dineroCaja.value
      this.mCine = new Cl_Mcine(this.dineroC)

      this.btnAggFamilia = document.getElementById("btnAgregarFamilia");

      this.btnAggFamilia.onclick = () => controlador.mostrarVistaFamilia();
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
   
    reportarFamilia ({
      nombreFamilia,
      cantPersonas,
      dia,
      montoAPagarF,
      acumpromedio,
    }) {
      this.tablaSalida.innerHTML += `
      <tr>
        <td>${nombreFamilia}</td>
        <td>${cantPersonas}</td>
        <td>${dia}</td>
        <td>${montoAPagarF}</td>
      </tr>`;
      this.nuevoDineroCaja.innerHTML = mCine.cajaDeDinero()
      this.mayorPago.innerHTML = mCine.familiaquepagoMas() 
      this.promLunes.innerHTML = acumpromedio
      this.totalGanancias.innerHTML = mCine.totalGanancias()

    }

  } 

  /* this.vista = document.getElementById("cineForm");
      this.tablaSalida = document.getElementById("tableSalida");
      this.montoApagarFam = document.getElementById("lblMonto_Apagar");
      this.mayorPago = document.getElementById("cine_lblMayorPago");
      thia.nombreMayorF = document.getElementById ("cine_lblNombremayorpago")
      this.promLunes = document.getElementById("cine_lblPromedioLunes");
      this.totalGanancias = document.getElementById("cine_lblTotalGanancias");
  
  */


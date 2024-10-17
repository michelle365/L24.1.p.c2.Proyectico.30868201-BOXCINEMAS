
export default class Cl_Vcine {
    constructor(controlador) {
      this.vista = document.getElementById("cineForm");
      this.tablaSalida = document.getElementById("tableSalida");
      this.nuevoDineroCaja= document.getElementById("cine_lblAcumDineroCaja");
      this.mayorPago = document.getElementById("cine_lblMayorPago");
      this.promLunes = document.getElementById("cine_lblPromedioLunes");
      this.totalGanancias = document.getElementById("cine_lblTotalGanancias")
    
      this.btnAggFamilia = document.getElementById("btnAgregarFamilia");

      this.btnAggFamilia.onclick = () => controlador.mostrarvistaFamilia();
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
      nuevoDineroCaja,
      montoAPagarF,
      mayorPago,
      acumpromedio,
      totalGanancias
      

    }) {
      this.tablaSalida.innerHTML += `
      <tr>
        <td>${nombreFamilia}</td>
        <td>${cantPersonas}</td>
        <td>${dia}</td>
        <td>${montoAPagarF}</td>
      </tr>`;
      this.nuevoDineroCaja.innerHTML = nuevoDineroCaja
      this.mayorPago.innerHTML = mayorPago
      this.promLunes.innerHTML = acumpromedio
      this.totalGanancias.innerHTML =  totalGanancias

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


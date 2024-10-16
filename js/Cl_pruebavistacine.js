export default class Cl_Vcine {
    constructor(controlador) {
      this.vista = document.getElementById("cineForm");
      this.tablaSalida = document.getElementById("tableSalida");
      this.montoApagarFam = document.getElementById("lblMonto_Apagar");
      this.mayorPago = document.getElementById("cine_lblMayorPago");
      this.promLunes = document.getElementById("cine_lblPromedioLunes");
      this.totalGanancias = document.getElementById("cine_lblTotalGanancias");

      this.btnAggFamilia = document.getElementById("btnAgregarFamilia");

      this.btnAggFamilia.onclick = () => controlador.mostrarVistaFamilia();
      /*this.btAceptar.onclick = () =>
        controlador.x({});*/
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
}
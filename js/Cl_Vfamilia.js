export default class Cl_Vfamilia {
    constructor(controlador) {
      this.vista = document.getElementById("familiaForm");
      this.nombreF = document.getElementById("nombre_Familia");
      this.cantP = document.getElementById("cantPersonas");
      this.diaFuncion = document.getElementById("dia");
      this.dineroCaja = document.getElementById("dineroEnCaja");
      this.btnAgregar = document.getElementById("btnAgregar");
      this.btnRegresar = document.getElementById("btnRegresar");
      this.ocultar();
      this.btnAgregar.onclick = () =>
        controlador.agregarFamilia({
          nombreFamilia : this.nombreF.value,
          cantPersonas : this.cantP.value,
          dia : this.diaFuncion.value,
        });
      this.btnRegresar.onclick = () => this.ocultar()
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar(){
      this.vista.hidden = true;
    }
    enviarDinero(){
      return this.dineroCaja.value
    }
}
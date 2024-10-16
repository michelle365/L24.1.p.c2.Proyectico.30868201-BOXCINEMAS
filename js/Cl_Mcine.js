export default class Cl_Mcine {
    //Clase mayor
    constructor(dineroC){
        this.precioFijo = 3; //3$ precio de la entrada
        this.dineroCaja =  dineroC; //dinero en caja inicial
        this.descuento = 0;
        this.cntDiasLun = 0;
        this.montoAPagarLun = 0;
        this.montoAPagarF = 0;
        this.montoTotGanancia = 0;
        this.acumPromedio = 0;
        this.mayorPagoF = 0;
        this.nombreMayorF = "";
    }
    procesarFamilia(familia){

        this.montoAPagarF = this.precioFijo - this.descuentoLunes()
        familia.montoEntrada = this.montoAPagarF
        
        if (familia.dia == 1) {
          this.cntDiasLun++; 
          this.montoAPagarLun += this.montoAPagarF
          this.acumPromedio = this.montoAPagarLun/ this.cntDiasLun 

        } else {
           this.cntDiasLun = 0;
        } 

        this.montoTotGanancia += this.montoAPagarF 

        if (this.montoAPagarF > this.mayorPagoF){
            this.mayorPagoF = this.montoAPagarF
            this.nombreMayorF = familia.nombrefamilia
        }   


    }
    //
    descuentoLunes(){
        
        return (this.precioFijo * 0.50)
    }
    //
    montoAPagar(){
        
        return (this.precioFijo - this.descuentoLunes())
    }



    totalGanancias(){
        
        return (this.acumPromedio + this.dineroCaja)
    }


    familiaquepagoMas(){

        return this.mayorPagoF
    }

}
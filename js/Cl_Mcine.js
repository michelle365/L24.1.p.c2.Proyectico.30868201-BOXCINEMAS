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
          
        
        familia.montoEntrada = this.montoAPagarF

        this.dineroCaja += dineroC
        
        if (familia.dia == 1) {
          this.cntDiasLun++; 
          this.descuento = (this.precioFijo * 0.50)
          this.montoAPagarLun += this.montoAPagarF
          this.acumPromedio = this.montoAPagarLun / this.cntDiasLun 

        } else {
           this.cntDiasLun = 0;
           this.descuento = 0;
        } 

        this.montoAPagarF = familia.cantPersonas * (this.precioFijo - this.descuento)

        this.montoTotGanancia += this.montoAPagarF 

        if (this.montoAPagarF > this.mayorPagoF){
            this.mayorPagoF = this.montoAPagarF
            this.nombreMayorF = familia.nombrefamilia
        }   


    }
    //
    
    familiaquepagoMas(){
        return this.nombreMayorF
    }

    
    totalGanancias(){
        return (this.montoTotGanancia + this.dineroCaja)
    }

   
    

}
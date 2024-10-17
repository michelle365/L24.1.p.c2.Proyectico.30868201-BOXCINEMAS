export default class Cl_Mcine {
    //Clase mayor
    constructor(){
        this.precioFijo = 3; //3$ precio de la entrada
        this.nombreMayorF = "";
        this.dineroCaja =   //dinero en caja inicial
        this.acumDineroCaja = 
        this.descuento = 
        this.cntDiasLun = 
        this.montoAPagarLun = 
        this.montoAPagarF = 
        this.montoTotGanancia = 
        this.acumPromedio = 
        this.mayorPagoF = 0;
        
    }

    
    procesarFamilia(familia){



        if (familia.dia == 1) {
            this.cntDiasLun++; 
            this.descuento = (this.precioFijo * 0.50)
            this.montoAPagarLun += this.montoAPagarF
            this.acumPromedio = (this.montoAPagarLun / this.cntDiasLun)

        } 
        else {
            this.cntDiasLun = 0;
            this.descuento = 0;
        } 

        this.montoAPagarF = (familia.cantPersonas * (this.precioFijo - this.descuento))

        this.montoTotGanancia += this.montoAPagarF 

        if (this.montoAPagarF > this.mayorPagoF){
            this.mayorPagoF = this.montoAPagarF
            this.nombreMayorF = familia.nombreFamilia
        }   


    }
    //
    
    cajaDeDinero(dineroC){ 
        this.dineroCaja = dineroC
        this.acumDineroCaja += this.dineroCaja
        return this.acumDineroCaja
    }
    familiaquepagoMas(){
        return this.nombreMayorF
    }

    
    totalGanancias(){
        return this.montoTotGanancia + this.dineroCaja
    }

   
    

}
export default class Cl_Mcine {
    //Clase mayor
    constructor(){
        this.precioFijo = 3; //3$ precio de la entrada
        this.dineroCaja = 0; //dinero en caja inicial
        this.descuento = 0;
        this.cntDiasLun = 0;
        this.montoAPagarLun = 0;
        this.montoAPagarF = 0;
        this.montoTotGanancia = 0;
        this.acumPromedio = 0;
        this.mayorPagoF = 0;
    }
    procesarFamilia(familia){
        
        if (this.dia==1) this.cntDiasLun++;

        if(this.montoAPagar() > this.mayorPagoF){
            this.mayorPagoF = this.montoAPagar()
        }   

        this.acumPromedio += this.montoAPagar()

    }
    //
    descuentoLunes(){
        
        if (this.dia == 1) this.precioFijo * 0.50
    }
    //
    montoAPagar(){
        
        return (this.precioFijo - this.descuentoLunes())
    }

    promedioLunes(){
        
        return (this.acumPromedio / this.cntDiasLun)
    }

    totalGanancias(){
        
        return (this.acumPromedio + this.dineroCaja)
    }


    familiaquepagoMas(){

        return this.mayorPagoF
    }
}
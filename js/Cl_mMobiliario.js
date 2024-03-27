export default class Mobiliario {
    constructor(Factura, TipoMadera) {
      this.Factura = Factura;
      this.TipoMadera = TipoMadera;
    }
  
    PrecioBase() {
      if (this.TipoMadera == 1) {
        return 5000;
      } else if (this.TipoMadera == 2) {
        return 3000;
      }
    }
  }
  
  class Comedor extends Mobiliario {
    constructor(Factura, TipoMadera, Sillas) {
      super(Factura, TipoMadera);
      this.Sillas = Sillas;
    }
  
    PrecioComedor() {
      return this.PrecioBase() * 0.5 * this.Sillas * 0.1;
    }
  }
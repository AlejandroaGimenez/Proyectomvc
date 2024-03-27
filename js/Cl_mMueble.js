import Mobiliario from "./Cl_mMobiliario.js";
export default class Mueble extends Mobiliario {
  constructor(Factura, TipoMadera, Tela) {
    super(Factura, TipoMadera);
    this.Tela = Tela;
  }

  PrecioMueble() {
    if (this.Tela === 1) {
      return this.PrecioBase() + this.PrecioBase() * 0.2;
    } else if (this.Tela === 2) {
      return this.PrecioBase() + this.PrecioBase() * 0.3;
    } else {
      return this.PrecioBase() + this.PrecioBase() * 0.4;
    }
  }
}

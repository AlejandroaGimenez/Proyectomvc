class Mueblería {
  constructor() {
    this.ContComedor = 0;
    this.ContMobiliario = 0;
    this.AcumTotal = 0;
  }

  procesar(Mobiliario) {
    if (Mobiliario instanceof Comedor) {
      this.ContComedor++;
    } else if (Mobiliario instanceof Mueble) {
      this.ContMobiliario++;
    }
  }

  ProductoMasVendido() {
    if (this.ContComedor > this.ContMobiliario) {
      return "Comedores";
    } else if (this.ContComedor < this.ContMobiliario) {
      return "Muebles";
    } else return "Por igual";
  }

  PorcComedores() {
    return (this.ContComedor / (this.ContComedor + this.ContMobiliario)) * 100;
  }

  MontoTotal() {
    let totalComedores =
      Mobiliario1.PrecioComedor() +
      Mobiliario2.PrecioComedor() +
      Mobiliario3.PrecioComedor();
    let totalMuebles =
      Mobiliario4.PrecioMueble() +
      Mobiliario5.PrecioMueble() +
      Mobiliario6.PrecioMueble() +
      Mobiliario7.PrecioMueble();

    this.AcumTotal = totalComedores + totalMuebles;
    return this.AcumTotal;
  }
}


/*MUEBLE-ALDÍA: terminales de cédula suman entre 7 y 12 En una mueblería se especializan en mobiliarios hechos con 
maderas de cedro o de pino (1=Cedro, 2=Pino), teniendo una base de cálculo por cada metro cúbico (m3) de Bs. 5000 
el cedro y Bs. 3000 el pino. Tienen dos mobiliarios principales: 1=juego de comedor y 2=juego de muebles. 
Un juego de comedor se vende con una mesa (que tiene 0,5 m3) y la cantidad de sillas que desee el cliente,
 y se sabe que cada silla tiene 0,1 m3. El juego de muebles tiene fijo 1 m3, pero dependiendo del tipo de tela con 
 que se forran (1=lona, 2=gamuza, 3=terciopelo) se le incrementa al precio un 20%, 30% ó 40% respectivamente. Se 
 requiere un programa que procese múltiples mobiliarios, donde cada mobiliario tienen asociado un número de factura.
  Mostrar por cada mobiliario: el precio del mismo y por la Mueblería: a) El nombre del producto que proporciona más
   dinero a la mueblería (“muebles”, “comedores” o “por igual”), b) Porcentaje de Comedores vendidos y c) Monto Total
    Vendido. Considere los comedores vendidos: (factura, madera, sillas) - (222, 2, 3) - (111, 1, 2) - (555, 1, 4) - 
    (888, 2, 2) Considere los muebles vendidos: (factura, madera, tela) - (444, 1, 3) - (333, 1, 1) - (777, 2, 2) - 
    (444, 1, 2) */
class Mobiliario {
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

class Mueble extends Mobiliario {
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


function main() {
  let salida = document.getElementById("salida");

  let Mobiliario1 = new Comedor(222, 2, 3);
  let Mobiliario2 = new Comedor(111, 1, 2);
  let Mobiliario3 = new Comedor(555, 1, 4);

  let Mobiliario4 = new Mueble(444, 1, 3);
  let Mobiliario5 = new Mueble(333, 1, 1);
  let Mobiliario6 = new Mueble(777, 2, 2);
  let Mobiliario7 = new Mueble(444, 1, 2);

  let Mueblería1 = new Mueblería();

  Mueblería1.procesar(Mobiliario1);
  Mueblería1.procesar(Mobiliario2);
  Mueblería1.procesar(Mobiliario3);
  Mueblería1.procesar(Mobiliario4);
  Mueblería1.procesar(Mobiliario5);
  Mueblería1.procesar(Mobiliario6);
  Mueblería1.procesar(Mobiliario7);

  salida.innerHTML += "Mobiliario 1: " + Mobiliario1.PrecioComedor() + "<br>";
  salida.innerHTML += "Mobiliario 2: " + Mobiliario2.PrecioComedor() + "<br>";
  salida.innerHTML += "Mobiliario 3: " + Mobiliario3.PrecioComedor() + "<br>";

  salida.innerHTML += "Mobiliario 4: " + Mobiliario4.PrecioMueble() + "<br>";
  salida.innerHTML += "Mobiliario 5: " + Mobiliario5.PrecioMueble() + "<br>";
  salida.innerHTML += "Mobiliario 6: " + Mobiliario6.PrecioMueble() + "<br>";
  salida.innerHTML += "Mobiliario 7: " + Mobiliario7.PrecioMueble() + "<br>";

  salida.innerHTML +=
    "Producto que proporciona más dinero a la mueblería: " +
    Mueblería1.ProductoMasVendido() +
    "<br>";
  salida.innerHTML +=
    "Monto Total Vendido: " + Mueblería1.MontoTotal() + "<br>";
  salida.innerHTML +=
    "Porcentaje de Comedores vendidos: " + Mueblería1.PorcComedores() + "%<br>";
  salida.innerHTML +=
    "Monto total vendido: " + Mueblería1.MontoTotal() + "<br>";
}
main();

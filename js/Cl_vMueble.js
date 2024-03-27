import Cl_mMueble from "./Cl_mMueble.js";

export default class Cl_vMueble {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMueble");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inFactura = document.getElementById("formMuebleInFactura");

    this.btAceptar = document.getElementById("formMuebleBtAceptar");
    this.btAceptar.onclick = () => this.agregarMueble();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarMueble() {
    /**
     * Renombrar mMenor
     * Renombrar instancia "menor" y construirla con las entradas respectivas
     */
    let Mueble = new Cl_mMueble({
      numero: this.inFactura.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mMuebleria.procesarMueble(Mueble);
    this.app.vMuebleria.reportar(Mueble);
    this.ocultar();
    this.app.vMayor.mostrar();
  }
}

import Cl_mMenor from "./Cl_mMenor.js";

export default class Cl_vMenor {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMenor");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inNumero = document.getElementById("formMenorInNumero");

    this.btAceptar = document.getElementById("formMenorBtAceptar");
    this.btAceptar.onclick = () => this.agregarMenor();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarMenor() {
    /**
     * Renombrar mMenor
     * Renombrar instancia "menor" y construirla con las entradas respectivas
     */
    let menor = new Cl_mMenor({
      numero: this.inNumero.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mMayor.procesarMenor(menor);
    this.app.vMayor.reportar(menor);
    this.ocultar();
    this.app.vMayor.mostrar();
  }
}

import Cl_mComedor from "./Cl_mComedor.js";

export default class Cl_vComedor {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formComedor");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inNumero = document.getElementById("formComedorInNumero");

    this.btAceptar = document.getElementById("formComedorBtAceptar");
    this.btAceptar.onclick = () => this.agregarComedor();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarComedor() {(
this.vMuebleria.Factura = this.inFactura.value


  )
    /**
     * Renombrar mMenor
     * Renombrar instancia "menor" y construirla con las entradas respectivas
     */
    let Comedor = new Cl_mComedor({
      numero: this.inNumero.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mMuebleria.procesarComedor(Comedor);
    this.app.vMuebleria.reportar(Comedor);
    this.ocultar();
    this.app.vMuebleria.mostrar();
  }
}

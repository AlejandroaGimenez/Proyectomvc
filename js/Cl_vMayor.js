export default class Cl_vMayor {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMayor");
    this.tabla = document.getElementById("formMayorTabla");
    this.btAgregar = document.getElementById("formMayorBtAgregar");
    /** declarar etiquetas de salidas clase mayor */
    this.lblReporte1 = document.getElementById("formMayorLblReporte1");

    this.btAgregar.onclick = () => {
      this.ocultar();
      this.app.vMenor.mostrar();
    };
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  /** Cambiar nombre de "menor" por el nombre correcto */
  reportarMenor(menor) {
    /**
     * Renombrar parámetro "menor"
     * Indicar campos de la tabla
     * */
    this.tabla.innerHTML += `
    <tr>
    <td>${menor.numero}</td>
    </tr>`;

    /** Asignar valores a etiquetas de salida */
    this.lblReporte1.innerHTML = this.app.mMayor.reporte1();
  }
}

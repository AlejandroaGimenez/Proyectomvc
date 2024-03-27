export default class Cl_vMuebleria {
    constructor(app) {
      this.app = app;
      this.vista = document.getElementById("formMuebleria");
      this.tabla = document.getElementById("formMuebleriaTabla");
      this.btAgregar = document.getElementById("formMuebleriaBtAgregar");
      /** declarar etiquetas de salidas clase mayor */
      this.lblReporte1 = document.getElementById("formMuebleriaLblReporte1");
  
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
    reportarMobiliario(Mobiliario) {
      /**
       * Renombrar parámetro "menor"
       * Indicar campos de la tabla
       * */
      this.tabla.innerHTML += `
      <tr>
      <td>${Mobiliario.numero}</td>
      </tr>`;
  
      /** Asignar valores a etiquetas de salida */
      this.lblReporte1.innerHTML = this.app.mMuebleria.reporte1();
    }
  }
  
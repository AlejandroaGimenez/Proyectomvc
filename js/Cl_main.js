import Cl_vComedor from "./Cl_vComedor.js";
import Cl_vMueble from "./Cl_vMueble.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
/** Reemplazar en todo el documento por el nombre correcto de cada clase:
 * Cl_vMenor, Cl_vMayor, Cl_mMayor, Cl_mMenor
 * Renombrar los archivos de las vistas por el nombre correcto de cada clase
 */

export default class Cl_main {
  constructor() {
    this.app = {};
    this.app.vMuebleria = new Cl_vMuebleria(this.app);
    this.app.vComedor = new Cl_vComedor(this.app);
    this.app.vMueble = new Cl_vMueble(this.app);
    this.app.vMuebleria = new Cl_vMuebleria(this.app);
  }
}

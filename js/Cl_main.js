import Cl_vMayor from "./Cl_vMayor.js";
import Cl_vMenor from "./Cl_vMenor.js";
import Cl_mMayor from "./Cl_mMayor.js";
/** Reemplazar en todo el documento por el nombre correcto de cada clase:
 * Cl_vMenor, Cl_vMayor, Cl_mMayor, Cl_mMenor
 * Renombrar los archivos de las vistas por el nombre correcto de cada clase
 */
export default class Cl_main {
  constructor() {
    this.app = {};
    this.app.mMayor = new Cl_mMayor();
    this.app.vMenor = new Cl_vMenor(this.app);
    this.app.vMayor = new Cl_vMayor(this.app);
  }
}

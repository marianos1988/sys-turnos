import pool from "../bd/bdConfig";
import utils from "./utils";

const editarTurno = async (req:any,res:any) => {
  const id = req.params.id;
  const data = await req.body;
  const verificarIDEditarTurno = utils.verificarIDEditarTurno(parseInt(id),parseInt(data.id));
  if(verificarIDEditarTurno) {
    const dataParse = utils.parseEditarTurno(data);
    if(dataParse !== "Datos incorrectos") {
      const datosValidados = utils.validarDatosEditarTurno(data);
      if(datosValidados === true) {
          const turnoReg = utils.saveEditarTurno(dataParse);
          res.json(turnoReg);
      } else {
        res.json(datosValidados);
      }
    } else {
        res.json(dataParse);
    }
  } else {
      res.json("No es valido el ID para editar");
  }
    
    
}

export default {
    editarTurno
}
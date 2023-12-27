import utils from "./utils";
import pool from "../bd/bdConfig";

const editarTurno = async (req:any,res:any) => {
  const id = req.params.id;
  const data = await req.body;
  const verificarIDEditarTurno = utils.verificarIDEditarTurno(parseInt(id),parseInt(data.id));
  if(verificarIDEditarTurno) {
    const dataParse = utils.parseEditarTurno(data);
    if(dataParse !== "Datos incorrectos") {
      const datosValidados = utils.validarDatosEditarTurno(data);
      if(datosValidados === "ok") {
          utils.saveEditarTurno(dataParse);
          res.json(`Turno modificado`);

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

const eliminarTurno = async (req:any,res:any) => {

const dataID = await req.params.id;
const number = parseInt(dataID);
const validar = utils.isNumber(number);

if(validar === true) {
  const fechaHoy = new Date();
  const fechaDB = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth()+1}-${fechaHoy.getDate()}`
  const query = `UPDATE turnos SET eliminado= true, fecha_eliminado="${fechaDB}" WHERE id=${dataID}`;
  
  pool.query(query,(err,resu)=>{
    try {
      if(err)
        throw err;
      res.json(`Turno eliminado`);
    } catch (error) {
      console.log(error)
    }

  })
} else {
  res.json(`El numero ID es incorrecto`);
}
}

export default {
    editarTurno,
    eliminarTurno
}
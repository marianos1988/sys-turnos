
import utils from "./utils";

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
const id = await req.params.id;
console.log(id)
}

export default {
    editarTurno,
    eliminarTurno
}
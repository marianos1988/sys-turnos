import  utils from "./utils"
import pool from "../bd/bdConfig";
import { NuevoTurno } from "./types";

const addNuevoTurno = async (req:any, res:any) => {
  const data = await req.body;
  const newTurno:any = utils.parseNuevoTurno(data);
  if(newTurno === "Datos incorrectos") {
    res.json(newTurno)
  } else {
    const validarDatos = utils.validarDatosNuevoTurno(req.body);
    if(validarDatos === "Turno registrado") {
      // 2023-12-14 15:30:00
      const fechaYHoraParaBD = `${newTurno?.fecha.$y}-${utils.agregarCeroAlNum(newTurno?.fecha.$M)}-${utils.agregarCeroAlNum(newTurno?.fecha.$D)} ${utils.agregarCeroAlNum(newTurno.hora.$H)}:${utils.agregarCeroAlNum(newTurno.hora.$m)}:00`; 

      const query = `INSERT INTO turnos (nombre_cliente, telefono, fecha_y_hora, corte, peinado, alisado, tintura, observacion) VALUES ("${newTurno.nombreCliente}", "${newTurno.telefono}", "${fechaYHoraParaBD}", ${newTurno.corte}, ${newTurno.peinado}, ${newTurno.alisado}, ${newTurno.tintura}, "${newTurno.observacion}")`;

      console.log(query);
      pool.query(query,(err, resu) =>{
        if(err)
          throw err;
        res.json(validarDatos);
      })
    } else {
      res.json(validarDatos);
    }
  }



 
}

export default {
    addNuevoTurno
}
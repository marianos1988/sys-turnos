import pool from "../bd/bdConfig";
import { ListaTurnos } from "./types";
import utils from "./utils";

const getAllListaTurnos = async (req: any, res: any)=> {

  const fechaHoy = new Date();
  const fechaHoyEdit = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth()+1}-${fechaHoy.getDate()}`;
  const query = `SELECT * FROM turnos WHERE fecha_y_hora >= "${fechaHoyEdit}" ORDER BY fecha_y_hora ASC`;

  pool.query(query,(err, resu)=> {
    if(err)
      throw err;

    let listaTurnos:ListaTurnos[] = [];
    resu.forEach((element:any) => {

      const turno:any = {
        id: element.id,
        nombreCliente: element.nombre_cliente,
        telefono: element.telefono,
        fecha: utils.mostrarFecha(element.fecha_y_hora),
        hora: utils.mostrarHora(element.fecha_y_hora),
        corte: utils.transformBoolean(element.corte),
        peinado: utils.transformBoolean(element.peinado),
        alisado: utils.transformBoolean(element.alisado),
        tintura: utils.transformBoolean(element.tintura),
        observacion: element.observacion
      }
      listaTurnos.push(turno);

    });

    res.json(listaTurnos);
    
  })
}


export default {
  getAllListaTurnos
}
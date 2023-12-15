import pool from "../bd/bdConfig";
import { ListaTurnos } from "./types";

const getAllListaTurnos = async (req: any, res: any)=> {

  const fechaHoy = new Date();
  const fechaHoyEdit = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth()+1}-${fechaHoy.getDate()}`;
  const query = `SELECT * FROM turnos WHERE fecha_y_hora >= "${fechaHoyEdit}" ORDER BY fecha_y_hora ASC`;

  pool.query(query,(err, resu)=> {
    if(err)
      throw err;
    if(resu.length < 1) {
      res.json("");
    }
    const listaTurnos:ListaTurnos[] = [];
    resu.forEach((element:any) => {
      const turno:ListaTurnos = {
        id: element.id,
        nombreCliente: element.nombre_cliente,
        telefono: element.telefono,
        fecha: element.fecha_y_hora,
        hora: element.fecha_y_hora,
        corte: element.corte,
        peinado: element.peinado,
        alisado: element.alisado,
        tintura: element.tintura,
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
import  utils from "./utils"
import pool from "../bd/bdConfig";

const addNuevoTurno = (req:any, res:any) => {
  const newTurno = utils.parseNuevoTurno(req.body);
  res.json(newTurno);

 
}

export default {
    addNuevoTurno
}
import utils from "./utils";
import pool from "../bd/bdConfig";

const login = async (req: any,res: any) => {

  const user = utils.validarLogin(req.body);

  if(user === "Datos Incorrectos") {
    res.send(user)
  } else {

    const query = `SELECT * FROM userslogin WHERE user= "${user.user}" AND password="${user.password}"`;
    pool.query(query,(err,resu)=>{
      if(err)
        throw err;
      if(resu.length < 1) {
        res.json("Usuario o contraseña incorrecta")
      } else {
        res.json(resu)
        // res.send(user);
      }

    })

  }


}

export default {
    login
}
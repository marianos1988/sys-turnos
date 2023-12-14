import utilsLogin from "./utils";
import pool from "../bd/bdConfig";
import crypto from "crypto";

const login = async (req: any,res: any) => {
  const data = await req.body;
  const user =  utilsLogin.parseLogin(data);

  if(user === "Datos Incorrectos") {
    res.json(user);
  } else {
    const hash = crypto.createHash("sha256").update(user.password).digest("hex");
    const query = `SELECT * FROM userslogin WHERE user= "${user.user}" AND password="${hash}"`;
    pool.query(query,(err,resu)=>{
      if(err)
        throw err;
      if(resu.length < 1) {
        res.json("Usuario o contraseña incorrecta")
      } else {
        res.json(resu)
      }

    })

  }


}

export default {
    login
}
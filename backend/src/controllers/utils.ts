import { userLogin } from "./types";

const isString = (string:string):boolean => {
  return typeof string === "string" 
}

const validarLogin = (userLogin: any):userLogin | "Datos Incorrectos" => {
    if(isString(userLogin.user) && isString(userLogin.password)) {
      return userLogin
    }
    else {
      return "Datos Incorrectos";
    }

}

export default {
  validarLogin
}
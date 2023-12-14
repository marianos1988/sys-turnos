import { Fecha, Hora, NuevoTurno, userLogin } from "./types";

const isString = (string:string):boolean => {
  return typeof string === "string";
}
const isBoolean = (boolean:boolean):boolean => {
  return typeof boolean === "boolean";
}
const isNumber = (number:number):boolean => {
  return typeof number === "number";
}
const isHora = (hora:Hora):boolean => {
  if(isNumber(hora.$H) && isNumber(hora.$m)) {
    if((hora.$H >= 0 && hora.$H <= 24) && (hora.$m >= 0 && hora.$m <= 60)) {
      return true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}
const isFecha = (fecha:Fecha): boolean => {
  if(isNumber(fecha.$D) && isNumber(fecha.$M) && isNumber(fecha.$y)) {
    if((fecha.$D >= 1 && fecha.$D <= 31) && (fecha.$M >= 1 && fecha.$M <= 12)) {
      return true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}


const parseLogin = (userLogin: any):userLogin | "Datos Incorrectos" => {
    if(isString(userLogin.user) && isString(userLogin.password)) {
      return userLogin
    }
    else {
      return "Datos Incorrectos";
    }
}

const parseNuevoTurno = (nuevoTurno: any):NuevoTurno | "Datos incorrectos" | undefined => {

  try {

    if(!isString(nuevoTurno.nombreCliente)) {
      return "Datos incorrectos";
    }
    else if(!isString(nuevoTurno.telefono)) {
      return "Datos incorrectos";
    }
    else if (!isFecha(nuevoTurno.fecha)) {
      return "Datos incorrectos";
    }
    else if(!isHora(nuevoTurno.hora)) {
      return "Datos incorrectos";
    }
    else if(!isBoolean(nuevoTurno.corte)) {
      return "Datos incorrectos";
    }
    else if(!isBoolean(nuevoTurno.alisado)) {
      return "Datos incorrectos";
    }
    else if(!isBoolean(nuevoTurno.peinado)) {
      return "Datos incorrectos";
    }
    else if(!isBoolean(nuevoTurno.tintura)) {
      return "Datos incorrectos";
    }
    else {
      return nuevoTurno;
    }
    
  } catch (error) {
    console.log (error)
  }
  

}

export default {
  parseLogin,
  parseNuevoTurno
}
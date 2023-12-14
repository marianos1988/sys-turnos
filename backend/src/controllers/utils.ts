import { Fecha, Hora, NuevoTurno, NuevoTurnoParaValidar, userLogin } from "./types";

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

const agregarCeroAlNum = (num: number):string | number => {
  if(num < 10) {
    return `0${num}`
  }
  return num;
}

function validarSoloNumeros(numero: any) {
  // Valida si se cargo un numero True = No son numeros, False = Son numeros
  let verificaNumero = numero;
  let validar = false;
  for(let digito in verificaNumero){
      if(!(verificaNumero[digito] >= 0) && !(verificaNumero[digito] <= 9)) {
          validar = true;
          return validar;
      } 
  }
  return validar;   
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

const validarDatosNuevoTurno = (form:NuevoTurnoParaValidar) => {

  if(form.nombreCliente.length > 25) {
    return "Nombre demasiado largo";
   
  }
  else if(form.nombreCliente.length < 4) {
     return "Nombre demasiado corto";

  }
  else if(validarSoloNumeros(form.telefono)) {
    return "El telefono son solo numeros";
    
  }
  else if(form.fecha === "") {
    return "Ingrese una fecha";
   
  }
  else if(form.hora === "") {
    return "Ingrese una hora";

  }
  else if(!(form.corte === true) && !(form.peinado === true) && !(form.alisado === true) && !(form.tintura === true)) {
    return "Debes elegir un tipo de trabajo";
    
  }
  else if(!(form.observacion === undefined) && form.observacion?.length > 35) {
    return "La observacion es muy larga";
    
  }
  else {
    return "Turno registrado";
  }

}

export default {
  parseLogin,
  parseNuevoTurno,
  validarDatosNuevoTurno,
  agregarCeroAlNum
}
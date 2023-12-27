import pool from "../bd/bdConfig";
import { EditarTurno, EditarTurnoSinValidar, Fecha, Hora, NuevoTurno, NuevoTurnoParaValidar, userLogin } from "./types";

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

const mostrarHora = (hora:Date) => {
  const getHora = new Date(hora)
  return `${agregarCero(getHora.getHours())}:${agregarCero(getHora.getMinutes())}Hs`;
}

const mostrarFecha = (fecha:Date) => {
  const getFecha = new Date(fecha)
  return `${agregarCero(getFecha.getDate())}-${agregarCero(getFecha.getMonth()+1)}-${getFecha.getFullYear()}`;
}

const agregarCero = (num: number):string | number => {
  if(num < 10) {
    return `0${num}`
  }
  return num;
}

const transformBoolean = (value:number):boolean | undefined =>{
  if(value === 0) return false;
  else if(value === 1) return true;
}

const parseSearchDate = (fecha:any,mes:any,anio:any):string => {
  if(!(parseInt(fecha) > 0) && !(parseInt(fecha) < 32)) {
    return `La fecha es incorrecta`;
  }
  else if(!(parseInt(mes) > 0) && !(parseInt(mes) < 13)) {
    return `El mes es incorrecto`;
  }
  else if(!(parseInt(anio) > 1900) && !(parseInt(anio) < 3000)  && !(anio.length === 4)) {
    return `El año es incorrecto`;
  }
  else {
    return `${anio}-${mes}-${fecha}`;
  }
}

const verificarIDEditarTurno = (idURL:number,idTurno:number):boolean => {
  if(idURL === idTurno) return true;
  else return false;
}

const parseEditarTurno = (turno:any):EditarTurno | "Datos incorrectos"  => {
  
  if(!isString(turno.nombreCliente)) {
    return "Datos incorrectos";
  }
  else if(!isString(turno.telefono)) {
    return "Datos incorrectos";
  }
  else if (!isFecha(turno.fecha)) {
    return "Datos incorrectos";
  }
  else if(!isHora(turno.hora)) {
    return "Datos incorrectos";
  }
  else if(!isBoolean(turno.corte)) {
    return "Datos incorrectos";
  }
  else if(!isBoolean(turno.alisado)) {
    return "Datos incorrectos";
  }
  else if(!isBoolean(turno.peinado)) {
    return "Datos incorrectos";
  }
  else if(!isBoolean(turno.tintura)) {
    return "Datos incorrectos";
  }
  else {
    return turno;
  }
}

const validarDatosEditarTurno = (form:EditarTurnoSinValidar) => {

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
    return "ok";
  }

}

const saveEditarTurno = (turno:EditarTurno) => {

  try {
    const agregarFechaYHoraPAraDB = `${turno.fecha.$y}-${agregarCeroAlNum(turno.fecha.$M)}-${agregarCeroAlNum(turno.fecha.$D)} ${agregarCeroAlNum(turno.hora.$H)}:${agregarCeroAlNum(turno.hora.$m)}:00`;

    const query = `UPDATE turnos SET nombre_cliente="${turno.nombreCliente}", telefono="${turno.telefono}", fecha_y_hora="${agregarFechaYHoraPAraDB}", corte=${turno.corte}, peinado=${turno.peinado}, alisado=${turno.alisado}, tintura=${turno.tintura}, observacion="${turno.observacion}" WHERE id=${turno.id}`;

    pool.query(query,(err,_resu)=>{
      if(err)
        throw err;

    })

  } catch(error) {
    console.log(error)
    return `No se puede conectar a la base de datos`;
  }
}

export default {
  parseLogin,
  parseNuevoTurno,
  isNumber,
  validarDatosNuevoTurno,
  agregarCeroAlNum,
  mostrarHora,
  mostrarFecha,
  transformBoolean,
  parseSearchDate,
  verificarIDEditarTurno,
  parseEditarTurno,
  saveEditarTurno,
  validarDatosEditarTurno

}
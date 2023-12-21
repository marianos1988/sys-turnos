import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUserLogeado } from '../reducer/UserLoginSlice';
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice';
import { activeSpinner, inactiveSpinner } from '../reducer/SpinnerSlice';

type Props = {
  user:string | undefined,
  password:string | undefined
}

type Users = {
  users: {
    listaLogin: {
      user:string,
      password: string
    }[]
  },
  userLogeado: {
    logeado: boolean
    user: any
  }
    
}
export const useLogin = (initialState:Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(initialState);
  

  const handleLogearSistema =  async (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    const nomMinuscula = user.user?.toLocaleLowerCase();

    try {

      dispatch(activeSpinner("login"));
      let objetoHeaderLogin = {
                
        method : "POST",
        body : JSON.stringify({
            user: nomMinuscula,
            password: user.password
        }),
        headers : {
            "Content-type" : "application/json"
        }
      }

      const JSONUsuario = await fetch("http://localhost:3000/login",objetoHeaderLogin);
      const usuario = await JSONUsuario.json();

      dispatch(inactiveSpinner("login"));

      if(usuario === `Usuario o contraseña incorrecta`) {
        dispatch(mostrarCartelAdvertencia(usuario))
      }
      else if(usuario === "Error al conectar a la Base de datos") {
        dispatch(mostrarCartelAdvertencia("Error al conectar a la Base de datos"));
      }
      else {
        dispatch(setUserLogeado(nomMinuscula));
        navigate("/MisTurnos");
      }
    } catch (error) {
      dispatch(mostrarCartelAdvertencia("Error al conectar con el servidor"));
      console.log(error);
    }

  }

  const handleOnChange = (target:any)=> {

    const {name,value} = target.target;

    setUser({
      ...user,
      [name]: value 
    })

  }


  return {
    handleLogearSistema,
    handleOnChange,
    user
  }
}
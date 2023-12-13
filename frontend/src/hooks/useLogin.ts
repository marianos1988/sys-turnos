import { useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUserLogeado } from '../reducer/UserLogin';
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice';

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
      console.log(usuario);

      if(usuario === `Usuario o contraseña incorrecta`) {
        dispatch(mostrarCartelAdvertencia(usuario))
      } else {
        dispatch(setUserLogeado(nomMinuscula));
        navigate("/MisTurnos");
      }
    } catch (error) {
      console.log(error)
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
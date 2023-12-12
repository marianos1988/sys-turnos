import React from 'react'
import "../styles/Login.css"
import { BotonNav } from '../components/BotonNav'
import { useLogin } from '../hooks/useLogin'

type Props = {}

export const Login = () => {

  const initialState = {
    user: "",
    password: ""
  }
  const { handleLogearSistema, handleOnChange, user} = useLogin(initialState);
  
  return (
    <>
      <div className='container-login'>
        <div className='cartel-login'>
        <div className='container-titulo'>
          <div className='titulo'>
            <h1>Sistema de Turnos</h1>
            <h1>Iniciar Sesion</h1>
          </div>
          <img src="../src/img/logo.jpg" alt="Logo" />
        </div>
        <form className='form-login'>
          <div className='block-input-login'>
            <span>Usuario: (peluqueria)</span>
            <input 
              type="text" 
              placeholder='Ingrese el usuario' 
              onChange={(e)=>handleOnChange(e)}
              value={user.user}
              name={'user'}
            />
          </div>
          <div className='block-input-login'>
            <span>Contraseña: (1234)</span>
              <input 
              type="password" 
              placeholder='Ingrese la contraseña'
              onChange={(e)=>handleOnChange(e)}
              value={user.password}
              name={'password'}

            />
          </div>
          <div className='container-boton-login'>
            <BotonNav children={"Ingresar"} handleOnClick={handleLogearSistema} />
          </div>
        </form>
        </div>
      </div>
    </>
  )
}
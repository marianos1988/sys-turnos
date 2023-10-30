import React from 'react'
import "../styles/Login.css"
import { BotonNav } from '../components/BotonNav'

type Props = {}

export const Login = (props: Props) => {
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
            <span>Usuario:</span>
            <input type="text" placeholder='Ingrese el usuario'/>
          </div>
          <div className='block-input-login'>
            <span>Contraseña:</span>
            <input type="password" placeholder='Ingrese la contraseña'/>
          </div>
          <div className='container-boton-login'>
            <BotonNav children={"Ingresar"} handleOnClick={undefined} />
          </div>
        </form>
        </div>
      </div>
    </>
  )
}
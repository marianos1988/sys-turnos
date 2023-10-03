import React from 'react'
import "../styles/botonNav.css"

type Props = {
  className: string,
  children: string,
  handleOnClick:()=> void,
  newClass?: string
}

export const BotonNav = ({ children, handleOnClick, newClass }: Props) => {

  return (
    <button 
      className={`custom-btn btn-1 ${(newClass) ? newClass : ""}`}
      onClick={handleOnClick}
    >{children}</button>
  )
}

import React from 'react'
import "../styles/boton.css"

export const Boton = ({ children }) => {
  return (
    <button className="custom-btn btn-1">{children}</button>
  )
}

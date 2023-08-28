import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/index.css"
import { BrowserRouter } from "react-router-dom"
import { NuevoTurnoProvider } from './context/NuevoTurnoProvider'
import { EditarTurnoProvider } from './context/EditarTurnoProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NuevoTurnoProvider>
        <EditarTurnoProvider>
          <App />
        </EditarTurnoProvider>
      </NuevoTurnoProvider>
    </React.StrictMode>
  </BrowserRouter>,

)

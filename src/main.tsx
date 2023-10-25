import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/index.css"
import { BrowserRouter } from "react-router-dom"
import { NuevoTurnoProvider } from './context/NuevoTurnoProvider'
import { EditarTurnoProvider } from './context/EditarTurnoProvider'
import { Provider } from 'react-redux'
import store from "./app/Store"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <NuevoTurnoProvider>
          <EditarTurnoProvider>
            <App />
          </EditarTurnoProvider>
        </NuevoTurnoProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
)
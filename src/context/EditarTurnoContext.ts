import { createContext } from "react";
import { IEditarTurno, IEditarTurnoContext } from "../types/interface";
import React from "react";


export const EditarTurnoContext = createContext<IEditarTurnoContext>({} as IEditarTurnoContext);

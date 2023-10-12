import { createContext } from "react";
import { IEditarTurno } from "../types/interface";
import React from "react";


export const EditarTurnoContext = createContext<IEditarTurno>({} as IEditarTurno);

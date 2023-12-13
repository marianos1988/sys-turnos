import { createSlice } from "@reduxjs/toolkit";

type Users = {
  listaLogin: {
    user:string,
    password: string
  }[],
  userLogeado: {
    logeado: boolean,
    user: string
  }
}

const initialState:Users = {
  listaLogin: [
    {
      user: "mariano",
      password: "1234"
    },
    {
      user: "cutme",
      password: "1234"
    },
    {
      user: "fernando",
      password: "4321"
    },
    {
      user: "peluqueria",
      password: "1234"
    }
  ],
  userLogeado: {
    logeado: false,
    user: ""
  }
}


export const UsersLogin = createSlice({

  name: "users",
  initialState: initialState,
  reducers: {
    setUserLogeado: (state,action)=> {
      state.userLogeado.user = action.payload;
      state.userLogeado.logeado = true;
    },
    unsetUserLogeado: (state )=>{
      state.userLogeado.user = "";
      state.userLogeado.logeado = false;

    }
  }
});

export const { setUserLogeado, unsetUserLogeado } = UsersLogin.actions;
  
export default UsersLogin.reducer;
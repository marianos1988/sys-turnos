import { createSlice } from "@reduxjs/toolkit";

type Users = {

  userLogeado: {
    logeado: boolean,
    user: string
  }
}

const initialState:Users = {
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
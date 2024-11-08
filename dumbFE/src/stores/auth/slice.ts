import { createSlice } from "@reduxjs/toolkit";
import { cases } from "./cases";
import { IUser } from "@/type/user";
import Cookies from "js-cookie";

export interface AuthState {
  user?: IUser;
  token: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: undefined,
  token: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Cookies.set("token", action.payload);
    },
    LOGOUT(state) {
      state.user = undefined;
      state.token = "";
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    cases(builder);
  },
});

export const { setToken, LOGOUT } = authSlice.actions;
export default authSlice.reducer;

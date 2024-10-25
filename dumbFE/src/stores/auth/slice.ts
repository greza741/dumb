import { IUser } from "@/type/user";
import { createSlice } from "@reduxjs/toolkit";
import { cases } from "./cases";

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
    LOGOUT(state) {
      state.user = undefined;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    cases(builder);
  },
});

export const { LOGOUT } = authSlice.actions;
export default authSlice.reducer;

import { IUser } from "@/type/user";
import { createSlice } from "@reduxjs/toolkit";
import { cases } from "./cases";

export interface UserState {
  user?: IUser;
  loading: boolean;
  error?: string;
}

const initialState: UserState = {
  user: {} as IUser,
  loading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    cases(builder);
  },
});

export default userSlice.reducer;

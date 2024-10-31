import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "./auth/slice";
import { userSlice } from "./user/slice";
import { categorySlice } from "./category/slice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    category: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

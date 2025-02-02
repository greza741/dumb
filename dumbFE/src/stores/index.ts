import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "./auth/slice";
import { userSlice } from "./user/slice";
import { categorySlice } from "./category/slice";
import { productSlice } from "./product/slice";
import { cartSlice } from "./cart/slice";
import { transactionSlice } from "./transaction/slice";
import { dashboardSlice } from "./dasboard/slice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    category: categorySlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    transaction: transactionSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

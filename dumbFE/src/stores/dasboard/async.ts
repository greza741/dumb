import { api } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { DashboardData } from "./slice";

export const fetchDashboardData = createAsyncThunk<DashboardData>(
  "dashboard/fetchDashboardData",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/dashboard");
      return res.data;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

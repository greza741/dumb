import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardData } from "./async";

export interface DashboardData {
  totalTransactions: number;
  totalRevenue: number;
  pendingRevenue: number;
  processingRevenue: number;
  canceledRevenue: number;
  shippedRevenue: number;
  deliveredRevenue: number;
}

// Define the initial state for the slice
export interface DashboardState {
  data: DashboardData;
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  data: {
    totalTransactions: 0,
    totalRevenue: 0,
    pendingRevenue: 0,
    processingRevenue: 0,
    canceledRevenue: 0,
    shippedRevenue: 0,
    deliveredRevenue: 0,
  },
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;

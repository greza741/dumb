import { api } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Create Transaction
export const createTransactionAsync = createAsyncThunk(
  "transaction/createTransaction",
  async ({ userId, cartId }: { userId: number; cartId: number }, thunkAPI) => {
    try {
      const response = await api.post("/checkout", { userId, cartId });
      return response.data.paymentUrl;
    } catch (error) {
      console.error("Error creating transaction:", error);
      toast.error("Failed to create transaction");
      return thunkAPI.rejectWithValue("Transaction creation failed");
    }
  }
);

// Update Transaction Status
export const updateTransactionStatusAsync = createAsyncThunk(
  "transaction/updateTransactionStatus",
  async (
    { transactionId, status }: { transactionId: string; status: string },
    thunkAPI
  ) => {
    try {
      const response = await api.post("/checkout/payment", {
        order_id: transactionId,
        transaction_status: status,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating transaction status:", error);
      toast.error("Failed to update transaction status");
      return thunkAPI.rejectWithValue("Status update failed");
    }
  }
);

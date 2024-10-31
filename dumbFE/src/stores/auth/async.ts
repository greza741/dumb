import { api } from "@/libs/api";
import { IUser } from "@/type/user";
import { LoginSchema } from "@/validations/login-shema";
import { RegisterSchema } from "@/validations/register-schema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const registerAsync = createAsyncThunk<void, RegisterSchema>(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", data);
      console.log(res.data);
      toast.success("Register successfully");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginAsync = createAsyncThunk<
  { token: string; user: IUser },
  LoginSchema
>("auth/login", async (data, thunkAPI) => {
  try {
    const res = await api.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const checkAuthAsync = createAsyncThunk<
  {
    token: string;
    user: IUser;
  },
  undefined
>("auth/check", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("");
    }
    const res = await api.get("/auth/check");
    if (!res.data) {
      return thunkAPI.rejectWithValue("Unauthorized");
    }

    return {
      user: res.data,
      token: token,
    };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

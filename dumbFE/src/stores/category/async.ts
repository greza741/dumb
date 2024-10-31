import { api } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createCategoryAsync = createAsyncThunk(
  "category/create",
  async (name: string, thunkAPI) => {
    try {
      const res = await api.post("/category/create", { name });
      toast.success("Category created successfully");
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

export const getAllCategoriesAsync = createAsyncThunk(
  "category/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/category");
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

export const getCategoryByIdAsync = createAsyncThunk(
  "category/getById",
  async (id: number, thunkAPI) => {
    try {
      const res = await api.get(`/category/${id}`);
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

export const updateCategoryAsync = createAsyncThunk(
  "category/update",
  async ({ id, name }: { id: number; name: string }, thunkAPI) => {
    try {
      const res = await api.put(`/category/${id}`, { name });
      toast.success("Category updated successfully");
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

export const deleteCategoryAsync = createAsyncThunk(
  "category/delete",
  async (id: number, thunkAPI) => {
    try {
      await api.delete(`/category/${id}`);
      toast.success("Category deleted successfully");
      return id;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

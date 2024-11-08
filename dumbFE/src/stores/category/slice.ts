import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createCategoryAsync,
  deleteCategoryAsync,
  getAllCategoriesAsync,
  updateCategoryAsync,
} from "./async";

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  categories: Category[];
  loading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CategoryState>) => {
    builder
      .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoriesAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategoryAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategoryAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(
          (cat) => cat.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index].name = action.payload.name;
        }
      })
      .addCase(updateCategoryAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategoryAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(
          (cat) => cat.id !== action.payload
        );
      })
      .addCase(deleteCategoryAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategoryAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;

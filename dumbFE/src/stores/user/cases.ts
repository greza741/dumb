import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UserState } from "./slice";
import { updateUserAsync } from "./async";

export function cases(builder: ActionReducerMapBuilder<UserState>) {
  builder
    .addCase(updateUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(updateUserAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
}

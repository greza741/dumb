import { api } from "@/libs/api";
import { IUpdateProfileDTO, IUser } from "@/type/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const updateUserAsync = createAsyncThunk<
  { user: IUser },
  { data: Partial<IUpdateProfileDTO> & { avatar?: File } },
  { rejectValue: string }
>("user/edit", async ({ data }, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }
    const formData = new FormData();
    formData.append("name", data.name || "");
    formData.append("email", data.email || "");
    formData.append("gender", data.gender || "");
    formData.append("phone", data.phone || "");
    formData.append("address", data.address || "");
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    const res = await api.put(`/user/edit`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const updatedUser = res.data;
    toast;
    return updatedUser;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

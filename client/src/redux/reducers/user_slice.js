import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../axios_instance";

const initialState = {};

export const signin = createAsyncThunk("/signin", async (inputs) => {
  try {
    const data = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      data.append(key, value);
    }
    await AxiosInstance.post("/user/signin", data);
    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const signup = createAsyncThunk("/signup", async (inputs) => {
  try {
    const data = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      data.append(key, value);
    }
    await AxiosInstance.post("/user/signup", data);
    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const fetch_user = createAsyncThunk("/fetch_user", async () => {
  try {
    const res = await AxiosInstance.get("/user/fetch_user");
    return res.data.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const signout = createAsyncThunk("/signout", async () => {
  try {
    await AxiosInstance.post("/user/signout");
    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {},
});

export default userSlice.reducer;

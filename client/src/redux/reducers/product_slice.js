import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../axios_instance";
import axios from "axios";

const initialState = {
  products: [],
  loading_products: false,
  error_products: false,
};

export const fetch_products = createAsyncThunk(
  "/fetch_products",
  async ({ limit, offset }) => {
    try {
      const res = await AxiosInstance.get("/product/fetch_products/0/10");
      return res.data.products;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetch_products.pending, (state) => {
      state.loading_products = true;
    });
    builder.addCase(fetch_products.rejected, (state) => {
      state.loading_products = false;
      state.error_products = true;
    });
    builder.addCase(fetch_products.fulfilled, (state, action) => {
      state.loading_products = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;

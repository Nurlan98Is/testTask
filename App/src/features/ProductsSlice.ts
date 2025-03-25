import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../interface";

export const initialState: ProductsState = {
  allproducts: [],
  favoriteProducts: [],
  status: "",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function () {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=Beef"
    );

    const data = await response.json();

    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleProducts: (state, action) => {
      const id = action.payload;
      const existingProduct = state.favoriteProducts.find(
        (product) => product.idMeal === id
      );

      if (!existingProduct) {
        const productToAdd = state.allproducts.find(
          (product) => product.idMeal === id
        );

        if (productToAdd) {
          state.favoriteProducts.push(productToAdd);
        }
      }
      if (existingProduct) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (products) => products.idMeal !== id
        );
      }
    },
    removeProducts: (state, action) => {
      const id = action.payload;
      state.allproducts = state.allproducts.filter(
        (products) => products.idMeal !== id
      );
      state.favoriteProducts = state.favoriteProducts.filter(
        (products) => products.idMeal !== id
      );
    },
    addProduct: (state, action) => {
      console.log("addPayload", action.payload);
      state.favoriteProducts.push(action.payload);
    },
  },

  extraReducers: (bilder) => {
    bilder.addCase(fetchProducts.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    bilder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.allproducts = action.payload.meals;
    });
    bilder.addCase(fetchProducts.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const { removeProducts, toggleProducts, addProduct } =
  productsSlice.actions;
export default productsSlice.reducer;

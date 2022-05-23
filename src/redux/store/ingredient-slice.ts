import { createSlice } from '@reduxjs/toolkit';

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    isLoading: false,
    error: null
  },
  reducers: {
    getIngredientsFetch: (state) => {
      state.isLoading = true;
    },
    getIngredientsSuccess: (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
    },
    getIngredientsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'Something went wrong';
    }
  }
});

export const ingredientActions = ingredientSlice.actions;

export default ingredientSlice;

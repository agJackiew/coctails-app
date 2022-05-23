import { createSlice } from '@reduxjs/toolkit';

const coctailSlice = createSlice({
  name: 'coctails',
  initialState: {
    coctails: [],
    param: null,
    details: null,
    isLoadingC: false,
    errorC: null
  },
  reducers: {
    getCoctailsFetch: (state, action) => {
      state.isLoadingC = true;
      state.param = action.payload;
    },
    getCoctailsSuccess: (state, action) => {
      state.coctails = action.payload;
      state.isLoadingC = false;
    },
    getCoctailsError: (state, action) => {
      state.isLoadingC = false;
      state.errorC = action.payload || null;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    }
  }
});

export const coctailActions = coctailSlice.actions;

export default coctailSlice;

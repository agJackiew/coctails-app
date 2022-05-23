import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import ingredientSlice from './ingredient-slice';
import coctailSlice from './coctail-slice';
import rootSaga from '../sagas/rootSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    ingredients: ingredientSlice.reducer,
    coctails: coctailSlice.reducer
  },
  middleware: [saga]
});
saga.run(rootSaga);

export default store;

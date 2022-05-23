import { spawn } from 'redux-saga/effects';
import ingredientSaga from '../sagas/ingredientSaga';
import coctailSaga from '../sagas/coctailSaga';

export default function* rootSaga() {
  yield spawn(ingredientSaga);
  yield spawn(coctailSaga);
}

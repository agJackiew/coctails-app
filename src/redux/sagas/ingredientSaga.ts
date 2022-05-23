import { call, put, takeLatest } from 'redux-saga/effects';
import { ingredientActions } from '../store/ingredient-slice';
import { IngredientList } from '../../types/types';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

function* getIngredients(): any {
  try {
    const response = yield call(() => fetch(URL));
    const data: IngredientList = yield response.json();

    yield put(ingredientActions.getIngredientsSuccess(data.drinks));
  } catch (error: any) {
    yield put(ingredientActions.getIngredientsError(error.message));
  }
}

function* ingredientSaga() {
  yield takeLatest('ingredients/getIngredientsFetch', getIngredients);
}

export default ingredientSaga;

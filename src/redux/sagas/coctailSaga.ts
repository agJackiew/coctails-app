import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { coctailActions } from '../store/coctail-slice';
import { CoctailList } from '../../types/types';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function* getCoctails(action: any): any {
  yield put(coctailActions.getCoctailsError(null));
  yield put(coctailActions.getCoctailsSuccess([]));

  try {
    const response = yield call(() => fetch(URL + action.payload.toString()));
    const data: CoctailList = yield response.json();
    if (data.drinks) {
      yield put(coctailActions.getCoctailsSuccess(data.drinks));
    } else yield put(coctailActions.getCoctailsError('No coctails matching'));
  } catch (error: any) {
    yield put(coctailActions.getCoctailsError(error.message));
  }
}

function* coctailSaga() {
  //
  yield takeEvery('coctails/getCoctailsFetch', getCoctails);
}

export default coctailSaga;

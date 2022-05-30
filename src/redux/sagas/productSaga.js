import { call, delay, put, takeLatest } from 'redux-saga/effects';

import * as productAPI from 'api/product';
import {
  fetchProductList,
  fetchProductListSuccess,
} from 'redux/modules/product';

function* fetchProductListSaga(action) {
  try {
    const { data } = yield call(() => {
      return productAPI.fetchProductListAPI(action.payload);
    });
    yield put(fetchProductListSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* productSaga() {
  yield takeLatest(fetchProductList, fetchProductListSaga);
}

export default productSaga;

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductList } from 'redux/modules/product';

function* fetchProductListSaga() {
  console.log(1);
}

function* productSaga() {
  yield takeLatest(fetchProductList, fetchProductListSaga);
}

export default productSaga;

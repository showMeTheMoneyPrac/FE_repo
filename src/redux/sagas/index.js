import { all } from 'redux-saga/effects';

import purchaseSaga from 'redux/sagas/purchaseSaga';
import productSaga from 'redux/sagas/productSaga';

export default function* rootSaga() {
  yield all([purchaseSaga(), productSaga()]);
}

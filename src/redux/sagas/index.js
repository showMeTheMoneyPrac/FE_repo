import { all } from 'redux-saga/effects';

import purchaseSaga from 'redux/sagas/purchaseSaga';
import productSaga from 'redux/sagas/productSaga';
import bucketSaga from 'redux/sagas/bucketSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([purchaseSaga(), productSaga(), bucketSaga(), userSaga()]);
}

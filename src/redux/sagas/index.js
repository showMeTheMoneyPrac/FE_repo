import { all } from 'redux-saga/effects';

import purchaseSaga from 'redux/sagas/purchaseSaga';
import bucketSaga from 'redux/sagas/bucketSaga';

export default function* rootSaga() {
  yield all([purchaseSaga(), bucketSaga()]);
}

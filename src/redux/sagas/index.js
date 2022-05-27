import { all } from 'redux-saga/effects';

import purchaseSaga from 'redux/sagas/purchaseSaga';

export default function* rootSaga() {
  yield all([purchaseSaga()]);
}
